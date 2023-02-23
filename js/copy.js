/* global TrelloPowerUp */

var t = TrelloPowerUp.iframe();

var descriptionSelector = document.getElementById("description");

window.description.addEventListener("submit", function (event) {
  event.preventDefault();
  return t
    .set("card", "shared", "description", window.estimateSize.value)
    .then(function () {
      t.closePopup();
    });
});

document.getElementById("save").addEventListener("click", function () {
  return t
    .set("board", "shared", "description", descriptionSelector.value)
    .then(function () {
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
