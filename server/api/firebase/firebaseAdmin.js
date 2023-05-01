// firebaseAdmin.js
const admin = require('firebase-admin');
const serviceAccount = require('./boilerplate-e0ce9-firebase-adminsdk-t04nz-ad98a6a24e.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;
