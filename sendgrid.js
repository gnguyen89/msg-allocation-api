const sgMail = require('@sendgrid/mail');

const TEMPLATE_ID = '15240169-74cf-4c8a-8f12-42014105341a';

const sendEmail = () => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  sgMail.setSubstitutionWrappers('{{', '}}');

  const msg = {
    to: 'g.nguyen+msg@crimsoneducation.org',
    from: 'g.nguyen+from@crimsoneducation.org',
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>Hello World</strong>',
    templateId: TEMPLATE_ID,
    substitutions: {
      heading0: 'John Smith',
      paragraph0: 'Say hello to him.',
    },
  };
  sgMail.send(msg);
};

module.exports = {
  sendEmail,
};