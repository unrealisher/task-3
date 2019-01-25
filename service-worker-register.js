if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("task-3/service-worker.js")
      .then(
        function(registration) {
          console.log(
            "ServiceWorker registration succesful with scope: ",
            registration.scope
          );
        },
        function(err) {
          console.log("ServiceWorker registration failed: ", err);
        }
      )
      .catch(function(err) {
        console.log(err);
      });
  });
} else {
  console.log("ServiceWorker is not supported");
}
