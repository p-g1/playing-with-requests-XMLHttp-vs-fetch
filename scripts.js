fetch('https://ghibliapi.herokuapp.com/films')
    .then((response) => {
        response.json().then((data) => { 
            data.forEach(movie => {
                console.log(movie.title);
            })
        });
    });


// var request = new XMLHttpRequest();

// request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

// request.onload = function() {
//     var data = JSON.parse(this.response);

//     data.forEach(movie => {
//         console.log(movie.title);
//     })
// }

// request.send();