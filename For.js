/**
for (BaşlangıçAtaması; Koşulİfadesi; döngüSonundaÇalışacakİfade) 
 
    {"Koşul sağlanıyorsa(true) çalışmasını istediğim komutlar."};

    "Koşul sağlanmazsa(false) döngüden çıkılır."
 */

    //ÖRNEKLER VE ÖDEVLER
//Örnek : 10'dan 0'a kadar olan sayıları geriye doğru olacak şekilde konsola yazdıralım.


let x = 10;

for(; x >= 0; x--){
    //dökümana yazdıralım
    const numberlistDOM = document.querySelector("#ornek1")
    let liDOM =document.createElement('li')
    liDOM.innerHTML=x
    numberlistDOM.appendChild(liDOM)
    //consola yazdıralım
    console.log(x)
}

//Ödev 1: 20 ile 40 arasındaki tüm sayıları konsola yazdırın.

let y = 20;

for(; y <= 40; y++){
    //dökümana yazdıralım
    const numberlistDOM2 = document.querySelector("#ornek2")
    let liDOM2 =document.createElement('li')
    liDOM2.innerHTML=y
    numberlistDOM2.appendChild(liDOM2)
    //consola yazdıralım
    console.log(x)
}

//Örnek 2: 0 ve 50 sayıları arasından çift olanları konsola yazdıralım.

x =0;

for(; x <= 50; x++){
    if(x % 2 == 0){
    //dökümana yazdıralım
    const numberlistDOM = document.querySelector("#ornek3")
    let liDOM =document.createElement('li')
    liDOM.innerHTML=x
    numberlistDOM.appendChild(liDOM)
    //consola yazdıralım
    console.log(x)
    }
}

//Ödev 2: 0 ve 50 sayıları arasından tek olanları console'a yazdıralım.

x =0;

for(; x <= 50; x++){
    if(x % 2 == 1){
    //dökümana yazdıralım
    const numberlistDOM = document.querySelector("#ornek4")
    let liDOM =document.createElement('li')
    liDOM.innerHTML=x
    numberlistDOM.appendChild(liDOM)
    //consola yazdıralım
    console.log(x)
        
        
    }
}
