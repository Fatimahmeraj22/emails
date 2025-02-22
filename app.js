import nodemailer from "nodemailer";
import config from "config";
import path from "path";

let userEmail = config.get("USER");
let password = config.get("PASS");

async function sendEmail() {
  try {
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: userEmail,
        pass: password,
      },
    });
    let sender = await transporter.sendMail({
      from: `"Code For India Foundation"${userEmail} `,
      subject: "Sick Leave Request",
      to: "lesnarcena72@gmail.com",
      text:"hi rahman you are invited to join us for 20 years of celebrating bdy paarttyyyyyyyy",
      attachments: {
        filename: "testfile.txt",
        // path: path.resolve("./testfile.txt"),
      },
    });

    console.log("email has been sended");
    console.log("Message ID :", sender.messagesid);
  } catch (error) {
    console.log("Error",error);
  }
}
sendEmail();

