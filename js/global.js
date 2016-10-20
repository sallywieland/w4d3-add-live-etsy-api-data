// build HTML visual element first in HTML/CSS and then move to
fetch('https://thinksaydo.com/tiyproxy.php?url=' + encodeURIComponent('https://openapi.etsy.com/v2/listings/active?api_key=h9oq2yf3twf4ziejn10b717i&keywords=' + encodeURIComponent('board game') + '&includes=Images,Shop'))
    .then(response => response.json())
    // .then(response => console.log(response))
    .then(response => response.results.forEach(function(item) {
        createResultCard(item)
    }))

// starter code to make sure things are working
function createResultCard(item) { // collects code to save for later // think of as a template
    var col = document.createElement('div')
    col.className = 'col-sm-3'

    var card = document.createElement('div')
    card.className = 'card'
    col.appendChild(card)

    var img = document.createElement('img')
    img.className = 'card_img img-responsive'
    img.src = item.Images[0].url_170x135
    card.appendChild(img)

    var span = document.createElement('span')
    span.innerHTML = item.title
    card.appendChild(span)

    var row = document.createElement('div')
    row.className = 'row'
    card.appendChild(row)

    // write in order of HTML as well to get correct order
    var colLeft = document.createElement('div')
    colLeft.className = 'col-xs-6 text-muted'
    colLeft.innerHTML = item.who_made
    row.appendChild(colLeft)

    var colRight = document.createElement('div')
    colRight.className = 'col-xs-6 text-right text-success'
    colRight.innerHTML = '$' + item.price
    row.appendChild(colRight)

    document.querySelector('#searchResults').appendChild(col)
}

// SEARCH BAR

var button = document.getElementById('buttonSearch')
var searchInput = document.getElementById('search')

button.addEventListener('click', search) // first: action second: related function
searchInput.addEventListener('keypress', searchEnter)

function searchEnter(event) { // will give you information about variable about what happened
    if (event.key === 'Enter') {
        search() // grabs from the search function we created below
    }
}

function search() {
    document.getElementById('searchResults').innerHTML = ''
    var searchTerm = document.querySelector('#search').value
    fetch('http://thinksaydo.com/tiyproxy.php?url=' + encodeURIComponent('https://openapi.etsy.com/v2/listings/active?api_key=h9oq2yf3twf4ziejn10b717i&keywords=' + encodeURIComponent(searchTerm) + '&includes=Images,Shop'))
        .then(response => response.json())
        .then(response => response.results.forEach(function(item) {
            createResultCard(item)
        }))
}
