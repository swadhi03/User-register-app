import React from 'react'
import Navbar from './Navbar'

const AddUser = () => {
  return (
    <div>
        <div className="container">
            <Navbar/>
            <div className="row">
                <div className="col-col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col-col-12 col-sm-6 cpol-md-6 col-lg-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Name</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col-col-12 col-sm-6 cpol-md-6 col-lg-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Username</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col-col-12 col-sm-6 cpol-md-6 col-lg-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Email-id</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col-col-12 col-sm-6 cpol-md-6 col-lg-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Phone No</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col-col-12 col-sm-6 cpol-md-6 col-lg-6 col-xxl-6">
                            <button className="btn btn-success">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddUser