import React from 'react'
import Header from '../Components/Header'
import Catnav from '../Components/Catnav'
export default function Checkout() {
    return (
        <div className="container-fluid">
            <Header />
            <Catnav />

            <p className="text-center mt-5 h4">Checkout</p>

            <div className="row">
                <div className="col-md-6">
                <div className=" col-md-12 border mt-3 form-bg py-2 pt-3">
                    <div className="item-container row ">

                        <div className="col-md-2">
                            <img src="http://source.unsplash.com/random/100x100"></img>
                        </div>
                        <div className="col-md-10">
                            <p className="h5"> MI Smart TV (M37647)</p>
                            <p>by MI</p>
                            <p> MRP : <strike>12344</strike> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Price : 9999</p>
                            <div class="row">
                                <div class="col-md-3">
                                <select name="" class="form-control">
                                    <option>1</option>
                                    <option>1</option>
                                    <option>1</option>
                                    <option>1</option>
                                    <option>1</option>
                                    <option>1</option>
                                    <option>1</option>
                                    <option>1</option>
                                    <option>1</option>
                                    <option>1</option>
                                    <option>1</option>
                                </select>
                                </div>
                            <button class="btn px-0 text-primary flex-1">Remove</button>
                            </div>

                        </div>
                    </div>
               
               
               
                </div>


                </div>
                <div className="col-md-6">

                <form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Full Name</label>
      <input type="text" class="form-control" id="inputEmail4" />
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Mobile #</label>
      <input type="text" class="form-control" id="inputPassword4" />
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
  </div>
  <div class="form-group">
    <label for="inputAddress2">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">City</label>
      <input type="text" class="form-control" id="inputCity" />
    </div>
    <div class="form-group col-md-4">
      <label for="inputState">State</label>
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <div class="form-group col-md-2">
      <label for="inputZip">Zip</label>
      <input type="text" class="form-control" id="inputZip" />
    </div>
  </div>
 
  <button type="submit" class="btn btn-primary">Check Me Out</button>
</form>
                </div>
               
            </div>
        </div>
    )
}
