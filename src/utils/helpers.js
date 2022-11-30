export const formatPrice = (price) => {
  // return new Intl.NumberFormat('en-US', {
  //     style: 'currency',
  //     currency: 'USD'
  // }).format(price/100)

  return (price / 100).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
};

export const getUniqueValues = (products, type) => {
  let uniqe = products.map((product) => product[type]);
  if (type === 'colors') {
    uniqe = uniqe.flat();
    uniqe = [...new Set(uniqe)];
  } else {
    uniqe = ['all', ...new Set(uniqe)];
  }
  return uniqe;
};

export function getTotals(cart) {
  let totals = cart.reduce((total,item) => {
    total.totalAmount += item.amount
    total.totalPrice += item.price * item.amount
    return total
  }, {
    totalAmount: 0,
    totalPrice: 0,
  });

  return totals
}


function isInViewport(element) {
  if (!element) {
    return false;
  }
  let rec = element.getBoundingClientRect();
  return rec.top-50 < window.innerHeight;
}

export function showElement(element) {
  if (!element) return
  if (isInViewport(element)) {
    element.classList.remove('hidden')      
  } else {
    element.classList.add('hidden')      
    
  }
}