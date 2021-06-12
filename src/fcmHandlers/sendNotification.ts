import { admin } from '../fcmConfig'

export default function testSendNotification() {
  // This registration token comes from the client FCM SDKs.
  var registrationToken1 = 'eFk1wSshQE6fzAujEfPwbo:APA91bF7YQ3NuhTmtKO5S4G6TzGqRQ9GvhWK2nHxhIl2MFajSmWaRG3a41gwHje_sAG-oPTlQg-OnG3nlEdkqPcS1P91X04B8YFbVHH6hepYpeLuUEW3Leo5hTRxk0bpOUBUgyyeOY8T'
  var registrationToken2 = 'fQda8H8XRgaUDsWnvSoNl6:APA91bEUZkyx4WlNMRpJZ-DbZLN4_kCV4WB9mDH2k3KZeNj_uqkHrot1aBHRT6PIsKPdP3LLmN8sksepD3bwTihMyrQKJ9Qx6lcOHQ_bFVAxbM32B2r4MEClo4xP8djEV5k4wEiZyEFb'
  var nokia='dlEAuv3NRCW4Z7YI_trOhp:APA91bE9y_u7C4G9NYe7PzXCTOYGUpnlmnyyCrNf2fIs4Py6ptS7RvngYOw92JZUiTAgzo9gpoPSrpGa9OvMdYVTw2LZPBPxWTvIENUPo8ih-Bn1z_6mwwGLYjI65X3FcL2B5sooMeKv' 
  var message = {
     notification: {
      title: ' up 1.43% on the day',
      body: 'gained 11.80 points to close at 835.67, up 1.43% on the day.'
    },
    token: nokia
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
}