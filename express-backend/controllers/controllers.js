// controllers.js
import { jwt, bcrypt, JWT_SECRET_KEY } from '../middlewares/middlewares.js';

// Mock user database
const users = [
  { id: 1, email: 'hello@hello.com', password: '$2b$10$/qyCbk4xtySo4CZQIfwpbunxo1oNQ3.SBdd5uU1YgfhRoIVnDagcm' },
];

// Login route for user authentication and token generation
export const login = (req, res) => {
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
};

// Logout route to clear the user's session and JWT token
export const logout = (req, res) => {
  // You can choose to invalidate the token by implementing a token blacklist,
  // but for simplicity, we'll just respond with a message indicating successful logout.
  res.json({ message: 'Logout successful' });
};

// Route to get user data (requires authentication)
export const getUser = (req, res) => {
  // You can access the authenticated user from req.user
  res.json(req.user);
};

// Protected route with JWT authentication
export const protectedRoute = (req, res) => {
  res.json({ message: 'This is a test endpoint' });
};
