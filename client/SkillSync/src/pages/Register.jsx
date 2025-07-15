// src/pages/Register.jsx
import { useState } from 'react';
import Input from '../components/Input';
import AuthLayout from '../layouts/AuthLayout';

function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Register Data:', form); // will connect to backend later
  }

  return (
    <AuthLayout>
      <h2 className="text-2xl font-semibold text-center mb-4">Create Your SkillSync Account</h2>
      <form onSubmit={handleSubmit}>
        <Input label="Name" name="name" value={form.name} onChange={handleChange} required />
        <Input label="Email" name="email" type="email" value={form.email} onChange={handleChange} required />
        <Input label="Password" name="password" type="password" value={form.password} onChange={handleChange} required />
        <button
          type="submit"
          className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
        >
          Register
        </button>
      </form>
    </AuthLayout>
  );
}

export default Register;
