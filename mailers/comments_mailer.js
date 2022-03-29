const nodeMailer = require("../config/nodemailer");
const env = require('../config/environment')
// this is another way of exporting a method
exports.newComment = (comment) => {
  // console.log(comment.userDet);
  // same newCommNadUserDetails
 let htmlString =nodeMailer.renderTemplate({comment: comment},'/comments/new_comment.ejs');

  nodeMailer.transporter.sendMail(
    {
      from: "ashwingupta7171@gmail.com",
      to: comment.userDet.user.email,
      subject: "New Comment Published!",
      html: htmlString
    },
    (err, info) => {
      if (err) {
        console.log("Error in sending mail", err);
        return;
      }

      console.log("Message sent", info);
      return;
    }
  );
};
