document.querySelector('form input').oninvalid = () =>{  
    
    this.setCustomValidity("");
    
    if (!this.validity.valid) {

        this.setCustomValidity("O campo está inválido!");
     }
 };