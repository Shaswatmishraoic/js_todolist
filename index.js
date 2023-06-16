var plusbutton = document.getElementById('plusbutton')
var popup =document.getElementById('popup');
var blur= document.getElementById('blur');
var poptxt = document.getElementById('poptxt');
var popupclose=document.getElementById('popupclose');
var popupadd = document.getElementById('popupadd');
var todoContainer = document.getElementById('todoContainer');
var itemInput = document.getElementById('itemInput');

function openPopUp(){
    popup.classList.add("open-popup");
    blur.classList.toggle('active');
}
function closePopUp(){
    popup.classList.remove("open-popup");
    blur.classList.remove('active');
}

plusbutton.addEventListener('click', () => {
    poptxt.innerHTML = "Add New List";
    openPopUp();
});

popupclose.addEventListener('click' , () => {
    closePopUp();
});

popupadd.addEventListener('click', () => {
    var value = itemInput.value;

    if(value !== ''){
    // card-Cointainer
    var todo = document.createElement('div'); 
    todo.classList.add('todo');

    var heading = document.createElement('p');
    heading.textContent= value;
    heading.classList.add('heading');

    var line = document.createElement('hr');
    line.classList.add('line')

    var task = document.createElement('div');
    task.classList.add('task');

    var buttons = document.createElement('div');

    var deleteTask = document.createElement('button');
    deleteTask.classList.add('deleteTask');
    

    var addTask = document.createElement('button');
    addTask.classList.add('addTask');
    addTask.textContent= "+";

    todoContainer.appendChild(todo);
    todo.appendChild(heading);
    todo.appendChild(line);
    todo.appendChild(task);
    todo.appendChild(buttons);
    buttons.appendChild(deleteTask);
    buttons.appendChild(addTask);

    //buttons eventsLisner
    deleteTask.addEventListener('click' , () => {
        todo.remove()
    });

    //add task
    addTask.addEventListener('click' , () => {
        
        
    })
    }
    
    //to remove popup logic
    popup.classList.remove("open-popup");
    blur.classList.remove('active');
    //   itemInput.textContent = ""
});