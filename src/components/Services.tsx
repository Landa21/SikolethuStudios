import { useState } from 'react';
import { motion } from 'motion/react';
import { Camera, Video, Sparkles, Users, Package, Edit3, Check } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

interface Service {
  id: string;
  icon: any;
  title: string;
  description: string;
  features: string[];
  priceRange: string;
}

const services: Service[] = [
  {
    id: 'wedding',
    icon: Sparkles,
    title: 'Wedding Photography',
    description: 'Capture every moment of your special day with our comprehensive wedding photography packages.',
    features: [
      'Full day coverage (8-12 hours)',
      'Two professional photographers',
      'High-resolution digital images',
      'Online gallery for sharing',
      'Engagement session included',
      'Custom wedding album',
    ],
    priceRange: 'Starting at $2,500',
  },
  {
    id: 'portrait',
    icon: Camera,
    title: 'Portrait Photography',
    description: 'Professional portrait sessions for individuals, families, and corporate headshots.',
    features: [
      'Studio or outdoor location',
      '1-2 hour session',
      '20-30 edited photos',
      'Wardrobe changes welcome',
      'Professional retouching',
      'Print options available',
    ],
    priceRange: 'Starting at $350',
  },
  {
    id: 'event',
    icon: Users,
    title: 'Event Coverage',
    description: 'Document your corporate events, parties, and special occasions with professional photography.',
    features: [
      'Full event coverage',
      'Candid and posed shots',
      'Same-day sneak peeks',
      'Fast turnaround time',
      'High-resolution downloads',
      'Custom branding options',
    ],
    priceRange: 'Starting at $800',
  },
  {
    id: 'commercial-video',
    icon: Video,
    title: 'Commercial Videography',
    description: 'Create compelling video content for your brand, including commercials and promotional videos.',
    features: [
      'Concept development',
      'Professional cinematography',
      'Scriptwriting assistance',
      'Professional editing',
      'Color grading',
      'Multiple format delivery',
    ],
    priceRange: 'Starting at $3,000',
  },
  {
    id: 'product',
    icon: Package,
    title: 'Product Photography',
    description: 'High-quality product photography perfect for e-commerce, catalogs, and marketing materials.',
    features: [
      'Studio setup included',
      'Multiple angles and setups',
      'White background or styled',
      'Professional retouching',
      'Web-optimized files',
      'Fast turnaround',
    ],
    priceRange: 'Starting at $500',
  },
  {
    id: 'editing',
    icon: Edit3,
    title: 'Video Editing',
    description: 'Professional video editing services to transform your raw footage into polished content.',
    features: [
      'Color correction & grading',
      'Audio mixing & enhancement',
      'Motion graphics',
      'Transitions & effects',
      'Multiple revisions',
      'Various format exports',
    ],
    priceRange: 'Starting at $150/hour',
  },
];

interface ServicesProps {
  onNavigate: (page: string) => void;
}

export function Services({ onNavigate }: ServicesProps) {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const handleNavigate = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="mb-4">Our Services</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Professional photography and videography services tailored to your needs. From weddings to commercial
            projects, we bring your vision to life.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center mb-4">
                    <service.icon size={24} />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Check size={18} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mb-4 pb-4 border-b border-gray-200">
                    <div className="text-gray-900">{service.priceRange}</div>
                  </div>
                  <Button
                    onClick={() => handleNavigate('contact')}
                    className="w-full bg-black hover:bg-gray-800"
                  >
                    Request Quote
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-black text-white rounded-2xl p-12 text-center"
        >
          <h2 className="text-white mb-4">Ready to Start Your Project?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Let's discuss your vision and create something amazing together. We offer custom packages tailored to your
            specific needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => handleNavigate('contact')}
              size="lg"
              className="bg-white text-black hover:bg-gray-100"
            >
              Get in Touch
            </Button>
            <Button
              onClick={() => handleNavigate('portfolio')}
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-black"
            >
              View Our Work
            </Button>
          </div>
        </motion.div>

        {/* Process Section */}
        <div className="mt-20">
          <h2 className="text-center mb-12">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Consultation',
                description: 'We discuss your vision, requirements, and preferences in detail',
              },
              {
                step: '02',
                title: 'Planning',
                description: 'Create a detailed plan including timeline, locations, and logistics',
              },
              {
                step: '03',
                title: 'Production',
                description: 'Professional photography or videography with state-of-the-art equipment',
              },
              {
                step: '04',
                title: 'Delivery',
                description: 'Receive your beautifully edited photos or videos in your preferred format',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl mb-4 text-gray-300">{item.step}</div>
                <h3 className="mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
