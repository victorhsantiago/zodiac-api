document.getElementById('form').addEventListener('submit', submitForm)

function getD() {
    let d = new Date(document.querySelector('#date').value)
    console.log(`data ${d}`)
    let day = d.getDate() + 1
    return day
}

function getM() {
    let d = new Date(document.querySelector('#date').value)
    console.log(`data ${d}`)
    let month = d.getMonth() + 1
    return month
}

function findingSign() {
    let month = getM()
    console.log(month)

    return month
}

function getSign() {
    let xhr = new XMLHttpRequest()
    let method = 'GET'
    let url = `http://localhost:3000/signo/${findingSign()}`

    xhr.open(method, url, true)
    xhr.send()

    console.log(xhr)
    console.log("stringfy: " + JSON.stringify(xhr))
    console.log("responseText: " + xhr.responseText)
    // console.log(JSON.parse(xhr.responseText))
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