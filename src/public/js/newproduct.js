document.addEventListener('DOMContentLoaded',()=>{
    "use strict";
    const prod = document.getElementById('loadProduct');
    prod.addEventListener('submit',(event)=>{
        event.preventDefault();
        const data =new FormData(prod);
        console.log(data)
        const payload = {
            title:data.get('title'),
            autor:data.get('autor'),
            year:data.get('year'),
            genere:data.get('genere'),
            price:data.get('price'),
            stock:data.get('stock'),
            code:data.get('code'),
            thumbnail:thumbnail.get('thumbnail')
        }
        fetch('api/products',{
            method: "POST", // Método HTTP
            headers: {
              "Content-Type": "application/json", // Tipo de contenido
            },
            body: JSON.stringify(payload), // Convierte el objeto en JSON
        }).then((response)=>{
            console.log(response)  // swal
        }).catch((e)=>{
            console.log(e)  // swal
        }).finally(()=>{
            prod.reset()
        })

    })
})