import React from 'react'
import Header from '../Components/Header'
import Catnav from '../Components/Catnav'
import ReactStars from "react-rating-stars-component";


export default function Product() {
    return (
        <div className="container-fluid">
            <Header />
            <Catnav />

            <section className="row mt-5">
                <div className="col-md-4">
                    <div className="borderd">
                        <img src="http://source.unsplash.com/random/450x450" />
                    </div>
                </div>
                <div className="col-md-8">
                    <h1 className="text-secondary">This is the heading or Title of the product</h1>
                    <p>by Apple</p>
                    <ReactStars
                        count={5}
                        onChange={() => { }}
                        size={24}
                        activeColor="#ffd700"
                    />
                    <p className="h5 mt-3">INR 3456</p>
                    <p>
                        lorem ipsum dolor sit amet, consectet lorem ipsum dolor sit amet
                    </p>
                    <ul>
                        <li>Feature 1</li>
                        <li>Feature 1</li>
                        <li>Feature 1</li>
                        <li>Feature 1</li>
                        <li>Feature 1</li>
                        <li>Feature 1</li>
                    </ul>
                    <button className="btn btn-primary">Add to Cart</button>

                    <button className="btn btn-outline-secondary ml-3">Save to Wishlist</button>

                </div>
            </section>


        </div>
    )
}
