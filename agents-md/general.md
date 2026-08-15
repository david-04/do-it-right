# dev-command

- Whenever possible, use the command-line tool `dev-command` to run commands inside the repository. Do not run arbitrary shell commands if there is a `dev-command` that accomplishes the same result. The following `dev-commands` are available:
  - To install all dependencies, run: `dev-command install`
  - To add a dependency to the project, run: `dev-command install <PACKAGE_NAME>`
  - To add a development dependency to the project, run: `dev-command install-dev <PACKAGE_NAME>`
  - To remove a dependency from the project, run: `dev-command uninstall <PACKAGE_NAME>`
  - To compile, format, lint, test and bundle the application (all in one go), run: `dev-command ai-verify`

- The `dev-command` works in all terminals and on all operating system (including `bash`, `cmd` and `powershell`).
- Do not try to run the compiler, formatter, linter, test runner or bundler directly. Only ever use `dev-command ai-verify`. Do not try to run npm scripts from `package.json`. Don't try to run any development commands like `tsc`, `eslint`, `jest` or `prettier`.

# Tools

- Always prefer using available tools over running terminal commands (like `grep` or `find`). Whenever available, use the following tools for the following tasks:

  - Use `list_files` to find files by name (do not run `find` in the terminal)

  - Use `search_files` to find text in files (do not run `grep` in the terminal)

  - Use `get_file_skeleton` if you only need to know which classes, functions and methods are defined in a file - without needing to see their implementation yet (do not read the whole file)

  - Use `get_function` if you want to see the implementation of a function (do not read the whole file)

  - Use `find_symbol_references` to find out where (in which files) a symbol (like a class, function or variable) is used/referenced (to not run `grep` in the terminal).

  - Use `diagnostics_scan` to get all syntax and linting errors for a file (do not run the compiler or the dev-command in the terminal)

  - Use `rename_symbol` whenever you need to rename a function, class, method or variable (do not update the file via text replacement)

  - Use `replace_symbol` if you need to replace a symbol (function, class, method or variable) with something else (do not update the file via text replacement)

  - Use `ask_followup_question` whenever you need a decision or more input from the user

# Clarification questions

- Ask clarifying questions whenever the users intend is unclear or ambiguous, or if there are different ways to implement the users requirements. Always use the tool for asking the user questions. Always provide a set of predefined answers for the user to chose from, and always allow the user to also provide free-text input.

# Post-implementation checks

- Whenever you've made code changes, and if you have access to the tool `diagnostic_scan`, use this tool to check all added/modified files for syntax and linting errors. Correct these errors before proceeding.

- Whenever you have fully implemented the requested code changes ("feature-complete"), and whenever the users ask for a "quality gate", run perform the following steps:
  1. Remind yourself of all the guidelines, rules and instructions (like code style, error handling...) that are described in `AGENTS.md`.
  2. Review the code that you have changed or added against the guidelines from `AGENTS.md`. If the code does not align with the guidelines, modify the code so that it does comply.
  3. If you have access to a tool called `diagnostic_scan`, run it on all files that you have modified, to identify any syntax and linting errors. Fix all errors and rerun `diagnostic_scan` until it does not report any issues anymore.
  4. Run command `dev-command ai-verify` to compile, line, test, bundle and format the code. Fix all errors and re-run the command until it does no longer report any issues.

# Dependencies

- Do not add additional dependencies (like npm packages), unless when the user explicitly asks for it.
- Before adding a dependency, ask the user for approval (use the "ask questions" tool if it's available). Do not attempt to add any dependency without explicit approval from the user.
- Assess dependencies on their maturity/stability and potential supply chain attack risks. Prefer dependencies with more widespread use (high number of downloads) that are well maintained (frequently updated). Prefer dependencies that are TypeScript-native (as opposed to JavaScript libraries that need an additional `@types` package). When suggesting dependencies to the user, state how these dependencies stack up against these criteria.

