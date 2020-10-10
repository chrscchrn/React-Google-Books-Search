const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);

// Send every request to the React app
// Define any API routes before this runs
// If no API routes are hit, send the React app
router.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

module.exports = router;