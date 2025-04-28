🏥 MediVault - Secure Healthcare Management Platform

MediVault is a next-generation healthcare management platform that enables patients to securely store, manage, and share their medical records. With enterprise-grade security, multilingual support, and AI-powered features, MediVault modernizes healthcare data management for a digital world.

🚀 Features

🔒 Secure Medical Records Management

Upload and view encrypted medical records (prescriptions, reports, etc.)

Organize files by category

End-to-end AES-256 encryption for maximum security

⏰ Smart Reminders

Medicine reminders

Scheduled health checkup alerts

Push notifications via Firebase Cloud Messaging (FCM)

🤖 AI-Powered Health Assistant

Health-related FAQs

Prescription and medicine guidance

Powered by Google Gemini AI APIs

🩺 Secure Doctor Access

Temporary QR code sharing for medical records

Role-based access control (RBAC)

🌎 Multilingual Support

English, Hindi, Tamil, Kannada

AI assistant operates in multiple languages

🛠️ Tech Stack

Frontend

React.js (with React Router)

i18next (internationalization)

Axios (API communication)

TailwindCSS + Custom CSS

Backend

Node.js & Express

MongoDB + Mongoose

JWT Authentication

Firebase for notifications

Cloudinary for file uploads

Google Cloud APIs (Translation, Gemini AI)

⚙️ Installation & Setup

Prerequisites

Node.js v16+

MongoDB Atlas or Local Instance

Cloudinary Account

Firebase Project

Google Cloud Project (Translation & AI APIs)

1️⃣ Backend Setup

cd server
npm install
cp .env.example .env
npm start

2️⃣ Frontend Setup

cd client
npm install
cp .env.example .env
npm start

🔒 Environment Variables

Backend (server/.env)

PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
ENCRYPTION_KEY=your_encryption_key
FIREBASE_PROJECT_ID=your_firebase_project_id
FIREBASE_PRIVATE_KEY=your_firebase_private_key
FIREBASE_CLIENT_EMAIL=your_firebase_client_email
QR_CODE_EXPIRY=24h
EMAIL_USER=your_email_for_notifications
EMAIL_PASSWORD=your_email_password
GEMINI_API_KEY=your_gemini_api_key
GOOGLE_PROJECT_ID=your_google_project_id
GOOGLE_TRANSLATE_API_KEY=your_google_translate_api_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

Frontend (client/.env)

REACT_APP_API_URL=http://localhost:5000/api

📲 Usage

Register/Login into the MediVault platform.

Upload your encrypted medical records.

Schedule medicine reminders and appointments.

Share medical records securely using QR codes.

Consult the AI Assistant for health advice in multiple languages.

🌐 Deployment Instructions

Frontend can be deployed on:

Vercel

Netlify

Backend can be deployed on:

Render

Railway

Firebase can be used for production-grade push notifications.

(Need a full deploy guide? Ping me.)

📜 License

This project is licensed under the MIT License.

👥 Contributors


Role	Name
🛠️ Backend Developer	Vignesh Krishna
🎨 Frontend Developer	Vignesh Krishna
🧠 AI Integration	Vignesh Krishna
(Bro’s carrying the project harder than prime Messi 💀)

🙏 Acknowledgements

Google Cloud

Firebase

MongoDB Atlas

Cloudinary

🚀 Future Improvements

Admin dashboard for monitoring system activity

Payment integration for premium health services

Role-based advanced analytics for doctors

More languages (Spanish, French, Arabic)

🌟 Why MediVault?

Because health data deserves to be safe, easy, and smart — just like every modern healthcare solution should be.
