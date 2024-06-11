import React from 'react'
import { Link } from 'react-router-dom'

const UserLogin = () => {
  return (
    <div>

<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 co-xl-12 col-xxl-12">

                <div className="container">

<div className='box'>
    <h1 className='heading'>User App</h1>
                    <div className="row">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            {/* <label htmlFor="" className="form-label">UserName</label> */}
                            <input type="text" className="form-control" placeholder='username'/><br />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            {/* <label htmlFor="" className="form-label">Password</label> */}
                            <input type="text" className="form-control" placeholder='Password' /><br />

                        </div>
                        

                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success">login</button>
                        </div>

                        <Link to="/signup">New users click here</Link>
                    </div>

                    </div>


                </div>

        </div>
    </div>
</div>

    </div>
  )
}

export default UserLogin