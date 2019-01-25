if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/task-3/public/service-worker.js", { scope: "/task-3/public/" })
    .then(function(reg) {
      if (reg.installing) {
        console.log("ServiceWorker installing");
      } else if (reg.waiting) {
        console.log("ServiceWorker waiting");
      } else if (reg.active) {
        console.log("ServiceWorker active");
      }
    })
    .catch(function(error) {
      console.log("Registration failed with " + error);
    });
}
