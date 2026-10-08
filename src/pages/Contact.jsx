import React, { useState } from 'react'

function Contact() {

  const [formData, setFormData] = useState({name: "",email: "",message: "",});

   const [errors, setErrors] = useState({});

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    // Remove error when user starts typing
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email.";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    }

    setErrors(newErrors);

    // Stop if there are errors
    if (Object.keys(newErrors).length > 0) {
      setSubmitted(false);
      return;
    }

    // Success
    setSubmitted(true);

    // Reset form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };


  return (
    <section className="min-h-screen bg-gray-950 px-6 py-5 text-white">
      <div className='mx-auto max-w-6xl'>
        {/* Header */}
        <div className='mb-16 text-center'>
          <p className='mb-3 text-sm font-semibold uppercase tracking-widest text-blue-500'>Get In Touch</p>
          <h1 className='text-4xl font-bold sm:text-5xl'>Contact Me</h1>
          <p className='mx-auto mt-4 max-w-2xl text-gray-400'>Have a project or opportunity? Feel free to send me a message.</p>
          <div className='mx-auto mt-6 h-1 w-20 rounded-full bg-blue-600'></div>
        </div>
        <div className='grid gap-10 md:grid-cols-2'>
          {/* Contact Information */}
          <div>
            <h2 className='text-2xl font-bold'>Let's Work Together</h2>
            <p className='t-4 leading-8 text-gray-400'>
              I am always interested in hearing about new projects,
              opportunities and ideas. You can contact me using the form
              or through my social links.
            </p>
            <div className='mt-8 space-y-5'>
                {/* Email */}
                <div className='rounded-xl border border-gray-800 bg-gray-900 p-5'>
                  <p className='text-sm text-gray-500'>Email</p>
                  <p className='mt-1 font-semibold'>your-email@example.com</p>
                </div>
                {/* Location */}
                <div className='rounded-xl border border-gray-800 bg-gray-900 p-5'>
                  <p className='text-sm text-gray-500'>Location</p>
                  <p className='mt-1 font-semibold'>Cambodai</p>
                </div>
                {/* Availability */}
                <div className='rounded-xl border border-gray-800 bg-gray-900 p-5'>
                  <p className='text-sm text-gray-500'>Availability</p>
                  <p className='mt-1 font-semibold text-green-400'>Available for opportunities</p>
                </div>
            </div>
          </div>
           {/* Contact Form */}
           <div className='rounded-2xl border border-gray-800 bg-gray-900 p-6 sm:p-8'>
              <h2 className='text-2xl font-bold'>Send Me a Message</h2>
              {/* Success Message */}
              {submitted && (
                <div className='mt-6 rounded-lg border border-green-800 bg-green-900/20 p-4 text-green-400'>
                   Your message has been submitted successfully!
                </div>
              )}
              <form action="" className='mt-6 space-y-6' onSubmit={handleSubmit}>
                 {/* Name */}
                 <div>
                  <label htmlFor="name" className='mb-2 block text-sm font-medium'>
                    Name
                  </label>
                  <input type="text" id='name' name='name' value={formData.name} onChange={handleChange} placeholder='Enter your Name' className='w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white outline-none transition focus:border-blue-500'/>
                  {errors.name && (
                    <p className='mt-2 text-sm text-red-400'>{errors.name}</p>
                  )}
                 </div>
                 {/* Email */}
                 <div>
                  <label htmlFor="email" className='mb-2 block text-sm font-medium'>
                    Email
                  </label>
                  <input type="email" id='email' name='email' value={formData.email} onChange={handleChange} placeholder='Enter your Email' className='w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white outline-none transition focus:border-blue-500'/>
                  {errors.email && (
                    <p className='mt-2 text-sm text-red-400'>{errors.email}</p>
                  )}
                 </div>
                 {/* Email */}
                 <div>
                  <label htmlFor="message" className='mb-2 block text-sm font-medium'>
                    Message
                  </label>
                  <textarea name="message" id="message" rows='6' value={formData.message} onChange={handleChange} placeholder='Write your message...' className='w-full resize-none rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white outline-none transition focus:border-blue-500'></textarea>
                  {errors.message && (
                    <p className='mt-2 text-sm text-red-400'>{errors.message}</p>
                  )}
                 </div>

                 <button type='submit' className='w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold transition duration-300 hover:bg-blue-700'>Send Message</button>
              </form>
           </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
