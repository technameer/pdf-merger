const PDFMerge = require('pdf-merge');
const mergePdfs = async(f1,f2)=>{
const files = [
    f1,
    f2
];
//Save as new file
let d = new Date().getTime();
await PDFMerge(files, {output: `public/${d}.pdf`})
return d;
}
module.exports = {mergePdfs};