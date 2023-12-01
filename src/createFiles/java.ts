import * as fs from "fs";
import * as path from "path";

export function createJavaFiles({
  data,
  folderPath,
  folderName,
  functionName,
  codeSnippets,
  exampleTestcases,
  exampleTestOutputs,
  metaData,
}) {
  console.log(`creating java files`);

  const solutionContent = `
package ${folderName};

${codeSnippets.java}

/*
https://leetcode.com/problems/${data.question.titleSlug}/
*/
`;

  const testContent = `
package ${folderName};

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  ${exampleTestcases.reduce((acc, cur, i) => {
    acc += `
    @Test
    @DisplayName('${cur}')
    void ${functionName}${i}() {
      Solution s = new Solution();
      // inputs = ${cur}
      // expected = ${
        Array.isArray(exampleTestOutputs)
          ? exampleTestOutputs[i]
          : exampleTestOutputs
      }
    }
    `;
    return acc;
  }, "")}
}
`;

  fs.writeFileSync(path.join(folderPath, "solution.java"), solutionContent);
  fs.writeFileSync(path.join(folderPath, "solution.test.java"), testContent);
}
