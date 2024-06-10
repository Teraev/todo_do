
function reload(arr, component, place) {
    place.innerHTML = ""
    
        let add = document.getElementById('item.categotie')
const container = document.querySelector('.container')
    for(let item of arr) {
    
            if(item === add) {
                let task = document.createElement('div')
                let names = document.createElement('div')
                let ul = document.createElement('ul')
                let img = document.createElement('img')
                let p = document.createElement('p')
                let li = document.createElement('li')
        
                task.classList.add('task')
                names.classList.add('names')
        
                li.innerHTML = item.title
                p.innerHTML = `Due: ${item.deadline}`
        
                ul.append(li)
                names.append(ul, p)
                task.append(input, names, img)
                container.append(task)
            }
         
        
        place.append(component(item))
    }
}


function submit(form, arr) {
    let data = {
        id: crypto.randomUUID()
    }

    const fm = new FormData(form)

    fm.forEach((val, key) => data[key] = val)

    arr.push(data);
}



export {reload, submit}