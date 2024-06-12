import { resolve as pathResolver } from "path";
import { writeFile } from "fs/promises";
import { get as fetcher } from "https";

const LOCALE_FOLDER = pathResolver("src/locales/en");
const URL = "https://www.hl7.org/fhir/valueset-ucum-common.json";

async function main() {
  try {
    // Download JSON file
    const jsonData = await downloadJson(URL);

    // Extract relevant data
    const concepts = jsonData.compose.include[0].concept;

    // Reduce array to an object with code as key and display as value
    const reducedObject = concepts.reduce((acc, { code, display }) => {
      acc[code] = display;
      return acc;
    }, {});

    // Save the result to a file
    const filePath = pathResolver(LOCALE_FOLDER, "unitsOfMesure.json");
    await writeFile(filePath, JSON.stringify(reducedObject, null, 2));

    console.log("unitsOfMesure.json saved successfully!");
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

function downloadJson(url) {
  return new Promise((resolve, reject) => {
    fetcher(url, (response) => {
      let data = "";

      // A chunk of data has been received.
      response.on("data", (chunk) => {
        data += chunk;
      });

      // The whole response has been received.
      response.on("end", () => {
        try {
          const json = JSON.parse(data);
          resolve(json);
        } catch (error) {
          reject(error);
        }
      });
    }).on("error", (error) => {
      reject(error);
    });
  });
}

main();
