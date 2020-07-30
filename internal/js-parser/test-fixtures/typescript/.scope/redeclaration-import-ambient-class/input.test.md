# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romejs/js-parser/index.test.ts --update-snapshots` to update.

## `typescript > scope > redeclaration-import-ambient-class`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "input.ts"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "module"
	syntax: Array ["ts"]
	loc: Object {
		filename: "input.ts"
		end: Object {
			column: 0
			index: 67
			line: 4
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	body: Array [
		JSImportDeclaration {
			importKind: undefined
			namedSpecifiers: Array []
			namespaceSpecifier: undefined
			loc: Object {
				filename: "input.ts"
				end: Object {
					column: 38
					index: 38
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			source: JSStringLiteral {
				value: "./somewhere.js"
				loc: Object {
					filename: "input.ts"
					end: Object {
						column: 38
						index: 38
						line: 1
					}
					start: Object {
						column: 22
						index: 22
						line: 1
					}
				}
			}
			defaultSpecifier: JSImportDefaultSpecifier {
				loc: Object {
					filename: "input.ts"
					end: Object {
						column: 16
						index: 16
						line: 1
					}
					start: Object {
						column: 0
						index: 0
						line: 1
					}
				}
				local: JSImportSpecifierLocal {
					name: JSBindingIdentifier {
						name: "Something"
						loc: Object {
							filename: "input.ts"
							identifierName: "Something"
							end: Object {
								column: 16
								index: 16
								line: 1
							}
							start: Object {
								column: 7
								index: 7
								line: 1
							}
						}
					}
					importKind: undefined
					loc: Object {
						filename: "input.ts"
						end: Object {
							column: 16
							index: 16
							line: 1
						}
						start: Object {
							column: 7
							index: 7
							line: 1
						}
					}
				}
			}
		}
		JSClassDeclaration {
			id: JSBindingIdentifier {
				name: "Something"
				loc: Object {
					filename: "input.ts"
					identifierName: "Something"
					end: Object {
						column: 23
						index: 63
						line: 3
					}
					start: Object {
						column: 14
						index: 54
						line: 3
					}
				}
			}
			declare: true
			loc: Object {
				filename: "input.ts"
				end: Object {
					column: 26
					index: 66
					line: 3
				}
				start: Object {
					column: 0
					index: 40
					line: 3
				}
			}
			meta: JSClassHead {
				body: Array []
				implements: undefined
				superClass: undefined
				superTypeParameters: undefined
				typeParameters: undefined
				loc: Object {
					filename: "input.ts"
					end: Object {
						column: 26
						index: 66
						line: 3
					}
					start: Object {
						column: 0
						index: 40
						line: 3
					}
				}
			}
		}
	]
}
```

### `diagnostics`

```
✔ No known problems!

```