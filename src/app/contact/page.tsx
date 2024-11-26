import React from "react";

export default function Contact() {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen mt-10">
      
      <header className="bg-[#34495E] text-white text-center py-10">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="mt-4 text-lg">
          Got a question or want to collaborate? We&apos;d love to hear from you!
        </p>
      </header>

      <section className="py-16 px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800">Get in Touch</h2>
        <p className="text-center text-gray-600 mt-2">
          Fill out the form below, and we&apos;ll get back to you as soon as possible.
        </p>
        <form className="max-w-lg mx-auto mt-8 space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="w-full mt-2 p-3 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full mt-2 p-3 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Write your message"
              className="w-full mt-2 p-3 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>

      
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-bold py-3 rounded hover:bg-blue-700 focus:outline-none"
            >
              Send Message
            </button>
          </div>
        </form>
      </section>

     
      <section className="py-16 px-4 bg-gray-100">
        <h2 className="text-3xl font-bold text-center text-gray-800">Contact Information</h2>
        <div className="max-w-4xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
         
          <div className="text-center p-6 bg-white shadow-lg rounded">
            <h3 className="text-lg font-bold text-gray-800">Email</h3>
            <p className="text-gray-600 mt-2">contact@yourblog.com</p>
          </div>
       
          <div className="text-center p-6 bg-white shadow-lg rounded">
            <h3 className="text-lg font-bold text-gray-800">Phone</h3>
            <p className="text-gray-600 mt-2">+123 456 7890</p>
          </div>
        </div>
      </section>
    </div>
  );
}
