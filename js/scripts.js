class Todo {

    constructor() {
        this.totalTasks = document.querySelectorAll('.task').length;
    }

    addTask(taskText) {

        //Clona o Template
        let template = document.querySelector('.task').cloneNode(true);
        //Remove classe hide
        template.classList.remove('hide');
        //Manipular Texto
        let templateText = template.querySelector('.task-title');
        templateText.textContent = taskText;

        let list = document.querySelector('#tasks-container')

        //Inserir na lista
        list.appendChild(template);
    }

}

let todo = new Todo();

//Eventos
let addBtn = document.querySelector('#add');

addBtn.addEventListener('click', function(e) {
    e.preventDefault();

    let taskText = document.querySelector('#task');

    if (taskText.value != '') {
        todo.addTask(taskText.value);
    }
    
    
    //Limpa campo de texto
    taskText.value = '';
})