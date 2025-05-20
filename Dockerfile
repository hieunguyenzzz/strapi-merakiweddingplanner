FROM node:14-bullseye

WORKDIR /app

# Install dependencies required for Sharp and other packages
RUN apt-get update && apt-get install -y \
    libvips-dev \
    build-essential \
    libglib2.0-dev \
    libpng-dev \
    libjpeg-dev \
    libwebp-dev \
    libgif-dev \
    && rm -rf /var/lib/apt/lists/*

COPY package.json package-lock.json* ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 1337

CMD ["npm", "run", "start"] 