function updateProductNumber(product , price, isIncrising){

     // case er tag k id diye dhora
    const productInput = document.getElementById( product + '-number');

    // case er input er vitor koto ache setar value ber kora

    let productNumber = productInput.value;

    // if else condition
    // ekhane shudu 1 plus kore jabe
   if(isIncrising == true){

    productNumber = parseInt(productNumber) + 1;
   }

//    ekhane 1 minus kore jabe kintu shunno er niche ar asbe na karon 0 er      theke joid choto hoy

   else if (productNumber > 0){

    productNumber = parseInt(productNumber) - 1;

   }

   productInput.value = productNumber;

   // --------update total-------


   const productTotal = document.getElementById(product + '-total');

    productTotal.innerText = productNumber * price;

    // -------calculate total---------

        calculateTotal();

}


function getInputValue(product){

    const productInput = document.getElementById(product + '-number');

    const productNumber = parseInt(productInput.value);

    return productNumber;

}

function calculateTotal(){

    

    const phoneTotal = getInputValue('phone') * 1219;

    const caseTotal = getInputValue('case') * 59;

    const subTotal = phoneTotal + caseTotal;

    const tax       = subTotal / 10; 

    const totalPrice = subTotal + tax;

    // update on the html

    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;

    
}








    // -----phone-plus increase dicrease event handle-------

    document.getElementById('phone-plus').addEventListener('click', function(){

        updateProductNumber('phone' ,1219, true);
    })


    // -------------phone-minus dicrease event handle-----

    document.getElementById('phone-minus').addEventListener('click' , function(){
        updateProductNumber('phone', 1219, false);
    })




// --------case-plus increase dicrease event handle---------

document.getElementById('case-plus').addEventListener('click' , function(){

    updateProductNumber('case' ,59, true);
   
})

// -------case-minus increase deicrease event handle--------

document.getElementById('case-minus').addEventListener('click' , function(){

    updateProductNumber('case' ,59, false);

   
    
})