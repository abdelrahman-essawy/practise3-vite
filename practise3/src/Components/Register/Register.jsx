import React from 'react'
import './Register.css'

export default function Register() {
    return (
        <div className='Register row position-absolute start-50 top-50 translate-middle m-auto col-md-6'>
            <form className='w-100 text-start'>
                <div className='row'>
                    <div className='col-md-6'>

                        <label className='form-label mt-3' htmlFor='First Name'>First Name</label>
                        <input type='text' name='First Name' className='form-control'></input>

                    </div>
                    <div className='col-md-6'>

                        <label className='form-label mt-3' htmlFor='Last Name'>Last Name</label>
                        <input type='text' name='Last Name' className='form-control'></input>

                    </div>
                </div>
                <div className='row'>

                    <div className='col-md-10'>
                        <label className='form-label mt-3' htmlFor='Email'>Email</label>
                        <input type='email' name='Email' className='form-control'></input>
                    </div>
                    <div className='col-md-2'>
                    <label className='form-label mt-3' htmlFor='age'>Age</label>
                    <input type='number' name='age' className='form-control'></input>

                    </div>
                </div>

                <div className='row'>

                    <div className='col-md-6'>


                        <label className='form-label mt-3' htmlFor='Password'>Password</label>
                        <input type='password' name='Password' className='form-control'></input>

                    </div>

                    <div className='col-md-6'>

                        <label className='form-label mt-3' htmlFor='Confirm Password'>Confirm Password</label>
                        <input type='password' name='Confirm Password' className='form-control'></input>


                    </div>


                </div>
                <div className='mt-4 col-md-12 d-flex justify-content-center'>

                    <button type='submit' className='btn btn-primary w-50'>Sign Up</button>
                </div>
            </form>
        </div>
    )
}
