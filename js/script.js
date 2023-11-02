// Function to shuffle an array using the Fisher-Yates algorithm
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Function to load an XLSX file and display it in div1
function loadFile() {
    // Trigger the file input click event
    document.getElementById('fileInput').click();
}

// Function to copy specific columns from div1 to div2, avoiding duplicate rows
function copyContent() {
    var div1Content = document.querySelector('.box').innerHTML; // Get content of div1
    var div2 = document.querySelectorAll('.box')[1]; // Get div2

    // Create a temporary div to parse the HTML content of div1
    var tempDiv = document.createElement('div');
    tempDiv.innerHTML = div1Content;

    // Extract and display the "RiderName" and "Horse Name" columns
    var extractedHTML = '<table>';
    var tableRows = tempDiv.querySelectorAll('tr'); // Get all table rows
    var uniqueRows = new Set(); // Use a Set to store unique rows

    // Loop through rows and extract specific columns
    for (var i = 0; i < tableRows.length; i++) {
        var columns = tableRows[i].querySelectorAll('td'); // Get all table cells in the row
        if (columns.length >= 2) {
            // Assuming the first column is "RiderName" and the second column is "Horse Name"
            var riderName = columns[2].innerHTML.trim();
            var horseName = columns[5].innerHTML.trim();
            var rowKey = riderName + horseName; // Create a unique key for each row

            // Check if this row is unique before adding it
            if (!uniqueRows.has(rowKey)) {
                extractedHTML += '<tr><td>' + riderName + '</td><td>' + horseName + '</td></tr>';
                uniqueRows.add(rowKey); // Add the row key to the Set to mark it as seen
            }
        }
    }

    extractedHTML += '</table>';

    // Set the content of div2 to the extracted HTML
    div2.innerHTML = extractedHTML;

    // Store the content of div2 in localStorage
      var div2Content = document.querySelector('#div2').innerHTML;
      localStorage.setItem('div2Content', div2Content);
}

// Attach the click event handler to Button 2
document.querySelector('.button:last-child').addEventListener('click', copyContent);

function randomizeData() {
    var div1 = document.querySelector('.box'); // Get content of div1
    var div2 = document.querySelectorAll('.box')[1]; // Get div2

    // Create a temporary div to parse the HTML content of div1
    var tempDiv = document.createElement('div');
    tempDiv.innerHTML = div1.innerHTML;

    // Extract the table from div1
    var table = tempDiv.querySelector('table');

    // Extract all the rows except for the header row
    var rows = Array.from(table.querySelectorAll('tr')).slice(2); // Exclude the first two rows

    // Extract the cells of each column into separate arrays
    var columnsData = [];
    var numColumns = rows[0].cells.length;

    for (var colIndex = 0; colIndex < numColumns; colIndex++) {
        var columnData = [];

        for (var rowIndex = 0; rowIndex < rows.length; rowIndex++) {
            var cell = rows[rowIndex].cells[colIndex];
            if (colIndex === 2 || colIndex === 6) {
                // Skip columns 2 and 6 (Rider Name and School)
                columnData.push(cell.innerHTML.trim());
            } else {
                // Shuffle the data for other columns
                columnData.push(cell.innerHTML.trim());
            }
        }

        columnsData.push(columnData);
    }

    // Shuffle the data within each column independently (excluding Rider Name and School)
    for (var colIndex = 0; colIndex < numColumns; colIndex++) {
        if (colIndex !== 1 && colIndex !== 2 && colIndex !== 3) {
            shuffleArray(columnsData[colIndex]);
        }
    }

    // Create the randomized content for div2
    var randomizedContent = '<table>';

    // Add the header row (fixed)
    randomizedContent += table.querySelector('tr').outerHTML;

    // Add the first two rows (fixed)
    randomizedContent += table.querySelectorAll('tr')[1].outerHTML;

    // Reconstruct the table with shuffled data
    for (var rowIndex = 0; rowIndex < rows.length; rowIndex++) {
        randomizedContent += '<tr>';

        for (var colIndex = 0; colIndex < numColumns; colIndex++) {
            randomizedContent += '<td>' + columnsData[colIndex][rowIndex] + '</td>';
        }

        randomizedContent += '</tr>';
    }

    randomizedContent += '</table>';

    // Set the content of div2 to the randomized table
    div2.innerHTML = randomizedContent;

    var div2Content = div2.innerHTML;
    localStorage.setItem('div2Content', div2Content);
}




// Attach the click event handler to the "Randomize" button for div2 (Button 2)
document.querySelectorAll('.button')[1].addEventListener('click', randomizeData);


// Function to handle the file selection and data loading (as in your initial code)
function handleFileSelect(evt) {
    var files = evt.target.files; // Get the selected files

    if (files.length === 0) {
        alert("No file selected.");
        return;
    }

    var file = files[0];

    var reader = new FileReader();

    reader.onload = function (e) {
        var data = e.target.result;

        // Assuming you're using a library like xlsx.js to parse the XLSX file
        var workbook = XLSX.read(data, { type: 'binary' });
        var sheetName = workbook.SheetNames[0];
        var sheet = workbook.Sheets[sheetName];

        // Convert the sheet data to HTML (you can use your preferred method)
        var htmlTable = XLSX.utils.sheet_to_html(sheet);

        // Display the HTML table in div1
        var tableContainer = document.querySelector('.box'); // Select div1
        tableContainer.innerHTML = ''; // Clear its content

        // Create a new div to contain the table with a class for styling
        var tableDiv = document.createElement('div');
        tableDiv.className = 'table-container';

        // Set the HTML table as the content of the new div
        tableDiv.innerHTML = htmlTable;

        // Append the table div to div1
        tableContainer.appendChild(tableDiv);
    };

    reader.readAsBinaryString(file);
}

// Add an event listener to the file input
document.getElementById('fileInput').addEventListener('change', handleFileSelect, false);

function copyContent() {
    // Retrieve the content of div2 from localStorage
    var div2Content = localStorage.getItem('div2Content');
    
    // Copy the content to the desired location (e.g., competitor.html)
    // You may need to adapt this part to your specific requirements
    // For example, you could open a new window or navigate to another page.
    // Here's a simplified example that shows an alert with the copied content:
    alert("Copied Content to Competitor:\n" + div2Content);
}

