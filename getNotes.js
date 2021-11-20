const fs = require("fs");

const getNotes = () => {
  return "Your  Notes";
};

const AddNewNote = (title, body) => {
  console.log("AddNewNote calling");
  const notes = LoadNote();
  const Notess = notes.filter((note) => note.title == title);
  if (Notess.length == 0) {
    notes.push({
      title: title,
      body: body,
    });
    fs.writeFileSync("Note.json", JSON.stringify(notes));
  } else {
    console.log("Already this exits");
  }
};

const LoadNote = () => {
  try {
    const buffer = fs.readFileSync("Note.json");
    const dataJson = buffer.toString();
    const data = JSON.parse(dataJson);
    return data;
  } catch (e) {
    console.log("Load Note calling");
    return [];
  }
};

module.exports = {
  AddNote: AddNewNote,
  getNotes: getNotes,
};
