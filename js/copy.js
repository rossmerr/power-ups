/* global TrelloPowerUp */

var Promise = window.TrelloPowerUp.Promise;

const appKey = "af49ac90e03fe140ef7903e8a1f70b1b";
var t = TrelloPowerUp.iframe({
  appKey: appKey,
  appName: "Sync To Keep",
});

// "description-content";
document.getElementById("save").addEventListener("click", async () => {
  let list = await t
    .card("desc")
    .get("desc")
    .then((desc) => {
      let lines = desc.split("\n");
      list = lines.filter((line) => line.startsWith("- "));
      return list.map((line) => line.substring(2));
    });

  console.log(list);

  let token = await t
    .getRestApi()
    .getToken()
    .then(async (t) => {
      return t;
    });

  console.log(token);

  await Promise.any(
    list.map((line) =>
      fetch(
        `https://api.trello.com/1/cards?idList=63f8963af0c4c0cefac67203&key=${appKey}&token=${token}&name=${line}`,
        {
          method: "POST",
          keepalive: true,
          headers: {
            Accept: "application/json",
          },
        }
      )
    )
  );

  console.log("alert");

  t.alert({
    message: "Saved Bullet List!",
    duration: 5,
    display: "info",
  });
  t.closePopup();
});

t.render(() => {
  t.sizeTo("#description");
});
