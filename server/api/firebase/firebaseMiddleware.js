const admin = require('./firebaseAdmin');

const verifyAdmin = async (req, res, next) => {
  try {
    const idToken = req.headers.authorization.split(' ')[1];
    const decodedToken = await admin.auth().verifyIdToken(idToken);

    if (decodedToken.admin) {
      req.user = decodedToken;
      next();
    } else {
      res.status(403).send('Forbidden: Only admins can access this route');
    }
  } catch (err) {
    console.error(err);
    res.sendStatus(403);
  }
};

const verifyToken = async (req, res, next) => {
  try {
    const idToken = req.headers.authorization.split(' ')[1];
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    req.user = decodedToken;
    next();
  } catch (err) {
    console.error(err);
    res.sendStatus(403);
  }
};

module.exports = { verifyAdmin, verifyToken };
