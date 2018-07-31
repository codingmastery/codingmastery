// const transporter = nodemailer.createTransport({
//   host: 'smtp.ethereal.email',
//   port: 587,
//   auth: {
//     user: 'mqrbbn5ab3jt3ebd@ethereal.email',
//     pass: 'WVGfjUhmQt5dYtxAXM'
//   }
// });

const nodeMailerUser = "mqrbbn5ab3jt3ebd@ethereal.email";
const nodeMailerPass = "WVGfjUhmQt5dYtxAXM";

const nodeMailerSMTPConfig = {
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: nodeMailerUser,
    pass: nodeMailerPass
  }
};
const nodeMailerImapConfig = {
  host: "imap.ethereal.email",
  port: 993,
  //security: 'tls',
  auth: {
    user: nodeMailerUser,
    pass: nodeMailerPass
  }
};

const nodeMailerPOP3Config = {
  host: "pop3.ethereal.email",
  port: 995,
  //security: 'tls',
  auth: {
    user: nodeMailerUser,
    pass: nodeMailerPass
  }
};

export { nodeMailerSMTPConfig, nodeMailerImapConfig, nodeMailerPOP3Config };
