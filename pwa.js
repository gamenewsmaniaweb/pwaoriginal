if('serviceWorker' in navigator) {
  let registration;
  const registerServiceWorker = async () => {
      registration = await          navigator.serviceWorker.register('combinatronics.io/gamenewsmaniaweb/original/main/sw.js');
        };
  registerServiceWorker();
  }
