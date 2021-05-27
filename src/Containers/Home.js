import React from 'react'
import Header from '../Components/Header'
import Slider from '../Components/Slider'
import Catnav from '../Components/Catnav'
import Productslider from '../Components/Productslider'
import Promocard from '../Components/Promocard'

export default function Home() {
    return (
        <div className="container-fluid">
            <Header/>
            <Catnav/>
            <Slider/>

            <div className="row mt-5">
                <div className="col-md-4">
                    <Promocard/>
                </div>

                <div className="col-md-4">
                    <Promocard/>
                </div>

                <div className="col-md-4">
                    <Promocard/>
                </div>
            </div>
            <div className="mt-5">
            <Productslider title="Suggested for you" />
            </div>


          

            <div className="row mt-5">
                <div className="col-md-8">
                <Productslider title="Best Selling" count={3} />

                </div>

                <div className="col-md-4">
                <Productslider title="Top  Picks" count={2} />

                </div>

                
            </div>
            
        </div>
    )
}
