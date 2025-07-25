// src/pages/Login.jsx
import { useState } from 'react';
import Input from '../components/Input';
import AuthLayout from '../layouts/AuthLayout';

function Login() {
  const [form, setForm] = useState({ email: '', password: '' });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Login Data:', form); // will connect to backend later
  }

  return (
    <AuthLayout>
      <h2 className="text-2xl font-semibold text-center mb-4">Login to SkillSync</h2>
      <form onSubmit={handleSubmit}>
        <Input label="Email" name="email" type="email" value={form.email} onChange={handleChange} required />
        <Input label="Password" name="password" type="password" value={form.password} onChange={handleChange} required />
        <button
          type="submit"
          className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
        >
          Login
        </button>
      </form>
    </AuthLayout>
  );
}

export default Login;
