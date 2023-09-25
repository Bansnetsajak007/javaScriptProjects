document.addEventListener("DOMContentLoaded", function() {
    displayTasks();
});

function add_works() {
    const text_ = document.getElementById("mainText").value;
    
    //clearing the inputfiedl after Entering some text
    let input1 = document.getElementById('mainText');
    input1.value = "";
    const p = document.createElement("p");
    p.textContent = text_;
    document.getElementById("result").appendChild(p);
    
    // Store the updated todo items in localStorage
    storeTasks();
}

function delete_work() {
    // Retrieve the stored tasks from localStorage
    const storedItems = localStorage.getItem("todoItems");
    // If there are stored items, parse the JSON and remove the last item
    if (storedItems) {
        let tasks = JSON.parse(storedItems);
        // Remove the last task from the array
        // tasks.pop();  //removes last element
        tasks.shift();
        // Update the stored tasks in localStorage
        localStorage.setItem("todoItems", JSON.stringify(tasks));
        // Display the updated tasks
        displayTasks();
    }
}

function storeTasks() {
    const tasks = [];
    const resultContainer = document.getElementById("result");

    //HTML collection
    const taskElements_ = resultContainer.getElementsByTagName("p");
    const taskElement = Array.from(taskElements_);

    // for (let i = 0; i < taskElements.length; i++) {
    //     tasks.push(taskElements[i].textContent);
    // }

    taskElement.forEach((task) => tasks.push(task.textContent));
    // taskElements.forEach((taskElement) => {
    //     tasks.push(taskElement.textContent);
    //   });

    localStorage.setItem("todoItems", JSON.stringify(tasks));
}

function displayTasks() {
    // Retrieve the stored tasks from localStorage
    const storedItems = localStorage.getItem("todoItems");
    const resultContainer = document.getElementById("result");

    // Clear the result container
    resultContainer.innerHTML = "";

    // If there are stored items, parse the JSON and display the tasks
    if (storedItems) {
        const tasks = JSON.parse(storedItems);

        tasks.forEach((task) => {
            const p = document.createElement("p");
            p.textContent = task;
            resultContainer.appendChild(p);
        });
    }
}


