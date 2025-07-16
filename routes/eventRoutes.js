const express = require("express");
const router = express.Router();
const {
  createEvent,
  getEventDetails,
  registerForEvent,
  cancelRegistration,
  listUpcomingEvents,
  getEventStats,
} = require("../controllers/eventController");

// Endpoints
router.post("/", createEvent);
router.get("/:id", getEventDetails);
router.post("/:id/register", registerForEvent);
router.delete("/:id/register", cancelRegistration);
router.get("/upcoming/list", listUpcomingEvents);
router.get("/:id/stats", getEventStats);

module.exports = router;
