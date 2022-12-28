import { useForm } from 'react-hook-form'

export default function Registration() {

    const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'onChange' })

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <>
            <form className='mycon' onSubmit={handleSubmit(onSubmit)}>
                <div className="container shadow p-3 mt-5 mb-5 rounded">
                    {/* first name */}
                    <label>First Name :</label>
                    <input type="text" className="form-control" {...register("firstName", {
                        required: "Required",
                        minLength: {
                            value: 3,
                            message: 'Min 3'
                        },
                        maxLength: {
                            value: 20,
                            message: 'Max 20'
                        },
                        pattern: {
                            value: /^[A-Za-z]+$/,
                            message: 'Alphabets Only'
                        }
                    })} />
                    {errors.firstName && (<small className='text-danger'>{errors.firstName.message}</small>)}
                    <br />
                    {/* last name */}
                    <label>Last Name :</label>
                    <input type="text" className="form-control" {...register("lastName", {
                        required: "Required",
                        minLength: {
                            value: 3,
                            message: 'Min 3'
                        },
                        maxLength: {
                            value: 20,
                            message: 'Max 20'
                        },
                        pattern: {
                            value: /^[A-Za-z]+$/,
                            message: 'Alphabets Only'
                        }
                    })} />
                    {errors.lastName && (<small className='text-danger'>{errors.lastName.message}</small>)}
                    <br />
                    {/* username */}
                    <label>Username :</label>
                    <input type="text" className="form-control" {...register("userName", {
                        required: "Required",
                        pattern: {
                            value: /^[A-Za-z][A-Za-z0-9_]{7,19}$/,
                            message: 'Alphanumeric Characters Min-8, Max-20'
                        }
                    })} />
                    {errors.userName && (<small className='text-danger'>{errors.userName.message}</small>)}
                    <br />
                    {/* birthdate */}
                    <label>Birth Date :</label>
                    <input type="date" className="form-control" {...register("birthDate", {
                        required: "Required",
                        min: {
                            value: '01-01-1980',
                            message: 'Should Be 01-01-1980 or Above'
                        },
                        max: {
                            value: Date(),
                            message: 'Max Date Upto Today'
                        }
                    })} />
                    {errors.birthDate && (<small className='text-danger'>{errors.birthDate.message}</small>)}
                    <br />
                    {/* gender */}
                    <label>Gender :</label>
                    <div>
                        <input type="radio" value="Male" name="gender" defaultChecked {...register
                            ("gender")} /> Male
                        <input type="radio" value="Female" name="gender" className='g-sp' {...register("gender")} /> Female
                        <input type="radio" value="Other" name="gender" className='g-sp' {...register("gender")} /> Other
                    </div>
                    {/* phone */}
                    <br />
                    <label>Phone :</label>
                    <div>
                        <div className="input-group flex-nowrap">
                            <span className="input-group-text" id="addon-wrapping">+91</span>
                            <input type="text" className="form-control" aria-describedby="addon-wrapping" {...register("phone", {
                                required: "Required",
                                pattern: {
                                    value: /^[6-9]\d{9}$/gi,
                                    message: 'Not Valid'
                                }
                            })} />
                        </div>
                    </div>
                    {errors.phone && (<small className='text-danger'>{errors.phone.message}</small>)}
                    <br />
                    {/* email */}
                    <label>Email :</label>
                    <input type="email" className="form-control" {...register("email", {
                        required: "Required",
                        pattern: {
                            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{3}$/,
                            message: 'Not Valid/Complete'
                        }
                    })} />
                    {errors.email && (<small className='text-danger'>{errors.email.message}</small>)}
                    <br />
                    {/* registration date */}
                    <label>Registration Date :</label>
                    <input type="date" className="form-control" {...register("registrationDate", {
                        min: {
                            value: '01-01-1980',
                            message: 'Should Be 01-01-1980 or Above'
                        },
                        max: {
                            value: Date(),
                            message: 'Max Date Upto Today'
                        }
                    })} />
                    {errors.registrationDate && (<small className='text-danger'>{errors.registrationDate.message}</small>)}
                    <br />
                    {/* Address */}
                    <label >Address :</label>
                    <textarea className="form-control" {...register("address")} />
                    {/* buttons */}
                    <input type="submit" className="btn btn-primary my-3" />
                </div>
            </form>
        </>
    )
}
