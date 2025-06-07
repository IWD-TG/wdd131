function isCardNumberValid(number) {
  // Only accepts one valid number for simplicity
  return number === '1234123412341234';
}

function displayError(msg) {
  document.querySelector('.errorMsg').innerHTML = msg;
}

function submitHandler(event) {
  event.preventDefault();
  let errorMsg = '';

  const cardNumber = this.cardNumber.value.replace(/\s+/g, '');

  displayError('');

  if (isNaN(cardNumber)) {
    errorMsg += 'Card number is not a valid number\n';
  } else if (!isCardNumberValid(cardNumber)) {
    errorMsg += 'Card number is not a valid card number\n';
  }

  if (errorMsg !== '') {
    displayError(errorMsg);
    return false;
  }

  alert('Card submitted successfully!');
  return true;
}

document.querySelector('#credit-card').addEventListener('submit', submitHandler);
