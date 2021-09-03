import data from '../data.js'

const ProductController ={
 getProduct (req, res){
        res.send(data.products);
    }
}

export default ProductController;