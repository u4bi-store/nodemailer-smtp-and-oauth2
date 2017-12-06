require('dotenv').config();
const nodemailer = require('nodemailer');

const porter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type : 'OAuth2',
        user: process.env.MAIL_USER,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.SECRET_KEY,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken: process.env.ACCESS_TOKEN
    }
});

const mail = {
    from    : `Handsome User <${ process.env.MAIL_USER }>`,
    to      : 'rootcode10@gmail.com',
    subject : 'subject test',
    // text    : 'text test',
    html    : `
    <h1 style="color:#ff00ff;">hi u4bi</h1>
    <img src="https://avatars0.githubusercontent.com/u/21367010?s=460&v=4">
    `
};

porter.sendMail(mail, (error, info) => {
    if(error)return console.log('error', error);

    console.log('sent', info);
});