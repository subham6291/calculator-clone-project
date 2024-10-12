
let string = "";  
let buttons = document.querySelectorAll('.button, .button1, .button2');

buttons.forEach(button => {
  button.addEventListener('click', (e) => {
    
    
    if (e.target.innerHTML === '=') {
      try {
        
        string = eval(string.replace(/x/g, '*').replace(/÷/g, '/')); 
        document.querySelector('#display').value = string; 
      } catch (error) {
        
        console.error("Error evaluating expression: ", error);
        string = ""; 
        document.querySelector('#display').value = "Error"; 
      }
    } else if (e.target.innerHTML === 'AC') {
      
      string = "";
      document.querySelector('#display').value = ""; 
    } else if (e.target.innerHTML === 'DE') {
      
      string = string.slice(0, -1); 
      document.querySelector('#display').value = string; 
    } else {
      console.log(e.target.innerHTML);  
      string += e.target.innerHTML; 
      document.querySelector('#display').value = string; 
    }
  });
})