const firebaseConfig = {
  apiKey: "AIzaSyBwFqDr8HU3MOR-w-dgFg3AWhHx5sOMNBq",
  authDomain: "ihsa-c6755.firebaseapp.com",
  databaseURL: "https://ihsa-c6755-default-rtdb.firebaseio.com",
  projectId: "ihsa-c6755",
  storageBucket: "ihsa-c6755.appspot.com",
  messagingSenderId: "972214020200",
  appId: "1:972214020200:web:9fcafd6006ad8d5298f3dd",
  measurementId: "G-YB85X72WS8"
};

firebase.initializeApp(firebaseConfig);

var announcementTextDB = firebase.database().ref('announcementForm');

function addAnnouncement() {
  var announcementInput = document.getElementById("announcementInput");
  var announcementText = announcementInput.value;

  if (announcementText) {
    var listItem = document.createElement("li");
    listItem.className = "list-group-item d-flex justify-content-between align-items-center";
    
    var announcementContent = document.createElement("span");
    announcementContent.textContent = announcementText;
    
    var buttonGroup = document.createElement("div");
    buttonGroup.className = "btn-group";

    var editButton = document.createElement("button");
    editButton.className = "btn btn-secondary btn-sm mx-1";
    editButton.textContent = "Edit";
    editButton.onclick = function() { editAnnouncement(listItem); };

    var deleteButton = document.createElement("button");
    deleteButton.className = "btn btn-danger btn-sm mx-1";
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function() { deleteAnnouncement(listItem); };

    var updateButton = document.createElement("button");
    updateButton.className = "btn btn-success btn-sm mx-1";
    updateButton.textContent = "Update";
    updateButton.onclick = function() { updateAnnouncement(listItem); };

    buttonGroup.appendChild(editButton);
    buttonGroup.appendChild(deleteButton);
    buttonGroup.appendChild(updateButton);

    listItem.appendChild(announcementContent);
    listItem.appendChild(buttonGroup);

    document.getElementById("announcementList").appendChild(listItem);

    announcementInput.value = "";

    // Save announcement to Firebase
    saveAnnouncement(announcementText);
  }
}

function saveAnnouncement(announcementInput) {
  var newAnnouncement = announcementTextDB.push();
  newAnnouncement.set({
    announcementText: announcementInput
  });
}




function getElementVal(id) {
  return document.getElementById(id).value;
}

document.getElementById('announcementForm').addEventListener('submit', addAnnouncement);
