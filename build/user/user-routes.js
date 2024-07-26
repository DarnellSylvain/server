"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// Define user routes here
router.get("/", (req, res) => {
    res.send("User route edited");
});
exports.default = router;
