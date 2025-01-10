function downloadPDF() {
    const element = document.body; // Select the entire page
    const opt = {
        margin: 1,
        filename: 'portfolio.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    // Use html2pdf.js library to generate PDF
    html2pdf().set(opt).from(element).save();
}
