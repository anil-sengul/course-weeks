/* var number1 = undefined;
var number2 = null;
var number3 = "";
var number4 = 0;
var number5 = "author";

console.log(!number1);
console.log(!number2);
console.log(!number3);
console.log(!number4);
console.log(!number5); */

let lists = [
  {
    idList: 1,
    nameOfList: "PowerCoders",
    creationDate: "2020-10-05",
    items: [
      { idItem: 1, content: "Study git" },
      { idItem: 2, content: "Study CSS" },
      { idItem: 3, content: "Study HTML" },
      { idItem: 4, content: "Study JS" },
    ],
  },
  {
    idList: 2,
    nameOfList: "HouseWork",
    creationDate: "2020-10-06",
    items: [
      { idItem: 1, content: "Clean the room" },
      { idItem: 2, content: "Wash the dishes" },
      { idItem: 3, content: "Do the laundry" },
    ],
  },
];

let users = [
  {
    userName: "anil",
    password: "anil",
    userImage: "#",
  },
  {
    userName: "elif",
    password: "efe",
    userImage: "#",
  },
];

let counterForLists = 3;

function checkUser() {
  let usr = document.querySelector("#user-name").value;
  let filteredUser = users.filter((e) => e.userName === usr);
  if (filteredUser.length != 0) {
    checkpassowrd(filteredUser);
  } else {
    alert("Username is not exist!.");
  }
}

function checkpassowrd(filteredUser) {
  let pswd = document.querySelector("#user-password").value;
  let savedPassword = filteredUser[0].password;
  if (savedPassword === pswd) {
    displayTodoLists(filteredUser);
  } else {
    alert("Password is not correct! \nPlease try again.");
  }
}

function displayTodoLists(filteredUser) {
  document.getElementsByTagName("main")[0].innerText = "";
  let profileImage = document.createElement("img");
  profileImage.setAttribute("src", filteredUser[0].userImage);
  profileImage.setAttribute("alt", "profile image");
  profileImage.setAttribute("id", "profile-img");
  document.getElementsByTagName("header")[0].appendChild(profileImage);
  if (lists.length > 0) {
    lists.sort((a, b) => (a.nameOfList > b.nameOfList ? 1 : -1));
    lists.forEach((e) => displayAList(e));
    addTemplateList();
  } else {
    addTemplateList();
  }
}

function displayAList(listObject) {
  let ul = document.createElement("ul");
  ul.setAttribute("id", `idList${listObject.idList}`);
  let h2 = document.createElement("h2");
  h2.setAttribute("id", `idTitle${listObject.idList}`);
  h2.setAttribute("contenteditable", "true");
  h2.addEventListener("blur", list);
  h2.innerText = listObject.nameOfList;
  ul.appendChild(h2);
  if (listObject.items.length !== 0) {
    listObject.items.forEach((e) => {
      let li = document.createElement("li");
      let input = document.createElement("input");
      input.setAttribute("type", "checkbox");
      input.setAttribute("id", `${listObject.idList}idItem${e.idItem}`);
      input.setAttribute("name", `${listObject.idList}`);
      let label = document.createElement("label");
      label.setAttribute("for", `${listObject.idList}idItem${e.idItem}`);
      label.setAttribute("contenteditable", "true");
      label.innerText = e.content;
      li.appendChild(input);
      li.appendChild(label);
      ul.appendChild(li);
    });
  }
  let main = document.getElementsByTagName("main")[0];
  main.appendChild(ul);
}

function addTemplateList() {
  let ul = document.createElement("ul");
  let id = lists.length > 0 ? lists.length : 1;
  ul.setAttribute("id", `idList${id}`);

  let h2 = document.createElement("h2");
  h2.setAttribute("id", `idTitle${id}`);
  h2.setAttribute("contenteditable", "true");
  h2.innerText = "New List";
  ul.appendChild(h2);

  let li = document.createElement("li");
  let input = document.createElement("input");
  input.setAttribute("type", "checkbox");
  input.setAttribute("id", `idItem${1}`);
  input.setAttribute("name", `${id}`);

  let label = document.createElement("label");
  label.setAttribute("for", `idItem${1}`);
  label.setAttribute("contenteditable", "true");
  label.innerText = "Add an item";

  li.appendChild(input);
  li.appendChild(label);
  ul.appendChild(li);
  let main = document.getElementsByTagName("main")[0];
  main.appendChild(ul);
}

function list(nameOfList) {
  console.log("nameOfList");
  this.idList = counterForLists++;
  if (nameOfList !== undefined) {
    // if the list is created from directly html
    this.nameOfList = nameOfList;
  } else {
    // if the list is created from the js
    this.nameOfList = document.getElementById("list-name");
  }
  this.creationDate = new Date().toISOString().split("T")[0];
  this.items = [];
  this.itemCounter = 0;
  this.addItem = function (itemContent, idList) {
    this.items.push(new item(itemContent, idList));
  };
}

function item(itemContent, idList) {
  // this.itemContent = document.getElementById("item-content").textContent;
  // this.items[this.items.length - 1].idItem = this.itemCounter++;
}

console.log(lists);
