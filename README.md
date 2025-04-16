# Customer Feedback Platform

## Overview

This project is a **Customer Feedback Platform** that allows users to log in via **Google OAuth**, submit feedback in various categories, and view aggregated feedback data. The frontend is built with **React**, and the backend uses **Node.js**. 
The application also integrates with **Frill.co** to manage feedback. but **Frill.co** does not provide free **API TOKEN**. It is used only in Paid packages which is very costly.
As a alternative i have used MONGODB for Database Storage and Manages Feedback.

---

## Requirements

### Backend (Node.js):
- **Google OAuth** for authentication.
- API for submitting feedback and aggregating data.
- Integration with **Frill.co** to store and manage feedback data.

### Frontend (React):
- Google OAuth integration for user login.
- Feedback submission form for users to provide feedback on different categories.
- Display aggregated feedback for each category.

---

## Technologies Used

- **Frontend**: React, Axios, React OAuth
- **Backend**: Node.js, Passport.js, Express.js
- **Authentication**: Google OAuth 2.0
- **Storage**: MongoDB (as Frill.co is not providing free api token)
- **Others**: dotenv, axios

---

## Project Setup

### Step 1: Clone the Repository

Clone the repository to your local machine:

git clone https://github.com/your-repo-name/feedback-platform.git
cd feedback-platform

### Step 2: Backend Setup

For AuthService

1. Install Dependencies
Navigate to the backend/ directory and install the required dependencies:

npm install (require dependencies) ==> npm install express mongoose dotenv passport passport-google-oauth20 express-session cors axios

3. Configure .env File
In the backend/ directory, create a .env file with the following credentials:

.env
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
SESSION_SECRET=randomlongsecretkey
MONGO_URI=your-mongo-local-url

3. Run the Backend
After setting up the .env file, start the backend server:

npm start

## Now for the FeedbackService
This is the **backend microservice** for the Customer Feedback Platform. It provides APIs for:

- Google OAuth-based authentication
- Feedback submission across three categories:
  - Product Features
  - Product Pricing
  - Product Usability
- Retrieving aggregated feedback stats
- Integration with **MongoDb** for feedback storage

1. Install Dependencies
  npm install express mongoose dotenv cors axios

2. Create a .env contaning
    MONGO_URI=your-mongo-local-feedback-url
3. Run the server npm start

4. Feed back example
Feedback Categories =>
Product Features

Product Pricing

Product Usability

Each feedback entry should include:

json
{
  "category": "Product Usability",
  "rating": 4,
  "comments": "Very intuitive experience!",
  "userId": "google-oauth-id"
}

Backend API Endpoints
1. POST /auth/google
2. GET/auth/google/login
3. GET/auth/google/logout
4. GET/auth/google/currentuser
5. GET/auth/google/callback
6. POST /api/feedback
7. GET /api/feedback



### FOR the Frontent

## 🚀 Tech Stack

- **React** (Vite or CRA)
- **Google OAuth**
- **Axios** for API requests
- **React Router DOM** for navigation
- **Tailwind CSS** (or your styling choice)

✅ Google Login  
✅ Feedback form with categories  
✅ View feedback summary by category  
✅ Communicates with backend (Node.js)  
✅ Session-based or token-based auth

1. Install Dependencies

npm install

2. Run the Frontend
npm start

Authentication Flow
On button click, the user signs in using Google OAuth.

Google returns the user info or token.

The frontend sends the token to the backend to authenticate or create a session.

✅ UI Pages
Page	Description
/login	Google login screen
/feedback	Form to submit feedback
/dashboard	View feedback category summary


THANK YOU



   
   
