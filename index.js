var plusbutton = document.getElementById('plusbutton')
var popup =document.getElementById('popup');
var blur= document.getElementById('blur');
var poptxt = document.getElementById('poptxt');
var popupclose=document.getElementById('popupclose');
var popupadd = document.getElementById('popupadd');
var todoContainer = document.getElementById('todoContainer');
var itemInput = document.getElementById('itemInput');
var popupAdd = document.getElementById('popupAdd');

function openPopUp(){
    popup.classList.add("open-popup");
    blur.classList.toggle('active');
}
function closePopUp(){
    popup.classList.remove("open-popup");
    blur.classList.remove('active');
}

plusbutton.addEventListener('click', () => {
    popupadd.classList.remove("invisible");
    popupAdd.classList.add("invisible");
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
        popupAdd.classList.remove("invisible");
        popupadd.classList.add("invisible");
        poptxt.innerHTML = "Add New Item";
        openPopUp();
        
        popupAdd.addEventListener('click' , () =>{
            if(value !== ''){
                var list = document.createElement('p');
                list.textContent= value;
                list.classList.add('list');
    
                var markButton = document.createElement('button');
                markButton.classList.add('markButton');

                task.appendChild(list);
                task.appendChild(markButton);
                
            }
            closePopUp()
        })
    })
    }
    
    //to remove popup logic
    closePopUp()
});