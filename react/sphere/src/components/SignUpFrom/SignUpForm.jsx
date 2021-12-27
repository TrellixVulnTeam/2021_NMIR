import React, { useRef } from 'react'
import Button from '../UI/Button'
import s from './SignUpForm.module.scss'

const SignUpForm = () => {
    const loginRef = useRef(null)
    const emaildRef = useRef(null)
    const passwordRef = useRef(null)

    const registerUser = (e) => {
        e.preventDefault()
        console.log(loginRef.current.value)
    }

    return (
        <form onSubmit={registerUser}>
            <div>
                <input type='text' placeholder='Login' ref={loginRef} />
            </div>
            <div>
                <input type='email' placeholder='Email' ref={emaildRef} />
            </div>
            <div>
                <input type='password' placeholder='Password' ref={passwordRef} />
            </div>
            <div>
                <input type='password' placeholder='Confirm Password' />
            </div>
            <div>
                <button type='submit'>Register</button>
            </div>
        </form>
    )
}

export default SignUpForm
