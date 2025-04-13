const notesContainer = document.getElementById("notes-container");
const filterSelect = document.getElementById("filter-priority");
const searchInput = document.getElementById("search-title");

let allNotes = [];

function renderNotes(notes) {
  notesContainer.innerHTML = "";

  if (notes.length === 0) {
    notesContainer.innerHTML = "<p>No notes found.</p>";
    return;
  }

  notes.forEach(note => {
    const noteEl = document.createElement("div");
    noteEl.className = "note-card";
    noteEl.innerHTML = `
      <h3>${note.title}</h3>
      <p>${note.description}</p>
      <p><strong>Priority:</strong> ${note.priority}</p>
      <p><strong>Tags:</strong> ${note.tags?.join(", ") || "None"}</p>
      ${note.imageUrl ? `<img src="${note.imageUrl}" alt="Note Image" class="note-image"/>` : ""}
      <p><small>${new Date(note.timestamp).toLocaleString()}</small></p>
      <button onclick="deleteNote('${note.id}')">Delete</button>
    `;
    notesContainer.appendChild(noteEl);
  });
}

function loadNotes() {
  const dbRef = firebase.database().ref("notes");
  dbRef.on("value", snapshot => {
    const data = snapshot.val();
    allNotes = [];

    for (let id in data) {
      allNotes.push({ ...data[id], id });
    }

    renderNotes(allNotes);
  });
}

function deleteNote(id) {
  if (confirm("Are you sure you want to delete this note?")) {
    firebase.database().ref("notes/" + id).remove();
    alert("Note deleted.");
  }
}

filterSelect.addEventListener("change", () => {
  const priority = filterSelect.value;
  let filtered = [...allNotes];

  if (priority !== "all") {
    filtered = filtered.filter(note => note.priority === priority);
  }

  renderNotes(filtered);
});


searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();
  const filtered = allNotes.filter(note =>
    note.title.toLowerCase().includes(searchTerm)
  );
  renderNotes(filtered);
});

loadNotes();
