const functions = require('firebase-functions')
var admin = require('firebase-admin')
var serviceAccount = require('./vue-tennis-key.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: functions.config().admin.db_url, //'https://vue-tennis-default-rtdb.firebaseio.com'
})

const db = admin.database()
const fdb = admin.firestore()

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info('Hello logs!', { structuredData: true })
  response.send('Hello from Firebase!')
})

exports.createUserTest = functions.auth.user().onCreate(async (user) => {
  console.log('createUserTest')
})
