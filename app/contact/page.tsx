import { PhoneCall, Mail } from 'lucide-react'

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Get in touch</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <PhoneCall className="mr-2" />
              <div>
                <p className="font-semibold">Call To Us</p>
                <p>We are available 24/7, 7 days a week.</p>
                <p>Phone: +8801611112222</p>
              </div>
            </div>
            <div className="flex items-center">
              <Mail className="mr-2" />
              <div>
                <p className="font-semibold">Write To Us</p>
                <p>Fill out our form and we will contact you within 24 hours.</p>
                <p>Email: customer@exclusive.com</p>
                <p>Email: support@exclusive.com</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name *"
                className="w-full border rounded-md px-3 py-2"
                required
              />
              <input
                type="email"
                placeholder="Your Email *"
                className="w-full border rounded-md px-3 py-2"
                required
              />
            </div>
            <input
              type="tel"
              placeholder="Your Phone *"
              className="w-full border rounded-md px-3 py-2"
              required
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full border rounded-md px-3 py-2"
            ></textarea>
            <button
              type="submit"
              className="px-6 py-2 bg-red-500 text-white rounded-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

