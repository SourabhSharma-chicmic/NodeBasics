// const chalk = require("chalk");

const yarg = require("yargs");
const fs = require("fs");
const Notes = require("./getNotes.js");



//ADD A NOTE 
yarg.command({
  command: "add",
  describe: "Add a new note ",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    Notes.AddNote(argv.title, argv.body);
  },
});


//READ A NOTE 
yarg.command({
  command:'Read',
  describe:'Read a note',
  builder:{
      title:{
        describe:'Enter a Title',
        demandOption:true,
        type:'string'
      }
  },
  handler:function (argv) {
    console.log(argv);
  }
})

yarg.parse();
