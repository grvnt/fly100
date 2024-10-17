'use client';

import { useState } from 'react';

export default function EmailCaptureHero() {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your ConvertKit API call here
    console.log('Submitting email:', email);
  };

  return (
    <section className="bg-gray-900 py-16 text-white">
      <div className="container mx-auto text-center">
        <h1 className="font-semibold tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-5xl mb-4 max-w-3xl mx-auto" data-hero-headline="">
          Become an XC Paragliding Jedi in 10 minutes per week.
        </h1>
        <p className="text-xl mb-8">Subscribe to our newsletter for updates</p>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-4 py-2 rounded-l-lg focus:outline-none bg-gray-800 text-white placeholder-gray-400"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-r-lg hover:bg-blue-600"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
