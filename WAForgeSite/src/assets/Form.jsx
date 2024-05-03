import { useState } from 'react';

const Form = () => {
    const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('https://script.google.com/macros/s/AKfycbyN4vcGZWsnrMGhBKyjMwHrxOeOqihu55LOWgPxmVKK1OEVorwPztXLsaA_pnhe45nEcQ/exec', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ name, email })
})
.then(() => {
  console.log(JSON.stringify({ name, email }));
})
.catch(error => console.log('Error:', error));
  };

    
    return ( 
        <div className="flex flex-col items-center justify-center h-fit text-white">
            <div className="max-w-lg p-6 rounded-lg shadow-lg">
                <form className="form" onSubmit={handleSubmit}>
                <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-1 mb-4 bg-[#00000000] border-2 border-[#00dc82] rounded-lg focus:outline-none focus:border-teal-500"
                onChange={e => setName(e.target.value)}
                />
                <input
                type="email"
                placeholder="Enter your email address"
                className="w-full px-4 py-1 mb-4 bg-[#00000000] border-2 border-[#00dc82] rounded-lg focus:outline-none focus:border-teal-500"
                onChange = {e => setEmail(e.target.value)}
                />
                <button
                type="submit"
                className="w-full px-4 py-1 border-[#00dc82] border-2 text-[#ffffff] font-Montserrat rounded-lg focus:outline-none transition-all duration-2 hover:text-black hover:bg-[#00dc82]"
                >
                Submit
                </button>
                </form>
            </div>
    </div>
     );
}
 
export default Form;