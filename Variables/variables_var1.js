function test_fun(){
    {
    let x1 = "x1";
    var x2 = "x2";
    const x3 = "x3";

    console.log(x1);
    console.log(x2);
    console.log(x3);
    }
    console.log("Снаружи блока: " , x1);
    console.log("Снаружи блока: " , x2);
    console.log("Снаружи блока: ", x3);

}
    
test_fun();

/*
Внутри блока видны все переменные
Снаружи вина только x2(доступна в пределах функции)
Остальные not defined т.к let и const имеют блочную видимость 
*/
