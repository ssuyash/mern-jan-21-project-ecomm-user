import React from 'react'
import Header from '../Components/Header'
import Catnav from '../Components/Catnav'
import Profilenav from '../Components/Profilenav'
import {Link} from 'react-router-dom'


export default function Profile() {
    return (
        <div className="container-fluid">
            <Header />
            <Catnav />


            <div className="row mt-3">
                <div className="col-md-3">
                   <Profilenav/> 
                </div>
                <div className="col-md-6 offset-md-1">
                
                    <div className="border p-4 form-bg">
                        <p className="h3 text-center mt-2">Profile</p>

                        <div class="form-group">
                            <label for="exampleInputPassword1">Your Name</label>
                            <input type="text" class="form-control" id="inputUserName" placeholder="Your Name" />
                        </div>


                        <div class="form-group">
                            <label for="exampleInputPassword1">Email</label>
                            <input type="text" class="form-control" id="inputUserName" placeholder="Your Name" />
                        </div>

                      

          

                        <button type="submit" class="btn btn-primary">Update Profile</button>

                    </div>


                </div>
            </div>
       
              

        </div>
    )
}
