import { useState } from 'react'
const Login = () => {
const [formData, setFormData] = useState({ email: '',
password: '' })
const { email, password } = formData
const onChange = e => {
setFormData(prevState => ({prevState,
[e.target.name]: e.target.value
}))
}
const onSubmit = e => {
e.preventDefault()
}
return (
<div>Login</div>
)
}
export default Login