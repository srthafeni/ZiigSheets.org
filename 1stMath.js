
const { PDFDocument, PDFName } = require('pdf-lib');
const fs = require('fs');

const pdfBytes = fs.readFileSync('Algebra_notes___problems_and_solutions.pdf');
const pdfDoc = await PDFDocument.load(pdfBytes);

const infoDict = pdfDoc.getInfoDict();
infoDict.set(PDFName.of('User'), PDFName.of('ReadOnly'));

const modifiedPdfBytes = await pdfDoc.save();
fs.writeFileSync('Algebra_notes___problems_and_solutions_readonly.pdf', modifiedPdfBytes);
