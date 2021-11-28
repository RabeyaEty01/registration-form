import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';

const Registration = () => {
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
        <div className="container col-lg-8 col-sm-12">
            <div>
                
                <h2  className="fw-bold">Registration Form
                </h2>

                {/* {
                    success &&
                   
                   
                } */}

                <form className="add-form mt-5" onSubmit={handleSubmit(onSubmit)}>
                    <input required className="rounded p-2 m-2" placeholder="Email" type="email"{...register("user_email", { required: true })} />

                    <input required className="rounded p-2 m-2 " placeholder="Password" type="password" {...register("user_password")} />
                    <input required className="rounded p-2 m-2 " placeholder="Confirmed Password" type="password"/>

                    {errors.exampleRequired && <span>This field is required</span>}

                    <input className="btn btn1 mt-3 mb-5" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Registration;