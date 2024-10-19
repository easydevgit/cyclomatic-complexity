interface CustomNotification {
  type: string;
  message: string;
}

function sendNotification(notification: CustomNotification): void {
  if (notification.type === "email") {
    // Logic to send email
    console.log(`Sending email: ${notification.message}`);
  } else if (notification.type === "sms") {
    // Logic to send SMS
    console.log(`Sending SMS: ${notification.message}`);
  } else if (notification.type === "push") {
    // Logic to send push notification
    console.log(`Sending push notification: ${notification.message}`);
  } else {
    console.log("Unknown notification type");
  }
}

const emailNotification: CustomNotification = {
  type: "email",
  message: "Hello via email!",
};

sendNotification(emailNotification);
