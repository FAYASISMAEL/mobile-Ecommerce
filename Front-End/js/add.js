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
let img_arr = [];

// display image in the page

document.getElementById('images').addEventListener('change',async(e) => {
    const files = e.target.files;
    for(const file of files){
        const base64 = await convertBase64(file);
        str+=`<img src=${base64}></img><br>`
        img_arr.push(base64)
    };
    images.innerHTML=str
});

// sending data to backEnd

async function sendBack() {
    let name = document.getElementById('mobile-name');
    let brand = document.getElementById('band-name');
    let ram = document.getElementById('ram');
    let storage = document.getElementById('storage');
    let price = document.getElementById('price');
    let quantity = document.getElementById('qty');
    let color = document.getElementById('color');

    let data = {name,brand,ram,storage,price,quantity,color};

    // api request

    try {
        let option = {
            headers:{"Content-type" : "application/json"},
            method:"POST",
            body:JSON.stringify(data)
        }
        const response = await fetch('/api/add',option);

        if(response.status==201){
            alert("Data Added Successfully");
        }
        else{
            alert("Please fill all the fields");
            console.log(response.error);
            
        }
    } catch (error) {
        console.log(error);
        
    }
}