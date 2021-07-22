const express = require('express');
const User = require("../model/user.model");
const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const user = await User.create(req.body);
        return res.status(200).json({ data: user });
    }
    catch (er) {
        return res.status(400).json({message:`failed request-${er}`})
    }
})

router.get("/", async (req, res) => {
    try {
        const user = await User.find().lean().exec();
        return res.status(200).json({ data: user });
    }
    catch (er) {
        return res.status(400).json({message:`failed request-${er}`})
    }
})

router.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id).lean().exec();
        return res.status(200).json({ data: user });
    }
    catch (er) {
        return res.status(400).json({message:`failed request-${er}`})
    }
})

module.exports = router;