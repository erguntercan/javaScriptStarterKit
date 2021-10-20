console.log("merhaba javascript")
//let var yerine değişken tanımlarken kullanılır.
let dolarDun = 9.20
let dolarBugun = 9.30
const fiyat=200
//const le sabit tanımlanır

//array
let konutKredileri=["konut kredisi","kamu kkonut kredisi", "emlak"]

for(let i=0;i<konutKredileri.length;i++){
console.log("<ul>")
    for (let i = 0; i < 3; i++) {
        console.log("<li>" +konutKredileri[i]+ "</li>")
        
    }

console.log("</ul>")
    

}