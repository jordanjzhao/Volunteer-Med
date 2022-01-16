/*
    Authentication Controllers, Originally written By Dhruv
*/

import Vonage from '@vonage/server-sdk';
import dotenv from 'dotenv';

dotenv.config();

const authController = {};

authController.auth = async(req, res) => {

    let otp = generateOTP();
    makeCall(otp, req.body.phone);
    res.code(200);
    res.send({msg: 'Done'});

}

const generateOTP = () => {

  return Math.ceil(Math.random() * 10000);

}

const makeCall = (otp, phone) => {

    const vonage = new Vonage({
        apiKey: process.env.VONAGE_API_KEY,
        apiSecret: process.env.VONAGE_API_SECRET,
        applicationId: process.env.VONAGE_APPLICATION_ID,
        privateKey: process.env.VONAGE_PRIVATE_KEY.replace(/\\n/g, '\n')
      })
      vonage.calls.create({
        to: [{
          type: 'phone',
          number: "17789569471"
        }],
        from: {
          type: 'phone',
          number: "15067050011"
        },
        ncco: [{
          "action": "talk",
          "text": `<speak> Hey Doc! Your Verification Code is <say-as interpret-as='digits'>${otp}</say-as> That is. <say-as interpret-as='digits'>${otp}</say-as>. Bye now! </speak>`
        }]
      }, (error, response) => {
        if (error) console.error(error)
        if (response) console.log(response)
      })
}

export default authController;