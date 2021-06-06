var pdf = require("html-pdf");

class PDFWriter{
    static async WritePDF(filename, html){
        pdf.create(html,{}).toFile(filename,(err) => {});
    }
}

module.exports = PDFWriter;