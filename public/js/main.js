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
    let day = getD()
    let month = getM()
    let date = `${month}${day}`
    console.log(day)
    console.log(month)
    console.log(date)
    //Aries
    if ((date >= 321) && (date <= 419)) {
        return 1
    } else if ((date >= 420) && (date <= 520)) {
        return 2
    } else if ((date >= 521) && (date <= 620)) {
        return 3
    } else if ((date >= 621) && (date <= 722)) {
        return 4
    } else if ((date >= 723) && (date <= 822)) {
        return 5
    } else if ((date >= 823) && (date <= 922)) {
        return 6
    } else if ((date >= 923) && (date <= 1022)) {
        return 7
    } else if ((date >= 1023) && (date <= 1121)) {
        return 8
    } else if ((date >= 1122) && (date <= 1221)) {
        return 9
    } else if ((date >= 120) && (date <= 218)) {
        return 11
    } else if ((date >= 219) && (date <= 320)) {
        return 12
    } else {
        return 10
    }
}

function getSign() {
    let xhr = new XMLHttpRequest()
    let method = 'GET'
    let url = `http://localhost:3000/signs/${findingSign()}`

    xhr.open(method, url, true)
    xhr.send()

    console.log(xhr)
    console.log(xhr.response)
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
    postUser()
}