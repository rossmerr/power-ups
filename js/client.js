Copy;

function showIframe(t) {
  return t.popup({
    title: "Authorize to continue",
    url: "authorize.html",
  });
}

function showMenu(t) {
  return t.popup({
    title: "Copy",
    url: "copy.html",
  });
}

TrelloPowerUp.initialize(
  {
    "card-buttons": function (t) {
      return t
        .getRestApi()
        .isAuthorized()
        .then(function (isAuthorized) {
          if (isAuthorized) {
            return [
              {
                icon: "https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png?1494946700421",
                text: "Copy to Shopping",
                callback: showMenu,
              },
            ];
          } else {
            return [
              {
                icon: "https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png?1494946700421",
                text: "Copy to Shopping",
                callback: showIframe,
              },
            ];
          }
        });
    },
  },
  {
    appKey: "af49ac90e03fe140ef7903e8a1f70b1b",
    appName: "Sync To Keep",
  }
);
