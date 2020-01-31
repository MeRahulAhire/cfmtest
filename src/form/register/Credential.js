import React, { Component } from 'react'
import Helmet from 'react-helmet'
import './reg-style/Credentail.css'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
export class Credential extends Component {
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
                  <Helmet>
                  <body className="form-bg-col"></body>
                </Helmet>
               

                <div className="login">
                  <div className="reg-container">
                  <button onClick={this.back} className="col-form-prev"><i class="fa fa-chevron-left"></i></button>
                  <div className="user-detail email">
                      Email:
                      <input onChange={handleChange('Email')} defaultValue={values.Email}  type="email" placeholder="Enter your Email"/>
                  </div>
                  <div  className="user-detail ">
                      Phone:
                      <PhoneInput
                      onChange={handleChange('Phone')} defaultValue={values.Phone}
                      displayInitialValueAsLocalNumber
                        placeholder="Enter phone number"
                        defaultCountry="IN"
                        />
                      
                  </div>
                  <div className="user-detail username">
                      Username:
                      <input onChange={handleChange('Username')} defaultValue={values.Username} type="text" placeholder="Select your unique Username" />
                  </div>
                  <div className="user-detail password">
                      Password:
                      <input onChange={handleChange('Password')} defaultValue={values.Password} type="password" placeholder="Choose your Password" />
                  </div>
                                    
                  <button onClick={this.continue} className="col-form-next"><i class="fa fa-chevron-right"></i></button>
                  
                 
                  </div>
                    
                </div>
            </div>
        )
    }
}

export default Credential
