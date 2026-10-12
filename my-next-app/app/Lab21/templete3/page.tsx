import React from 'react'

function temp3() {
  return (
  <div className="min-h-screen bg-gray-950 text-white">

    {/* Header */}
    <header className="flex items-center justify-between border-b border-gray-800 px-8 py-6">

      <h1 className="text-3xl font-bold">
        John<span className="text-pink-500">.</span>
      </h1>

      <nav className="hidden gap-8 md:flex">
        <a href="#" className="hover:text-pink-500">Home</a>
        <a href="#" className="hover:text-pink-500">Projects</a>
        <a href="#" className="hover:text-pink-500">Skills</a>
        <a href="#" className="hover:text-pink-500">Contact</a>
      </nav>

    </header>

    {/* Hero */}
    <section className="mx-auto flex max-w-7xl flex-col items-center justify-center px-8 py-24 lg:flex-row">

      <div className="flex-1">

        <h2 className="text-lg text-pink-500">
          Hello, I'm
        </h2>

        <h1 className="mt-3 text-6xl font-extrabold">
          Full Stack
          <br />
          Developer
        </h1>

        <p className="mt-6 max-w-xl text-gray-400">
          Passionate about creating beautiful web applications,
          scalable APIs, and user-friendly experiences.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="rounded-xl bg-pink-500 px-8 py-3 font-semibold hover:bg-pink-600">
            Hire Me
          </button>

          <button className="rounded-xl border border-pink-500 px-8 py-3 hover:bg-pink-500">
            Projects
          </button>
        </div>

      </div>

      <div className="mt-16 flex flex-1 justify-center lg:mt-0">

        <div className="flex h-80 w-80 items-center justify-center rounded-full bg-linear-to-br from-pink-500 to-purple-600 text-8xl font-bold shadow-2xl">
          👨‍💻
        </div>

      </div>

    </section>

    {/* Cards */}

    <section className="mx-auto grid max-w-7xl gap-8 px-8 pb-20 md:grid-cols-3">

      <div className="rounded-3xl bg-gray-900 p-8 shadow-lg transition hover:-translate-y-2">
        <h3 className="text-2xl font-bold">Frontend</h3>
        <p className="mt-4 text-gray-400">
          React, Next.js, Tailwind CSS, Material UI
        </p>
      </div>

      <div className="rounded-3xl bg-gray-900 p-8 shadow-lg transition hover:-translate-y-2">
        <h3 className="text-2xl font-bold">Backend</h3>
        <p className="mt-4 text-gray-400">
          Node.js, Express.js, MongoDB, SQL
        </p>
      </div>

      <div className="rounded-3xl bg-gray-900 p-8 shadow-lg transition hover:-translate-y-2">
        <h3 className="text-2xl font-bold">UI Design</h3>
        <p className="mt-4 text-gray-400">
          Modern responsive interfaces with animations.
        </p>
      </div>

    </section>

  </div>
);
}

export default temp3