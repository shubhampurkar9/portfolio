import { MdContactEmergency } from "react-icons/md";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { REACT_APP_SERVICEID, REACT_APP_TEMPLATE, REACT_APP_PUBLICKEY } from '../utils/constant.jsx'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const formRef = useRef();
  const [form, setform] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const changeHandler = (e) => {
    const { target } = e;
    const { name, value } = target;

    setform({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
        REACT_APP_SERVICEID,
        REACT_APP_TEMPLATE,
        {
          from_name:form.name,
          to_name: 'Shubham Purkar',
          from_email: form.email,
          to_email: 'shubhampurkar9@gmail.com',
          message: form.message,
        },
        REACT_APP_PUBLICKEY
      )
      .then(
        (res) => {
          console.log(res)
          setLoading(false);
          toast.success("Message Sent Successfully!", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark"
          });
          //alert("Thank you. I will get back to you as soon as possibile.");

          setform({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          toast.error("Error occured!", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark"
          });
          console.error(error);

          //alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="px-16 lg:pl-32 bg-gradient-to-r from-[#0e0e0f] to-[#092140]">
      <section name="contact" className="relative">
        <div className="flex flex-col text-center items-center justify-center py-7">
          <MdContactEmergency className="text-gray-300 text-6xl mb-4" />
          <h1 className="text-4xl mb-4 font-bold inline border-b-4 text-gray-300 border-pink-600"> Contact Me! </h1>
          <p className="text-center text-[#d9d9e4]">
            You can contact me for any other information and i will be sure to
            respond at my earliest convenience
          </p>
        </div>
        <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden  sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              title="map"
              className="absolute inset-0"
              frameBorder={0}
              marginHeight={0}
              marginWidth={0}
              style={{ filter: "opacity(0.7)" }}
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d330726.4992513085!2d73.84772362294609!3d18.603320564908046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1704695861062!5m2!1sen!2sin"
            />
            <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6 mt-3">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1 text-white">
                  Pune, <br />
                  India
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-3 lg:mt-0 ">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                  EMAIL
                </h2>
                <div className="overflow-auto">
                  <a
                    href="mailto: shubhampurkar9@gmail.com"
                    className="text-teal-600 leading-relaxed"
                  >
                    shubhampurkar9@gmail.com
                  </a>
                </div>
                <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed text-white">+91 9673555785</p>
              </div>
            </div>
          </div>
          <form
            ref={formRef}
            name="contact"
            onSubmit={handleSubmit}
            className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
          >
            <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
              Get in touch
            </h2>
            <p className="leading-relaxed mb-5 text-white">
              Software engineering is like playing with toys. I love complex
              toys! Lets Play!
            </p>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-100">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                required
                className="w-full bg-gray-600 rounded border border-gray-700 focus:border-teal-500 focus:ring-2 focus:ring-teal-600 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={changeHandler}
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-100"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                required
                className="w-full bg-gray-600 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-teal-600 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={changeHandler}
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-100"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                required
                minLength={10}
                placeholder="Write your message here..."
                className="w-full bg-gray-600 rounded border border-gray-700 focus:border-teal-500 focus:ring-2 focus:ring-teal-600 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                onChange={changeHandler}
              />
            </div>
            <button
              type="submit"
              className="text-white bg-transparent border-2 py-2 px-6 focus:outline-none hover:bg-pink-600 hover:border-pink-600  rounded text-lg"
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </section>
    </div>
  );
}
