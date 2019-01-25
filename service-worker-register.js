if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./public/service-worker.js")
      .then(reg => console.log("Sw registered"))
      .catch(err => console.log(`Sw error: ${err}`));
  });
}
