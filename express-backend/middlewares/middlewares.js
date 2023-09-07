import passport from 'passport';
import jwt from 'jsonwebtoken';
import { ExtractJwt, Strategy as JwtStrategy } from 'passport-jwt';
import bcrypt from 'bcrypt';

// Replace this with your actual secret key
export const JWT_SECRET_KEY = 'your-secret-key';

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

export { passport, jwt, bcrypt }; // Export passport, jwt, and bcrypt
