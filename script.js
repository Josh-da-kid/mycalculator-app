let msg = document.getElementById('msg')
let beDivisible = document.getElementById('division')

function display(val){

     document.getElementById('result').value += val
}

function solve(){

let x = document.getElementById('result').value

        if (String(x).endsWith('/0')) {
        msg.textContent = 'Division by 0 is undefined';
        return;
         }
 
       if (/[^0-9+\-*/.]/.test(x)) {
        msg.textContent = 'Text or unsupported characters detected';
        document.getElementById('result').value = '';
        return;
        }
      if (!/[0-9]/.test(x)) {
        msg.textContent = 'Expression must include numbers';
        document.getElementById('result').value = '';
        return;
        }

        if (/[+\-*/]{2,}/.test(x)) {
            let invalid = /([+\-*/]{2,})/.exec(x)?.[1];
            if (invalid && /[+\-*/]{2}/.test(invalid)) {
              msg.textContent = "Malformed expression";
              document.getElementById('result').value = '';
              return;
            }
          }
      
      

    let y = eval(x);


    document.getElementById('result').value = y

    
}

function clearScreen() {
 document.getElementById("result").value = ""
 msg.textContent = ""
}