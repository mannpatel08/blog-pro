require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const flash = require('connect-flash');

const connectDB = require('./config/db');
const initPassport = require('./config/passportLocal');
const adminRoutes = require('./routes/adminRoutes');

// ─── Connect to MongoDB ───────────────────────────────────────────────────────
connectDB();

// ─── Init App ─────────────────────────────────────────────────────────────────
const app = express();

// ─── View Engine ──────────────────────────────────────────────────────────────
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// ─── Static Files ─────────────────────────────────────────────────────────────
app.use(express.static(path.join(__dirname, 'public')));

// ─── Body Parser ─────────────────────────────────────────────────────────────
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// ─── Cookie Parser ───────────────────────────────────────────────────────────
app.use(cookieParser());

// ─── Session ─────────────────────────────────────────────────────────────────
app.use(
  session({
    secret: process.env.SESSION_SECRET || 'staradmin_secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,         // Set true if using HTTPS
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    },
  })
);

// ─── Passport ─────────────────────────────────────────────────────────────────
initPassport(passport);
app.use(passport.initialize());
app.use(passport.session());

// ─── Flash Messages ───────────────────────────────────────────────────────────
app.use(flash());

// ─── Global Template Variables ────────────────────────────────────────────────
app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.currentUser = req.user || null;
  next();
});

// ─── Routes ───────────────────────────────────────────────────────────────────
app.use('/', adminRoutes);

// ─── 404 Handler ─────────────────────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).render('404', { admin: req.user || null });
});

// ─── Error Handler ───────────────────────────────────────────────────────────
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong! Please try again.');
});

// ─── Start Server ─────────────────────────────────────────────────────────────
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});

module.exports = app;
