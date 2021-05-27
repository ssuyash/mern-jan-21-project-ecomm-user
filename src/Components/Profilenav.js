import React from 'react'
import {Link} from 'react-router-dom'
export default function Profilenav() {
    return (
        <ul class="list-group ">
                        <li class="list-group-item">
                            <Link to="/orders">My Orders</Link>
                        </li>
                        <li class="list-group-item">
                            <Link to="/profile">My Profile</Link>
                        </li>

                        <li class="list-group-item">
                            <Link to="/change-password">Change Password</Link>
                        </li>


                        <li class="list-group-item">
                            <Link to="/wishlist">Wishlist</Link>
                        </li>
                        <li class="list-group-item">
                            <Link to="/notifications">Notifications</Link>
                        </li>
                        <li class="list-group-item">
                            <Link to="/logout">Logout</Link>
                        </li>
                    </ul>
    )
}
