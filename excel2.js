var Excel = require('exceljs');
const fs = require('fs');
var workbook = new Excel.Workbook();

workbook.xlsx.readFile('out2.xlsx')
    .then(function() {
        var worksheet = workbook.getWorksheet(1);
        var row = worksheet.getRow(5);
        row.getCell(2).value = 5; // A5's value set to 5
        row.commit();

        /* const imgId = worksheet.addImage({
            buffer: fs.readFileSync('image.png'),
            extension: 'png'
        }); */

        var imgId = workbook.addImage({
            filename: './image.png',
            extension: 'png',
          });

        // not work
        worksheet.addBackgroundImage(imgId);
        // not work
        worksheet.addImage(imgId, 'I1:I2');
         // not work
        worksheet.addImage(imgId, {
            tl: { col: 18, row: 12 },
            br: { col: 18, row: 12 }
        });
 

        return workbook.xlsx.writeFile('new.xlsx');
    })