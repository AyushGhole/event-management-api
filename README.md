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

1. **Clone the repository** <br>
   git clone https://github.com/AyushGhole/event-management-api.git<br>
   cd event-management-api<br>
2.**Install dependencies** <br>
    npm install <br>
3.**Configure environment variables**<br>
    MONGO_URI<br>
    PORT=5000<br>
4.**Run the server** <br>
    npm run dev <br>

🧩 API Endpoints <br>
1. Create User<br>
   POST /api/users<br>
   Request Body:<br>
   Eg : {<br>
  "name": "Alice Smith", <br>
  "email": "alice@example.com"<br>
   }<br>
2. Create Event <br>
   POST /api/events<br>
   Request Body:<br>
   Eg:{<br>
  "title": "Tech Conference 2025",<br>
  "datetime": "2025-08-20T09:00:00Z",<br>
  "location": "New York",<br>
  "capacity": 200<br>
  }<br>
3. Get Event Details<br>
   GET /api/events/:id <br>
   Response: 200 OK<br>
   Eg:{<br>
  "_id": "...",<br>
  "title": "Tech Conference 2025",<br>
  "datetime": "...",<br>
  "location": "New York",<br>
  "capacity": 200,<br>
  "registrations": [],<br>
}<br>
4. Register for Event<br>
   POST /api/events/:id/register<br><br>
   Request Body:<br>
   Eg:{<br>
  "userId": "..."<br>
  }   <br>
5. Cancel Registration<br>
   DELETE /api/events/:id/register<br>
   Request Body:<br>
   Eg: {<br>
  "userId": "..."<br>
}<br>
 6. List Upcoming Events<br>
  GET /api/events/upcoming/list<br>
  Response: 200 OK<br>
  Eg : [<br>
   {<br>
    "_id": "...",<br>
    "title": "...",<br>
    "datetime": "...",<br>
    "location": "...",<br>
    "capacity": 200,<br>
    "registrations": [...]<br>
   }<br>
  ]<br>
7. Event Stats<br>
    GET /api/events/:id/stats<br>
    Response: 200 OK<br>
    Eg: {<br>
  "totalRegistrations": 50,<br>
  "remainingCapacity": 150,<br>
  "percentUsed": "25.00%"<br>
}<br>

Business Logic<br>
✔️ Capacity limits enforced<br>
✔️ No duplicate registrations<br>
✔️ No registrations for past events<br>
✔️ Custom sort for upcoming events<br>
✔️ Proper status codes and error messages<br>

Tech Stack<br>
✔️ Node.js<br>
✔️ Express<br>
✔️ MongoDB + Mongoose<br>
✔️ Postman for manual testing<br>

 How to Test <br>
 Use Postman, Insomnia, or cURL to test all endpoints.
