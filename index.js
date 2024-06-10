import { Option } from "./components/Option.js"
import { Todo } from "./components/Todo.js"
import { reload, submit } from "./lib/utils.js"

const forms = Array.from(document.forms)
const select = document.getElementById('categs')
const container = document.querySelector('.container')
const open_menu = document.querySelector('.open_menu')
const close_menu = document.querySelector('.close-dialog')
const menu = document.querySelector('.menu')

const store = {
    todos: [],
    categories: [],
    todosCount: 0,
    categoriesCount: 0
}

forms.forEach((form) => {
    form.onsubmit = (e) => {
        e.preventDefault();

        submit(e.target, store[form.name])

      

        if(form.name === 'categories' && store.categoriesCount < 3) {
            reload(store[form.name], Option, select)
            store.categoriesCount++
        } else if (store.todosCount < 3) {
            reload(store[form.name], Todo, container)
            store.todosCount++
        }

    }
})

open_menu.onclick = () => {
    menu.classList.add('open')
}
close_menu.onclick = () => {
    menu.classList.remove('open')
}