//Problem: the user iteraction doesn't work
//solution: add user iteraction

var taskInput = document.getElementById("new-task"); //new-task
var addButton = document.getElementsByTagName("button")[0]; //first button
var incompleteTasksHolder = document.getElementById("incomplete-tasks"); //incomplete-tasks
var completeTasksHolder = document.getElementById("completed-tasks"); //complete-tasks

var createNewTaskElement = function(taskString){
  var listItem = document.createElement("li");
  
  var checkBox = document.createElement("input");
  var label = document.createElement("label");
  var editInput = document.createElement("input");
  
  var editButton = document.createElement("button");
  var deleteButton = document.createElement("button");
  
  checkBox.type = "checkbox";
  editInput.type = "text";
  
  editButton.innerText = "Edit";
  editButton.className = "edit";
  deleteButton.innerText = "Delete";
  deleteButton.className = "delete";
  
  label.innerText = taskString;
  
  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(editInput);
  
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);
  
  return listItem;
}

var addTask = function() {
  console.log("Add Task..");
  var listItem = createNewTaskElement(taskInput.value);
  bindTaskEvent(listItem,taskComplete);
  incompleteTasksHolder.appendChild(listItem);
  
  taskInput.value = "";
}

var editTask = function() {
  console.log("Editing Task..");
  
  var listItem = this.parentNode;
  
  var editInput = listItem.querySelector("input[type=text]");
  var label = listItem.querySelector("label");
  
  var containsClass = listItem.classList.contains("editMode");
  if(containsClass){
    label.innerText = editInput.value;
  }else{
    editInput.value = label.innerText;
  }
  listItem.classList.toggle("editMode");
}

var deleteTask = function() {
  console.log("Delete Task..");
  var listItem = this.parentNode;
  var ul = listItem.parentNode;
  ul.removeChild(listItem);
}

var taskComplete = function() {
  console.log("Complete Task..");
  var listItem = this.parentNode;
  completeTasksHolder.appendChild(listItem);
  bindTaskEvent(listItem, taskInconplete);
}

var taskInconplete = function() {
  console.log("Incomplete Task..");
  var listItem = this.parentNode;
  incompleteTasksHolder.appendChild(listItem);
  bindTaskEvent(listItem, taskComplete);
}

var bindTaskEvent = function(taskListItem, checkBoxEventHandler){
  console.log("");
  var checkBox = taskListItem.querySelector("input[type=checkbox]");
  var editButton = taskListItem.querySelector("button.edit");
  var deleteButton = taskListItem.querySelector("button.delete");
  
  editButton.onclick = editTask;
  
  deleteButton.onclick = deleteTask;
  
  checkBox.onchange = checkBoxEventHandler;
  
}

var ajaxRequest = function(){
  console.log("AJAX Request");
}

addButton.addEventListener("click" , addTask);
addButton.addEventListener("click" , ajaxRequest);

for(var i = 0; i < incompleteTasksHolder.children.length ; i += 1){
  bindTaskEvent(incompleteTasksHolder.children[i],taskComplete);
}

for(var i = 0; i < completeTasksHolder.children.length ; i += 1){
  bindTaskEvent(completeTasksHolder.children[i],taskInconplete);
}