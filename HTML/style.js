//initializing

var todoInput = document.querySelector(".todo-input");
var todoButton = document.querySelector(".todo-button");
var todoList = document.querySelector(".todo-list");

//Event Handling
todoButton.onclick = create;
todoList.onclick = deletecheck;

//function

function create(e) {

    // checking for empty input.

    if (todoInput.value != "") {
        e.preventDefault();

        //creating new div for list items.
        var newDiv = document.createElement("div");
        newDiv.classList.add("todo");

        //creating new list item.
        var newLi = document.createElement("li");
        newLi.classList.add("todo-item");
        newLi.innerHTML = todoInput.value;
        newDiv.appendChild(newLi);

        // creating check button for that item.
        var checkbtn = document.createElement("button");
        checkbtn.classList.add("check-btn");
        checkbtn.innerHTML = '<i class="fa fa-check"></i>';
        newDiv.appendChild(checkbtn);

        // creating delete button for that item.
        var deletebtn = document.createElement("button");
        deletebtn.classList.add("delete-btn");
        deletebtn.innerHTML = '<i class="fa fa-trash"></i>';
        newDiv.appendChild(deletebtn);

        // appending new div to static unordered list as child.
        todoList.appendChild(newDiv);

        // empty the input field.
        todoInput.value = "";
    }

    // if empty displaying alert.
    else {
        e.preventDefault();
        alert("input is empty. please give an input.");
    };
}


// function of check and delete list item.
function deletecheck(e) {
    var item = e.target;
    if (item.classList[0] === "delete-btn") {
        var parent = item.parentNode;
        parent.remove();
    };
    if (item.classList[0] === "check-btn") {
        var parent = item.parentNode;
        parent.classList.toggle("completed");
    };
};

//multi task
const form1 = document.getElementById("form1");
const form2 = document.getElementById("form2");

// for next and back button
const next1 = document.getElementById("next1");
const back1 = document.getElementById("back1");

const progress = document.getElementById("progress");
// Event Handler

next1.onclick = function() {
    form1.style.left = "-61.5vh";
    form2.style.left = "5.5vh";
    progress.style.width = "49vh";
}

back1.onclick = function() {
    form1.style.left = "5.5vh";
    form2.style.left = "61.5vh";
    progress.style.width = "24vh";

}