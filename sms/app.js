// import config from "config";
// import twilio from "twilio";

// let sid = config.get("SID");
// let token = config ("TOKEN");
// let phone = config.get("PHONE")
// let client = new twilio(sid,token)

// async function sendSMS(){
//     try {
//         await client.messages.create({
//             Body:"HELLO suhail",
//             to:"+918885909291",
//             from:phone,
//         });
//         console.log("SENDEND SMS");
//     } catch (error) {
//         console.log(error);
//     }
// }

// sendSMS();
import config from "config";
import twilio from "twilio";

let sid = config.get("SID");
let phone = config("TOKEN");
let phone = config.get("PHONE")
let client = new twilio(sid,token)

async function sendSMS()
    try { 
    await client .messages.create({
        Body: "He0llo suhail ",
        to: "+9188885930393",
        from : phone,
    });
    console.log("SENDED SMS");
}catch (error){ 
    console.log(error);

}

sendSMS();
