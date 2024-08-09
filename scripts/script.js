const URL = 'https://api.unsplash.com/photos/?client_id=SZUcInkHkFOC7JTtUbOVmciXeYfGu7NgBz_7vvul1kI';
const client_id = 'SZUcInkHkFOC7JTtUbOVmciXeYfGu7NgBz_7vvul1kI';

async function show () {
    let image = await getNewImage();
    imageToDisplay.src = image;
}
async function getNewImage() {
    return fetch(URL)
    .then ((response) => response.json())
    .then ((data) => {
        let img = data.results;
        return img.urls.regular;
    })
}

getNewImage();