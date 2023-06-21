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
var newCardContainer;
var updatedList;


// to store card data
var cards = []

// to display cards
displayCards()

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
 * 9. Card Name \/
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
    var cardName = itemInput.value
    
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
    itemInput.value = '';
    popup.classList.remove("open-popup");
    blur.classList.remove('active');

    // Remove newCardContainer and its content if it exists
    if (newCardContainer) {
        newCardContainer.remove();
        newCardContainer = null;
        updatedList.remove();
        updatedList = null
    }

    // display the updated card
    back.classList.add('invisible');
    tasklist.classList.remove('invisible');
    addItem.classList.remove('invisible');
    todoContainer.classList.remove('todoinvisible');
    centerHeading.classList.add('invisible');
    displayCards()
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
    var itemName = itemInput2.value;

    if (itemName !== '') {
            // item object
            const item = {
                name: itemName,
                done: false
            };

        // push item inside card items
        card.items.push(item);

        // 2nd popup close logic
        popup2.classList.remove('open-popup');
        blur.classList.remove('active');

        // Clear the input field
        itemInput2.value = '';
        
        displayCards(); // Regenerate items and display the updated cards
        
        // rebuild the card from main page update
        var list = document.createElement('li');
        list.classList.add('list');

        var label = document.createElement('label')
        label.textContent= item.name;

        // task container structure
        updatedList.appendChild(list)
        list.appendChild(label)

        if(item.done){
            list.classList.add('crossList');
        }else{
            var markButton = document.createElement('button');
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
    }
})

// 7. Event listener for 2nd popup close button
popupClose2.addEventListener('click', () => {
    popup2.classList.remove('open-popup')
    blur.classList.remove('active')
})


// 10. Event listener for bak button
backButton.addEventListener('click', () => {
    back.classList.add('invisible');
    tasklist.classList.remove('invisible');
    addItem.classList.remove('invisible');
    todoContainer.classList.remove('todoinvisible');
    centerHeading.classList.add('invisible');
    if (newCardContainer) {
        newCardContainer.remove();
        newCardContainer = null;
        updatedList.remove();
        updatedList = null;
    }
    displayCards()
})


function displayCards(){
    //clear the existing cards
    todoContainer.innerHTML = '';

    cards.forEach((card, index) => {
        // create a new card element
        var todo = document.createElement('div');
        todo.classList.add('todo')

        var heading = document.createElement('p')
        heading.textContent = card.name;
        heading.classList.add('heading')

        var line = document.createElement('hr');
 
        var task = document.createElement('div');
        task.classList.add('task');
    
        var ulist= document.createElement('ul')
    
        var buttons = document.createElement('div');
    
        var deleteCard = document.createElement('button');
        deleteCard.classList.add('deleteCard');
        // deleteCard.classList.add('btn');
       
        var addTask = document.createElement('button');
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
            /** sets a custom data attribute on the popup2 element to store the index of 
             * the associated card, which is later used to identify the card when the add 
             * button is clicked. */
            popup2.dataset.cardIndex = index;  
        })

        // 5. Event listner to card delete button
        deleteCard.addEventListener('click', () => {
            cards.splice(index, 1)

            //display the updated card
            back.classList.add('invisible');
            tasklist.classList.remove('invisible');
            addItem.classList.remove('invisible');
            todoContainer.classList.remove('todoinvisible');
            centerHeading.classList.add('invisible');
            if (newCardContainer) {
                newCardContainer.remove();
                newCardContainer = null;
            }
            displayCards()
        })

        // Set the delete button's inner HTML to include the trash icon
        deleteCard.innerHTML = '<i class="fa fa-trash"></i>';

        // 9. Event listener for card name
        heading.addEventListener('click', () => {
            back.classList.remove('invisible');
            tasklist.classList.add('invisible');
            addItem.classList.add('invisible');
            todoContainer.classList.add('todoinvisible');
            centerHeading.classList.remove('invisible');

            cardHeading.textContent = card.name;

             // Remove the previous newCardContainer if it exists
            if (newCardContainer) {
                newCardContainer.remove();
                newCardContainer = null;
                updatedList.remove();
                updatedList = null;
            }
            
            newCardContainer = document.createElement('div')
            newCardContainer.classList.add('centerCard')

            updatedList = document.createElement('ul')

            blur.appendChild(newCardContainer)
            newCardContainer.appendChild(todo)
            task.appendChild(updatedList)
        })

        // add items in card logic
        card.items.forEach((item) => {
            var list = document.createElement('li');
            list.classList.add('list');

            var label = document.createElement('label')
            label.textContent= item.name;

             // task container structure
             ulist.appendChild(list)
             list.appendChild(label)

            //check if the item is marked as done
            if(item.done){
                list.classList.add('crossList');
            }else{
                var markButton = document.createElement('button');
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






 