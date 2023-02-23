/* global TrelloPowerUp */

var t = TrelloPowerUp.iframe();

var descriptionSelector = document.getElementById("description");

// "description-content";
document.getElementById("save").addEventListener("click", function () {
  t.alert({
    message: "Saved Description!",
    duration: 15,
    display: "info",
  });
  t.closePopup();
});

t.render(function () {
  t.card("description")
    .get("description")
    .then(function (description) {
      console.log(description);
    })
    .then(function () {
      return t.sizeTo("#description");
    })
    .done();

  // return t.get("card", "shared", "description").then(function () {
  //   t.sizeTo("#description").done();
  // });
});
