# Firebase Boilerplate

This boilerplate provides a starting point for integrating Firebase Authentication into your web applications. It comes with a basic setup for user authentication, as well as examples on how to manage users and grant admin privileges. Follow the instructions below to set up and configure the boilerplate for your project.

## Prerequisites

Before you get started, make sure you have the following software installed:

Node.js (v14.x.x or later)
npm (v6.x.x or later)

## Getting Started

1. Fork & clone the repository:
   `git clone https://github.com/your-user-name/firebase-boilerplate.git`

- Navigate to the project directory:
  `cd firebase-boilerplate`

- Install the dependencies:
  npm install

2. Create a Firebase project in the Firebase Console.

- Set up a web app in the Firebase project and enable the desired authentication providers (e.g., email/password, Google, Facebook, etc.).

- Download the Firebase configuration JSON file from the Firebase Console by navigating to Project settings > Service accounts > Generate new private key. Save this JSON file in the /server/api/firebase/ directory.

- Create a .env file in the project root directory and fill in the required environment variables:
```
FIREBASE_API_KEY=your_firebase_api_key
FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
FIREBASE_DATABASE_URL=your_firebase_database_url
FIREBASE_PROJECT_ID=your_firebase_project_id
FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
FIREBASE_APP_ID=your_firebase_app_id
FIREBASE_MEASUREMENT_ID=your_firebase_measurement_id
```
Replace the placeholder values with your Firebase project's actual configuration details.

## Make Yourself an Admin

1. Sign up for an account in your application using the implemented authentication method.

2. Find your user ID (UID) in the Firebase Console by navigating to Authentication > Users.

3. In the /server/api/firebase/ directory, create a new file called setAdminClaim.js with the following content:

```
const admin = require('./firebaseAdmin');

async function setAdminClaim(uid) {
   try {
      await admin.auth().setCustomUserClaims(uid, { admin: true });
      console.log('Custom claims set for admin user:', uid);
   } catch (error) {
      console.error('Error setting custom claims:', error);
   }
}

setAdminClaim('your_uid_here');
``` 

Replace 'your_uid_here' with your actual UID from step 2.

4. Run the script:
   `node server/api/firebase/setAdminClaim.js`
   This will grant admin privileges to the user associated with the specified UID.

## Running the Application

Start the development server:
`npm run start-dev`
Open your browser and navigate to http://localhost:3000/.
Test the authentication functionality and the admin-protected routes using your admin account.


I hope this README provides clear instructions on how to set up and use your Firebase boilerplate. If you need further assistance or have any questions, please let me know.
