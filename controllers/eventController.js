const Event = require("../models/Event");
const User = require("../models/User");

//  Create Event
exports.createEvent = async (req, res) => {
  try {
    const { title, datetime, location, capacity } = req.body;

    if (!title || !datetime || !location || !capacity) {
      return res.status(400).json({ error: "All fields are required" });
    }

    if (capacity <= 0 || capacity > 1000) {
      return res
        .status(400)
        .json({ error: "Capacity must be between 1 and 1000" });
    }

    const event = new Event({ title, datetime, location, capacity });
    await event.save();

    res.status(201).json({ message: "Event created", eventId: event._id });
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
};

//  Get Event Details
exports.getEventDetails = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id).populate("registrations");

    if (!event) {
      return res.status(404).json({ error: "Event not found" });
    }

    res.json(event);
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
};

//  Register for Event
exports.registerForEvent = async (req, res) => {
  try {
    const { userId } = req.body;

    const event = await Event.findById(req.params.id);
    const user = await User.findById(userId);

    if (!event || !user) {
      return res.status(404).json({ error: "Event or User not found" });
    }

    if (event.datetime < new Date()) {
      return res.status(400).json({ error: "Cannot register for past events" });
    }

    if (event.registrations.includes(userId)) {
      return res.status(400).json({ error: "User already registered" });
    }

    if (event.registrations.length >= event.capacity) {
      return res.status(400).json({ error: "Event is full" });
    }

    event.registrations.push(userId);
    await event.save();

    res.json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
};

//  Cancel Registration
exports.cancelRegistration = async (req, res) => {
  try {
    const { userId } = req.body;

    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ error: "Event not found" });
    }

    if (!event.registrations.includes(userId)) {
      return res
        .status(400)
        .json({ error: "User not registered for this event" });
    }

    event.registrations.pull(userId);
    await event.save();

    res.json({ message: "Registration cancelled" });
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
};

//  List Upcoming Events
exports.listUpcomingEvents = async (req, res) => {
  try {
    const events = await Event.find({ datetime: { $gte: new Date() } }).sort({
      datetime: 1,
      location: 1,
    });

    res.json(events);
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
};

//  Event Stats
exports.getEventStats = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ error: "Event not found" });
    }

    const total = event.registrations.length;
    const remaining = event.capacity - total;
    const percentUsed = ((total / event.capacity) * 100).toFixed(2);

    res.json({
      totalRegistrations: total,
      remainingCapacity: remaining,
      percentUsed: percentUsed + "%",
    });
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
};
