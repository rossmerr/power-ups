/* global TrelloPowerUp */

var Promise = window.TrelloPowerUp.Promise;

const appKey = "af49ac90e03fe140ef7903e8a1f70b1b";
var t = TrelloPowerUp.iframe({
  appKey: appKey,
  appName: "Sync To Keep",
});

// "description-content";
document.getElementById("save").addEventListener("click", function () {
  t.card("desc")
    .get("desc")
    .then((desc) => {
      let lines = desc.split("\n");
      let list = lines.filter((line) => line.startsWith("- "));
      list = list.map((line) => line.substring(2));
      t.getRestApi()
        .getToken()
        .then(function (token) {
          return Promise.all(
            list.map((line) => {
              return fetch(
                `https://api.trello.com/1/cards?idList=63f8963af0c4c0cefac67203&key=${appKey}&token=${token}&name=${line}`,
                {
                  method: "POST",
                  headers: {
                    Accept: "application/json",
                  },
                }
              );
            })
          );
        })
        .then(() => {
          console.log("tset", t);
          t.alert({
            message: "Saved Description!",
            duration: 15,
            display: "info",
          });
          t.closePopup();
        });
    });
});

t.render(() => {
  t.sizeTo("#description");
});
