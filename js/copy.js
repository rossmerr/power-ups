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
      let list = lines.filter((line) => line.startsWith("- "));
      return list.map((line) => line.substring(2));
    });

  let token = await t
    .getRestApi()
    .getToken()
    .then(async (t) => {
      return t;
    });

  // let promises =
  // list.map((line) => {
  //   return fetch(
  //     `https://api.trello.com/1/cards?idList=63f8963af0c4c0cefac67203&key=${appKey}&token=${token}&name=${line}`,
  //     {
  //       method: "POST",
  //       keepalive: true,
  //       headers: {
  //         Accept: "application/json",
  //       },
  //     }
  //   );
  // });

  // const promise1 = new Promise((resolve, reject) => {
  //   setTimeout(resolve, 500, "one");
  // });

  // promises.push(promise1);

  // console.log(promises);

  console.log("await");

  await Promise.race([
    new Promise((resolve, reject) => {
      console.log("timeout");
      setTimeout(resolve, 500);
    }),
  ]).then(() => {
    console.log("race");
  });
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
