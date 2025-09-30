let names = [];
let drawn = [];

document.getElementById("addBtn").onclick = function () {
  let input = document.getElementById("nameInput");
  let name = input.value;

  if (name !== "") {
    names.push(name);
    input.value = "";
    showNames();
  }
};

document.getElementById("drawBtn").onclick = function () {
  if (names.length === 0) {
    alert("Brak nazwisk");
    return;
  }

  // Losowanie bez Math: weź pierwszy element
  let selected = names[0];

  drawn.push(selected);

  // Usuń wylosowane nazwisko za pomocą filter
  names = names.filter(function(n) {
    return n !== selected;
  });

  showNames();
  showDrawn();
};

function showNames() {
  let list = document.getElementById("nameList");
  list.innerHTML = "";
  for (let i = 0; i < names.length; i++) {
    list.innerHTML += "<li>" + names[i] + "</li>";
  }
}

function showDrawn() {
  let list = document.getElementById("drawnList");
  list.innerHTML = "";
  for (let i = 0; i < drawn.length; i++) {
    list.innerHTML += "<li>" + drawn[i] + "</li>";
  }
}
