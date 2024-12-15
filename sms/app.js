import config from "config";
import twilio from "twilio";

let sid = config.get("SID");
let token = config ("TOKEN");
let phone = config.get("PHONE")
let client = new twilio(sid,token)

async function sendSMS(){
    try {
        await client.messages.create({
            Body:"HELLO suhail",
            to:"+8885909291",
            from:phone,
        });
        console.log("SENDEND SMS");
    } catch (error) {
        console.log(error);
    }
}

sendSMS();