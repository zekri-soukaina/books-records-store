import express from "express";
import getRecords from "../services/records/getRecords.js";
import getRecordById from "../services/records/getRecordById.js";
import createRecord from "../services/records/createRecord.js";
import updateRecordById from "../services/records/updateRecordById.js";
import deleteRecord from "../services/records/deleteRecord.js";
import authMiddleware from "../middleware/auth.js";

const router = express.Router();

router.get("/", (req, res) => {
  try {
    const records = getRecords();
    res.status(200).json(records);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send("something went wrong while getting a list of records");
  }
});

router.get("/:id", (req, res) => {
  try {
    const { id } = req.params;
    const record = getRecordById(id);
    if (!record) {
      record.status(404).send(`record with id ${id} was not found`);
    } else {
      res.status(200).json(record);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("something went wrong while getting record with id");
  }
});

router.post("/", authMiddleware, (req, res) => {
  try {
    const { title, artist, year, available, genre } = req.body;
    const newRecord = createRecord(title, artist, year, available, genre);
    res.status(201).json(newRecord);
  } catch (error) {
    console.error(error);
    res.status(500).send("something went wrong while creating a record!");
  }
});

router.put("/:id", authMiddleware, (req, res) => {
  try {
    const { id } = req.params;
    const { title, artist, year, available, genre } = req.body;
    const updatedRecord = updateRecordById(
      id,
      title,
      artist,
      year,
      available,
      genre
    );
    res.status(200).json(updatedRecord);
  } catch (error) {
    console.error(error);
    res.status(500).send("something went wrong while updating record by id!");
  }
});

router.delete("/:id", authMiddleware, (req, res) => {
  try {
    const { id } = req.params;
    const deletedRecord = deleteRecord(id);
    if (!deletedRecord) {
      res.status(404).send(`record with id ${id} was not found`);
    }
    res.status(200).json({
      message: `record with id ${deletedRecord} was deleted.`,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("someting went wrong while deleting  record by id");
  }
});

export default router;
