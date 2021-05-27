import React from 'react'
import Header from '../Components/Header'
import Catnav from '../Components/Catnav'
import products from './products.json'
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css'
import {Link} from 'react-router-dom'




export default function Products() {


    return (
        <div className="container-fluid">
            <Header />
            <Catnav />


            <div className="row mt-3">
                <div className="col-md-2">
                    <div>
                        <p className="h3">Categories</p>
                        <div>
                            <input type="checkbox"></input> Elecronics
                        </div>
                        <div>
                            <input type="checkbox"></input> Elecronics
                        </div>

                        <div>
                            <input type="checkbox"></input> Elecronics
                        </div>

                        <div>
                            <input type="checkbox"></input> Elecronics
                        </div>


                        <div>
                            <input type="checkbox"></input> Elecronics
                        </div>
                        <div>
                            <input type="checkbox"></input> Elecronics
                        </div>

                        <div>
                            <input type="checkbox"></input> Elecronics
                        </div>
                    </div>

                    <div className="mt-3">
                        <p className="h3">Brands</p>
                        <div>
                            <input type="checkbox"></input> Apple
                        </div>
                        <div>
                            <input type="checkbox"></input> Apple
                        </div>

                        <div>
                            <input type="checkbox"></input> Apple
                        </div>

                        <div>
                            <input type="checkbox"></input> Apple
                        </div>


                        <div>
                            <input type="checkbox"></input> Apple
                        </div>
                        <div>
                            <input type="checkbox"></input> Apple
                        </div>

                        <div>
                            <input type="checkbox"></input> Apple
                        </div>
                    </div>

                    <div className="mt-3">
                        <p className="h3 mb-4">Price</p>
                        <InputRange
                            maxValue={2000}
                            minValue={100}
                            value={{ min: 150, max: 1600 }}
                            onChange={value => { console.log(value) }} />
                    </div>
                </div>
                <div className="col-md-10">
                    <p className="text-center h3">Products</p>
                    <div className="row">
                        {products.map(product => {
                            return (
                                <div className="col-md-3">
                                 <Link to={`/products/${product._id.$oid}`}>
                                 <div class="card product-slider ">
                                        <img src={`https://z.nooncdn.com/products/tr:n-t_400/${product.image_key}.jpg`} class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">{product.name}</h5>
                                            <p class="card-text">INR {product.price}</p>
                                            <button className="btn btn-outline-primary">
                                                <i class="fas fa-cart-plus"></i>
                                            </button>
                                            <button className="btn btn-outline-primary ml-2">
                                                <i class="far fa-heart "></i>
                                            </button>
                                        </div>
                                    </div>
                                 </Link>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

        </div>
    )
}
