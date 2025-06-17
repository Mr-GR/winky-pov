# 🍪 Cookies POV – A Nice way to keep memories

Cookies POV is a React-based timeline app that shares the story of Winky, a charming Shih Tzu, through memories and moods. This project uses Appwrite as its backend for file storage and database, and supports uploading images with a password-gated feature for privacy.

---

## 🚀 Getting Started

### 1. **Clone the Repository**

```bash
git clone https://github.com/your-username/cookies-pov.git
cd cookies-pov
```

### 2. **Install Dependencies**

```bash
npm install
```

### 3. **Environment Variables**

Create a `.env` file in the root directory:

```env
REACT_APP_APPWRITE_PROJECT_ID=your_project_id
REACT_APP_APPWRITE_URL=https://your-appwrite-endpoint/v1
REACT_APP_APPWRITE_DATABASE_ID=your_database_id
REACT_APP_APPWRITE_COLLECTION_ID=your_collection_id
REACT_APP_APPWRITE_STORAGE_ID=your_storage_bucket_id
REACT_APP_SECRET_PASSWORD=your_secret_upload_password
```

### 4. **Setup .gitignore**

Ensure you are not committing sensitive data:

```gitignore
.env
node_modules
/build
```

---

## 🗃️ Appwrite Configuration

Make sure you have the following set up on your [Appwrite](https://cloud.appwrite.io) console:

### Project

Create a new Appwrite project and note the project ID.

### Database

Create a new database and add a collection with attributes:

* `title` (string, required, max 50 chars)
* `description` (string, required)
* `imageUrl` (string, required)
* `paws` (integer, required)
* `date` (string, required)

### Storage Bucket

Create a bucket to store images and allow read access to `Role:any()`.

### Web Platform

Add your frontend origin (e.g., `http://localhost:3000` or `https://your-deployment-url.com`) to the project as a **Web platform** to avoid CORS issues.

---

## 🖼️ Features

* Timeline display of moments
* Upload new moments with image, caption, and mood rating
* Winky-themed envelope splash screen
* Mood tracker integration (optional)

---

## 🤖 Available Scripts

```bash
npm start       # Runs the app in development
npm run build   # Builds for production
```

---


## 💬 Feedback

This app was created with love, privacy, and personality. 

---

