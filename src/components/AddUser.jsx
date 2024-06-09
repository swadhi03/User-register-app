import React, { useState } from 'react'
import Navbar from './Navbar'

const AddUser = () => {
    const [data,changeData]=useState(
        {
            "Name" :"",
            "Username" :"",
            "Email_id" :"",
            "Phone_no" :""
        })
        const inputHandler=(event)=>{
            changeData({...data,[event.target.name]:event.target.value})
        }
        const readValue=()=>{
            console.log(data)
        }

  return (
    <div>
        <div className="container">
            <Navbar/>
            <div className="row">
                <div className="col-col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col-col-12 col-sm-6 cpol-md-6 col-lg-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Name</label>
                            <input type="text" className="form-control" name='Name' value={data.name} onChange={inputHandler}/>
                        </div>
                        <div className="col-col-12 col-sm-6 cpol-md-6 col-lg-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Username</label>
                            <input type="text" className="form-control" name='Username' value={data.name} onChange={inputHandler}/>
                        </div>
                        <div className="col-col-12 col-sm-6 cpol-md-6 col-lg-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Email-id</label>
                            <input type="text" className="form-control" name='Email_id' value={data.name} onChange={inputHandler}/>
                        </div>
                        <div className="col-col-12 col-sm-6 cpol-md-6 col-lg-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Phone No</label>
                            <input type="text" className="form-control" name='Phone_no' value={data.name} onChange={inputHandler}/>
                        </div>
                        <div className="col-col-12 col-sm-6 cpol-md-6 col-lg-6 col-xxl-6">
                            <button className="btn btn-success" onClick={readValue}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddUser