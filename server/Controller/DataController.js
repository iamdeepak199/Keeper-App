// Routes/routes.js
import express from "express";
import db from "../Database/database.js";

const router = express.Router();

// Get all notes
export const getdata = (req, res) => {
  db.query("SELECT * FROM notes", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

// Create a new note
export const createdata = (req, res) => {
  const { title, content } = req.body;
  db.query("INSERT INTO notes (title, content) VALUES (?, ?)", [title, content], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ id: result.insertId, title, content });
  });
};

// Delete a note
export const deletedata = (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM notes WHERE id = ?", [id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.sendStatus(204);
  });
};

export default router;   