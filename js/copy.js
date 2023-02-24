/* global TrelloPowerUp */

var t = TrelloPowerUp.iframe({
  appKey: "af49ac90e03fe140ef7903e8a1f70b1b",
  appName: "Sync To Keep",
});

var descriptionSelector = document.getElementById("description");

// "description-content";
document.getElementById("save").addEventListener("click", function () {
  t.card("desc")
    .get("desc")
    .then((desc) => {
      let lines = desc.split("\n");
      let list = lines.filter((line) => line.startsWith("- "));
      list = list.map((line) => line.substring(2));
      console.log(list);
      t.alert({
        message: "Saved Description!",
        duration: 15,
        display: "info",
      });
      t.closePopup();
    });
});

t.render(() => {
  t.sizeTo("#description");
});
