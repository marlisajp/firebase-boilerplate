const router = require('express').Router();
const admin = require('./firebase/firebaseAdmin');
const User = require('../db/models/User');
const { verifyToken, verifyAdmin } = require('./firebase/firebaseMiddleware');

router.get('/firebase-users', verifyAdmin, async (req, res, next) => {
  try {
    let users = [];
    let listUsersResult = await admin.auth().listUsers();

    listUsersResult.users.forEach((userRecord) => {
      users.push(userRecord.toJSON());
    });

    res.json(users);
  } catch (err) {
    next(err);
  }
});

router.get('/firebase-users/:uid', verifyToken, async (req, res, next) => {
  try {
    const userRecord = await admin.auth().getUser(req.params.uid);
    res.json(userRecord.toJSON());
  } catch (err) {
    next(err);
  }
});

router.put('/firebase-users/:uid', verifyToken, async (req, res, next) => {
  try {
    const updatedUser = await admin.auth().updateUser(req.params.uid, req.body);
    res.json(updatedUser.toJSON());
  } catch (err) {
    next(err);
  }
});

router.delete('/firebase-users/:uid', verifyToken, async (req, res, next) => {
  try {
    await admin.auth().deleteUser(req.params.uid);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
