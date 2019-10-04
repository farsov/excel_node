// Define font files
var fonts = {
  Roboto: {
    normal: 'fonts/Roboto-Regular.ttf',
    bold: 'fonts/Roboto-Medium.ttf',
    italics: 'fonts/Roboto-Italic.ttf',
    bolditalics: 'fonts/Roboto-MediumItalic.ttf'
  }
};

var PdfPrinter = require('pdfmake');
var printer = new PdfPrinter(fonts);
var fs = require('fs');
var inputFile = "/home/farsotva/ekosave/ekosave-v2/excelToPdf/templateexcelpdf.xlsx"

var docDefinition = {
  content: [
		'First paragraph',
		'Another paragraph, this time a little bit longer to make sure, this line will be divided into at least two lines'
	]
};

var options = {
  // ...
}

var pdfDoc = printer.createPdfKitDocument(docDefinition, options);
pdfDoc.pipe(fs.createWriteStream('document.pdf'));
pdfDoc.end();