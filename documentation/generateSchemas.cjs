const tsj = require("ts-json-schema-generator");
const fs = require("fs").promises; // Use fs.promises for async/await

// 1. Input (async function with error handling)
async function generateInputSchema() {
  try {
    const config = {
      path: "playground_types.ts",
      tsconfig: "tsconfig.json",
      type: "PlaygroundInput",
      id: "Input",
    };

    const outputPath = "static/schemas/input.json";

    const generator = tsj.createGenerator(config);
    const schema = await generator.createSchema(config.type);
    const schemaString = JSON.stringify(schema, null, 2);

    await fs.writeFile(outputPath, schemaString);
  } catch (err) {
    console.error("Error generating input schema:", err);
  }
}

// 2. Config (async function with error handling)
async function generateConfigSchema() {
  try {
    const config2 = {
      path: "playground_types.ts",
      tsconfig: "tsconfig.json",
      type: "Config",
      id: "Config",
    };

    const outputPath2 = "static/schemas/config.json";

    const generator = tsj.createGenerator(config2);
    const schema2 = await generator.createSchema(config2.type);
    const schemaString2 = JSON.stringify(schema2, null, 2);

    await fs.writeFile(outputPath2, schemaString2);
  } catch (err) {
    console.error("Error generating config schema:", err);
  }
}

// Call the async functions sequentially (or use Promise.all for parallel execution)
(async () => {
  await generateInputSchema();
  await generateConfigSchema();
})();
