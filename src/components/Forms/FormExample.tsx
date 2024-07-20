// "use client";

// import { useForm } from "react-hook-form";
// import { Button } from "../Button";
// import { InputBoolean } from "../InputBoolean";
// import { InputText } from "../InputText";
// import { Workbook } from "exceljs";
// import { mockProjects } from "@/mock/projects";

// type TProps = {};

// export function FormExample({}: TProps) {
//   const { control } = useForm();
//   return (
//     <form className="flex flex-col gap-2">
//       <InputText label="Input" />
//       <InputBoolean
//         control={control}
//         name="yn"
//         label="Boolean"
//       />
//       <Button
//         onClick={async () => {
//           const wb = new Workbook();

//           //old
//           // const fileBuffer = readFileSync("./src/template/template.xlsx");
//           // console.log(fileBuffer);
//           // await wb.xlsx.load(fileBuffer);

//           //new
//           const reader = new FileReader();
//           reader.readAsArrayBuffer(require("./template.xlsx"));
//           reader.onload = async () => {
//             const buffer = reader.result as any;
//             await wb.xlsx.load(buffer);

//             wb.calcProperties.fullCalcOnLoad = true;
//             const ws = wb.getWorksheet("Teste");
//             const projects = mockProjects;
//             ws.addRow([
//               "projectId",
//               "contract",
//               "name",
//               "initialDate",
//               "finalDate",
//               "category",
//               "status",
//               "commitment",
//               "estimatedGrossRevenue",
//               "grossRevenue",
//               "localContentFraction",
//             ]);
//             projects.forEach((project) => {
//               ws.addRow([
//                 project.projectId,
//                 project.contract,
//                 project.name,
//                 project.initialDate
//                   ? new Date(project.initialDate)
//                   : project.initialDate,
//                 project.finalDate
//                   ? new Date(project.finalDate)
//                   : project.finalDate,
//                 project.category,
//                 project.status,
//                 project.commitment,
//                 project.estimatedGrossRevenue,
//                 project.grossRevenue,
//                 project.localContentFraction,
//               ]);
//             });

//             // ws.columns.forEach((column) => {
//             //   let maxLength = 0;
//             //   column.eachCell({ includeEmpty: true }, (cell) => {
//             //     const columnLength = cell.value
//             //       ? cell.value.toString().length
//             //       : 10;
//             //     if (columnLength > maxLength) {
//             //       maxLength = columnLength;
//             //     }
//             //   });

//             //   column.width = maxLength < 10 ? 10 : maxLength;
//             // });

//             await wb.xlsx.writeBuffer().then((buffer) => {
//               const blob = new Blob([buffer], {
//                 type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
//               });
//               const url = URL.createObjectURL(blob);
//               const a = document.createElement("a");
//               a.href = url;
//               a.download = "PanilhaExcel.xlsx";
//               a.click();
//             });
//           };
//         }}
//       >
//         Gerar Excel
//       </Button>
//     </form>
//   );
// }

"use client";

import { useForm } from "react-hook-form";
import { Button } from "../Button";
import { InputBoolean } from "../InputBoolean";
import { InputText } from "../InputText";
import { Workbook } from "exceljs";
import { mockProjects } from "@/mock/projects";

type TProps = {};

export function FormExample({}: TProps) {
  const { control } = useForm();

  return (
    <form className="flex flex-col gap-2">
      <InputText label="Input" />
      <InputBoolean
        control={control}
        name="yn"
        label="Boolean"
      />
      <Button
        onClick={async () => {
          const projects = mockProjects;

          const wb = new Workbook();

          // Fetch the template.xlsx file from the public folder
          const response = await fetch("/template.xlsx");
          const buffer = await response.arrayBuffer();

          // Load the array buffer into the workbook
          await wb.xlsx.load(buffer);

          wb.calcProperties.fullCalcOnLoad = true;
          const ws1 = wb.getWorksheet("Teste");
          if (!ws1) return;

          const headerStyle = ws1.getRow(1).findCell(1)?.style;
          const tableStyle = ws1.getRow(2).findCell(1)?.style;

          const ws = wb.addWorksheet("Teste2");

          const hrow = ws.addRow([
            "projectId",
            "contract",
            "name",
            "initialDate",
            "finalDate",
            "category",
            "status",
            "commitment",
            "estimatedGrossRevenue",
            "grossRevenue",
            "localContentFraction",
          ]);
          hrow.eachCell((cell) => {
            cell.style = headerStyle;
          });

          projects.forEach((project) => {
            const row = ws.addRow([
              project.projectId,
              project.contract,
              project.name,
              project.initialDate
                ? new Date(project.initialDate)
                : project.initialDate,
              project.finalDate
                ? new Date(project.finalDate)
                : project.finalDate,
              project.category,
              project.status,
              project.commitment,
              project.estimatedGrossRevenue,
              project.grossRevenue,
              project.localContentFraction,
            ]);
            row.eachCell((cell) => {
              cell.style = tableStyle;
            });
          });

          // Save the workbook to a buffer and create a downloadable link
          await wb.xlsx.writeBuffer().then((buffer) => {
            const blob = new Blob([buffer], {
              type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "PlanilhaExcel.xlsx";
            a.click();
          });
        }}
      >
        Gerar Excel
      </Button>
    </form>
  );
}
