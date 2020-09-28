const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value
    document.getElementById('location').textContent = 'Loding....'
    document.getElementById('forecast').textContent = ''
    
    const url = '/weather?address=' + location

        fetch(url).then((response) => {
            response.json().then((data) => {
            if(data.error) {
                document.getElementById('location').textContent = data.error
            } else {
                document.getElementById('location').textContent = data.location
                document.getElementById('forecast').textContent = data.forecast
            }
            })
        })
})    