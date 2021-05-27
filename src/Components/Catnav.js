import React from 'react'
import {Link} from 'react-router-dom'

export default function Catnav() {
    return (
        <div className="row">
            <div className="col-md-12 py-3 cat-bg">
                <ul className="d-flex list-unstyled justify-content-between">
                    <li><Link href="#">Electronics</Link></li>
                    <li><Link href="#">Electronics</Link></li>
                    <li><Link href="#">Electronics</Link></li>
                    <li><Link href="#">Electronics</Link></li>
                    <li><Link href="#">Electronics</Link></li>
                    <li><Link href="#">Electronics</Link></li>
                    <li><Link href="#">Electronics</Link></li>
                    <li><Link href="#">Electronics</Link></li>
                </ul>
            </div>
        </div>
    )
}
