# Image Moderation API

A secure, containerized RESTful API for image moderation built with Node.js, Express, and MongoDB.  
Includes token-based authentication with admin-managed tokens and integrates with a React frontend.

## Features

- Token-based authentication (Bearer tokens)
- Admin endpoints to create, list, and revoke tokens
- Image moderation endpoint accepting multipart/form-data uploads
- Dockerized backend, frontend, and MongoDB services
- CORS enabled for frontend-backend communication
- GitHub Actions CI workflow for linting and testing
- MongoDB persistence for tokens and moderation data

## Tech Stack

- **Backend:** Node.js, Express, MongoDB, Mongoose
- **Frontend:** React (Vite)
- **Containerization:** Docker, Docker Compose
- **CI/CD:** GitHub Actions

## Getting Started

### Prerequisites

- Docker & Docker Compose installed
- Git installed

### Setup

1. Clone the repository:

```bash
git clone https://github.com/Sajad-ahmed-soomro/image-moderation-apiii.git
cd image-moderation-api
