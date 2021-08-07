const express = require("express");
const router = express.Router();
const Note= require("../model/notesmodels")


router.route("/create").post((res,req) =>{
    console.log(req.body)
    const title= req.body.title;
    const content= req.body.content;
    console.log("hiiiiiiiiii")
    const newNote = new Note({
       title,
       content
    })
    newNote.save();
})
module.exports = router;