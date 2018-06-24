const socket = io.connect('http://localhost:4000/')

const box = document.getElementById('box')
const name = document.getElementById('name')
const message = document.getElementById('message')
const btn = document.getElementById('btn')

btn.addEventListener("click", () => {
    socket.emit('msg', {
        name: name.value,
        message: message.value
    })
    message.value = ''
})

socket.on('msg', (data) => {
    box.innerHTML += `<strong>${data.name}</strong>: ${data.message}<br>`
})
