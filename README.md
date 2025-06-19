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

## 🕸️ Demo

<img width="1512" alt="Screenshot 2025-06-19 at 12 15 08 AM" src="https://github.com/user-attachments/assets/6aecadc4-6ea5-4f5d-8bc9-c487b1ab8457" />
<img width="1512" alt="Screenshot 2025-06-19 at 12 15 15 AM" src="https://github.com/user-attachments/assets/b01017f4-f8e6-4098-aa2d-8fd8ee4f4614" />
<img width="1512" alt="Screenshot 2025-06-19 at 12 15 36 AM" src="https://github.com/user-attachments/assets/8088f269-cebc-47f4-87be-aad57c4afd73" />
<img width="1512" alt="Screenshot 2025-06-19 at 12 15 44 AM" src="https://github.com/user-attachments/assets/d8d72a82-8632-4745-8c79-0fb090a27e02" />
<img width="1512" alt="Screenshot 2025-06-19 at 12 15 53 AM" src="https://github.com/user-attachments/assets/5597cc27-1a23-4711-b718-e31789c4a934" />


---

## 📱 Demo

![IMG_9527](https://github.com/user-attachments/assets/2e4558eb-4342-43e1-b76e-11b69b29c578)
![IMG_9526](https://github.com/user-attachments/assets/a3ab355a-1908-404c-82a4-6fce07d98abc)
![IMG_9525](https://github.com/user-attachments/assets/b259649b-63a9-454a-821b-efbd6cb3cef5)
![IMG_9524](https://github.com/user-attachments/assets/adb05cb0-5e9e-4b2b-b656-34bb5ca9d34d)
![IMG_9523](https://github.com/user-attachments/assets/bc395874-1416-497f-817d-088f9c25e103)


---

