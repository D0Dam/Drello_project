document.querySelector(".inputListName").addEventListener("keypress", addAnotherList);
function deleteList(tt) {
  tt.parentNode.parentNode.parentNode.removeChild(tt.parentNode.parentNode);
}
function deleteCard(t) {
  t.parentNode.parentNode.removeChild(t.parentNode);
}
function enterCard(num) {
  document.querySelector(".list" + num + " .enterCard").style.display = 'none';
  document.querySelector(".list" + num + " .enters").style.display = 'flex';
}
function exitBtn(num) {
  document.querySelector(".list" + num + " .enterCard").style.display = 'block';
  document.querySelector(".list" + num + " .enters").style.display = 'none';
}
function addCard(num, e) {
  console.log(e);
  if (e) {
    if(e.key != "Enter") {
      return false;
    }
    event.preventDefault();
  }
  if(document.querySelector(".t" + num).value == '') {
    alert('Enter your texts.');
    return false;
  }
  let text = document.querySelector(".t" + num).value;
document.querySelector(".list" + num + " .cards").innerHTML += `<li class="card">${text}<button class="cardBtn" onclick="deleteCard(this)">X</button></li>`;
  document.querySelector(".t" + num).value = '';
}

function showEnters() {
  document.querySelector(".addList").style.display = 'none';
  document.querySelector(".addAnotherList").style.display = 'flex';
}

let i = 3;
function addAnotherList(e) {
  if (e) {
    if(e.code != "Enter") {
      return false;
    }
  }
  let inputValue = document.querySelector(".inputListName").value;
  htmlStorage = '';
  htmlStorage = `
  <div class="list list${i}">
    <div class="top">
      <div class="listTitle">${inputValue}</div>
      <button class="listBtn" onclick="deleteList(this)">X</button>
    </div>
    <ul class="cards">
    </ul>
    <button class="enterCard" onclick="enterCard(${i})">+ Add another card</button>
    <div class="enters">
      <textarea class="textCard t${i}" placeholder="Enter your card." onkeypress="addCard(${i}, event)"></textarea>
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