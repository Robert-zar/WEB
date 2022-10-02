let collection = document.querySelectorAll('.photo');
let url = 'https://c.wallhere.com/photos/fc/9a/1366x768_px_Canada_landscape_mountain_stars_Trees-1080526.jpg!d';

setInterval(function () {
    for (let i = 0; i < collection.length; i++) {
        const item = collection[i];
        if (item.childElementCount) {
            item.firstChild.remove();
        }
    };
    rndImage();
}, 100);


function rndImage() {
    let rnd = Math.floor(Math.random() * Math.floor(collection.length));
    if (collection[rnd].childElementCount) return false;
    let img = document.createElement('img');
    img.src = url;
    collection[rnd].appendChild(img);
};