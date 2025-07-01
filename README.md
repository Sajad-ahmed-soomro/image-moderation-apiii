# 🛡️ Image Moderation API

A secure, containerized RESTful API for image moderation built with **Node.js**, **Express**, and **MongoDB**.  
This project utilizes a free and open-source NSFW detection model to analyze image content.  
A React-based frontend is also included, and the entire app is containerized with Docker for easy deployment.

---

## 🚀 Features

- ✅ Token-based authentication (Bearer tokens)
- 🔐 Admin-only endpoints to generate, list, and revoke access tokens
- 📷 Image moderation endpoint (`/moderate`) accepting image uploads via `multipart/form-data`
- 🧠 Free NSFWJS API integration for content classification (e.g., `Sexy`, `Porn`, `Drawing`, `Neutral`, `Hentai`)
- 🐳 Dockerized services: backend, frontend (React), MongoDB
- 🔄 CORS support for secure frontend-backend communication
- ⚙️ GitHub Actions CI pipeline for automated linting and testing
- 📦 MongoDB used to persist token data and moderation history

---

## 🧰 Tech Stack

| Layer      | Technologies                         |
|------------|--------------------------------------|
| **Backend**| Node.js, Express.js, MongoDB, Mongoose |
| **Frontend**| React (Vite)                         |
| **AI Model**| NSFWJS (`@tensorflow/tfjs-node`)     |
| **DevOps** | Docker, Docker Compose, GitHub Actions |

---

## 📦 Getting Started

### ✅ Prerequisites

- [Docker](https://www.docker.com/) & Docker Compose
- [Git](https://git-scm.com/)

### 📥 Installation

```bash
git clone https://github.com/Sajad-ahmed-soomro/image-moderation-apiii.git
cd image-moderation-apiii

▶️ Run the project
To spin up the backend, frontend, and MongoDB:

bash
Copy
Edit
docker-compose up --build
The API will be available at:
http://localhost:5000/api

The React frontend will be available at:
http://localhost:3000



## 📸 Project Screenshot / Banner

<div align="center">
  <img src="https://github.com/user-attachments/assets/cb495b25-5c71-4d99-b199-363df69be11c
" alt="Image Moderation API Banner" width="100%" />
</div>

