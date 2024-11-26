import Image from 'next/image';
import React from 'react'

export default function About() {
  return (
    <div className="bg-gray-50 text-gray-800 mt-10">
      <section className="bg-gray-800 text-white text-center p-10">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="text-lg mt-4">
          Your trusted source for tech insights, tutorials, and trends.
        </p>
      </section>

      {/* Mission Statement */}
      <section className="py-16 px-4 bg-gray-100">
        <h2 className="text-3xl font-bold text-center text-gray-800">Our Mission</h2>
        <p className="text-center max-w-3xl mx-auto mt-4 text-gray-600">
          At <strong>ByteVision</strong>, our mission is to empower tech enthusiasts and
          professionals by delivering high-quality content that inspires
          innovation, fuels learning, and keeps you ahead in the tech world.
        </p>
        <div className="bg-blue-600 text-white text-center py-4 mt-8 max-w-2xl mx-auto rounded">
          <p>Our Vision: To build a community of tech enthusiasts who share and grow together.</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800">Meet the Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {/* Team Member 1 */}
          <div className="text-center p-4 shadow-lg rounded bg-white">
            <Image
              src="/profile.png"
              alt="Team Member"
              height={128}
              width={128}
              className="w-32 h-32 mx-auto rounded-full"
            />
            <h3 className="mt-4 text-xl font-semibold">Muhammad Wasif</h3>
            <p className="text-gray-600">Founder & Tech Blogger</p>
          </div>
          {/* Team Member 2 */}
          <div className="text-center p-4 shadow-lg rounded bg-white">
            <Image
              src="/Awais-Profile.png"
              alt="Team Member"
              height={128}
              width={128}
              className="w-32 h-32 mx-auto rounded-full"
            />
            <h3 className="mt-4 text-xl font-semibold">Muhammad Awais</h3>
            <p className="text-gray-600">Content Creator & Developer</p>
          </div>
        </div>
      </section>

      {/* What We Cover */}
      <section className="py-16 px-4 bg-gray-100">
        <h2 className="text-3xl font-bold text-center text-gray-800">What We Cover</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="bg-white p-6 shadow-lg rounded">
            <h3 className="text-xl font-bold text-gray-800">Tech Tutorials</h3>
            <p className="text-gray-600 mt-2">Step-by-step guides to master new skills.</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded">
            <h3 className="text-xl font-bold text-gray-800">Programming Tips</h3>
            <p className="text-gray-600 mt-2">Best practices for coding efficiently.</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800">Testimonials</h2>
        <div className="max-w-3xl mx-auto mt-8 bg-white p-6 shadow-lg rounded">
          <p className="text-gray-600 italic">
          &quot;This blog has been my go-to for learning web development. The
            tutorials are easy to follow and incredibly helpful!&quot;          </p>
          <span className="block mt-4 text-right text-gray-500">– Jane Smith</span>
        </div>
      </section>

      <section className="bg-blue-600 text-white py-16 px-4">
        <h2 className="text-3xl font-bold text-center">Stay Updated on the Latest in Tech!</h2>
        <form className="mt-8 max-w-md mx-auto flex flex-col gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="py-2 px-4 rounded border-none text-gray-800"
          />
          <button
            type="submit"
            className="py-2 px-4 bg-gray-800 text-white font-bold rounded hover:bg-gray-700"
          >
            Subscribe
          </button>
        </form>
      </section>
    </div>
  );
}

