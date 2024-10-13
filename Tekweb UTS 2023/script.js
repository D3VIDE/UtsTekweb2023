var selectedCardId = null; // Variable to store selected card ID

// Function to save or update the sticky note
function saveOrUpdateData() {
  var text = document.getElementById('message-text').value;
  var title = document.getElementById('Title').value;
  var color = document.getElementById('noteColor').value;

  if (selectedCardId) {
      //inisialisasi disini dahulu
      var stickyNote = document.getElementById(selectedCardId);
      var cardElement = stickyNote.querySelector('.card');

      // Update the card's title and text
      stickyNote.querySelector('.card-title').innerText = title;
      stickyNote.querySelector('.card-text').innerText = text;
      stickyNote.querySelector('.card').className = `card ${color}`;
      
  } else {
      // Create new sticky note
      var CardId = 'card-' + Date.now();
      var sticky = `<div id="${CardId}" class="col-lg-2 col-md-4 col-sm-6 mb-4" onclick="selectCard('${CardId}')">
          <div class="card ${color}" style="height: 200px; padding: 20px;" data-bs-toggle="modal" data-bs-target="#exampleModal">
              <div class="card-body">
                  <h5 class="card-title">${title}</h5>
                  <hr>
                  <p class="card-text">${text}</p>
              </div>
          </div>
      </div>`;
      document.getElementById('notesContainer').innerHTML += sticky;
  }

  // Clear form fields and reset selectedCardId
  document.getElementById('message-text').value = "";
  document.getElementById('Title').value = "";
  document.getElementById('noteColor').value = "bg-warning"; // Reset color dropdown to default
  selectedCardId = null; // Reset selection
}

function selectCard(cardId) {
    // Remove highlight from previously selected card
    if (selectedCardId) {
        document.getElementById(selectedCardId).querySelector('.card').style.border = "none";
    }

    // Highlight the selected card
    selectedCardId = cardId;
    document.getElementById(cardId).querySelector('.card').style.border = "5px solid black";
  }
// Function to delete the selected sticky note
function deleteSticky() {
    if (selectedCardId) {
        document.getElementById(selectedCardId).remove();
        selectedCardId = null; // Reset selection
    }
}
