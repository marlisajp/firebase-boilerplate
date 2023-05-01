const router = require('express').Router();
const User = require('../db/models/User');

router.get('/all', async (req, res, next) => {
  try {
    const allUsers = await User.findAll();
    res.send(allUsers);
  } catch (error) {
    console.error('error getting users');
    next(error);
  }
});

module.exports = router;
