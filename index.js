var nodemailer=require("nodemailer");
exports.mail=function(tos,subjects,texts){
  var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "rijum8906@gmail.com",
    pass: "7407780693@riju"
  }
});

var mailOptions = {
  from: "rijum8906@gmail.com",
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