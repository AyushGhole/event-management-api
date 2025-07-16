# 📅 Event Management API

A RESTful API for managing events and user registrations, built with **Node.js**, **Express**, and **MongoDB** using **Mongoose**.

---

## 🎯 **Features**

- Create, view, and manage events.
- Register or cancel user registrations.
- Enforce capacity and prevent double registrations.
- Only allow registration for upcoming events.
- View event stats: total registrations, remaining capacity, and percentage used.
- Sort upcoming events by date (ascending) and location (alphabetically).

---

## 🗂️ **Project Structure**<br>
event-management-api/<br>
│<br>
├── controllers/<br>
│ ├── eventController.js<br>
│ ├── userController.js<br>
│<br>
├── models/<br>
│ ├── Event.js<br>
│ ├── User.js<br>
│<br>
├── routes/<br>
│ ├── eventRoutes.js<br>
│ ├── userRoutes.js<br>
│<br>
├── db/<br>
│ ├── index.js<br>
│<br>
├── .env<br>
├── server.js<br>
├── package.json<br>

