FROM node:20-bullseye

WORKDIR /usr/src/app

# Install system dependencies needed for TensorFlow native bindings
RUN apt-get update && apt-get install -y \
    libc6 \
    libgcc1 \
    libgomp1 \
    libstdc++6 \
    libglib2.0-0 \
    libsm6 \
    libxext6 \
    libxrender-dev \
    && rm -rf /var/lib/apt/lists/*

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "start"]
