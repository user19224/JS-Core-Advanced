
try{
    function checkNumber(x){
      
        if(!Number.isInteger(x)){
            throw new Error('Your number is not integer');
        }
        console.log(x);
    }

    checkNumber(4);
    checkNumber(5.6);

}catch(e){
    console.log(e.name + ": " + e.message);
}
