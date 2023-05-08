const ProductModel = require("./productmodel");
const router = require('express').Router();

// to add new product
router.post('/products', async(req,res)=>{
   
    try {
        const product = req.body;
        const createdProduct = await ProductModel.create(product);
        res.status(201).json(createdProduct);
      } catch (error) {
        res.status(400).json({ error: 'Bad request' });
      }
})

// to get all products
router.get('/products', async(req,res)=>{
    try {
        const products = await ProductModel.find();
        res.json(products);
      } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
      }
})

//to get a specific product through id
router.get('/products/:id', async(req,res)=>{
    try {
        const id = req.params.id;
        const product = await ProductModel.findById(id);
        if (!product) {
          res.status(404).json({ error: 'Product not found' });
        } else {
          res.json(product);
        }
      } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
      }
})

//to update a product
router.put('/products/:id',async (req,res)=>{
    try {
        const updatedProduct = await ProductModel.findByIdAndUpdate(req.params.id, req.body, {
          new: true,
          runValidators: true
        });
        if (!updatedProduct) {
          return res.status(404).json({ message: 'There is no product with that id' });
        }
      
        res.json(updatedProduct);
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
      }
})

//to delete a specific product
router.delete('/products/:id', async(req,res)=>{

    try {
        const deletedProduct = await ProductModel.findByIdAndDelete(req.params.id);
        if (!deletedProduct) {
          return res.status(404).json({ message: 'Product not found' });
        }
        res.json({message:"Product deleted successfully!!"});
      } catch (err) {
        console.error(err);
        res.status(204).json({ message: 'Server error' });
      }
})

module.exports=router;