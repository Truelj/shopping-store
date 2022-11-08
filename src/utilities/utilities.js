export function calculatePrice(price, currencyFilter){
    switch(currencyFilter) {   
        case 'EUR':
            return (price * 1).toFixed(2);
        case 'CAD':
            return (price * 1.35).toFixed(2);
        default:
            return price.toFixed(2);    
    }
}

export function getCurrencySymbol(currencyFilter) {
    switch (currencyFilter) {
      case 'USD':
        return '$';
      case 'EUR':
        return '€';
      case 'CAD':
        return '$';
      default:
        return '';
    }
  }

  export function getTotalPrice(cartObject){
    let total = 0;
    for(const item in cartObject){
      //calculate the displayed price 
      total += cartObject[item].quantity * cartObject[item].price;
  }
    return total;
  }