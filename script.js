function enterCard(num) {
  document.querySelector(".list" + num + " .enterCard").style.display = 'none';
  document.querySelector(".list" + num + " .enters").style.display = 'flex';
}
function exitBtn(num) {
  document.querySelector(".list" + num + " .enterCard").style.display = 'block';
  document.querySelector(".list" + num + " .enters").style.display = 'none';
}
function addCard(num) {
  let text = document.querySelector(".t" + num).value;
  document.querySelector(".list" + num + " .cards").innerHTML += `<li class="card">${text}</li>`;
  document.querySelector(".t" + num).value = '';
}

function showEnters() {
  document.querySelector(".addList").style.display = 'none';
  document.querySelector(".addAnotherList").style.display = 'flex';
}

let i = 3;
function addAnotherList() {
  let inputValue = document.querySelector(".inputListName").value;
  htmlStorage = '';
  htmlStorage = `
  <div class="list list${i}">
    <div class="listTitle">${inputValue}</div>
    <ul class="cards">
    </ul>
    <button class="enterCard" onclick="enterCard(${i})">+ Add another card</button>
    <div class="enters">
      <textarea class="textCard t${i}" placeholder="Enter your card."></textarea>
      <div class="addBtn">
        <button class="addCard" onclick="addCard(${i})">Add Card</button>
        <button class="exitCard" onclick="exitBtn(${i})">X</button>
      </div>
    </div>
  </div>
  `
  document.querySelector(".lists").innerHTML += htmlStorage;
  document.querySelector(".inputListName").value = '';
  i++;
}

function exitShowEnters() {
  document.querySelector(".inputListName").value = '';
  document.querySelector(".addList").style.display = 'flex';
  document.querySelector(".addAnotherList").style.display = 'none';
}