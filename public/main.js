document.getElementById('submit').addEventListener('click', () => {
    console.log('working')
    let id = document.getElementById('serial').value;
    let name = document.getElementById('name').value;
    getAll()
    // getOne(id)
    // update(name)
    // put(id, name)
    // destroy(id)
})

async function getAll() {
    let result = await fetch('http://localhost:8053/hello')
    let data = await result.json()
    console.log(data)
}

async function getOne(id) {
    let result = await fetch(`http://localhost:8053/hello/${id}`)
    let data = await result.json()
    console.log(data)
}

async function update(name) {
    let postObj = {name: name}
    let result = await fetch('http://localhost:8053/hello/', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(postObj)
    })
    let data = await result.json()
    console.log(data)
}

async function put(id, name) {
    let putObj = {name:name};
    let result = await fetch(`http://localhost:8053/hello/${id}`, {
        method:'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(putObj)
    })
    let data = await result.json()
    console.log(data)
}

async function destroy(id) {
    let result = await fetch(`http://localhost:8053/hello/${id}`, {
        method: 'DELETE'
    })
    let data = await result.json()
    console.log(data)
}