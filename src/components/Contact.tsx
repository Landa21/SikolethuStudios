import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { toast } from 'sonner@2.0.3';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success('Message sent successfully! We\'ll get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="mb-4">Get in Touch</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ready to bring your vision to life? Contact us today to discuss your photography or videography needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="mb-6">Contact Information</h2>
            <p className="text-gray-600 mb-8">
              We'd love to hear from you! Whether you have a question about our services, pricing, or anything else,
              our team is ready to answer all your questions.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="mb-1">Email</div>
                  <p className="text-gray-600">hello@lensframe.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="mb-1">Phone</div>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="mb-1">Location</div>
                  <p className="text-gray-600">
                    123 Creative Street
                    <br />
                    New York, NY 10001
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-gray-100 hover:bg-black hover:text-white transition-colors rounded-lg flex items-center justify-center"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-gray-100 hover:bg-black hover:text-white transition-colors rounded-lg flex items-center justify-center"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-gray-100 hover:bg-black hover:text-white transition-colors rounded-lg flex items-center justify-center"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-gray-100 hover:bg-black hover:text-white transition-colors rounded-lg flex items-center justify-center"
                >
                  <Youtube size={20} />
                </a>
              </div>
            </div>

            <div className="mt-10 bg-gray-50 p-6 rounded-lg">
              <h3 className="mb-3">Business Hours</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>By Appointment</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-lg">
              <h2 className="mb-6">Send us a Message</h2>

              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 text-sm">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block mb-2 text-sm">
                    Phone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block mb-2 text-sm">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                  >
                    <option value="">Select a service</option>
                    <option value="wedding">Wedding Photography</option>
                    <option value="portrait">Portrait Photography</option>
                    <option value="event">Event Coverage</option>
                    <option value="commercial">Commercial Videography</option>
                    <option value="product">Product Photography</option>
                    <option value="editing">Video Editing</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 text-sm">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us about your project..."
                  />
                </div>

                <Button type="submit" disabled={isSubmitting} className="w-full bg-black hover:bg-gray-800">
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2" size={18} />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16"
        >
          <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Map placeholder - Integrate with Google Maps API</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
