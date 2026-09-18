# Student Notes CRUD Micro-App

## Student Details

- Student ID: 2026204010
- Name: Srivatsan Ramesh

## GitHub Repository

GitHub Repository: https://github.com/srivatsanrms/student-notes-crud

## Project Description

A full-stack Student Notes CRUD micro-application built using the MERN stack.

The application allows users to:
- Create notes
- View notes
- Delete notes

## Technologies Used

- MongoDB
- Mongoose
- Express.js
- React
- Node.js
- Axios
- Vite

## Project Structure

```text
notes-app/
├── screenshots/
├── server/
└── client/


## Setup Instructions

1. Start MongoDB:
brew services start mongodb/brew/mongodb-community

2. Start the backend:
cd server
npm install
npm start

Backend URL: http://localhost:8000

3. Start the frontend:
cd client
npm install
npm run dev

Frontend URL: http://localhost:5173

## API Endpoints

POST /api/notes
GET /api/notes
DELETE /api/notes/:id

## Screenshots

ui-preview.png - Application showing at least two notes.

delete-action.png - Application after deleting a note, with the successful DELETE request shown in the browser Network tab.