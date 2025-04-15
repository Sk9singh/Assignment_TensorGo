import express from 'express';
import passport from 'passport';

const router = express.Router();

router.get('/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get('/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/',
    successRedirect: process.env.FRONTEND_URL
  })
);

router.get('/logout', (req, res) => {
  req.logout(() => {
    res.redirect(process.env.FRONTEND_URL);
  });
});

router.get('/user', (req, res) => {
  res.send(req.user);
});

export default router;
