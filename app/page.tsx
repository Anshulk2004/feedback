'use client'

import { useState } from 'react'
import TeamMember from './components/TeamMember'
import Testimonial from './components/Testimonial'
import FAQ from './components/FAQ'

export default function Home() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index)
  }

  return (
    <main className="container mx-auto px-4 py-8">
      
      <section className="mb-12 text-center">
        <h1 className="text-5xl font-extrabold mb-4 animate-colorChange dark:animate-darkColorChange">
          Empowering Customers, Building Better Businesses.
        </h1>
      </section>

      
      <div className="relative bg-cover bg-center bg-no-repeat hazy-bg" style={{ backgroundImage: 'url(/background.svg)' }}>
        <div className="bg-overlay p-8">
          <section className="mb-12">
            <h1 className="text-4xl font-bold mb-4">Feedback Analysis App</h1>
            <p className="text-xl">
              Unveiling the Voice of Customers: Why Feedback Matters for Everyone
            </p>
          </section>

          
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">Current Feedback Challenges</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Fake Reviews: A Market Menace</h3>
                <p className="text-gray-900 dark:text-gray-200">
                  Fabricated reviews distort customer perception, hindering trust and harming legitimate businesses.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Current Issues</h3>
                <p className="text-gray-900 dark:text-gray-200">
                  Many companies struggle with collecting honest feedback. Manual processes are time-consuming, and automated systems are susceptible to manipulation.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Our Solutions</h3>
                <p className="text-gray-900 dark:text-gray-200">
                  We advocate for a multi-pronged approach, including verification methods, transparent review guidelines, and encouraging thoughtful, detailed feedback.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <TeamMember name="John Doe" role="CEO" image="/john-doe.jpg" />
          <TeamMember name="Jane Smith" role="CTO" image="/jane-smith.jpg" />
          <TeamMember name="Mike Johnson" role="Lead Developer" image="/mike-johnson.jpg" />
        </div>
      </section>

      
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Testimonial
            name="Sarah Thompson"
            company="Tech Innovators Inc."
            quote="This app has completely transformed our feedback process. It's now easier than ever to collect and analyze peer feedback."
          />
          <Testimonial
            name="Mark Williams"
            company="Global Solutions Ltd."
            quote="The insights we've gained from using this platform have led to significant improvements in our team dynamics and productivity."
          />
        </div>
      </section>

      
      <section className="mb-12 text-center">
        <h2 className="text-3xl font-semibold mb-4">Ready to Transform Your Feedback Process?</h2>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300">
          Try It Now
        </button>
      </section>

      
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Frequently Asked Questions</h2>
        <FAQ
          question="How does the app ensure anonymity?"
          answer="Our app uses advanced encryption and data anonymization techniques to ensure that all feedback remains completely anonymous."
          isOpen={activeAccordion === 0}
          onClick={() => toggleAccordion(0)}
        />
        <FAQ
          question="Can I customize the feedback questions?"
          answer="Yes, you can fully customize the feedback questions to suit your organization's specific needs and goals."
          isOpen={activeAccordion === 1}
          onClick={() => toggleAccordion(1)}
        />
        <FAQ
          question="How long does it take to implement the system?"
          answer="Most organizations can implement our system within 1-2 weeks, including setup and initial training."
          isOpen={activeAccordion === 2}
          onClick={() => toggleAccordion(2)}
        />
      </section>

      
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Learn More</h2>
        <ul className="list-disc list-inside">
          <li><a href="#" className="text-blue-500 hover:underline">The Importance of Constructive Feedback</a></li>
          <li><a href="#" className="text-blue-500 hover:underline">How to Foster a Feedback-Friendly Culture</a></li>
          <li><a href="#" className="text-blue-500 hover:underline">Analyzing Peer Feedback: Best Practices</a></li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
        <form className="max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
            <input type="text" id="name" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
            <input type="email" id="email" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
            <textarea id="message" rows={4} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300">
            Send Message
          </button>
        </form>
      </section>
    </main>
  )
}
