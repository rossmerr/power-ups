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
      return t
        .getRestApi()
        .getToken()
        .then(async (token) => {
          console.log(list);
          for (let line of list) {
            console.log(line);
            // await axios.post(
            //   `https://api.trello.com/1/cards?idList=63f8963af0c4c0cefac67203&key=${appKey}&token=${token}&name=${line}`
            // );
            await fetch(
              `https://api.trello.com/1/cards?idList=63f8963af0c4c0cefac67203&key=${appKey}&token=${token}&name=${line}`,
              {
                method: "POST",
                mode: "cors",
                keepalive: true,
                headers: {
                  Accept: "application/json",
                },
              }
            ).then(() => {
              console.log("then");
            });
            console.log("done");
          }
          console.log("done all");
        })
        .then(() => {
          t.alert({
            message: "Saved Bullet List!",
            duration: 5,
            display: "info",
          });
          t.closePopup();
        });
    });
});

t.render(() => {
  t.sizeTo("#description");
});
