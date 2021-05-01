export var admin = require('firebase-admin');
var serviceAccount = require('../node_modules/letterbox-860b7-firebase-adminsdk-alz83-a137ca00b3.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://letterbox-860b7-default-rtdb.firebaseio.com"
  });