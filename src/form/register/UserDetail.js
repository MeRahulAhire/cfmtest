import React, { Component } from 'react'
import Helmet from 'react-helmet'
import './reg-style/UserDetail.css'

export class UserDetail extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
      };
    
      back = e => {
        e.preventDefault();
        this.props.prevStep();
      };
    render() {
        const { values, handleChange } = this.props;
        return (
            <div>
                 <Helmet><body className="form-bg-col"></body>
                </Helmet>
               
                

                <div className="login">
                  <div className="reg-container">
                  <button onClick={this.back} className="col-form-prev"><i class="fa fa-chevron-left"></i></button>
                  <div className="user-detail firstName">
                      First Name:
                      <input 
                      type="text" 
                      onChange={handleChange('FirstName')}  
                      defaultValue={values.FirstName}
                      placeholder="Enter your First Name" />
                  </div>
                  <div className="user-detail lastName">
                      Last Name:
                      <input onChange={handleChange('LastName')}  
                      defaultValue={values.LastName}
                      type="text" placeholder="Enter your Last Name" />
                  </div>
                  <div className="user-detail gender">
                      Gender:
                      <div className="drop-down">
                      <select
                      onChange={handleChange('Gender')}  
                      defaultValue={values.Gender} 
                      className="gender-select" 
                      name="" 
                      id="">

                      <option selected disabled>Select your Gender</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                      </select>
                      </div>
                  </div>
                  <div className="user-detail dob">
                      Date of Birth:
                      <input onChange={handleChange('DOB')}  
                      defaultValue={values.DOB} type="date" placeholder="Select your DOB" />
                      
                  </div>
                  
                  <button onClick={this.continue} className="col-form-next"><i class="fa fa-chevron-right"></i></button>
                  
                 
                  </div>
                    
                </div>
            </div>
        )
    }
}

export default UserDetail
