import { admin } from '../fcmConfig'

  // This registration token comes from the client FCM SDKs.
  var registrationToken1 = 'eFk1wSshQE6fzAujEfPwbo:APA91bF7YQ3NuhTmtKO5S4G6TzGqRQ9GvhWK2nHxhIl2MFajSmWaRG3a41gwHje_sAG-oPTlQg-OnG3nlEdkqPcS1P91X04B8YFbVHH6hepYpeLuUEW3Leo5hTRxk0bpOUBUgyyeOY8T'
  var registrationToken2 = 'fQda8H8XRgaUDsWnvSoNl6:APA91bEUZkyx4WlNMRpJZ-DbZLN4_kCV4WB9mDH2k3KZeNj_uqkHrot1aBHRT6PIsKPdP3LLmN8sksepD3bwTihMyrQKJ9Qx6lcOHQ_bFVAxbM32B2r4MEClo4xP8djEV5k4wEiZyEFb'
  var message = {
    data: {
      score: '850',
      time: '2:45'
    },
    token: registrationToken1
  };

  // console.log('Sending Notification')
  // Send a message to the device corresponding to the provided
  // registration token.
  admin.messaging().send(message)
    .then((response: any) => {
      // Response is a message ID string.
      console.log('Successfully sent message:', response);
    })
    .catch((error: any) => {
      console.log('Error sending message:', error);
    });
