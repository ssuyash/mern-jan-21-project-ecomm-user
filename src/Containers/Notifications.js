import React from 'react'
import Header from '../Components/Header'
import Catnav from '../Components/Catnav'
import Profilenav from '../Components/Profilenav'
import { Link } from 'react-router-dom'


export default function Notifications() {
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
                        <div className=" col-md-12  form-bg mt-2">
                            <div className="d-flex justify-content-between py-2">
                                <p className="m-0">lorem ipsum dolor sit amet kdjflkdfjlskdfj</p>
                                <p className="m-0">12-05-2021 12:55</p>
                            </div>
                        </div>


                        <div className=" col-md-12  form-bg mt-2">
                            <div className="d-flex justify-content-between py-2">
                                <p className="m-0">lorem ipsum dolor sit amet kdjflkdfjlskdfj</p>
                                <p className="m-0">12-05-2021 12:55</p>
                            </div>
                        </div>


                        <div className=" col-md-12  form-bg mt-2">
                            <div className="d-flex justify-content-between py-2">
                                <p className="m-0">lorem ipsum dolor sit amet kdjflkdfjlskdfj</p>
                                <p className="m-0">12-05-2021 12:55</p>
                            </div>
                        </div>


                        <div className=" col-md-12  form-bg mt-2">
                            <div className="d-flex justify-content-between py-2">
                                <p className="m-0">lorem ipsum dolor sit amet kdjflkdfjlskdfj</p>
                                <p className="m-0">12-05-2021 12:55</p>
                            </div>
                        </div>









                    </div>



                </div>




            </div>



        </div>
    )
}
