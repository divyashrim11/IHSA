document.getElementById("exportButton").addEventListener("click", function () {
    // Get the content of "Div 2"
    var div2Content = document.getElementById("div2").innerText;

    // Split the content into rows based on newline characters
    var rows = div2Content.split('\n');

    // Create a new Workbook
    var wb = XLSX.utils.book_new();

    // Create an empty worksheet
    var ws = XLSX.utils.aoa_to_sheet([[]]);

    // Add the rows as data to the worksheet
    for (var i = 0; i < rows.length; i++) {
        var row = rows[i].split('\t'); // Split each row into cells (assuming tab-separated)
        XLSX.utils.sheet_add_aoa(ws, [row], { origin: -1 });
    }

    // Add the worksheet to the Workbook
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

    // Generate a XLSX data URI
    var dataURI = XLSX.write(wb, { bookType: "xlsx", type: "base64" });

    // Create a link element for downloading
    var a = document.createElement("a");
    a.href = "data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64," + dataURI;
    a.download = "exported_data.xlsx";

    // Trigger a click event on the link to start the download
    a.click();
});
