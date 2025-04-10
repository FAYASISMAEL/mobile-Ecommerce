function convertBase64(file){

    return new Promise((resolve,reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload = () => {
            resolve(fileReader.result)
        }

        fileReader.onerror = () => {
            reject(fileReader.error)
        }
    })
}

let images = document.getElementById('image_display');
let str = "";

// display image in the page

document.getElementById('images').addEventListener('change',async(e) => {
    const files = e.target.files;
    for(const file of files){
        const base64 = await convertBase64(file);
        str+=`<img src=${base64}></img><br>`
    }
    images.innerHTML=str
})

// sending data to backEnd

async function sendBack() {
    let name = document.getElementById('mobile-name');
    let brand = document.getElementById('band-name');
    let ram = document.getElementById('ram');
    let storage = document.getElementById('storage');
    let price = document.getElementById('price');
    let quantity = document.getElementById('qty');
    let color = document.getElementById('color');
}