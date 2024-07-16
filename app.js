const clientId = `IvbMghKxN0pdegdJGnZZ9rSLThS9qdWn5lzg8abY5NY`
const endpoint = `https://api.unsplash.com/photos/random/?client_id=${clientId}`

let imageElement = document.querySelector('#unsplashImage')
let btn = document.querySelector('button')

function getImage(){
    fetch(endpoint).then((response) => response.json())
    .then((data) => imageElement.src = data.urls.regular)
    .catch((error) => console.log('Error : ',error));
}
getImage();

btn.addEventListener('click',(event)=>{
    getImage()
})