// SELECTION THE ELEMENTS

const btnMoreTask = document.getElementById("btn-more-task")
const inputTask = document.getElementById("input-task")

const tasks = document.getElementById("tasks")


// FUNCTIONS 

const newTask = () => {
    
    const task = document.createElement("div")
    const newInput = document.createElement("input")
    const newLabel = document.createElement("label")
    const newBtn = document.createElement("button")

    const unnamedTask = inputTask.value === ""

    if(unnamedTask) {
        return
    }

    newInput.type = 'checkbox'

    newBtn.classList.add("btn-remove")

    newBtn.innerHTML = '<i class="fa-solid fa-trash"></i>'

    task.setAttribute("id", "checkbox-task")
    newInput.setAttribute("id", "task-check")
    
    
    task.appendChild(newInput)
    task.appendChild(newLabel)
    task.appendChild(newBtn)

    tasks.appendChild(task)

    newLabel.innerHTML = inputTask.value
    
    newBtn.addEventListener("click", () => {
        task.remove()
    })

    inputTask.value = ""
    inputTask.focus();

}

function removerTarefa (id) {
    let elemento = document.getElementById(id);

    elemento.remove();
}


// EVENTS 

btnMoreTask.addEventListener("click", newTask)

