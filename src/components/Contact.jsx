import React, { useRef, useState } from 'react';
import{toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser'

const Contact = () => {


    const form = useRef()
    const [isSent, setIsSent] = useState(false)

    const sendEmail = (e) =>{
        e.preventDefault()
        emailjs
        .sendForm(
            "service_mitoqua", //servce id
            "template_0doguau", // Emailjs template
            form.current,
            "l91iGpEieIdjprdE6" // public key
        )
        .then(
            ()=>{
                setIsSent(true)
                form.current.reset();
                toast.success("Message sent successfully!! ",{
                position:"top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover:true,
                theme:'dark',
            });
        },
        (error) =>{
            toast.error("Error Sending Message.", error);
              toast.error("Failed to sent Message. Please try again ",{
                position:"top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover:true,
                theme:'dark',
              })
            
        }
        )

    }



    return (
        <section id='contact' className='flex flex-col justify-center items-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]'>
               

           <ToastContainer />    
            <div className='text-center mb-16'>
                <h2 className='text-4xl font-bold text-white'>CONTACT</h2>
                <div className='w-32 h-1 bg-purple-500 mx-auto mt-4'></div>
                <p className='text-gray-400 mt-4 text-lg font-semibold'>I'd love to hear from you-reach out for opportunities or questions!</p>
            </div>

            <div className='mt-8 w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border-gray-700'>
                <h3 className='text-xl font-semibold text-white text-center'>
                    Connect with me
                </h3>

                <form ref={form} onSubmit={sendEmail} className='mt-4 flex flex-col space-y-4'>
                    <input type="email" name="user_email" id="" placeholder='Your Email' required className='w-full p-3 rounded-md bg-[#121025] text-white border border-gray-600 focus:outline-none focus:border-purple-500' />
                    <input type="text" name="user_name" id="" placeholder='Your Name' required className='w-full p-3 rounded-md bg-[#121025] text-white border border-gray-600 focus:outline-none focus:border-purple-500' />
                    <input type="text" name="user_subject" id="" placeholder='Your Subject' required className='w-full p-3 rounded-md bg-[#121025] text-white border border-gray-600 focus:outline-none focus:border-purple-500' />
                    <textarea name='message' placeholder='Message' rows={4} className='w-full p-3 rounded-md bg-[#121025] text-white border border-gray-600 focus:outline-none focus:border-purple-500'></textarea>

                    <button type='submit' className='w-full bg-purple-900 py-3 text-white font-semibold rounded-md hover:opacity-90 transition'>Send</button>
                </form>
            </div>

        </section>
    )
}

export default Contact