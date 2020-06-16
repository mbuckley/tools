/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {ServerRequest} from "@romejs/core";
import {WorkerCompileResult} from "../../common/bridges/WorkerBridge";
import {commandCategories} from "../../common/commands";
import {createServerCommand} from "../commands";
import {DiagnosticsError} from "@romejs/diagnostics";
import {createUnknownFilePath} from "@romejs/path";
import {Consumer} from "@romejs/consume";
import Bundler from "../bundler/Bundler";

type Flags = {
	bundle: boolean;
};

export default createServerCommand({
	category: commandCategories.SOURCE_CODE,
	description: "compile a single file",
	usage: "",
	examples: [],
	defineFlags(c: Consumer): Flags {
		return {
			bundle: c.get("bundle").asBoolean(false),
		};
	},
	async callback(req: ServerRequest, commandFlags: Flags): Promise<void> {
		const {server, reporter} = req;
		const {args} = req.query;
		req.expectArgumentLength(1);

		const resolved = await server.resolver.resolveEntryAssert(
			{
				...req.getResolverOptionsFromFlags(),
				source: createUnknownFilePath(args[0]),
			},
			{location: req.getDiagnosticPointerFromFlags({type: "arg", key: 0})},
		);

		let res: WorkerCompileResult;
		if (commandFlags.bundle) {
			const bundler = Bundler.createFromServerRequest(req);
			res = await bundler.compile(resolved.path);
		} else {
			res = await req.requestWorkerCompile(resolved.path, "compile", {}, {});
		}

		const {compiledCode, diagnostics, suppressions}: WorkerCompileResult = res;

		if (diagnostics.length > 0) {
			throw new DiagnosticsError(
				"Compile diagnostics",
				diagnostics,
				suppressions,
			);
		}

		reporter.writeAll(compiledCode);
	},
});