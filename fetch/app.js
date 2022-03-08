//fetch istek atmak için kullanılan kütüphane 
//ajax için jquery yüklenmesi gerekir ama fetch gömülüdür 
// dönüş tipi promise 
//  fetch("http://northwind.vercel.app/api/suppliers")
//  .then (response=>response.json())
//  .then(data=>console.log(data))
//  .catch(err=>console.Console("custom err",err))


// products name tek kelime ise kırmızı görünsün
fetch("https://northwind.vercel.app/api/products")
    .then(response => response.json())
    .then(data => {
        const length = data.length;
        for (let i = 0; i < length; i++) {
            const element = data[i];
            const name = element.name;
            const liElement = document.createElement('li');
            if (!name.includes(' ')) {
                liElement.style.color = "red"
            }
            liElement.innerText = name.toUpperCase();
            document.querySelector('#suppliers').appendChild(liElement);
        }
    })