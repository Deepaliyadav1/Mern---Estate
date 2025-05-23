import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import OAuth from '../../components/OAuth';

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('api/auth/signUp', {
        method: 'POST',
          headers: {
            'Content-Type': 'application/json', // Optional custom user metadata
          },
          body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        setErrorMessage(data.message);
        return;
      }
      console.log(data);
      navigate('/sign-in');
    } catch (error) {
      console.error('Error:', errorMessage);
      setErrorMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input type="text" placeholder="username" className="border p-3 rounded-lg" id="username" onChange={handleChange} />
        <input type="email" placeholder="email" className="border p-3 rounded-lg" id="email" onChange={handleChange} />
        <input type="password" placeholder="password" className="border p-3 rounded-lg" id="password" onChange={handleChange} />
        <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95">Sign Up</button>
        <OAuth />
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
        <Link to="/sign-in">
          <span className="text-blue-700">Sign in</span>
        </Link>
      </div>
    </div>
  );
}
