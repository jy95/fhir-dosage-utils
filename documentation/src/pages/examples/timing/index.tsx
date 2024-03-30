import React from "react";

// Docusaurus stuff
import Layout from "@theme/Layout";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import CodeBlock from "@theme/CodeBlock";
import Admonition from "@theme/Admonition";

// Own function
import SingleDosageToText from "@site/src/components/single_dosage_to_text";

// types
import type { Dosage } from "fhir/r4";

// Test case listed on https://build.fhir.org/datatypes.html#Timing
const scenarios: {
  title: string;
  dosage: Dosage;
}[] = [
  {
    title: "Every 8 hours",
    dosage: {
      timing: {
        repeat: {
          frequency: 1,
          period: 8,
          periodUnit: "h",
        },
      },
    },
  },
  {
    title: "Every 7 days",
    dosage: {
      timing: {
        repeat: {
          frequency: 1,
          period: 7,
          periodUnit: "d",
        },
      },
    },
  },
  {
    title: "3 times a day",
    dosage: {
      timing: {
        repeat: {
          frequency: 3,
          period: 1,
          periodUnit: "d",
        },
      },
    },
  },
  {
    title: "3-4 times a day",
    dosage: {
      timing: {
        repeat: {
          frequency: 3,
          frequencyMax: 4,
          period: 1,
          periodUnit: "d",
        },
      },
    },
  },
  {
    title: "Every 4-6 hours",
    dosage: {
      timing: {
        repeat: {
          frequency: 1,
          period: 4,
          periodMax: 6,
          periodUnit: "h",
        },
      },
    },
  },
  {
    title: "Every 21 days for 1 hour",
    dosage: {
      timing: {
        repeat: {
          duration: 1,
          durationUnit: "h",
          frequency: 1,
          period: 21,
          periodUnit: "d",
        },
      },
    },
  },
  {
    title: "Three times a week for 0.5 hour",
    dosage: {
      timing: {
        repeat: {
          duration: 0.5,
          durationUnit: "h",
          frequency: 3,
          period: 1,
          periodUnit: "wk",
        },
      },
    },
  },
  {
    title: "With breakfast",
    dosage: {
      timing: {
        repeat: {
          when: ["CM"],
        },
      },
    },
  },
  {
    title: "For 5 minutes, 10 minutes before meals",
    dosage: {
      timing: {
        repeat: {
          duration: 5,
          durationUnit: "min",
          when: ["AC"],
          offset: 10,
        },
      },
    },
  },
  {
    title: "1 tablet 3 times daily, 30 minutes before meals",
    dosage: {
      doseAndRate: [
        {
          doseQuantity: {
            value: 1,
            unit: "tablet",
          },
        },
      ],
      timing: {
        repeat: {
          frequency: 3,
          period: 1,
          periodUnit: "d",
          when: ["AC"],
          offset: 30,
        },
      },
    },
  },
  {
    title: "BID, 30 mins before meal, for next 10 days",
    dosage: {
      timing: {
        repeat: {
          frequency: 2,
          period: 1,
          periodUnit: "d",
          when: ["AC"],
          offset: 30,
          boundsDuration: {
            value: 10,
            code: "d",
            system: "http://hl7.org/fhir/ValueSet/duration-units",
          },
        },
      },
    },
  },
  {
    title: "TID, for 14 days",
    dosage: {
      timing: {
        repeat: {
          frequency: 3,
          period: 1,
          periodUnit: "d",
          boundsDuration: {
            value: 14,
            code: "d",
            system: "http://hl7.org/fhir/ValueSet/duration-units",
          },
        },
      },
    },
  },
  // TODO add test case "BID, start on 7/1/2015 at 1:00 PM"
  {
    title: "Mon, Wed, Fri Morning",
    dosage: {
      timing: {
        repeat: {
          frequency: 1,
          period: 1,
          periodUnit: "d",
          dayOfWeek: ["mon", "wed", "fri"],
          when: ["MORN"],
        },
      },
    },
  },
  {
    title: "Every day at 10am",
    dosage: {
      timing: {
        repeat: {
          frequency: 1,
          period: 1,
          periodUnit: "d",
          timeOfDay: ["10:00:00"],
        },
      },
    },
  },
  {
    title: "Take once, at any time",
    dosage: {
      timing: {
        repeat: {
          count: 1,
        },
      },
    },
  },
  {
    title: "Take every second day, in the morning, until 20 have been taken",
    dosage: {
      timing: {
        repeat: {
          frequency: 1,
          period: 2,
          periodUnit: "d",
          when: ["MORN"],
          count: 20,
        },
      },
    },
  },
];

export default function Timing(): JSX.Element {
  return (
    <Layout
      title="⌚ Timing"
      description="Scenarios listed on https://build.fhir.org/datatypes.html#Timing"
    >
      <Admonition type="info">
        <p>
          Thanks to{" "}
          <a href="https://build.fhir.org/datatypes.html#Timing">FHIR HL7</a>{" "}
          for the examples
        </p>
      </Admonition>
      <table>
        <thead>
          <th>Summary</th>
          <th />
        </thead>
        <tbody>
          {scenarios.map((scenario) => {
            return (
              <tr>
                <td>{scenario.title}</td>
                <td>
                  <Tabs>
                    <TabItem value="text" label="Human readable text" default>
                      <SingleDosageToText dosage={scenario.dosage} />
                    </TabItem>
                    <TabItem value="json" label="Dosage">
                      <CodeBlock language="json">
                        {JSON.stringify(scenario.dosage, null, 2)}
                      </CodeBlock>
                    </TabItem>
                  </Tabs>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Layout>
  );
}
