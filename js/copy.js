/* global TrelloPowerUp */

var t = TrelloPowerUp.iframe();

var descriptionSelector = document.getElementById("description");

document.getElementById("save").addEventListener("click", function (event) {
  console.log("click");

  t.closePopup();
  // return t.then(function () {
  //   t.alert({
  //     message: "Saved Description!",
  //     duration: 15,
  //     display: "info",
  //   });
  //   t.closePopup();
  // });
});

t.render(function () {
  console.log("render");

  return t.get("card", "shared", "description").then(function () {
    t.sizeTo("#description").done();
  });
});
