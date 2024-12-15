import React from "react";
import { useForm } from "react-hook-form";
import axios from 'axios'
import toast from "react-hot-toast";

function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit =async (data) =>{
    const userInfo={
        name:data.name,
        email:data.email,
        message:data.message
    }
    try {
       await axios.post("https://getform.io/f/byvvjvya",userInfo);
       toast.success("message has been send")
    } catch (error) {
        toast.error("something want wrong ");
        
    }
  }
  return (
    <>
      <section name="Contect" className="bg-white dark:bg-gray-900">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Contact Us
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Got a technical issue? Want to send feedback about a beta feature?
            Need details about our Business plan? Let us know.
          </p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            //    action="https://getform.io/f/byvvjvya"
            //  method="post"
            // className="space-y-8"
          >
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                FullName
              </label>
              <input
                {...register("name", { required: true })}
                name="name"
                type="text"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Enter Your Name"
                required
              />
              {errors.name && <span>This field is required</span>}
            </div>
            <div>
              <label
                for="Email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Email
              </label>
              <input
                {...register("email", { required: true })}
                name="email"
                type="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Enter Your Email"
                required
              />
              {errors.email && <span>This field is required</span>}
            </div>
            <div className="sm:col-span-2">
              <label
                for="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Your message
              </label>
              <textarea
                {...register("message", { required: true })}
                name="message"
                id="message"
                rows="6"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."
              ></textarea>
              {errors.message && <span>This field is required</span>}
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
