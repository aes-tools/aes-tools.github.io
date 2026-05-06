function generate() {
    document.getElementById("barcode").innerHTML = "";
    document.getElementById("extraText").innerHTML = "";
    document.getElementById("qtyText").innerHTML = "";
    const barcodeValue = document.getElementById("barcodeData").value;
    const extraValue = document.getElementById("appendText").value;
    const qtyValue = document.getElementById("appendQty").value;

    if (!barcodeValue) {
        alert("Please enter barcode data");
        return;
    }

    // 1. Generate the SVG Barcode
    // Note: targeting an <svg> element is much cleaner
    JsBarcode("#barcode", barcodeValue, {
        format: "CODE128",
        lineColor: "#000",
        height: "35pt",
        width: "3pt",
        textPosition: "top",
        fontOptions: "bold",
        fontSize: 70,
        marginTop: -20
    });

    // 2. Append the text to the div below the barcode
    if (extraValue) {
        document.getElementById("extraText").innerText = extraValue;
    }
    if (qtyValue) {
        document.getElementById("qtyText").innerText = "Qty: " + qtyValue;
    }
}

        document.addEventListener('keydown', function (e) {
            if (e.which === 13) generate();
        })