import React from 'react'


function temp1() {
  return (
  <div className="min-h-screen bg-gray-50">
    {/* Navbar */}
    <header className="bg-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-blue-600">NextTemplate</h1>

        <nav className="hidden gap-8 md:flex">
          <a href="#" className="text-gray-600 hover:text-blue-600 transition">
            Home
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition">
            About
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition">
            Services
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition">
            Contact
          </a>
        </nav>

        <button className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700 transition">
          Login
        </button>
      </div>
    </header>

    {/* Hero */}
    <section className="flex min-h-[80vh] items-center justify-center px-6">
      <div className="max-w-3xl text-center">
        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
          🚀 Welcome to Next.js
        </span>

        <h1 className="mt-6 text-5xl font-extrabold leading-tight text-gray-900 md:text-6xl">
          Build Beautiful Websites Faster
        </h1>

        <p className="mt-6 text-lg text-gray-600">
          A modern Next.js template built with Tailwind CSS. Fully responsive,
          clean, and easy to customize.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <button className="rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white shadow-lg hover:bg-blue-700 transition">
            Get Started
          </button>

          <button className="rounded-xl border border-gray-300 bg-white px-8 py-3 font-semibold text-gray-700 hover:bg-gray-100 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>

    {/* Features */}
    <section className="mx-auto max-w-7xl px-6 py-20">
      <h2 className="mb-12 text-center text-4xl font-bold text-gray-900">
        Features
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-2xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-xl">
          <div className="mb-4 text-5xl">⚡</div>
          <h3 className="mb-2 text-2xl font-bold">Fast</h3>
          <p className="text-gray-600">
            Optimized for performance with Next.js and Tailwind CSS.
          </p>
        </div>

        <div className="rounded-2xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-xl">
          <div className="mb-4 text-5xl">📱</div>
          <h3 className="mb-2 text-2xl font-bold">Responsive</h3>
          <p className="text-gray-600">
            Looks great on desktop, tablet, and mobile devices.
          </p>
        </div>

        <div className="rounded-2xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-xl">
          <div className="mb-4 text-5xl">🎨</div>
          <h3 className="mb-2 text-2xl font-bold">Modern UI</h3>
          <p className="text-gray-600">
            Clean components with smooth hover animations and spacing.
          </p>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-blue-600 py-20 text-center text-white">
      <h2 className="text-4xl font-bold">
        Ready to Start Your Project?
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-blue-100">
        Create beautiful web applications with Next.js and Tailwind CSS.
      </p>

      <button className="mt-8 rounded-xl bg-white px-8 py-3 font-semibold text-blue-600 shadow-lg hover:bg-gray-100 transition">
        Start Now
      </button>
    </section>

    {/* Footer */}
    <footer className="bg-gray-900 py-8 text-center text-gray-400">
      © 2026 NextTemplate. All Rights Reserved.
    </footer>
  </div>
);
}

export default temp1