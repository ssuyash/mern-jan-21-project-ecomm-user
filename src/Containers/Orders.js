import React from 'react'
import Header from '../Components/Header'
import Catnav from '../Components/Catnav'
import Profilenav from '../Components/Profilenav'
import { Link } from 'react-router-dom'


export default function Orders() {
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
                        <p className="h6"> Order # : 123123</p>
                            <div className="item-container row ">
                               
                                <div className="col-md-2">
                                    <img src="http://source.unsplash.com/random/150x150"></img>
                                </div>
                                <div className="col-md-10">
                                    <p className="h5"> MI Smart TV (M37647)</p>
                                    <p>by MI</p>
                                    <p> MRP : <strike>12344</strike> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Order Price : 9999</p>
                                    
                                    <div class="d-flex justify-content-between">
                                        <p>Order Date : <span>06-05-2021</span></p>
                                    <p>Delivered</p>
                                    </div>
                                </div>
                            </div>


                            <div className="item-container row mt-2 ">
                               
                               <div className="col-md-2">
                                   <img src="http://source.unsplash.com/random/150x150"></img>
                               </div>
                               <div className="col-md-10">
                                   <p className="h5"> MI Smart TV (M37647)</p>
                                   <p>by MI</p>
                                   <p> MRP : <strike>12344</strike> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Order Price : 9999</p>
                                   
                                   <div class="d-flex justify-content-between">
                                       <p>Order Date : <span>06-05-2021</span></p>
                                   <p>Delivered</p>
                                   </div>
                               </div>
                           </div>
                        
                        <p className="h6">Item Total : 24680</p>
                        </div>


                        <div className="border p-4 col-md-12  form-bg">
                        <p className="h6"> Order # : 123123</p>
                            <div className="item-container row ">
                               
                                <div className="col-md-2">
                                    <img src="http://source.unsplash.com/random/150x150"></img>
                                </div>
                                <div className="col-md-10">
                                    <p className="h5"> MI Smart TV (M37647)</p>
                                    <p>by MI</p>
                                    <p> MRP : <strike>12344</strike> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Order Price : 9999</p>
                                    
                                    <div class="d-flex justify-content-between">
                                        <p>Order Date : <span>06-05-2021</span></p>
                                    <p>Delivered</p>
                                    </div>
                                </div>
                            </div>


                            <div className="item-container row mt-2 ">
                               
                               <div className="col-md-2">
                                   <img src="http://source.unsplash.com/random/150x150"></img>
                               </div>
                               <div className="col-md-10">
                                   <p className="h5"> MI Smart TV (M37647)</p>
                                   <p>by MI</p>
                                   <p> MRP : <strike>12344</strike> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Order Price : 9999</p>
                                   
                                   <div class="d-flex justify-content-between">
                                       <p>Order Date : <span>06-05-2021</span></p>
                                   <p>Delivered</p>
                                   </div>
                               </div>
                           </div>
                        
                        <p className="h6">Item Total : 24680</p>
                        </div>

                        <div className="border p-4 col-md-12  form-bg">
                        <p className="h6"> Order # : 123123</p>
                            <div className="item-container row ">
                               
                                <div className="col-md-2">
                                    <img src="http://source.unsplash.com/random/150x150"></img>
                                </div>
                                <div className="col-md-10">
                                    <p className="h5"> MI Smart TV (M37647)</p>
                                    <p>by MI</p>
                                    <p> MRP : <strike>12344</strike> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Order Price : 9999</p>
                                    
                                    <div class="d-flex justify-content-between">
                                        <p>Order Date : <span>06-05-2021</span></p>
                                    <p>Delivered</p>
                                    </div>
                                </div>
                            </div>


                            <div className="item-container row mt-2 ">
                               
                               <div className="col-md-2">
                                   <img src="http://source.unsplash.com/random/150x150"></img>
                               </div>
                               <div className="col-md-10">
                                   <p className="h5"> MI Smart TV (M37647)</p>
                                   <p>by MI</p>
                                   <p> MRP : <strike>12344</strike> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Order Price : 9999</p>
                                   
                                   <div class="d-flex justify-content-between">
                                       <p>Order Date : <span>06-05-2021</span></p>
                                   <p>Delivered</p>
                                   </div>
                               </div>
                           </div>
                        
                        <p className="h6">Item Total : 24680</p>
                        </div>
                    </div>



                </div>




            </div>



        </div>
    )
}
