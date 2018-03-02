const sgMail = require('@sendgrid/mail');

const sendEmail = () => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: 'g.nguyen+msg@crimsoneducation.org',
    from: 'g.nguyen+from@crimsoneducation.org',
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };
  sgMail.send(msg);
};

module.exports = {
  sendEmail,
};