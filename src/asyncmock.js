export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(fetch('products.json'))
        }, 2000)
    })
}