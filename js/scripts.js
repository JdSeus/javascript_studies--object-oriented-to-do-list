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

        //Adiciona evento nas tasks
        this.addEvents();
    }

    removeTask(task) {

        //Achar o elemento pai
        let parentEl = task.parentElement;

        //Remover da lista
        parentEl.remove();
    }

    completeTask(task) {
        console.log('completou')
    }

    addEvents() {
        let removeBtns = document.querySelectorAll('.fa-trash');
        let removeBtn = removeBtns[removeBtns.length - 1];

        let doneBtns = document.querySelectorAll('.fa-check');
        let doneBtn = doneBtns[doneBtns.length - 1];

        //Adicionar Evento de Remover
        removeBtn.addEventListener('click', function() {
            todo.removeTask(this)
        })

        //Adicionar evento de completar tarefa
        doneBtn.addEventListener('click', function() {
            todo.completeTask(this)
        })
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