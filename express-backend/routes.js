// routes.js
import express from 'express';
import passport from 'passport';
import { login, logout, getUser, protectedRoute } from './controllers/controllers.js';

const router = express.Router();

// Login route for user authentication and token generation
router.post('/login', login);

// Logout route to clear the user's session and JWT token
router.get('/logout', logout);

// Route to get user data (requires authentication)
router.get('/user', passport.authenticate('jwt', { session: false }), getUser);

// Protected route with JWT authentication
router.get('/test', passport.authenticate('jwt', { session: false }), protectedRoute);

export default router;
