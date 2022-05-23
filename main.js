
localStorage.setItem('name', 'Erick')
console.log(localStorage.getItem('name'))

//ao remover o local storage, null é retornado
// localStorage.removeItem('name')

// editar local storage
// localStorage.setItem('name', 'Vitor')
// console.log(localStorage.getItem('name'))


// settando cookies
// document.cookie = 'name=Diego'

// setando data para cookies
// document.cookie = 'name=John; expires=' + new Date(2023, 0, 1).toUTCString()

// document.cookie = 'LastName=Doe; expires=' + new Date(2023, 0, 1).toUTCString()

console.log(document.cookie)

function identify() {
  let input = document.getElementById('input').value
  document.cookie = `name= ${input}`
}

if (document.cookie !== '') {
  document.getElementById('text').innerHTML = 'Hello,  ' + document.cookie.split('; ').find(row => row.startsWith('name=')).split('=')[1] + '. I know who you are'
}

function forget() {
  document.cookie = 'name=; expires=' + new Date(1999, 0, 1).toUTCString()
}