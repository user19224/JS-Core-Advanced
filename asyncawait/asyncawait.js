

async function getData(){
    try{

        const responce = await fetch('http///')
        const data = await responce.json()

        return data

    }catch(err){
            console.log(err.name + err.message)
    }
}

getData().then((data)=>{
    console.log(data)
}

)
