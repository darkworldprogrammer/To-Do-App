const input = document.querySelector('input'); // Ensure this matches your input selector
const button = document.querySelector('button'); // Ensure this matches your button selector
const task = document.querySelector('#task'); // Ensure #task exists in your HTML

button.addEventListener('click', () => {
  const taskValue = input.value.trim(); // Get the input value and remove extra spaces

  if (taskValue) {
    // Create the task container
    const taskLists = document.createElement('div');
    taskLists.className = 'taskLists';

    // Create the list item
    const li = document.createElement('li');
    li.innerText = taskValue;

    // Create the trash icon
    const i = document.createElement('i');
    i.classList.add('fa', 'fa-trash');
    i.setAttribute('aria-hidden', 'true');

    // Append the list item and trash icon to the task container
    taskLists.append(li);
    taskLists.append(i);

    // Append the task container to the #task element
    task.append(taskLists);

    // remove taskLists
    i.addEventListener('click', () => {
      taskLists.remove();
    });

    // Clear the input field
    input.value = '';
  } else {
    alert('Please enter a task!');
  }
});
