// firebaseAdmin.js
const admin = require('firebase-admin');
const serviceAccount = require('./your-firebase-service-account.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;
