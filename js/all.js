const add = document.querySelector(".add");
const pen = document.querySelector(".pen");
const star = document.querySelector(".star");

const cancel = document.querySelector(".cancel");
const addTack = document.querySelector(".addTack");

const title = document.querySelector("#title");
const date = document.getElementsByName("date");
const time = document.getElementsByName("time");
const file = document.getElementsByName("file");
const comment = document.getElementsByName("textarea");

const lists = document.querySelector(".list");

const todolist = JSON.parse(localStorage.getItem("list")) || [];

// Add Task
add.addEventListener("click", function () {
  if (this.className == "add open") {
    this.className = "add";
  } else {
    this.className = "add open";
    pen.childNodes[1].style.fill = "#4A90E2";
    pen.childNodes[1].style.stroke = "none";
  }
});

// cancel
cancel.addEventListener("click", function () {
  add.className = "add";
});

// Add
addTack.addEventListener("click", function () {
  const note = {
    title: title.value,
    date: date[0].value,
    time: time[0].value,
    file: file[0].value,
    comment: comment[0].value,
    done: false,
    star: false,
  };

  todolist.push(note);
  populateList(todolist, lists);
  localStorage.setItem("list", JSON.stringify(todolist));

  title.value = "";
  date[0].value = "";
  time[0].value = "";
  file[0].value = "";
  comment[0].value = "";
  add.className = "add";
});

function populateList(plates = [], platesList) {
  platesList.innerHTML = plates
    .map((plate, i) => {
      return `
      <div class="drag-sort-enable">
      <div class="todos" data-item=${i}>
      <div class="control">
        <div class="title" >
          <input type="checkbox" name="" id="item${i}" 
          ${plate.done ? "checked" : ""} 
          data-index=${i}
      />
          <div class="titleText">${plate.title}</div>
        </div>
        <div class="cions">
          <div class="star">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 576 512"
            >
              <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
              <path
                d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
              />
            </svg>
          </div>
          <div class="restars">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 576 512"
            >
              <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
              <path data-index=${i}
                d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z"
              />
            </svg>
          </div>
          <div class="pens" >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
            >
              <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
              <path data-index=${i}
                d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div class="icon">
        <div class="date">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 448 512"
          >
            <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <path
              d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192h80v56H48V192zm0 104h80v64H48V296zm128 0h96v64H176V296zm144 0h80v64H320V296zm80-48H320V192h80v56zm0 160v40c0 8.8-7.2 16-16 16H320V408h80zm-128 0v56H176V408h96zm-144 0v56H64c-8.8 0-16-7.2-16-16V408h80zM272 248H176V192h96v56z"
            />
          </svg>
          ${plate.date.substring(5)}
        </div>
        <div class="file">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 384 512"
          >
            <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <path
              d="M320 464c8.8 0 16-7.2 16-16V160H256c-17.7 0-32-14.3-32-32V48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H320zM0 64C0 28.7 28.7 0 64 0H229.5c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64z"
            />
          </svg>
        </div>
        <div class="text">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
          >
            <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <path
              d="M168.2 384.9c-15-5.4-31.7-3.1-44.6 6.4c-8.2 6-22.3 14.8-39.4 22.7c5.6-14.7 9.9-31.3 11.3-49.4c1-12.9-3.3-25.7-11.8-35.5C60.4 302.8 48 272 48 240c0-79.5 83.3-160 208-160s208 80.5 208 160s-83.3 160-208 160c-31.6 0-61.3-5.5-87.8-15.1zM26.3 423.8c-1.6 2.7-3.3 5.4-5.1 8.1l-.3 .5c-1.6 2.3-3.2 4.6-4.8 6.9c-3.5 4.7-7.3 9.3-11.3 13.5c-4.6 4.6-5.9 11.4-3.4 17.4c2.5 6 8.3 9.9 14.8 9.9c5.1 0 10.2-.3 15.3-.8l.7-.1c4.4-.5 8.8-1.1 13.2-1.9c.8-.1 1.6-.3 2.4-.5c17.8-3.5 34.9-9.5 50.1-16.1c22.9-10 42.4-21.9 54.3-30.6c31.8 11.5 67 17.9 104.1 17.9c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 45.1 17.7 86.8 47.7 120.9c-1.9 24.5-11.4 46.3-21.4 62.9zM144 272a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm144-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm80 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"
            />
          </svg>
        </div>
      </div>
    </div>
    <div class="edits">
    <form action="" name="form">
      <label for=""
        ><div class="date" style="display: inline-block; margin-right: 5px">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 448 512"
          >
            <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <path
              d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192h80v56H48V192zm0 104h80v64H48V296zm128 0h96v64H176V296zm144 0h80v64H320V296zm80-48H320V192h80v56zm0 160v40c0 8.8-7.2 16-16 16H320V408h80zm-128 0v56H176V408h96zm-144 0v56H64c-8.8 0-16-7.2-16-16V408h80zM272 248H176V192h96v56z"
            />
          </svg>
        </div>
        Deadline</label
      >
      <input name="date" type="date" name="" id="" value="${plate.date}" />
      <input name="time" type="time" name="" id="" value="${plate.time}" />
      <label for=""
        ><div class="file" style="display: inline-block; margin-right: 5px">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 384 512"
          >
            <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <path
              d="M320 464c8.8 0 16-7.2 16-16V160H256c-17.7 0-32-14.3-32-32V48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H320zM0 64C0 28.7 28.7 0 64 0H229.5c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64z"
            />
          </svg>
        </div>
        File</label
      >
      <input name="file" type="file" name="" id="" value="${plate.file}"/>${
        plate.file
      }
      <label for=""
        ><div class="text" style="display: inline-block; margin-right: 5px">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
          >
            <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <path
              d="M168.2 384.9c-15-5.4-31.7-3.1-44.6 6.4c-8.2 6-22.3 14.8-39.4 22.7c5.6-14.7 9.9-31.3 11.3-49.4c1-12.9-3.3-25.7-11.8-35.5C60.4 302.8 48 272 48 240c0-79.5 83.3-160 208-160s208 80.5 208 160s-83.3 160-208 160c-31.6 0-61.3-5.5-87.8-15.1zM26.3 423.8c-1.6 2.7-3.3 5.4-5.1 8.1l-.3 .5c-1.6 2.3-3.2 4.6-4.8 6.9c-3.5 4.7-7.3 9.3-11.3 13.5c-4.6 4.6-5.9 11.4-3.4 17.4c2.5 6 8.3 9.9 14.8 9.9c5.1 0 10.2-.3 15.3-.8l.7-.1c4.4-.5 8.8-1.1 13.2-1.9c.8-.1 1.6-.3 2.4-.5c17.8-3.5 34.9-9.5 50.1-16.1c22.9-10 42.4-21.9 54.3-30.6c31.8 11.5 67 17.9 104.1 17.9c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 45.1 17.7 86.8 47.7 120.9c-1.9 24.5-11.4 46.3-21.4 62.9zM144 272a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm144-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm80 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"
            />
          </svg>
        </div>
        Comment</label
      >
      <textarea name="textarea" id="" cols="30" rows="10">${
        plate.comment
      }</textarea>
    </form>
    <div class="button">
      <div class="cancel">X Cancel</div>
      <div class="addTack">〸 Add Task</div>
    </div>
  </div>
  </div>
      `;
    })
    .join("");
}

// done
lists.addEventListener("click", function (e) {
  if (!e.target.matches("input")) return;
  const el = e.target;
  const index = el.dataset.index;
  //   console.log(el.dataset);
  todolist[index].done = !todolist[index].done;

  localStorage.setItem("list", JSON.stringify(todolist));

  populateList(todolist, lists);

  //   if (todolist[index].done == true) {
  //     e.stopPropagation();
  //     icon[index].style.display = "none";
  //     todos[index].style.height = "76px";
  //     titleText[index].style.textDecoration = "line-through";
  //     titleText[index].style.color = "#9B9B9B";
  //   }
  const icon = document.querySelectorAll(".icon");
  const todos = document.querySelectorAll(".todos");
  const titleText = document.querySelectorAll(".todos .control .title");

  const checkbox = document.querySelectorAll("input[type=checkbox]");
  checkbox.forEach((item, i) => {
    // console.log(item.checked);
    if (item.checked) {
      icon[i - 1].style.display = "none";
      todos[i - 1].style.height = "76px";
      titleText[i - 1].style.textDecoration = "line-through";
      titleText[i - 1].style.color = "#9B9B9B";
    }
  });
});

populateList(todolist, lists);

const icon = document.querySelectorAll(".icon");
const todos = document.querySelectorAll(".todos");
const titleText = document.querySelectorAll(".todos .control .title");

const checkbox = document.querySelectorAll("input[type=checkbox]");
checkbox.forEach((item, i) => {
  //   console.log(item.checked);
  if (item.checked) {
    icon[i - 1].style.display = "none";
    todos[i - 1].style.height = "76px";
    titleText[i - 1].style.textDecoration = "line-through";
    titleText[i - 1].style.color = "#9B9B9B";
  }
});

// pens open
const pens = document.querySelectorAll(".pens");
pens.forEach((item, i) => {
  pens[i].addEventListener("click", function (e) {
    const el = e.target;
    const index = el.dataset.index;
    // console.log(index);

    // console.log(todos);

    if (todos[index].className == "todos opens") {
      todos[index].className = "todos";
      e.target.style.fill = "white";
      e.target.style.stroke = "black";
      icon[index].style.display = "grid";
      todos[index].style.height = "102px";
    } else {
      todos[index].className = "todos opens";
      e.target.style.fill = "#4A90E2";
      e.target.style.stroke = "none";
      icon[index].style.display = "none";
      todos[index].style.height = "76px";
    }
  });
});

// todos
function enableDragSort(listClass) {
  const sortableLists = document.getElementsByClassName(listClass);
  Array.prototype.map.call(sortableLists, (list) => {
    enableDragList(list);
  });
}

function enableDragList(list) {
  Array.prototype.map.call(list.children, (item) => {
    enableDragItem(item);
  });
}

function enableDragItem(item) {
  item.setAttribute("draggable", true);
  item.ondrag = handleDrag;
  item.ondragend = handleDrop;
}

function handleDrag(item) {
  const selectedItem = item.target,
    list = selectedItem.parentNode,
    x = event.clientX,
    y = event.clientY;

  selectedItem.classList.add("drag-sort-active");
  let swapItem =
    document.elementFromPoint(x, y) === null
      ? selectedItem
      : document.elementFromPoint(x, y);

  if (list === swapItem.parentNode) {
    swapItem =
      swapItem !== selectedItem.nextSibling ? swapItem : swapItem.nextSibling;
    list.insertBefore(selectedItem, swapItem);
  }
}

function handleDrop(item) {
  item.target.classList.remove("drag-sort-active");
}

(() => {
  enableDragSort("drag-sort-enable");
})();

// star
const stars = document.querySelectorAll(".cions .restars");
const stary = document.querySelectorAll(".cions .star ");
stars.forEach((item, i) => {
  stars[i].index = i;
  stars[i].addEventListener("click", function () {
    this.style.display = "none";
    for (let i = 0; i < stars.length; i++) {
      stary[this.index + 1].style.display = "block";
    }
    todos[this.index].style.background = "#FFF2DC";
  });
});

// function setTop(obj) {
//   let todos = obj.parentNode.parentNode;
//   console.log(list[0]);

//   list[0].insertBefore(todos, list[0].todos);
// }

// console.log(stary);

// nav
const li = document.querySelectorAll(".nav li");
const list = document.getElementsByClassName("list");
list[0].style.display = "block";

li.forEach((item, i) => {
  li[i].index = i;
  li[i].addEventListener("click", function () {
    for (let i = 0; i < li.length; i++) {
      if (i == this.index) {
        li[this.index].className = "preset";
        list[this.index].style.display = "block";
        const checkbox = document.querySelectorAll("input[type=checkbox]");
        const icon = document.querySelectorAll(".icon");
        const todos = document.querySelectorAll(".todos");
        const titleText = document.querySelectorAll(".todos .control .title");
        checkbox.forEach((item, i) => {
          //   console.log(item.checked);
          if (item.checked) {
            icon[i - 1].style.display = "none";
            todos[i - 1].style.height = "76px";
            titleText[i - 1].style.textDecoration = "line-through";
            titleText[i - 1].style.color = "#9B9B9B";
          }
        });
        // console.log(checkbox);
      } else {
        li[i].className = "";
        list[i].style.display = "none";
      }
    }
  });
});

let filter = todolist.filter(function (item, index, array) {
  return item.done == true;
});
let filter2 = todolist.filter(function (item, index, array) {
  return item.done == false;
});

populateList(filter, list[2]);
populateList(filter2, list[1]);
