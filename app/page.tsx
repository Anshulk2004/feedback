'use client'

import { useState } from 'react'
import TeamMember from './components/TeamMember'
import Testimonial from './components/Testimonial'
import FAQ from './components/FAQ'
import Image from 'next/image'

export default function Home() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index)
  }

  const faqs = [
    {
      question: 'What kind of feedback can I collect with this app?',
      answer: 'This app allows you to gather a wide range of feedback, including customer reviews, employee performance evaluations, product suggestions, and even internal team feedback.',
    },
    {
      question: 'How does the app ensure the authenticity of feedback?',
      answer: '[Your App Name] utilizes various methods to promote genuine feedback. This includes integration with social media accounts, email verification, and options for flagging suspicious reviews.',
    },
    {
      question: 'Is there a free plan available?',
      answer: 'Yes, we offer a free plan with basic features to help you try out the app. Paid plans offer additional functionalities like advanced analytics and custom branding.',
    },
    {
      question: 'How can I encourage more people to leave feedback?',
      answer: 'The app provides tools to make feedback easy and convenient. You can send personalized reminders, offer incentives for participation, and showcase positive feedback publicly (with permission).',
    },
    {
      question: 'What happens once I receive feedback?',
      answer: 'The app helps you analyze and categorize your feedback. You can easily identify trends, respond to comments, and track the impact of your actions based on feedback received.',
    },
  ];

  return (
    <main className="container mx-auto px-4 py-8">
      <section className="mb-10 text-center">
        <h1 className="text-5xl font-extrabold mb-4 animate-colorChange dark:animate-darkColorChange">
          Empowering Customers, Building Better Businesses.
        </h1>
      </section>

      <div
        className="relative bg-cover bg-center bg-no-repeat hazy-bg"
        style={{ backgroundImage: "url(/background.svg)" }}
      >
        <div className="bg-overlay p-8">
          <section className="mb-12">
            <h1 className="text-4xl font-bold mb-4">Feedback Analysis App</h1>
            <p className="text-xl">
              Unveiling the Voice of Customers: Why Feedback Matters for
              Everyone
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl text-center font-extrabold mb-4 hover:text-red-500">
              {" "}
              📈 Current Feedback Challenges 📈{" "}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
              <div className="bg-white dark:bg-gray-500 p-7 rounded-lg shadow-md transition-transform transform hover:scale-105">
                <h3 className="text-xl text-center font-extrabold  mb-4">
                  ⭐Fake Reviews: A Market Menace⭐
                </h3>
                <p className="text-gray-900 font-semibold dark:text-gray-100">
                  Fabricated reviews distort customer perception, hindering
                  trust and harming legitimate businesses.
                </p>
              </div>
              <div className="bg-white  dark:bg-gray-500 p-7 rounded-lg shadow-md transition-transform transform hover:scale-105">
                <h3 className="text-xl text-center font-extrabold mb-4">
                  ⭐Current Issues⭐
                </h3>
                <p className="text-gray-900 font-semibold dark:text-gray-100">
                  Many companies struggle with collecting honest feedback.
                  Manual processes are time-consuming, and automated systems are
                  susceptible to manipulation.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-500 p-7 rounded-lg shadow-md transition-transform transform hover:scale-105">
                <h3 className="text-xl text-center font-extrabold mb-4">
                  ⭐Our Solutions⭐
                </h3>
                <p className="text-gray-900 font-semibold dark:text-gray-100">
                  We advocate for a multi-pronged approach, including
                  verification methods, transparent review guidelines, and
                  encouraging thoughtful, detailed feedback.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      <section className="mb-20 mt-12">
        <h2 className="text-3xl text-center font-extrabold mb-5">Our Team</h2>
        <p className="text-center mb-8 text-lg text-gray-700 dark:text-gray-300">
          The team is built up of young minds equipped with talent and have made
          the app in concern with the amount of feedback issues the industry as
          well as the customer faces and so address the issue of generalization
          and stopping scam.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-slate-300 dark:bg-gray-300 p-7 rounded-xl shadow-md transition-shadow  duration-300 hover:shadow-xl hover:-translate-y-1">
            <img
              src="/person1.svg"
              alt="Team Member 1"
              className="w-full rounded-t-2xl"
            />
            <h3 className="text-xl text-center text-yellow-500 font-bold mt-5">
              Anshul Kumar
            </h3>
            <p className="text-center font-medium text-red-600 dark:text-gray-100">
              CEO
            </p>
          </div>
          <div className="bg-slate-300 dark:bg-gray-300 p-7 rounded-xl shadow-md transition-shadow  duration-300 hover:shadow-xl hover:-translate-y-1">
            <img
              src="/person2.svg"
              alt="Team Member 2"
              className="w-full rounded-t-lg"
            />
            <h3 className="text-xl text-center text-yellow-500 font-bold mt-5">
              Ashmit Jagtap
            </h3>
            <p className="text-center font-medium text-red-600 dark:text-gray-100">
              CEO
            </p>
          </div>
          <div className="bg-slate-300 dark:bg-gray-300 p-7 rounded-xl shadow-md transition-shadow  duration-300 hover:shadow-xl hover:-translate-y-1">
            <img
              src="/person3.svg"
              alt="Team Member 3"
              className="w-full rounded-t-lg"
            />
            <h3 className="text-xl text-center text-yellow-500 font-bold mt-5">
              Shubham Asati
            </h3>
            <p className="text-center font-medium text-red-600 dark:text-gray-100">
              CEO
            </p>
          </div>
          <div className="bg-slate-300 dark:bg-gray-300 p-7 rounded-xl shadow-md transition-shadow  duration-300 hover:shadow-xl hover:-translate-y-1">
            <img
              src="/person4.svg"
              alt="Team Member 4"
              className="w-full rounded-t-lg"
            />
            <h3 className="text-xl text-center text-yellow-500 font-bold mt-5">
              Manas Agarwal
            </h3>
            <p className="text-center font-medium text-red-600 dark:text-gray-100">
              CEO
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
  <h2 className="text-3xl text-center font-extrabold mb-4">Users Testimonials</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition duration-300 transform hover:shadow-xl hover:-translate-y-1">
      <p className="text-gray-600 dark:text-gray-300 italic mb-4">
        "We finally have a clear picture of customer sentiment! This app's insightful feedback analysis has revolutionized how we understand and meet our audience's needs."
      </p>
      <p className="text-sm font-semibold dark:text-white">Anshul Kumar</p>
      <p className="text-sm text-gray-500 dark:text-gray-400">locahost</p>
    </div>
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition duration-300 transform hover:shadow-xl hover:-translate-y-1">
      <p className="text-gray-600 dark:text-gray-300 italic mb-4">
        "Since using this app, our team's productivity has skyrocketed. The user-friendly interface makes gathering and responding to feedback a breeze."
      </p>
      <p className="text-sm font-semibold dark:text-white">Saurabh Verma</p>
      <p className="text-sm text-gray-500 dark:text-gray-400">CodeChef</p>
    </div>
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition duration-300 transform hover:shadow-xl hover:-translate-y-1">
      <p className="text-gray-600 dark:text-gray-300 italic mb-4">
        "This app has been a game-changer for our internal communication! The real-time feedback loop fosters collaboration and continuous improvement within our teams."
      </p>
      <p className="text-sm font-semibold dark:text-white">Tanmay Khandelwal</p>
      <p className="text-sm text-gray-500 dark:text-gray-400">Striver</p>
    </div>
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition duration-300 transform hover:shadow-xl hover:-translate-y-1">
      <p className="text-gray-600 dark:text-gray-300 italic mb-4">
        "Gone are the days of clunky surveys and endless spreadsheets! This app streamlines feedback collection, allowing us to gather valuable customer insights quickly and efficiently."
      </p>
      <p className="text-sm font-semibold dark:text-white">Akshita Agarwal</p>
      <p className="text-sm text-gray-500 dark:text-gray-400">Research Analyst</p>
    </div>
  </div>
</section>



<section className="mb-20 text-center flex flex-col items-center">
      <div className="flex items-center mb-4">        
        <div className="mr-5">
          <Image src="/logo.svg" alt="Logo 1" width={40} height={40} />
        </div>        
        <h2 className="text-3xl font-bold uppercase animate-colorChange dark:animate-darkColorChange">
          Ready to Transform Your Feedback Process?
        </h2>        
        <div className="ml-2">
          <Image src="/logo.svg" alt="Logo 2" width={40} height={40} />
        </div>
      </div>      
      <button
        className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-5 px-10 rounded-full transition duration-300"
        onClick={() => { window.location.href = '/'; }}
      >
        TRY IT NOW
      </button>
    </section>

    <section className="mb-12 flex">      
      <div className="w-1/3 mr-8">
        <img src="/background.svg" alt="Logo" className="h-auto w-full" />
      </div>      
      <div className="w-2/3">
        <h2 className="text-3xl text-center font-semibold mb-4">
        ⭐Frequently Asked Questions⭐
        </h2>
        <div>
          {faqs.map((faq, index) => (
            <FAQ
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={activeAccordion === index}
              onClick={() => toggleAccordion(index)}
            />
          ))}
        </div>
      </div>
    </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Learn More</h2>
        <ul className="list-disc list-inside">
          <li>
            <a href="#" className="text-blue-500 hover:underline">
              The Importance of Constructive Feedback
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-500 hover:underline">
              How to Foster a Feedback-Friendly Culture
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-500 hover:underline">
              Analyzing Peer Feedback: Best Practices
            </a>
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
        <form className="max-w-md mx-auto">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 font-bold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}
