import React from 'react';
//Include Sweetalert
//axios for api request
import axios from 'axios';

class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeConfirmPassword = this.onChangeConfirmPassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            user_email: '',
            user_password: '',
            confirmPassword: ''
        }  
    }

    onChangeEmail(e){
        this.setState({
            user_email:e.target.value
        })
    };
    onChangePassword(e){
        this.setState({
            user_password:e.target.value
        })
    };
    onChangeConfirmPassword(e){
        this.setState({
            confirmPassword:e.target.value
        })
    };

    onSubmit(e){
        e.preventDefault();

        const obj={
            user_email: this.state.user_email,
            user_password:this.state.user_password
        };

        axios.post('htttp://', obj)
        .then(res=>console.log(res.data));

        this.setState({
            user_email:'',
            user_password:'',
            confirmPassword:''
        })
    };


   


    render() {

        return (
            <div className="App container mt-5">
                <h1 className="text-center mt-2 mb-2">Reactjs Save User Register Form Data in phpmysql database</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Email: </label>
                        <input type="email" className="form-control" 
                        value={this.state.user_email}
                        onChange={this.onChangeEmail} />
                    </div>
                    <div className="form-group">
                        <label>Password: </label>
                        <input type="password" className="form-control" 
                        value={this.state.user_password}
                        onChange={this.onChangePassword}/>
                    </div>
                    <div className="form-group">
                        <label>ConfirmPassword: </label>
                        <input type="password" className="form-control" 
                        onChange={this.onChangeConfirmPassword}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Register User"/>
                        
                    </div>
                </form>
            </div>
        )
    };
}

export default Registration;