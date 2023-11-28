const router = require('express').Router();
const thoughtRoutes = require('./thoughtRoutes');
const userRoutes = require('./userRoutes');
// http://localhost:3001/api/thoughts
router.use('/thoughts', thoughtRoutes);
router.use('/users', userRoutes);
// http://localhost:3001/api/users
module.exports = router;
