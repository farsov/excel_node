const XlsxPopulate = require('xlsx-populate');

// Load a new blank workbook
XlsxPopulate.fromFileAsync("./out.xlsx")
    .then(workbook => {
        // Modify the workbook.
        const value = workbook.sheet("Sheet1").cell("A2").value("This is neat!");
 
        return workbook.toFileAsync("./out2.xlsx");
        console.log(value);
    });

