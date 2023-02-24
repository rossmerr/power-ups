/* global TrelloPowerUp */

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
      console.log(list);

      t.getRestApi()
        .getToken()
        .then(function (token) {
          list.array.forEach((element) => {
            fetch(
              `https://api.trello.com/1/cards?idList=63f8963af0c4c0cefac67203&key=${appKey}&token=${token}&name=${element}`,
              {
                method: "POST",
                headers: {
                  Accept: "application/json",
                },
              }
            ).catch((err) => console.error(err));

            t.alert({
              message: "Saved Description!",
              duration: 15,
              display: "info",
            });
            t.closePopup();
          });
          // fetch(
          //   `https://api.trello.com/1/cards?idList=63f8963af0c4c0cefac67203&key=${appKey}&token=${token}?=name=${}`,
          //   {
          //     method: "POST",
          //     headers: {
          //       Accept: "application/json",
          //     },
          //   }
          // )
          // .then((response) => {
          //   if (response.status === 200) {
          //     t.alert({
          //       message: "Saved Description!",
          //       duration: 15,
          //       display: "info",
          //     });
          //   }
          // })
          // .then((text) => t.closePopup())
          // .catch((err) => console.error(err));
        });
    });
});

t.render(() => {
  t.sizeTo("#description");
});
