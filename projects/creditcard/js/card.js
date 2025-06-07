function isCardNumberValid(number) {
    
    return number === '1234123412341234';
}

function displayError(msg) {
    document.querySelector('.errorMsg').innerHTML = msg;
}

function submitHandler(event) {
    event.preventDefault();
    let errorMsg = ''; 

    
    const cardNumber = this.cardNumber.value.replace(/\s+/g, ''); 
    const expMonthStr = this.expMonth.value; 
    const expYearStr = this.expYear.value; 

    displayError(''); 

    
    if (isNaN(cardNumber) || cardNumber.length !== 16) {
        errorMsg += 'Card number must be exactly 16 digits and numeric.\n';
    } else if (!isCardNumberValid(cardNumber)) {
        
        errorMsg += 'Card number is not a valid card number.\n';
    }

    
    const expMonth = parseInt(expMonthStr, 10);
    const expYear = parseInt(expYearStr, 10);

    
    if (isNaN(expMonth) || expMonth < 1 || expMonth > 12 || expMonthStr.length !== 2) {
        errorMsg += 'Expiration month must be a 2-digit number (e.g., 01 for January) between 01 and 12.\n';
    }

    if (isNaN(expYear) || expYear < 0 || expYear > 99 || expYearStr.length !== 2) {
        errorMsg += 'Expiration year must be a 2-digit number (e.g., 25 for 2025).\n';
    }

    
    if (errorMsg === '') {
        const currentMoment = new Date(); 

        
        const fullExpYear = 2000 + expYear;

        const expirationEndOfMonth = new Date(fullExpYear, expMonth, 0);

        
        if (expirationEndOfMonth < currentMoment) {
            errorMsg += 'Expiration date cannot be in the past.\n';
        }
    }

    
    if (errorMsg !== '') {
        displayError(errorMsg);
        return false; 
    }

    
    alert('Card submitted successfully!');
    return true; 
}


document.querySelector('#credit-card').addEventListener('submit', submitHandler);