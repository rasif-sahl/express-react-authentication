const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const passportJWT = require('passport-jwt');
const ExtractJwt = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;
const bcrypt = require('bcrypt');
const cors = require('cors');

const app = express();
const port = 4000;

// Replace this with your actual secret key
const JWT_SECRET_KEY = 'your-secret-key';

// Mock user database
const users = [
  { id: 1, email: 'hello@hello.com', password: '$2b$10$/qyCbk4xtySo4CZQIfwpbunxo1oNQ3.SBdd5uU1YgfhRoIVnDagcm' },
];

// Configure Passport to use JWT Strategy
passport.use(new JwtStrategy({
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: JWT_SECRET_KEY,
}, (jwtPayload, done) => {
  const user = users.find((u) => u.id === jwtPayload.userId);

  if (!user) {
    return done(null, false, { message: 'User not found' });
  }

  return done(null, user);
}));

// Middleware for parsing JSON request bodies
app.use(express.json());

// CORS configuration
const corsOptions = {
  origin: 'http://localhost:3000', // Replace with your frontend domain
  credentials: true, // Enable credentials (e.g., cookies, authorization headers)
};

app.use(cors(corsOptions));

// Login route for user authentication and token generation
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  // Find the user in the mock database
  const user = users.find((u) => u.email === email);

  if (!user) {
    return res.status(401).json({ message: 'User not found' });
  }

  // Check if the provided password matches the stored hashed password
  if (!bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ message: 'Incorrect password' });
  }

  // Generate a JWT token and send it as a response
  const token = jwt.sign({ userId: user.id }, JWT_SECRET_KEY, { expiresIn: '1h' });
  res.json({ message: 'Login successful', token });
});

// Logout route to clear the user's session and JWT token
app.get('/api/logout', (req, res) => {
  // You can choose to invalidate the token by implementing a token blacklist,
  // but for simplicity, we'll just respond with a message indicating successful logout.
  res.json({ message: 'Logout successful' });
});

// Protected route with JWT authentication
app.get('/api/test', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.json({ message: 'This is a test endpoint' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
