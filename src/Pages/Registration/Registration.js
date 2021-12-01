import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import '../../assets/Styles/Registration/Registration.css';

const Registration = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();


    const handleConfirmPassword = (e) => {
        e.preventDefault();
        console.log("from confirm password", e.target.value);
    }


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
                {errors?.user_email && <p class="alert alert-danger" role="alert">
                    Please Enter A Valid Email!
                </p>}
                {errors?.user_password &&
                    errors.user_password.type === "pattern" &&
                    <p class="alert alert-danger" role="alert">
                        Password must contain at least 8 characters, 1 number, 1 upper and 1 lowercase!.
                    </p>
                }

                <h2>Registration Form
                </h2>
                <form className="registration-form" onSubmit={handleSubmit(onSubmit)}>
                    <input required className="rounded p-2 m-2" placeholder="Email" type="email"{...register("user_email", {
                        required: true,
                        pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                    })} />

                    <input className="rounded p-2 m-2 " placeholder="Password" type="password"

                        {...register("user_password", {

                            required: true,
                            pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
                        })} />

                    <input required className="rounded p-2 m-2 " placeholder="Confirmed Password" type="password" onBlur={handleConfirmPassword} />

                    {errors.exampleRequired && <span>This field is required</span>}

                    <button type="submit" className="btn">Create Account</button>

                    <p>Already Have An Account? <Link to="/login" className="fw-bold" >Go to Login</Link></p>
                </form>
                <button className="btn">Sign In with Google</button>
            </div>
        </div>
    );
};

export default Registration;