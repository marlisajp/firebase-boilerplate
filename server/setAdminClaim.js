const admin = require('firebase-admin');

const serviceAccount = require('./api/firebase/boilerplate-e0ce9-firebase-adminsdk-t04nz-ad98a6a24e.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

async function setAdminClaim(uid) {
  try {
    await admin.auth().setCustomUserClaims(uid, { admin: true });
    console.log('Custom claims set for admin user:', uid);
  } catch (error) {
    console.error('Error setting custom claims:', error);
  }
}

setAdminClaim('43JLt0oguhU2ar62lJhyHRLd7lI3');
