import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from './ui/button';

interface HeroProps {
  onNavigate: (page: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  const handleNavigate = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1643968612613-fd411aecd1fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwaG90b2dyYXBoZXIlMjBjYW1lcmF8ZW58MXx8fHwxNzYzNzY3ODEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-white mb-6">
              Capturing Your Story,
              <br />
              One Frame at a Time
            </h1>
            <p className="text-white/90 text-xl max-w-2xl mx-auto mb-8">
              Professional photography and videography services that transform moments into timeless memories
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => handleNavigate('portfolio')}
                className="bg-white text-black hover:bg-white/90"
              >
                View Portfolio
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => handleNavigate('contact')}
                className="bg-transparent border-white text-white hover:bg-white hover:text-black"
              >
                Get in Touch
              </Button>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2"
            >
              <motion.div className="w-1 h-2 bg-white rounded-full" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="mb-1">500+</div>
              <div className="text-white/70 text-sm">Projects Completed</div>
            </div>
            <div>
              <div className="mb-1">300+</div>
              <div className="text-white/70 text-sm">Happy Clients</div>
            </div>
            <div>
              <div className="mb-1">50+</div>
              <div className="text-white/70 text-sm">Awards Won</div>
            </div>
            <div>
              <div className="mb-1">10+</div>
              <div className="text-white/70 text-sm">Years Experience</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
