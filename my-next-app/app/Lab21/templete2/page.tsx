import React from 'react'

function temp2() {
  return (
  <div className="min-h-screen bg-linear-to-br from-slate-900 via-gray-900 to-black text-white">

    {/* Navbar */}
    <nav className="flex items-center justify-between px-10 py-6">
      <h1 className="text-3xl font-bold text-cyan-400">
        NovaTech
      </h1>

      <div className="hidden md:flex gap-8">
        <a href="#" className="hover:text-cyan-400">Home</a>
        <a href="#" className="hover:text-cyan-400">Features</a>
        <a href="#" className="hover:text-cyan-400">Pricing</a>
        <a href="#" className="hover:text-cyan-400">Contact</a>
      </div>

      <button className="rounded-lg bg-cyan-500 px-5 py-2 hover:bg-cyan-600">
        Login
      </button>
    </nav>

    {/* Hero */}
    <div className="mx-auto flex max-w-7xl flex-col items-center px-8 py-20 text-center">

      <span className="rounded-full border border-cyan-500 px-5 py-2 text-cyan-300">
        🚀 AI Powered Platform
      </span>

      <h1 className="mt-8 text-6xl font-extrabold leading-tight">
        Grow Your Business
        <span className="block text-cyan-400">
          With Modern Technology
        </span>
      </h1>

      <p className="mt-6 max-w-2xl text-lg text-gray-300">
        Build amazing applications with speed, scalability and modern UI.
      </p>

      <div className="mt-10 flex gap-5">
        <button className="rounded-xl bg-cyan-500 px-8 py-3 font-semibold hover:bg-cyan-600">
          Get Started
        </button>

        <button className="rounded-xl border border-white px-8 py-3 hover:bg-white hover:text-black transition">
          Learn More
        </button>
      </div>

    </div>

    {/* Stats */}
    <div className="mx-auto grid max-w-6xl gap-8 px-8 pb-20 md:grid-cols-3">

      <div className="rounded-3xl bg-white/10 p-8 backdrop-blur">
        <h2 className="text-5xl font-bold text-cyan-400">100+</h2>
        <p className="mt-3 text-gray-300">Projects</p>
      </div>

      <div className="rounded-3xl bg-white/10 p-8 backdrop-blur">
        <h2 className="text-5xl font-bold text-cyan-400">50K+</h2>
        <p className="mt-3 text-gray-300">Users</p>
      </div>

      <div className="rounded-3xl bg-white/10 p-8 backdrop-blur">
        <h2 className="text-5xl font-bold text-cyan-400">24/7</h2>
        <p className="mt-3 text-gray-300">Support</p>
      </div>

    </div>

  </div>
);
}

export default temp2