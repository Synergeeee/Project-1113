let totalAmount = 0.00;

function cartb(item) {
    let price = 0.00;
    
    switch(item) {

        case 'mham':
            price = 4.29;
            break;

        case 'msoda':
            price = 1.24;
            break;

        case'mcomb':
            price= 7.99;
            break;

        case 'mfries':
            price = 1.99;
            break;
            
    }

    totalAmount += price;
    document.getElementById('totalAmount').innerText = totalAmount.toFixed(2);
}