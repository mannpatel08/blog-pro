// Middleware to check if admin is authenticated
const checkAuth = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  req.flash('error_msg', 'Please log in to access this page.');
  res.redirect('/login');
};

// Middleware to prevent logged-in users from accessing login/register
const checkNotAuth = (req, res, next) => {
  if (req.isAuthenticated()) {
    return res.redirect('/dashboard');
  }
  next();
};

module.exports = { checkAuth, checkNotAuth };
