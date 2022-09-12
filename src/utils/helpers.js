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

export const getUniqueValues = (products, type) => {
    let uniqe = products.map(product => product[type])
    if (type === 'colors') {
        uniqe = uniqe.flat()
    }
    uniqe = ['all', ...new Set(uniqe)]
    return uniqe
}
