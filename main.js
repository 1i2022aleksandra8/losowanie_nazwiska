let listaNazwisk = [];
let listaWylosowanych = [];


document.getElementById("addBtn").onclick = function () {
  const poleTekstowe = document.getElementById("nameInput");
  const nazwisko = poleTekstowe.value.trim();

  if (nazwisko !== "") {
    listaNazwisk.push(nazwisko);
    poleTekstowe.value = "";
    pokazListeNazwisk();
  }
};


document.getElementById("drawBtn").onclick = function () {
  if (listaNazwisk.length === 0) {
    alert("Brak nazwisk do losowania");
    return;
  }


  const indeks = Math.floor(Math.random() * listaNazwisk.length);
  const wylosowaneNazwisko = listaNazwisk[indeks];


  listaWylosowanych.push(wylosowaneNazwisko);

 
  listaNazwisk = listaNazwisk.filter(function(n) {
    return n !== wylosowaneNazwisko;
  });

  pokazListeNazwisk();
  pokazListeWylosowanych();
};

function pokazListeNazwisk() {
  const ul = document.getElementById("nameList");
  ul.innerHTML = "";

  for (let i = 0; i < listaNazwisk.length; i++) {
    const li = document.createElement("li");
    li.textContent = listaNazwisk[i];
    ul.appendChild(li);
  }
}


function pokazListeWylosowanych() {
  const ul = document.getElementById("drawnList");
  ul.innerHTML = "";

  for (let i = 0; i < listaWylosowanych.length; i++) {
    const li = document.createElement("li");
    li.textContent = listaWylosowanych[i];
    ul.appendChild(li);
  }
}
