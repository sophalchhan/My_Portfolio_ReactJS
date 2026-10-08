import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center">

      <h1 className="text-7xl font-bold text-blue-500">
        404
      </h1>

      <p className="mt-4 text-xl text-gray-400">
        Page Not Found
      </p>

      <Link
        to="/"
        className="mt-6 rounded-lg bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-700"
      >
        Back to Home
      </Link>

    </section>
  )
}

export default NotFound
