// Routes/routes.js
import express from "express";
import { getdata, createdata, deletedata } from "../Controller/DataController.js";

const router = express.Router();

router.get("/notes", getdata);
router.post("/notes", createdata);
router.delete("/notes/:id", deletedata);

export default router;