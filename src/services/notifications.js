const showNotification = (title, text) => {
  if (!("Notification" in window)) {
    alert("This browser does not support system notifications");
  } else if (Notification.permission === "granted") {
    const notification = new Notification(title, {
      body: text,
      icon: "./images/icon.png"
    });
    setTimeout(notification.close.bind(notification), 5000);
  } else if (Notification.permission !== "denied") {
    Notification.requestPermission(permission => {
      if (permission === "granted") {
        const notification = new Notification(title, {
          body: text,
          icon: "./images/icon.png"
        });
      }
    });
  }
  Notification.requestPermission().then(result => {
    console.log(result);
  });
};

export default showNotification;
