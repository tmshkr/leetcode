import * as fs from "fs";
import * as path from "path";
import { ParsedQuestion } from "../getQuestion";

export function createPhpFiles(parsedQuestion: ParsedQuestion) {
    const {
        codeSnippets,
        folderPath,
        folderName,
        metaData,
        titleSlug,
        classParams,
        functionParams,
    } = parsedQuestion;

    console.log(`creating php files`);
    fs.writeFileSync(
        path.join(folderPath, "solution.php"),
        `
<?php

${codeSnippets.php.code}

/*
https://leetcode.com/problems/${titleSlug}/
*/`
    );

    if ("classname" in metaData) {
        fs.writeFileSync(
            path.join(folderPath, "SolutionTest.php"),
            generateClassTests(classParams, folderName)
        );
    } else {
        fs.writeFileSync(
            path.join(folderPath, "SolutionTest.php"),
            generateFunctionTests(functionParams, folderName)
        );
    }
}

function generateClassTests(classParams, folderName) {
    if (!classParams) throw new Error("classParams should be defined");
    const {
        constructor,
        constructorParams,
        exampleTestOutputs,
        instance,
        methodParams,
        methods,
    } = classParams;

    let calls = "";
    // TODO: implement this
    return "";
}

function generateFunctionTests(functionParams, folderName) {
    if (!functionParams) throw new Error("functionParams should be defined");
    const { exampleTestInputs, exampleTestOutputs, functionName } =
        functionParams;

    return `
<?php
require_once 'solution.php';
use PHPUnit\\Framework\\TestCase;

final class SolutionTest extends TestCase
{

${exampleTestInputs.reduce((acc, cur, i) => {
        acc += `
public function test${i}()
{
    $solution = new Solution();
    // inputs = ${cur}
    // expected = ${exampleTestOutputs[i]}
}
  `;
        return acc;
    }, "")}
}`;
}
