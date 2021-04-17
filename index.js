// console.log('Hello World')

let formBtn = document.getElementById('close-form');

let form = document.querySelector('.form');

let nameInput = document.getElementById('name');

let emailInput = document.getElementById('email');

let emailList = [];

let validateForm = () => {
    if (Boolean(nameInput.value) === false && Boolean(emailInput.value) === false){
        nameInput.style.border = '2px solid red';
        emailInput.style.border = '2px solid red';
        window.alert('You must enter a name and email address to subscribe!')
    } else if (Boolean(nameInput.value) === false){
        nameInput.style.border = '2px solid red';
        window.alert('You must enter a name to subscribe!')
    } else if (Boolean(emailInput.value) === false){
        emailInput.style.border = '2px solid red';
        window.alert('You must enter an email to subscribe!')
    } else {
        let userName = nameInput.value;
        let userEmail = emailInput.value;
        emailList.push({userName,userEmail});
        displayThankYou()
    }
}

form.addEventListener('submit',function cb(event){
    event.preventDefault()
    validateForm()
    // console.log(emailList)
})

let formContainer = document.querySelector('.form-container');
const formDup = formContainer.cloneNode(true); //Object.assign({},formContainer);
// console.log(formDup)

function displayThankYou(){
    formContainer.innerText = 'Thank you for subscribing!'
    // console.log(formDup)
    setTimeout(function(){
        // formContainer.innerHTML.remove()
        // console.log(formContainer.innerHTML) 
        formContainer.innerHTML = formDup.innerHTML;
        formBtn = document.getElementById('close-form');
        form = document.querySelector('.form');
        nameInput = document.getElementById('name');
        emailInput = document.getElementById('email');
    },3000)
}

let toggler = () => {
    form.classList.toggle('hide')
    formBtn.innerText === 'X' ? formBtn.innerText = '+' : formBtn.innerText = 'X';
}

nameInput.addEventListener('change',function(){
    nameInput.style.border = 'none';
    emailInput.style.border = 'none';
})

let cart = document.createElement('div')
let main = document.querySelector('main')
let cartItems = 0;

function addToCart(){
    if (cartItems === 0){
        cartItems = 1;
        cart.setAttribute('cart-display',cartItems);
        cart.innerText = 'Your Cart: 1 item';
        main.appendChild(cart);
        // console.log(cartItems)
    } else{
        cartItems += 1;
        cart.innerText = `Your Cart: ${cartItems} items`
        // console.log(cartItems)
    }
}