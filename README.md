# Mini Local Business Dashboard – Backend

## 🚀 Demo Video & Live Project
- **Demo Video:** [Watch here](https://drive.google.com/file/d/1VjpBYiFLN9fRsj0HArR5aCHWL418VZGC/view?usp=sharing)
- **Live Project:** [View live](https://growth-pro-ai-full-git-3f6360-velugondaiah-garlapatis-projects.vercel.app/)

A Node.js/Express backend that simulates Google Business and SEO data for local businesses. Provides endpoints for business data and AI-generated SEO headlines, designed to work with the React frontend.

## Features
- REST API with two endpoints:
  - `POST /business-data`: Returns simulated rating, reviews, and an AI-generated SEO headline
  - `GET /regenerate-headline`: Returns a new simulated SEO headline
- CORS enabled for frontend integration
- Fast, simple, and easy to run

## Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Installation
1. Open a terminal and navigate to this `cd backend` directory.
2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Server
1. Start the backend server:
   ```bash
   nodemon index.js
   ```
2. The server will run at [http://localhost:3001](http://localhost:3001)

## API Endpoints
### POST `/business-data`
- **Description:** Returns simulated business data (rating, reviews, and an AI-generated SEO headline).
- **Request Body:**
  ```json
  {
    "businessName": "string",
    "category": "string",
    "location": "string"
  }
  ```
- **Response:**
  ```json
  {
    "rating": 4.6,
    "reviews": 123,
    "headline": "Your business headline here"
  }
  ```

### GET `/regenerate-headline`
- **Description:** Returns a new simulated SEO headline.
- **Response:**
  ```json
  {
    "headline": "A new business headline"
  }
  ```

## Troubleshooting
- If you see CORS errors, ensure the frontend is running on the correct port and CORS is enabled in `index.js`.
- If the port is in use, change it in `index.js`.

---

**This backend is designed to work seamlessly with the frontend in the `../frontend` directory.** 
