const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const Admin = require('../models/Admin');

module.exports = function (passport) {
  // Use email as the username field
  passport.use(
    new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
      try {
        // Find admin by email
        const admin = await Admin.findOne({ email: email.toLowerCase() });

        if (!admin) {
          return done(null, false, { message: 'No admin found with that email.' });
        }

        // Compare password
        const isMatch = await bcrypt.compare(password, admin.password);

        if (!isMatch) {
          return done(null, false, { message: 'Incorrect password.' });
        }

        return done(null, admin);
      } catch (err) {
        return done(err);
      }
    })
  );

  // Serialize admin into session
  passport.serializeUser((admin, done) => {
    done(null, admin.id);
  });

  // Deserialize admin from session
  passport.deserializeUser(async (id, done) => {
    try {
      const admin = await Admin.findById(id);
      done(null, admin);
    } catch (err) {
      done(err);
    }
  });
};
