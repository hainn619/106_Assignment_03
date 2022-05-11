// Task:
// id - num
// title - str
// description - str
// important - boolean
// dueDate - date/time
// location - str
// invites - str (comma separated)
// color - string (rgb)
// frequency - string (list)
// status - number (list)
//     1 - pending
//     2 - in progress
//     3 - pause
//     4 - completed
//     5 - abandoned

const iconImportant = "iImportant fas fa-star";
const iconNotImportant = "iImportant far fa-star";
var important = false;

function saveTask() {
  let title = $("#txtTitle").val();
  //let important= $("#txtTitle").val();
  let descript = $("#txtDescription").val();
  let duedate = $("#txtDate").val();
  let location = $("#txtLocation").val();
  let invites = $("#txtInvites").val();
  let color = $("#txtColor").val();
  let frequency = $("#sFrequency").val();
  let status = $("#sStatus").val();

  console.log(
    title,
    descript,
    duedate,
    location,
    invites,
    color,
    frequency,
    status
  );
  let task = new Task(
    important,
    title,
    descript,
    duedate,
    location,
    invites,
    color,
    frequency,
    status
  );
  console.log(task);
  displayTask(task);
}
function getFrequency(freque) {
  switch (freque) {
    case "1":
      return "Daily";
    case "2":
      return "Weekly";
    case "3":
      return "Monthly";
  }
}
function getStatus(status) {
  switch (status) {
    case "1":
      return "Pending";
    case "2":
      return "In Progress";
    case "3":
      return "Paused";
    case "4":
      return "Completed";
    case "5":
      return "Abandon";
  }
}
function getImportantIcon(impt) {
  let tmp = "";
  if (impt == true) {
    tmp = ` <i id="showImpt" class="iImportant fas fa-star"></i>`;
  } else {
    tmp = ` <i id="showImpt" class="iImportant far fa-star"></i>`;
  }
  return tmp;
}

function displayTask(task) {
  let syntax = "";
  syntax = `<tr class="item" style="border: 1px solid ${task.color}">
    <td>${getImportantIcon(task.important)}</td>
    <td>${task.title}</td>
    <td>${task.descript}</td>           
    <td>${task.duedate}</td>
    <td>${task.location}</td>
    <td>${task.invites}</td> 
    <td>${getFrequency(task.frq)}</td>
    <td>${getStatus(task.status)}</td>
    <td><i class="fas fa-times"></i></td>
</tr>`;

  $("#tbody1").append(syntax);
}

function toggleImportant() {
  if (important) {
    $("#iImportant").removeClass(iconImportant).addClass(iconNotImportant);
    important = false;
  } else {
    $("#iImportant").removeClass(iconNotImportant).addClass(iconImportant);
    important = true;
  }
  console.log("clicked");
}
var hide = true;
function clickHide() {
  if (hide) {
    $("#form").fadeOut("slow");
    hide = false;
    $("#btnClick").text("< Show");
  } else {
    $("#form").fadeIn("slow");
    hide = true;
    $("#btnClick").text("Hide >");
  }
}
function init() {
  console.log("Welcome to my task manager");

  //assign events
  $("#iImportant").click(toggleImportant);

  $("#btnClick").click(clickHide);
  $("#btnSaveTask").click(saveTask);
}

window.onload = init;
