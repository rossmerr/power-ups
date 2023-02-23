/* global TrelloPowerUp */

var t = TrelloPowerUp.iframe();

var descriptionSelector = document.getElementById("description");

document.getElementById("save").addEventListener("click", function () {
  return t.then(function () {
    t.alert({
      message: "Saved Description!",
      duration: 15,
      display: "info",
    });
    t.closePopup();
  });
});

t.render(function () {
  return t
    .get("card", "shared", "description")
    .then(function (saveDescription) {
      descriptionSelector.value = saveDescription;
    })
    .then(function () {
      t.sizeTo("#description").done();
    });
});
