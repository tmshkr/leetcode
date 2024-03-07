import * as fs from "fs";
import * as path from "path";
import { Args } from ".";

export function createJavaFiles(args: Args) {
  const {
    codeSnippets,
    folderPath,
    folderName,
    metaData,
    titleSlug,
    classParams,
    functionParams,
  } = args;

  console.log(`creating java files`);
  fs.writeFileSync(
    path.join(folderPath, "solution.java"),
    `
package ${folderName};
  
${codeSnippets.java}
  
/*
https://leetcode.com/problems/${titleSlug}/
*/`
  );

  if ("classname" in metaData) {
    fs.writeFileSync(
      path.join(folderPath, "solution.test.java"),
      generateClassTests(classParams, folderName)
    );
  } else {
    fs.writeFileSync(
      path.join(folderPath, "solution.test.java"),
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
  for (let i = 0; i < methods.length; i++) {
    calls +=
      exampleTestOutputs[i] === null
        ? `
    ${instance}.${methods[i]}(${JSON.stringify(methodParams[i])});`
        : `
    assertEquals(${instance}.${methods[i]}(${JSON.stringify(
            methodParams[i]
          )}), ${JSON.stringify(exampleTestOutputs[i])});`;
  }

  return `
package ${folderName};

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {
@Test
  @DisplayName("${constructor}")
  void ${constructor}Test() {
    ${constructor} ${instance} = new ${constructor}(${JSON.stringify(
    constructorParams
  )});
    ${calls}
  }
}`;
}

function generateFunctionTests(functionParams, folderName) {
  if (!functionParams) throw new Error("functionParams should be defined");
  const { exampleTestcases, exampleTestOutputs, functionName } = functionParams;

  return `
package ${folderName};

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

${exampleTestcases.reduce((acc, cur, i) => {
  acc += `
  @Test
  @DisplayName("${cur.toString().replace(/"/g, "'")}")
  void ${functionName}${i}() {
    Solution s = new Solution();
    // inputs = ${cur}
    // expected = ${exampleTestOutputs[i]}
  }
  `;
  return acc;
}, "")}
}`;
}
