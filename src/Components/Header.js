import React from 'react'
import logo from '../assets/logo.png'

export default function Header() {
    return (
        <div className="row py-1 header bg">
            <div className="col-md-3 logo">
                <a>
                    <img src={logo}/>
                </a>
            </div>
            <div className="col-md-4 mt-custom ">
                <div className="form-group">
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
            </div>
            <div className="col-md-5 mt-custom text-white">
                <ul class="list-inline text-right d-flex justify-content-end">
                    <li class="list-inline-item px-2">Cart</li>
                    <li class="list-inline-item px-2">Notifications</li>
                    <li class="list-inline-item px-2">Username</li>
                </ul>
            </div>
        </div>
    )
}
