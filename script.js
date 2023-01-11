let addButton = document.querySelector("#addbutton");
let nothingAdded = document.querySelector("#nothingadded");

let noteCount = 0;

addButton.addEventListener("click", () => {
  nothingAdded.innerText = "";
  noteCount++;

  let textAreaInput = document.querySelector("#noteinput");
  let newNoteFullText = textAreaInput.value;
  let newNoteShortText;
  if (newNoteFullText.length < 18) {
    newNoteShortText = newNoteFullText;
  } else {
    newNoteShortText = newNoteFullText.slice(0, 18).concat("...");
  }
  textAreaInput.value = null;

  let notesDiv = document.querySelector("#notes");
  let newNoteDiv = document.createElement("div");
  notesDiv.append(newNoteDiv);
  newNoteDiv.append(noteCount);
  let breakTag = document.createElement("br");
  newNoteDiv.append(breakTag);
  newNoteDiv.append(newNoteShortText);
  newNoteDiv.classList.add("newnote");

  newNoteDiv.addEventListener("click", () => {
    let popup = document.createElement("div");
    document.body.append(popup);
    popup.classList.add("popup");
    popup.append(newNoteFullText);

    let overlay = document.createElement("div");
    document.body.append(overlay);
    overlay.classList.add("overlay");

    overlay.addEventListener("click", () => {
      document.body.removeChild(popup);
      document.body.removeChild(overlay);
    });
  });
});
