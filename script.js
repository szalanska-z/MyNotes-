const addBtn = document.querySelector(".add");
const deleteAllBtn = document.querySelector(".delete-all");
const deleteNoteBtn = document.getElementsByClassName(".delete-note");
const saveBtn = document.querySelector(".save");
const cancelBtn = document.querySelector(".cancel");

const noteArea = document.querySelector(".note-area");
const notePanel = document.querySelector(".note-panel");
const selectCategory = document.querySelector("#category");
const textArea = document.querySelector("#text");
const error = document.querySelector(".error");

let selectiveValue;
let cardID = 0;

const openPanel = () => {
  notePanel.style.display = "flex";
};

const closePanel = () => {
  notePanel.style.display = "none";
  error.style.visibility = "hidden";
  textArea.value = "";
  selectCategory.selectedIndex = 0;
};

const addNote = () => {
  if (
    textArea.value !== "" &&
    selectCategory.options[selectCategory.selectedIndex].value !== "0"
  ) {
    createNote();
    error.style.visibility = "hidden";
  } else {
    error.style.visibility = "visible";
  }
};

const createNote = () => {
  const newNote = document.createElement("div");
  newNote.classList.add("note");
  newNote.setAttribute("id", cardID);
  newNote.innerHTML = `<div class="note-header">
		<h3 class="note-title">${selectedValue}</h3>
		<button class="delete-note" onClick="deleteNote(${cardID})">
			<i class="fas fa-times"></i>
		</button>
	</div>
	<div class="note-body">
		${textArea.value}
	</div>`;
  noteArea.appendChild(newNote);
  cardID++;
  textArea.value = "";
  selectCategory.selectedIndex = 0;
  notePanel.style.display = "none";
  checkColor(newNote);
};

const selectValue = () => {
  selectedValue = selectCategory.options[selectCategory.selectedIndex].text;
};

const checkColor = (note) => {
  switch (selectedValue) {
    case "Zakupy":
      note.style.backgroundColor = "#e4a1ce";
      break;
    case "Praca":
      note.style.backgroundColor = " #b1e2cf";
      break;
    case "Inne":
      note.style.backgroundColor = "#f3f38f";
      break;
  }
};

const deleteNote = (id) => {
  const noteToDelete = document.getElementById(id);
  noteArea.removeChild(noteToDelete);
};

const deleteAllNotes = () => {
  noteArea.textContent = "";
};

addBtn.addEventListener("click", openPanel);
cancelBtn.addEventListener("click", closePanel);
saveBtn.addEventListener("click", addNote);
deleteAllBtn.addEventListener("click", deleteAllNotes);
