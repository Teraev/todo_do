



function Todo(item) {



    let block = document.createElement('div')
    let h1 = document.createElement('h1')
    let counter = document.createElement('div')
    let tasks = document.createElement('div')
    let task = document.createElement('div')
    let task2 = document.createElement('div')
    let input = document.createElement('input')
    let names = document.createElement('div')
    let ul = document.createElement('ul')
    let img = document.createElement('img')
    let p = document.createElement('p')
    let li = document.createElement('li')


    block.classList.add('block')
    counter.classList.add('counter')
    tasks.classList.add('tasks')
    task.classList.add('task')

    names.classList.add('names')

    img.classList.add('musor')

    img.src = "./img/musor.svg"
    counter.innerHTML = '0'

    input.type = 'checkbox'

    h1.innerHTML = item.category
    

    li.innerHTML = item.title
    p.innerHTML = `Due: ${item.deadline}`


    task.append(input, names, img)
    names.append(ul, p)
    ul.append(li)
    tasks.append(task, task2)
    block.append(h1, counter, tasks)

    img.onclick = () => {
        task.remove()

    }

    return block


}



export { Todo }