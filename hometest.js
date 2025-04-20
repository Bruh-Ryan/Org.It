document.addEventListener('DOMContentLoaded', function() {
  // Get elements
  const selectContainer =document.getElementById("select-Container")// firstly

  const notesContainer = document.getElementById("notes-container");//secondly the containers notes tasks and calender
  const taskContainer = document.getElementById("task-container");
  //menu elements
  const notesBtn=document.getElementById("notes")
  const tasksBtn=document.getElementById("task")
  
  
  
  //-------------EVENTS--------
  // Add event listeners for Notes button
  notesBtn.addEventListener('click', function() {
    // shows select-area in background 
    selectContainer.style.display = 'block'
    showContainer(notesContainer)
    });

    // Add event listeners for Tasks button
    tasksBtn.addEventListener('click', function() {
      // shows select-area in background 
      selectContainer.style.display = 'block'
      showContainer(taskContainer)
      });
   
  
  
  // ----- FUNCTIONS -----
  function showContainer(containerToShow) {
    // hides all containers
    const allContainers = document.querySelectorAll('.app-container');
    allContainers.forEach(container => {
      container.style.opacity = '0';     // fade out
      container.style.display = 'none';  // hide
    });

    // shows the requested container
    containerToShow.style.display = 'block';
    setTimeout(() => {
      containerToShow.style.opacity = '1'; // fade in after small delay
    }, 50);
  }

  //---------Tasks Functionality--------
  //creating a cross x each time an element LI tag is made
  var myNodelist = document.getElementsByTagName("LI");
  var i;
  for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);

  // Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

  // Create a new list item when clicking on the "Add" button
function addTask() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("text-input").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("taskList").appendChild(li);
  }
  document.getElementById("text-input").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  var close = document.getElementsByClassName("close");
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
 // Remove all child elements (list items)
function clearElements() {
  var userList = document.getElementById("taskList"); // Fixed the ID
  while (userList.firstChild) {
    userList.removeChild(userList.firstChild);
  }
}

 
    //"checked" symbol when clicking on a list item
  var list = document.querySelector('ul');
  list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
    }
  }, false);
}
 // attach addTask and clearElements to global so onclick works
window.addTask = addTask;
window.clearElements = clearElements;
  
});
