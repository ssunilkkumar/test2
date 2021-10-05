const express = require ("express");
const router = express.Router();

const Commit = require ("../models/commit.model")

router.get("/", async (req, res) => {
    const commits = await Commit.find().populate("user").lean().exec();

    return res.status(200).json({data: commits})
})

router.post("/", async (req, res) => {
    const commit = await Commit.create(req.body);

    return res.status(201).json({data: commit})
})

router.patch("/:id", async (req, res) => {
    try{
        const commit = await Commit.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(400).json({commit})
    } catch (err) {
        res.status(400).json({message: err.message})
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const commit = await Commit.findByIdAndDelete(req.params.id)
        res.status(400).json({commit})
    } catch (err) {
        res.status(400).json({message: err.message})

    }
})

module.exports = router