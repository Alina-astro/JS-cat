const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

addButton.addEventListener('click', function () {
    const newTask = document.createElement('li');
    newTask.textContent = taskInput.value;
    taskList.append(newTask);
    taskInput.value = '';
    
});

taskList.addEventListener('click', function(evt) {
    if (evt.target.tagName === 'LI') {
      evt.target.classList.toggle('task-done'); 
    }
  });