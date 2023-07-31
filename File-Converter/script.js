var newImage, showImg;
function loadFile(event) {
    showImg = document.getElementById('showImg');
    showImg.src = URL.createObjectURL(event.target.files[0]);

    newImage = document.createElement('img');
    newImage.src = URL.createObjectURL(event.target.files[0]);

    showImg.onload = function () {
        URL.revokeObjectURL(showImg.src) // free memory
    }
};


function pdfDown() {
    console.log(newImage)
    var doc = new jsPDF();
    doc.addImage(newImage, 10, 10);
    doc.save('ImgToPDF.pdf')
}
let data = document.querySelector("textarea");
        let name = document.getElementById("fileName");
        let type = document.getElementById("saveAs");
        let btn = document.getElementById("btn");
        btn.addEventListener("click", () => {
            let blob = new Blob([data.value], { type: type.value });
            let url = URL.createObjectURL(blob);
            let link = document.createElement("a");
            link.download = name.value;
            link.href = url;
            link.click()
        });