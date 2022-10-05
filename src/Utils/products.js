const products = [
    {id: 1, title: "Vino1", category: 'Blancos', description: "Bebida", price: 400, pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_970914-MLA43407379794_092020-O.webp'}, 
    {id: 2, title: "Vino2", category: 'Blancos', description: "Bebida", price: 600, pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_970914-MLA43407379794_092020-O.webp'},
    {id: 3, title: "Vino3", category: 'Tintos', description: "Bebida", price: 800, pictureUrl: 'https://www.smartnfinal.com.mx/wp-content/uploads/2018/11/8226-vino-tinto-lambrusco-reunite-750-ml.jpg'},
    {id: 4, title: "Vino4", category: 'Tintos', description: "Bebida", price: 1000, pictureUrl: 'https://www.smartnfinal.com.mx/wp-content/uploads/2018/11/8226-vino-tinto-lambrusco-reunite-750-ml.jpg'}
];


export const getAllProducts = () => {
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            return resolve(products)
        }, 1000)
    })
    return promise
};

export const getProduct = (id) => {
    const promise = new Promise((resolve) => {
        const result = products.find((product) => product.id === parseInt(id))
        setTimeout(() => {
            return resolve(result)
        }, 1000)
    })
    return promise
};

export const getProductsByCategory = (categoryId) => {
    const promise = new Promise((resolve) => {
        const results = products.filter((product) => product.category === categoryId)  
        setTimeout(() => {
            return resolve(results)
        }, 1000)
    })
    return promise
};

