/* global TrelloPowerUp */

var t = TrelloPowerUp.iframe();

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
      fetch("https://keep.googleapis.com/v1/notes", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: "test-trello",
          body: {
            list: {
              listItems: [
                {
                  text: {
                    text: "test",
                  },
                  checked: false,
                },
              ],
            },
          },
        }),
      })
        .then((response) => {
          console.log(response.json());
        })
        .then(() => {
          t.alert({
            message: "Saved Description!",
            duration: 15,
            display: "info",
          });
          t.closePopup();
        });
    });
});

t.render(() => {
  t.sizeTo("#description");
});
