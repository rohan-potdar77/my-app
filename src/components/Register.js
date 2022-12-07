import React from 'react'

export default function Register() {
  return (
    <div className='page'>
      <form className='form'>
        <h1>Register</h1>
        <label for={'name'}>Name:</label>
        <input type={'text'} placeholder={'Full name'} id={'name'} name={'name'} className={'field'}></input><br/>
        <label for={'email'}>Email:</label>
        <input type={'email'} placeholder={'With domain'} id={'email'} name={'email'} className={'field'}></input><br/>
        <label for={'gender'}>Gender:</label>
        <select name={'gender'} id={'gender'} className={'field'}>
            <option value={'male'}>Male</option>
            <option value={'female'}>Female</option>
            <option value={'other'}>Other</option>
        </select><br/>
        <label for={'birthday'}>Birth date:</label>
        <input type={'date'} name={'birthday'} id={'birthday'} className={'field'}></input><br/>
        <label for={'password'}>Create Password:</label>
        <input type={'password'} placeholder={'Atleast 8 character'} name={'password'} className={'field'}></input><br/>
        <label for={'city'}>Place:</label>
        <input type={'text'} placeholder={'City'} id={'city'} className={'field'}></input><br/>
        <div className={'register'}>
        <button type={'button'} className={'button'}>Register</button>
        </div>
      </form>
    </div>
  )
}
