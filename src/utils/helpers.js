export const formatPrice = (price) => {
    // return new Intl.NumberFormat('en-US', {
    //     style: 'currency',
    //     currency: 'USD'
    // }).format(price/100)
    
    return (price / 100).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    })
}

export const getUniqueValues = () => {}
