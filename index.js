const dwj = document.getElementById("dwj");
const sel = document.getElementById("product");
const sn = document.getElementById("sn");

const randomNameGenerator = num => {
    let res = '';
    for(let i = 0; i < num; i++){
        
       var random;
       if(Math.random() > 0.5)
        random = 97 + Math.floor(Math.random() * 26);
        else
        random = 48 + Math.floor(Math.random() * 10);
       res += String.fromCharCode(random);
    };
    return res;
 };

dwj.addEventListener("click", function() {
    var len = sel.value;
    sn.innerHTML = `Numer seryjny: ${randomNameGenerator(len).toUpperCase()}`;
});