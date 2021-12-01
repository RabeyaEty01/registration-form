import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';


const Login = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
        axios.post('https://warm-river-62334.herokuapp.com/users', data)
            .then(res => {
                if (res.data.insertedId) {
                    swal({
                        title: "WOW!",
                        text: "User Created Successfully!",
                        icon: "success",
                        button: "Ok!",
                    });
                    reset();
                }

            })

    };

    return (
        <div className="container col-lg-5 col-sm-12">
            <div className="registration">
                <h2>Login Form
                </h2>
                <form className="registration-form" onSubmit={handleSubmit(onSubmit)}>
                    <input required className="rounded p-2 m-2" placeholder="Email" type="email" />

                    <input required className="rounded p-2 m-2 " placeholder="Password" type="password" />
                   
                    {errors.exampleRequired && <span>This field is required</span>}

                    <button type="submit" className="btn">Login</button>

                    <p>Don't have an account? <Link className="fw-bold" to="/register">Register here</Link></p>

                    <span type="button" className="text-danger">Reset Password</span>
                </form>

                <h5 className="fw-bold ">
                    ---------------OR-------------</h5>
                <div className="form-row">
                    <button type="button" ><i class="fab fa-google "></i> Sign In With Google</button>
                    <button type="button" ><i class="fab fa-google "></i> Sign In With Linkedin</button>

                </div>
            </div>
        </div>
    );
};

export default Login;