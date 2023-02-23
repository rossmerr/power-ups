/* global TrelloPowerUp */

var t = TrelloPowerUp.iframe();

var descriptionSelector = document.getElementById("description");

// "description-content";
document.getElementById("save").addEventListener("click", function () {
  t.card("desc")
    .get("desc")
    .then(function (desc) {
      console.log(desc);
      let lines = desc.split("\n");
      console.log(lines);
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

t.render(function () {
  t.sizeTo("#description");
});
