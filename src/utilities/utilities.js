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
  