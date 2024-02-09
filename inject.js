(function() {
  console.log("Injected script");

  //create floating button in the bottom right corner
  const button = document.createElement("button");
  button.innerHTML = "Download";
  button.style = "position: fixed; bottom: 10px; right: 10px; z-index: 1000; padding: 10px; background-color: #4CAF50; color: white; border: none; border-radius: 5px; cursor: pointer;";
  document.body.appendChild(button);

  //add event listener to the button
  button.addEventListener("click", () => {
    downloadPDF();
  });

  function downloadPDF() {
    window.PDFViewerApplication.pdfDocument.getData().then( data => {
      const downloadLink = document.createElement("a");
      const fileName = getDocName();
      downloadLink.href = window.URL.createObjectURL(new Blob([data], {type: "application/pdf"}));
      downloadLink.download = fileName;
      downloadLink.click();
    })
  }

  function getDocName() {
    const docName = document.querySelector("h1").textContent
    if(docName === "")
      return "document.pdf";
    
    if(!docName.endsWith(".pdf"))
      return `${docName}.pdf`;
    else
      return docName;
  }

})();