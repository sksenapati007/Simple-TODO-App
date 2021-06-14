// logic

let todoList = document.getElementById('list')
let li

// This is invoked when the add todo button is clicked
const addButton = document.getElementById('add')
addButton.addEventListener('click', addItem)
// addButton.addEventListener('keypress', function (event) {
//     if (event.key == 13 || event.key == 'click') {
//         console.log('Enter pressed');
//         addItem();
//     }
// })

// This is invoked when the remove todo button is clicked
const removeButton = document.getElementById('remove')
removeButton.addEventListener('click', removeItem)

const clearAllButton = document.getElementById('clear')
clearAllButton.addEventListener('click', clearAll)

// This function is invoked when the add todo button is clicked
function addItem() {
    const input = document.getElementById('input')
    let todoItem = input.value
    todoList = document.getElementById('list')

    // var lq = document.createElement('li')
    var textNode1 = document.createTextNode(todoItem)
    // li.appendChild(textNode1)
    // document.querySelector('ul').appendChild(lq)

    if (todoItem === '') {
        var h = document.createElement('p')
        var t = document.createTextNode('Please Enter A Todo')
        h.appendChild(t)
        t.className = 'visual'
    } else {
        // created li
        li = document.createElement('li')
        // create checkbox input
        const checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.setAttribute('id', 'check')
        // create label
        const label = document.createElement('label')

        // add these elements on page
        todoList.appendChild(label)
        li.appendChild(checkbox)
        label.appendChild(textNode1)
        li.appendChild(label)
        todoList.insertBefore(li, todoList.childNodes[0])
        // li.className = 'visual'
        input.value = ''
    }
    setTimeout(() => {
        li.className = 'visual'
    }, 5)
}

// This function is invoked when the remove todo button is clicked
function removeItem() {
    li = todoList.children
    for (let index = 0; index < li.length; index++) {
        while (li[index] && li[index].children[0].checked) {
            todoList.removeChild(li[index])
        }
    }
}

function clearAll() {
    li = todoList.children
    for (let index = 0; index < li.length; index++) {
        while (li[index]) {
            todoList.removeChild(li[index])
        }
    }
}