// Get references to input box, list container, and button
const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
const addButton = document.getElementById('btn');

// Add an event listener to the button for click event
addButton.addEventListener('click', addTask);

// Add an event listener to the input box for "Enter" key press
inputBox.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        addTask(); // Call addTask function if "Enter" is pressed
    }
});

function addTask() {
    if (inputBox.value.trim() === '') {
        alert('You must write a note!');
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData()
}
listContainer.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData()
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove()
        saveData()
    }
}, false);

//save data
function saveData() {
    localStorage.setItem('data', listContainer.innerHTML);
}

//load saved data
function showTask() {
    listContainer.innerHTML = localStorage.getItem('data');
}
showTask()
