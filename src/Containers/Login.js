import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <div className="container">
            <svg className="bg-svg-top " viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#8A3FFC" d="M26.4,17.1C14.6,35.6,-28,38.2,-37.5,21C-47,3.7,-23.5,-33.2,-2.2,-34.5C19.1,-35.8,38.1,-1.4,26.4,17.1Z"  />
            </svg>
            <div className="row">
                <div className="offset-md-3 col-md-6">
                    <div className="border p-4 mt-5 form-bg"> 
                    <p className="h3 text-center mt-1">Login</p>

                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" />
                            <p><Link to="/forgot-password">Forgot password</Link></p>
                        </div>

                        <button type="submit" class="btn btn-primary">Login</button>
                        <p className="mt-3">New user register <Link to="/register"> here</Link></p>

                    </div>


                </div>
            </div>
        </div>
    )
}
