import { readdirSync, writeFileSync } from "node:fs";
import njucks from "nunjucks";

njucks.configure(".", { autoescape: true });

//----------------------------------------------------------------------------------------------------------------------
// Languages
//----------------------------------------------------------------------------------------------------------------------

const ENGLISH_LANGUAGES = [
    { language: "american-english", sOrZ: "z", oOrOu: "o" },
    { language: "british-english", sOrZ: "s", oOrOu: "ou" },
];

//----------------------------------------------------------------------------------------------------------------------
// Goetterfunken
//----------------------------------------------------------------------------------------------------------------------

for (const { language, ...variables } of ENGLISH_LANGUAGES) {
    for (const template of ["proofread", "restructure", "rewrite", "simplify"]) {
        const input = `goetterfunken/templates/english/${template}.md`;
        const output = `goetterfunken/${language}/${template}.md`;
        render(input, output, { language, ...variables });
    }
}

//----------------------------------------------------------------------------------------------------------------------
// talk-like-an-egyptian
//----------------------------------------------------------------------------------------------------------------------

for (const { language, ...variables } of ENGLISH_LANGUAGES) {
    const directory = "talk-like-an-egyptian";
    const files = readdirSync(`${directory}/templates/english`, { withFileTypes: true })
        .filter(entry => entry.isFile())
        .map(entry => entry.name)
        .filter(name => name.endsWith(".md"));
    for (const file of files) {
        const input = `${directory}/templates/english/${file}`;
        const output = `${directory}/${language}/${file}`;
        render(input, output, { language, ...variables });
    }
}

//----------------------------------------------------------------------------------------------------------------------
// TL;SC
//----------------------------------------------------------------------------------------------------------------------

for (const { language, ...variables } of ENGLISH_LANGUAGES) {
    for (const template of ["summarize"]) {
        const input = `tl;sc/templates/english/${template}.md`;
        const iseOrIze = language === "british-english" ? "ise" : "ize";
        const output = `tl;sc/${language}/${template}.md`;
        render(input, output, { language, ...variables });
    }
}

//----------------------------------------------------------------------------------------------------------------------
// Utils
//----------------------------------------------------------------------------------------------------------------------

function render(input, output, params) {
    console.log(`- ${output}`);
    const rendered = njucks.render(input, params);

    if (!rendered) {
        console.error(`⛔ Failed to render ${output}`);
        process.exit(1);
    }

    const normalized = rendered
        .replaceAll("\t", "  ")
        .split(/\r?\n/)
        .filter(line => !/^ *- *(_ *)?$/.test(line))
        .map(line => line.trimEnd())
        .join("\n")
        .replaceAll(/\n{3,}/g, "\n\n")
        .replaceAll(/(\n *-.*)\n+( *-)/g, "$1\n$2");

    writeFileSync(output, `${normalized.trim()}\n\n`, { encoding: "utf-8" });
}
