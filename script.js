document.getElementById('task-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    const newTask = document.createElement('li');
    newTask.textContent = taskInput.value;

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.className = 'complete';
    completeButton.addEventListener('click', function() {
        newTask.classList.toggle('completed');
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete';
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(newTask);
    });

    newTask.appendChild(completeButton);
    newTask.appendChild(deleteButton);
    taskList.appendChild(newTask);

    taskInput.value = '';
});
