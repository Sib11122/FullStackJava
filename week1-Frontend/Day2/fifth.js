document.addEventListener("DOMContentLoaded", () => {
    const noteForm = document.getElementById("noteForm");
    const noteInput = document.getElementById("noteInput");
    const notesList = document.getElementById("notesList");
    const showNotesBtn = document.getElementById("showNotes");
    const notesDisplay = document.getElementById("notesDisplay");

    // Load and display notes
    function loadNotes() {
        notesList.innerHTML = ""; 
        const notes = JSON.parse(localStorage.getItem("notes")) || [];
        
        notes.forEach((note, index) => {
            const noteElement = document.createElement("div");
            noteElement.classList.add("note");
            noteElement.innerHTML = `
                <p>${note}</p>
                <button class="delete" data-index="${index}">Delete</button>
            `;
            notesList.appendChild(noteElement);
        });
    }

    // Save new note
    function saveNote(note) {
        const notes = JSON.parse(localStorage.getItem("notes")) || [];
        notes.push(note);
        localStorage.setItem("notes", JSON.stringify(notes));
        loadNotes(); 
    }

    // Delete a note
    function deleteNote(index) {
        const notes = JSON.parse(localStorage.getItem("notes")) || [];
        notes.splice(index, 1);
        localStorage.setItem("notes", JSON.stringify(notes));
        loadNotes();
    }

    // Handle form submission
    noteForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const noteText = noteInput.value.trim();
        if (noteText === "") return;
        saveNote(noteText);
        noteInput.value = ""; 
    });

    // Handle delete button clicks
    notesList.addEventListener("click", (e) => {
        if (e.target.classList.contains("delete")) {
            const index = e.target.getAttribute("data-index");
            deleteNote(index);
        }
    });

    // Show notes when button is clicked
    showNotesBtn.addEventListener("click", () => {
        const notes = JSON.parse(localStorage.getItem("notes")) || [];
        if (notes.length === 0) {
            notesDisplay.innerHTML = "<p>No notes saved!</p>";
        } else {
            notesDisplay.innerHTML = notes.map(note => `<p>${note}</p>`).join("");
        }
    });

    // Initial load
    loadNotes();
});
