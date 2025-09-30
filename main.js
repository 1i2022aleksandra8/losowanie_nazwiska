(function () {
    const nameInput = document.querySelector("#nameInput");
    const addBtn = document.querySelector("#addName");
    const drawBtn = document.querySelector("#drawName");
    const nameList = document.querySelector("#nameList");
    const drawnList = document.querySelector("#drawnList");
  
    let names = [];
    let drawnNames = [];
  
    function updateNameList() {
      nameList.innerHTML = "";
      names.forEach(name => {
        const li = document.createElement("li");
        li.textContent = name;
        nameList.appendChild(li);
      });
    }
  
    function updateDrawnList() {
      drawnList.innerHTML = "";
      drawnNames.forEach(name => {
        const li = document.createElement("li");
        li.textContent = name;
        drawnList.appendChild(li);
      });
    }
  
    addBtn.onclick = function () {
      const newName = nameInput.value.trim();
      if (newName && !names.includes(newName)) {
        names.push(newName);
        updateNameList();
        nameInput.value = "";
      }
    };
  
    drawBtn.onclick = function () {
      if (names.length === 0) {
        alert("Brak nazwisk do losowania!");
        return;
      }
  
      const randomIndex = Math.floor(Math.random() * names.length);
      const selectedName = names[randomIndex];
  
      drawnNames.push(selectedName);
      names = names.filter(name => name !== selectedName);
  
      updateNameList();
      updateDrawnList();
    };
  })();
  