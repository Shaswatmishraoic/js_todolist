const plusButton = document.getElementById('plusButton');
const todoContainer = document.getElementById('todoContainer');
const blur= document.getElementById('blur');
const popup =document.getElementById('popup');
const itemInput = document.getElementById('itemInput');
const popupClose=document.getElementById('popupClose');
const popupAdd = document.getElementById('popupAdd');
const popup2 =document.getElementById('popup2');
const itemInput2 = document.getElementById('itemInput2');
const popupClose2=document.getElementById('popupClose2');
const popupAdd2 = document.getElementById('popupAdd2');
const back = document.getElementById('back');
const tasklist = document.getElementById('tasklist');
const addItem = document.getElementById('addItem');
const centerHeading = document.getElementById('centerHeading');
const backButton = document.getElementById('backButton');
const cardHeading = document.getElementById('cardHeading')

// to store card data
let cards = []

// to display cards
dispalyCards()

/**
 * List of event listeners
 * 1. Plus button \/
 * 2. 1st popup add button \/
 * 3. 1st popup closebutton \/
 * 4. Card add button \/
 * 5. Card delete button \/
 * 6. 2nd popup add button \/
 * 7. 2nd popup close button \/
 * 8. Item mark button \/
 * 9. Card Name
 * 10. Back button \/
 */

// 1. Event listener for plus button
plusButton.addEventListener('click', () => {
    popup.classList.add("open-popup");
    blur.classList.toggle('active');
})

// 2. Event listener for 1st popup add button
popupAdd.addEventListener('click', () => {
    document.getElementById("removetxt").style.display = "none";
    let cardName = itemInput.value
    
    if(cardName !== ''){
        // card object
        const card = {
            name: cardName,
            items: []
        }

        // push card object to cards
        cards.push(card)
    }

    // to close popup and remove input value from text field
    cardName = ''
    popup.classList.remove("open-popup");
    blur.classList.remove('active');

    // display the updated card
    back.classList.add('invisible');
    tasklist.classList.remove('invisible');
    addItem.classList.remove('invisible');
    todoContainer.classList.remove('invisible');
    centerHeading.classList.add('invisible');
    dispalyCards()
})

// 3. Event listener for 1st popup close button
popupClose.addEventListener('click' , () => {
    popup.classList.remove("open-popup");
    blur.classList.remove('active');
});

 // 6. Event listener for 2nd popup add button
 popupAdd2.addEventListener('click', () => {
    const cardIndex = popup2.dataset.cardIndex;
    const card = cards[cardIndex];
    let itemName = itemInput2.value

    if(itemName !== ''){
        // item object
        const item = {
            name: itemName
        }

        // push item inside card items
        card.items.push(item)

        // 2nd popup close logic
        popup2.classList.remove('open-popup')
        blur.classList.remove('active')

        // display the updated card
        dispalyCards()
    }
})

// 7. Event listener for 2nd popup close button
popupClose2.addEventListener('click', () => {
    popup2.classList.remove('open-popup')
    blur.classList.remove('active')
})

function dispalyCards(){
    //clear the existing cards
    todoContainer.innerHTML = '';

    cards.forEach((card, index) => {
        // create a new card element
        let todo = document.createElement('div');
        todo.classList.add('todo')

        let heading = document.createElement('p')
        heading.textContent = card.name;
        heading.classList.add('heading')

        let line = document.createElement('hr');
 
        let task = document.createElement('div');
        task.classList.add('task');
    
        let ulist= document.createElement('ul')
    
        let buttons = document.createElement('div');
    
        let deleteCard = document.createElement('button');
        deleteCard.classList.add('deleteCard');
       
        let addTask = document.createElement('button');
        addTask.classList.add('addTask');
        addTask.textContent= "+";

        // card-Cointainer structure
        todoContainer.appendChild(todo);
        todo.appendChild(heading);
        todo.appendChild(line);
        todo.appendChild(task);
        task.appendChild(ulist)
        todo.appendChild(buttons);
        buttons.appendChild(deleteCard);
        buttons.appendChild(addTask);

        // 4. Event listener to card add button
        addTask.addEventListener('click', () => {
            popup2.classList.add("open-popup");
            blur.classList.toggle('active');
            popup2.dataset.cardIndex = index;
        })

        // 5. Event listner to card delete button
        deleteCard.addEventListener('click', () => {
            cards.splice(index, 1)

            //display the updated card
            dispalyCards()
        })

        // 9. Event listener for card name
        heading.addEventListener('click', () => {
            back.classList.remove('invisible');
            tasklist.classList.add('invisible');
            addItem.classList.add('invisible');
            todoContainer.classList.add('invisible');
            centerHeading.classList.remove('invisible');

            cardHeading.textContent = card.name;

            let newCardContainer = document.createElement('div')
            newCardContainer.classList.add('centerCard')

            blur.appendChild(newCardContainer)
            newCardContainer.appendChild(todo)

        })

        // 10. Event listener for bak button
        backButton.addEventListener('click', () => {
            back.classList.add('invisible');
            tasklist.classList.remove('invisible');
            addItem.classList.remove('invisible');
            todoContainer.classList.remove('invisible');
            centerHeading.classList.add('invisible');
            
            blur.removeChild(newCardContainer)
        })

        // add itemsin card logic
        card.items.forEach((item) => {
            let list = document.createElement('li');
            list.classList.add('list');

            let label = document.createElement('label')
            label.textContent= item.name;

             // task container structure
             ulist.appendChild(list)
             list.appendChild(label)

            //check if the item is marked as done
            if(item.done){
                list.classList.add('crossList');
            }else{
                let markButton = document.createElement('button');
                markButton.classList.add('markButton');
                markButton.innerHTML = 'Mark Done';

                // 8. Event listener for item mark button
                markButton.addEventListener('click', () => {
                // Toggle the 'crossList' class and remove the mark button
                list.classList.toggle('crossList');
                markButton.remove();

                // Update the 'done' property of the item
                item.done = !item.done;

                // Display the updated cards
                displayCards();
            });

            list.appendChild(markButton);
            }
        })
    })
}




