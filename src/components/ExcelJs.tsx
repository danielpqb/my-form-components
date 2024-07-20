"use client";

import { Workbook } from "exceljs";
import { useState } from "react";

export const ExcelJs = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event: any) => {
    setFile(event.target.files?.[0]);
  };

  const handleFileValidation = () => {
    validateExcelFile(file);
  };

  const validateExcelFile = (file: any) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsArrayBuffer(file);
      reader.onload = () => {
        const buffer = reader.result as any;
        const workbook = new Workbook();
        workbook.xlsx
          .load(buffer)
          .then(() => {
            const worksheet = workbook.getWorksheet(1);
            const rowCount = worksheet.getColumn(1).values;
            const columnCount = worksheet.getRow(1);
            //  validate table data
            console.log(rowCount);
            console.log(columnCount);
            resolve("Excel file is valid.");
          })
          .catch((error) => {
            reject("Error occurred while loading the workbook.");
          });
      };
    });
  };

  return (
    <div>
      <input
        type="file"
        onChange={handleFileChange}
      />
      <button onClick={handleFileValidation}>File validation</button>
    </div>
  );
};
