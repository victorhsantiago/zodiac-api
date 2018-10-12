document.getElementById('form').addEventListener('submit', submitForm)

function getM() {
    let d = new Date(document.querySelector('#date').value)
    let month = d.getMonth() + 1
    return month
}

function getSign() {
    let xhr = new XMLHttpRequest()
    let method = 'GET'
    let url = `http://localhost:3000/signo/${getM()}`

    xhr.open(method, url, true)
    xhr.onload = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            result = JSON.parse(xhr.responseText);
            document.querySelector('#signo').innerHTML = result.starSign
            document.querySelector('#description').innerHTML = result.description
            postUser()
        }
    }
    xhr.send()
}

function postUser() {
    let xhr = new XMLHttpRequest()
    let method = 'POST'
    let url = `http://localhost:3000/user/`

    xhr.open(method, url, true)
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8')
    let params = {
        "name": document.querySelector('#name').value,
        "birthdate": document.querySelector('#date').value,
        "starSign": document.querySelector('#signo').innerHTML,
        "description": document.querySelector('#description').innerHTML
    }
    console.log('params ', params)
    xhr.send(JSON.stringify(params))
}

function submitForm(e) {
    e.preventDefault()

    let name = document.querySelector('#name')
    let birthdate = document.querySelector('#date')

    console.log(name.value, birthdate.value)
    getSign()
}

// Modal
let modal = document.getElementById('modal1')
let btn = document.getElementById('btn')
let span = document.getElementById('close')

btn.onclick = function () {
    modal.style.display = "block"
}

span.onclick = function () {
    modal.style.display = "none"
}

window.onclick = function (e) {
    if (e.target == modal) {
        modal.style.display = "none"
    }
}