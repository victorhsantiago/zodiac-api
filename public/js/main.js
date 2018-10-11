document.getElementById('form').addEventListener('submit', submitForm)

function getD() {
    let d = new Date(document.querySelector('#date').value)
    let day = d.getDate() + 1
    return day
}

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
            console.log(JSON.parse(xhr.responseText));
        }
    }
    xhr.send()
}

function postUser() {
    let xhr = new XMLHttpRequest()
    let method = 'POST'
    let url = `http://localhost:3000/user/`
    let params = {
        "name": document.querySelector('#name').value,
        "birthdate": document.querySelector('#date').value
    }

    console.log('params ', params)

    xhr.open(method, url, true)
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8')
    xhr.onload = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log(xhr.responseText);
        }
    }
    xhr.send(JSON.stringify(params))
}

function submitForm(e) {
    e.preventDefault()

    let name = document.querySelector('#name')
    let birthdate = document.querySelector('#date')

    console.log(name.value, birthdate.value)
    getSign()
    // postUser()
}