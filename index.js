const tasks = []

const renderTodo = () => {
    let todos = ''
    for(let i = 0; i < tasks.length; i++){
        todos += `<div>${tasks[i].todo}</div> <div>${tasks[i].date}</div> <button class='delete'>Delete</button>`
    }
    document.querySelector('.todos').innerHTML = todos

    document.querySelectorAll('.delete').forEach((button, i) => {
        button.addEventListener('click', () => {
            tasks.splice(i, 1)
            renderTodo()
        })
    })
}

renderTodo()

document.querySelector('.add-btn').addEventListener('click', () => {
    const todoEl = document.querySelector('.todo')
    const dateEl = document.querySelector('.date')
    tasks.push({
        todo: todoEl.value,
        date: dateEl.value
    })
    renderTodo()
    todoEl.value = ''
    dateEl.value = ''
})