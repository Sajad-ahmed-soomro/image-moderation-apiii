# 🛡️ Image Moderation API

<div align="center">
  <!-- Tech Badges -->
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" />
  <img src="https://img.shields.io/badge/GitHub Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white" />
</div>

---

A secure, containerized RESTful API for image moderation built with **Node.js**, **Express**, and **MongoDB**.  
This project uses a free and open-source NSFW detection model (NSFWJS) to analyze image content.  
Includes a React-based frontend and fully containerized services for deployment ease.

---

## 🚀 Features

- ✅ Token-based authentication (Bearer tokens)
- 🔐 Admin-only endpoints to generate, list, and revoke access tokens
- 📷 Image moderation endpoint (`/moderate`) accepting image uploads via `multipart/form-data`
- 🧠 NSFWJS AI model for predictions like `Porn`, `Sexy`, `Drawing`, `Neutral`, `Hentai`
- 🐳 Dockerized backend, frontend, and MongoDB setup
- 🔄 CORS enabled for frontend-backend communication
- ⚙️ GitHub Actions CI workflow for linting and testing
- 📦 MongoDB for storing tokens and moderation results

---

## 🧰 Tech Stack

| Layer       | Technologies                            |
|-------------|-----------------------------------------|
| **Backend** | Node.js, Express.js, MongoDB, Mongoose  |
| **Frontend**| React (Vite)                            |
| **AI Model**| NSFWJS (`@tensorflow/tfjs-node`)        |
| **DevOps**  | Docker, Docker Compose, GitHub Actions  |

---

## 📦 Getting Started

### ✅ Prerequisites

- [Docker](https://www.docker.com/)
- [Git](https://git-scm.com/)

### 📥 Installation

```bash
git clone https://github.com/Sajad-ahmed-soomro/image-moderation-apiii.git
cd image-moderation-apiii
cd frontend
npm install
npm start
cd ../backend
npm install
node server.js
```


Spin up all services (backend, frontend, database):

📸 Project Screenshot / Banner
<div align="center"> <img src="https://github.com/user-attachments/assets/cb495b25-5c71-4d99-b199-363df69be11c" alt="Image Moderation API Banner" width="50%" /> </div> 

