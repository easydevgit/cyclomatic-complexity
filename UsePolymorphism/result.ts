interface CustomNotification {
  send(): void;
}

class EmailNotification implements CustomNotification {
  constructor(private message: string) {}

  send(): void {
    console.log(`Sending email: ${this.message}`);
  }
}

class SMSNotification implements CustomNotification {
  constructor(private message: string) {}

  send(): void {
    console.log(`Sending SMS: ${this.message}`);
  }
}

class PushNotification implements CustomNotification {
  constructor(private message: string) {}

  send(): void {
    console.log(`Sending push CustomNotification : ${this.message}`);
  }
}

function sendNotification(customNotification: CustomNotification): void {
  customNotification.send();
}

const emailNotification = new EmailNotification("Hello via email!");
const smsNotification = new SMSNotification("Hello via SMS!");
const pushNotification = new PushNotification(
  "Hello via push CustomNotification !"
);

sendNotification(emailNotification);
sendNotification(smsNotification);
sendNotification(pushNotification);
