///selectors

const inputValue = document.querySelector('.toDo-input');
const button = document.querySelector('.toDo_button');
const list = document.querySelector('.toDo_list');
const filters = document.querySelector('.fliterToDo');

///events
button.addEventListener('click', addItem)
list.addEventListener('click', deleteCheck)
filters.addEventListener('click', filterToDo)
///functions


function addItem(event){
    event.preventDefault();
    console.log('Hello')

    ///create DIV
    const toDoDiv = document.createElement('div')
    //Add class to DIV
    toDoDiv.classList.add('toDo')
    ///Create Li
    const newItem = document.createElement("li")
    newItem.innerText = inputValue.value

    ///add class to Li
    newItem.classList.add('toDoItem')

    ///add li to DIV
    toDoDiv.appendChild(newItem);

    //add DIV to the main list 

    list.appendChild(toDoDiv);

    ///create checkbuttons
    const completedButton = document.createElement('button');

    completedButton.classList.add('compButton');

    completedButton.innerHTML = `<i class="fas fa-check"></i>`

    toDoDiv.appendChild(completedButton)

    ///create delete button
    const deleteButton = document.createElement('button');

    deleteButton.classList.add('deleteButton');

    deleteButton.innerHTML = `<i class="fas fa-trash"></i>`

    toDoDiv.appendChild(deleteButton)
     
    //clear input field
    inputValue.value = ''
    
}


///delete and check function

function deleteCheck(e){
  
    console.log(e.target)
    //target click item
   
    const selectedItem = e.target

    if(selectedItem.classList[0] === 'deleteButton'){
        const toDoitem = selectedItem.parentElement;
        toDoitem.classList.add('fall');
        toDoitem.addEventListener('transitionend', function(){
            toDoitem.remove()
        })
        
    } else if(selectedItem.classList[0]=== 'compButton'){
        const toDoitem = selectedItem.parentElement;
        toDoitem.classList.toggle('completed')
    }
      
}


function filterToDo(e){
   const selectedFilter = filters.childNodes
   console.log(selectedFilter);
}   

