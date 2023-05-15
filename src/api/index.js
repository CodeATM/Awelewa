const URL = "http://localhost:3000/shop.json";


export const getProduct = async () => {
    try {
        const {data}= await fetch("http://localhost:3000/shop.json")

        return data; 
        
    } catch (error) {
        console.log(error)
    }
}; 

