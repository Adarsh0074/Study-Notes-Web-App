import { db } from "./firebase-config.js";
import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";

document.getElementById("noteForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const priority = document.getElementById("priority").value;
  const tags = Array.from(document.getElementById("tags").selectedOptions).map(o => o.value);

  const note = {
    title, description, priority, tags,
    createdAt: serverTimestamp()
  };

  try {
    await addDoc(collection(db, "notes"), note);
    document.getElementById("statusMessage").textContent = "Note saved!";
    e.target.reset();
  } catch (err) {
    alert("Error saving note");
  }
});
