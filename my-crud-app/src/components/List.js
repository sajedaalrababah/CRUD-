/* eslint-disable no-unused-expressions */
import '../list.css'
import { useState } from 'react';
export default function List (){
    const [inputs , setInputs ]= useState({})

    const handelchange= (event)=>{
       const name = event.target.name;
       const value = event.target.value;
       setInputs(values => ({ ...values, [name]: value }));
    }

    const handelSubmit= (event)=>{
        event.preventDefault();
        console.log(inputs);
    }
    return(<>
    <h1>List </h1>
    <div className="container-fluid px-1 py-5 mx-auto">
    <div className="row d-flex justify-content-center">
        <div className="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
            <h3>List of users</h3>
            <p className="blue-text">Just answer a few questions<br/> so that we can personalize the right experience for you.</p>
            <div className="card">
                <form className="form-card" onSubmit={handelSubmit}>
                    <div className="row justify-content-center text-left">
                        <div className="form-group col-sm-8 flex-column d-flex"> <label className="form-control-label px-3">your name</label> <input  onChange={handelchange} type="text" id="fname" name="fname" placeholder="" /> </div>
                    </div>
                    <div className="row justify-content-center text-left">
                        <div className="form-group col-sm-8 flex-column d-flex"> <label className="form-control-label px-3">Business email</label> <input onChange={handelchange} type="text" id="email" name="email" placeholder="" /> </div>
                    </div>
                    <div className="row justify-content-center text-left">
                        <div className="form-group col-sm-8 flex-column d-flex"> <label className="form-control-label px-3">Phone number</label> <input onChange={handelchange} type="text" id="mob" name="mob" placeholder="" /> </div>
                    </div>
                   
                    <div className="row justify-content-center">
                        <div className="form-group col-sm-6"> <button type="submit" className="btn-block btn-primary">save </button> </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
    </>
        
    );}