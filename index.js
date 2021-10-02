var nodemailer=require("nodemailer");
exports.mail=function(tos,subjects,texts){
  var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "your gmail@gmail.com",
    pass: "your password"
  }
});

var mailOptions = {
  from: "your gmail@gmail.com",
  to: tos,
  subject: subjects,
  text: texts
};


transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log(`new email sent to ${tos}`);
  }
});
}
