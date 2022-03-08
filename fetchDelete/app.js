const deleteSuplier =()=>{
    const supplierId=document.querySelector('#supplierId')?.value
    if(supplierId){
        const requestOptions= {
            method: 'DELETE',
            headers : {
                'Content-Type': 'application/json',

            },
        }
        fetch(`https://northwind.vercel.app/api/suppliers/${supplierId}`, requestOptions)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            alert("silme başarılı")
        }).catch(err=>console.log(err))
    }
    else{
        console.log('required')
    }
}
const btn = document.querySelector('button')
btn.addEventListener('click', deleteSupplier)