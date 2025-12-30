import { motion } from 'motion/react';
import { Award, Camera, Heart, Users } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Bride',
    content: 'The photos from our wedding day are absolutely stunning. They captured every emotion perfectly!',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Business Owner',
    content: 'Professional, creative, and delivered beyond our expectations. Our product shots look amazing!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
  },
  {
    id: 3,
    name: 'Emma Davis',
    role: 'Event Organizer',
    content: 'Their videography team captured the energy of our event perfectly. The final video was incredible!',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
  },
];

const features = [
  {
    icon: Camera,
    title: 'Professional Equipment',
    description: 'Latest camera gear and technology for the highest quality results',
  },
  {
    icon: Heart,
    title: 'Passionate Approach',
    description: 'We pour our heart into every project, treating each as unique',
  },
  {
    icon: Award,
    title: 'Award-Winning',
    description: 'Recognized for excellence in photography and videography',
  },
  {
    icon: Users,
    title: 'Client-Focused',
    description: 'Your vision and satisfaction are our top priorities',
  },
];

export function About() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="mb-4">About Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We are passionate visual storytellers dedicated to capturing life's most precious moments
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1643968612613-fd411aecd1fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwaG90b2dyYXBoZXIlMjBjYW1lcmF8ZW58MXx8fHwxNzYzNzY3ODEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="About Us"
              className="w-full h-[500px] object-cover rounded-lg shadow-xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col justify-center"
          >
            <h2 className="mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2015, Lens & Frame began as a passion project between two friends with cameras and a dream.
              What started as weekend photography sessions has grown into a full-service photography and videography
              studio serving clients worldwide.
            </p>
            <p className="text-gray-600 mb-4">
              Our approach combines technical expertise with artistic vision. We believe that every moment has a story
              to tell, and we're dedicated to capturing those stories in the most authentic and beautiful way possible.
            </p>
            <p className="text-gray-600 mb-6">
              With over 10 years of experience, we've had the privilege of working with hundreds of clients, from
              intimate weddings to large corporate events, and everything in between. Each project is an opportunity to
              create something extraordinary.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="text-gray-900 mb-1">10+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="text-gray-900 mb-1">500+</div>
                <div className="text-sm text-gray-600">Projects</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="text-gray-900 mb-1">50+</div>
                <div className="text-sm text-gray-600">Awards</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="text-gray-900 mb-1">300+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features */}
        <div className="mb-20">
          <h2 className="text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-black text-white rounded-full mb-4">
                  <feature.icon size={28} />
                </div>
                <h3 className="mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h2 className="text-center mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="bg-gray-50 p-6 rounded-lg"
              >
                <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-3">
                  <ImageWithFallback
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
