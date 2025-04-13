document.getElementById("clear-local-storage").addEventListener("click", () => {
    const confirmClear = confirm("Are you sure you want to clear all saved notes from LocalStorage?");
    if (confirmClear) {
      localStorage.clear();
      alert("All notes cleared from LocalStorage.");
    }
  });
  