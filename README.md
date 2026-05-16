# ⭐ Star Admin2 — Full-Stack Admin Panel

A complete Full-Stack Admin Panel built with **Node.js, Express.js, EJS, MongoDB, Passport.js, Sessions & Cookies**.

> **UI is 100% identical** to the original Star Admin2 Bootstrap template.

---

## 📸 Preview

- Login → Register → Dashboard with charts → Admin CRUD (Add, View, Edit, Delete)

---

## ✅ Prerequisites (Must be installed)

Before running this project, make sure your machine has:

| Tool | Download Link |
|------|--------------|
| **Node.js** (v18 or higher) | https://nodejs.org |
| **MongoDB** (Community Server) | https://www.mongodb.com/try/download/community |

---

# Video Explanation 

https://drive.google.com/file/d/14JEtzvRiM5poeNCGiXFZ5lfTL1WEldxx/view?usp=sharing

---

## 🚀 How to Run (Step-by-Step)

### Step 1 — Extract the ZIP
Extract the folder anywhere on your computer.

### Step 2 — Open Terminal in the project folder
Right-click the folder → **"Open in Terminal"** (or use VS Code terminal)

### Step 3 — Install all dependencies
```bash
npm install
```
> ⏳ This will install all packages. Wait for it to complete.

### Step 4 — Start MongoDB
Make sure MongoDB is running on your machine. Open a **separate terminal** and run:
```bash
mongod
```
> If MongoDB is installed as a service, it may already be running automatically.

### Step 5 — Configure Environment (Optional)
Open the `.env` file and check these values:
```
PORT=3000
MONGO_URI=mongodb://localhost:27017/staradmin
SESSION_SECRET=staradmin_super_secret_key_2024
```
> The defaults work for local MongoDB. If you use MongoDB Atlas, replace `MONGO_URI` with your Atlas connection string.

### Step 6 — Start the server
```bash
npm start
```
> You should see:
> ```
> 🚀 Server running at http://localhost:3000
> ✅ MongoDB Connected: localhost
> ```

### Step 7 — Open in Browser
Visit: **http://localhost:3000**

---

## 📋 Available Pages & Routes

| Page | URL |
|------|-----|
| Login | http://localhost:3000/login |
| Register | http://localhost:3000/register |
| Dashboard | http://localhost:3000/dashboard |
| My Profile | http://localhost:3000/profile |
| Add Admin | http://localhost:3000/add-admin |
| View Admins | http://localhost:3000/view-admin |
| Edit Admin | http://localhost:3000/edit-admin/:id |
| Logout | http://localhost:3000/logout |

---

## 🔐 First Time Setup

1. Go to **http://localhost:3000/register**
2. Create your first admin account
3. Login and start managing admins!

---

## 📁 Project Structure

```
staradmin-2-free/
├── app.js              ← Express server entry point
├── .env                ← Environment variables
├── config/
│   ├── db.js           ← MongoDB connection
│   └── passportLocal.js← Passport authentication strategy
├── controllers/
│   └── adminController.js ← All page & CRUD logic
├── middleware/
│   └── auth.js         ← Route protection middleware
├── models/
│   └── Admin.js        ← Mongoose Admin schema
├── routes/
│   └── adminRoutes.js  ← All Express routes
├── views/              ← EJS templates
│   ├── partials/       ← header, navbar, sidebar, footer
│   ├── dashboard.ejs
│   ├── login.ejs
│   ├── register.ejs
│   ├── profile.ejs
│   ├── add-admin.ejs
│   ├── view-admin.ejs
│   └── edit-admin.ejs
└── public/             ← Static assets (CSS, JS, images)
    ├── css/
    ├── js/
    ├── images/
    ├── vendors/
    └── uploads/        ← Admin profile images stored here
```

---

## ⚙️ Tech Stack

- **Backend:** Node.js, Express.js
- **Templating:** EJS
- **Database:** MongoDB + Mongoose
- **Authentication:** Passport.js (Local Strategy)
- **Sessions:** express-session + cookie-parser
- **Flash Messages:** connect-flash
- **File Upload:** Multer
- **Password Hashing:** bcryptjs
- **Dev Server:** Nodemon

---

## ❓ Troubleshooting

**`npm start` fails?**
→ Run `npm install` first

**MongoDB not connecting?**
→ Make sure `mongod` is running, or use MongoDB Atlas URI in `.env`

**Port 3000 already in use?**
→ Change `PORT=3001` in `.env`

**`node_modules` missing?**
→ Always run `npm install` after extracting the ZIP (never share `node_modules`)
