import React from 'react'
import Header from '../Components/Header'
import Catnav from '../Components/Catnav'
import Profilenav from '../Components/Profilenav'
import { Link } from 'react-router-dom'


export default function Wishlist() {
    return (
        <div className="container-fluid">
            <Header />
            <Catnav />


            <div className="row mt-3">
                <div className="col-md-3">
                    <Profilenav />
                </div>



                <div className="col-md-9">

                    <div className="row">
                        <div className="border p-4 col-md-12  form-bg">
                            <div className="item-container row ">

                                <div className="col-md-2">
                                    <img src="http://source.unsplash.com/random/100x100"></img>
                                </div>
                                <div className="col-md-10">
                                    <p className="h5"> MI Smart TV (M37647)</p>
                                    <p>by MI</p>
                                    <p> MRP : <strike>12344</strike> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Price : 9999</p>
                                    <button class="btn px-0 text-primary">Remove</button>

                                </div>
                            </div>
                        </div>



                        <div className="border p-4 col-md-12  form-bg">
                            <div className="item-container row ">

                                <div className="col-md-2">
                                    <img src="http://source.unsplash.com/random/100x100"></img>
                                </div>
                                <div className="col-md-10">
                                    <p className="h5"> MI Smart TV (M37647)</p>
                                    <p>by MI</p>
                                    <p> MRP : <strike>12344</strike> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Price : 9999</p>
                                    <button class="btn px-0 text-primary">Remove</button>

                                </div>
                            </div>
                        </div>


                           <div className="border p-4 col-md-12  form-bg">
                            <div className="item-container row ">

                                <div className="col-md-2">
                                    <img src="http://source.unsplash.com/random/100x100"></img>
                                </div>
                                <div className="col-md-10">
                                    <p className="h5"> MI Smart TV (M37647)</p>
                                    <p>by MI</p>
                                    <p> MRP : <strike>12344</strike> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Price : 9999</p>
                                    <button class="btn px-0 text-primary">Remove</button>

                                </div>
                            </div>
                        </div>


                          </div>



                </div>




            </div>



        </div>
    )
}
