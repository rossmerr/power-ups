/* global TrelloPowerUp */

var t = TrelloPowerUp.iframe();

var descriptionSelector = document.getElementById("description");

// "description-content";
document.getElementById("save").addEventListener("click", function () {
  t.get("board", "shared", "description").then(function (desc) {
    console.log(desc);
  });
  t.alert({
    message: "Saved Description!",
    duration: 15,
    display: "info",
  });
  t.closePopup();
});

t.render(function () {
  t.card("desc")
    .get("desc")
    .then(function (desc) {
      t.set("board", "shared", "description", desc);
      console.log(desc);
      t.get("board", "shared", "description").then(function (desc) {
        console.log(desc);
      });
    })
    .then(function () {
      return t.sizeTo("#description");
    })
    .done();

  // return t.get("card", "shared", "description").then(function () {
  //   t.sizeTo("#description").done();
  // });
});
