import React from "react";
import './sign-in.scss'; 
import FormInput from '../form-input/form-input';
import CustomButton from "../custom-button/custom-button";

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email: '',
            password:''
        }
    }
handleSubmit= event =>{
    event.preventDefault();
    this.setState({email: "", password:''});

}

handleChange= event=>{
    const{name, value}=event.target;
    this.setState({[name]:value});
}
    render(){
        return(
            <div className='sign-in'>
                <h2>I already have account</h2>
                <span>SignIn with your Email and Password</span>
            
                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' 
                    type='email'
                     label='Email' 
                     handleChange={this.handleChange} 
                     value={this.state.email} 
                     required/>
                 
                    <FormInput 
                    name='password'
                     type="password" 
                     label='Password' 
                     handleChange={this.handleChange}  
                     value={this.state.password} 
                     required/>
                  
                     <CustomButton type="submit">Sign In</CustomButton>
                </form>
            </div>
        )}
    
}

export default SignIn;