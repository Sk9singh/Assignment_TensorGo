import express from 'express';
import passport from 'passport';

const router = express.Router();

router.get('/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);

router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    res.send('Logged in successfully!');
  }
);

router.get('/logout', (req, res) => {
  req.logout(err => {
    if (err) return res.status(500).send("Logout error");
    res.send('Logged out');
  });
});

router.get('/current_user', (req, res) => {
  res.send(req.user);
});

export default router;
