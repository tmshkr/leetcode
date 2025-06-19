import * as fs from "fs";
import * as path from "path";
import { ParsedQuestion } from "../getQuestion";
import { createFolder } from "./index";

export function createGoFiles(parsedQuestion: ParsedQuestion) {
    const {
        codeSnippets,
        folderPath,
        folderName,
        metaData,
        titleSlug,
        classParams,
        functionParams,
    } = parsedQuestion;

    createFolder(path.join(folderPath, "go"));

    console.log(`creating go files`);
    fs.writeFileSync(
        path.join(folderPath, "go", "go.mod"),
        `module ${folderName}`
    );
    fs.writeFileSync(
        path.join(folderPath, "go", "solution.go"),
        `
package ${folderName}

${codeSnippets.golang.code}
  
/*
https://leetcode.com/problems/${titleSlug}/
*/
`
    );

    if ("classname" in metaData) {
        fs.writeFileSync(
            path.join(folderPath, "go", "solution_test.go"),
            generateClassTests(classParams)
        );
    } else {
        fs.writeFileSync(
            path.join(folderPath, "go", "solution_test.go"),
            generateFunctionTests(parsedQuestion)
        );
    }
}

function generateClassTests(classParams) {
    if (!classParams) throw new Error("classParams should be defined");
    // TODO: implement class tests for Go
    return "";
}

function generateFunctionTests(parsedQuestion) {
    const { folderName, functionParams } = parsedQuestion;
    if (!functionParams) throw new Error("functionParams should be defined");
    const { exampleTestInputs, exampleTestOutputs, functionName } =
        functionParams;

    return `
package ${folderName}
import "testing"

${exampleTestInputs.reduce((acc, cur, i) => {
        acc += `
func Test${i}(t *testing.T) {
    result := ${functionName}(${cur})
    expected := ${JSON.stringify(exampleTestOutputs[i])}

    if result != expected {
        t.Errorf("${functionName}(${cur}) = %v; want %v", result, expected)
    }
}
`; return acc;
    }, "")}
`;
}
