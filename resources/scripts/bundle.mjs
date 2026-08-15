import { readFileSync, writeFileSync } from "node:fs";

const [, , outputFile, ...inputFiles] = process.argv;

if (!outputFile) {
    throw new Error("Missing arguments. Syntax: node bundle.mjs [OUTPUT_FILE] [...INPUT_FILES]");
}

console.log(`- ${outputFile}`);

if (!inputFiles.length) {
    throw new Error("Missing input files. Syntax: node bundle.mjs [OUTPUT_FILE] [...INPUT_FILES]");
}

const entries = inputFiles
    .slice()
    .sort((a, b) => a.localeCompare(b))
    .map(file => [file, readFileSync(file, "utf8").toString().split(/\r?\n/)]);

writeFileSync(outputFile, JSON.stringify(Object.fromEntries(entries), undefined, 4) + "\n");
