function sendEmail() {
    Email.send({
      Host: "smtp.gmail.com",
      Username: "markpustyn@gmail.com",
      Password: "MP273931$",
      To: 'markpustyn@gmail.com',
      From: "sender@email_address.com",
      Subject: "Sending Email using javascript",
      Body: "Well that was easy!!",
    })
      .then(function (message) {
        alert("mail sent successfully")
      });
  }
  