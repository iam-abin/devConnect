import express from "express";

const router = express.Router();

router.post("/login", (req, res)=>{
    res.send("auth route")
});

export default router;

