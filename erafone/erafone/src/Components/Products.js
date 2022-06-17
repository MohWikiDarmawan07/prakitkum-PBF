import React, { useContext } from 'react'
import { ProductsContext } from '../Global/ProductsContext'
import { CartContext } from '../Global/CartContext'

export const Products = () => {

    const { products } = useContext(ProductsContext);

    const { dispatch } = useContext(CartContext);

    return (
        <>
            {products.length !== 0 && <h1 align="center">Galeri Kami <hr /></h1>}
            <div className='products-container'>
                {products.length === 0 && <div>Internet Anda Lemot Mohon Tunggu</div>}
                {products.map(product => (
                    <div className='product-card' key={product.ProductID}>
                        <div className='product-img'>
                            <img src={product.ProductImg} alt="not found" />
                        </div>
                        <div className='product-name'>
                            {product.ProductName}
                        </div>
                        <div className='product-price'>
                            Rp {product.ProductPrice}.00,-
                    </div>
                        <button className='addcart-btn' onClick={() => dispatch({ type: 'ADD_TO_CART', id: product.ProductID, product })}>Tambahkan Produk</button>
                    </div>
                ))}
                <hr />
            </div>
        </>
    )
}
