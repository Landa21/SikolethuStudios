import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Play } from 'lucide-react';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

interface PortfolioItem {
  id: number;
  type: 'photo' | 'video';
  category: string;
  image: string;
  title: string;
  description: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    type: 'photo',
    category: 'Wedding',
    image: 'https://images.unsplash.com/photo-1501691422312-5643640fa418?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcGhvdG9ncmFwaHklMjBiZWF1dGlmdWx8ZW58MXx8fHwxNzYzODU2MTk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Sarah & John Wedding',
    description: 'A beautiful summer wedding in the countryside',
  },
  {
    id: 2,
    type: 'photo',
    category: 'Portrait',
    image: 'https://images.unsplash.com/photo-1649107835391-07d0b93a409d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHBob3RvZ3JhcGh5JTIwc3R1ZGlvfGVufDF8fHx8MTc2MzgyMjgxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Studio Portrait Session',
    description: 'Professional portrait photography with dramatic lighting',
  },
  {
    id: 3,
    type: 'photo',
    category: 'Landscape',
    image: 'https://images.unsplash.com/photo-1729011373667-cc344d939de6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW5kc2NhcGUlMjBwaG90b2dyYXBoeSUyMG5hdHVyZXxlbnwxfHx8fDE3NjM4NTYyMDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Mountain Sunrise',
    description: 'Capturing the golden hour in the mountains',
  },
  {
    id: 4,
    type: 'photo',
    category: 'Street',
    image: 'https://images.unsplash.com/photo-1624537354079-5cea130cf69b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMHN0cmVldCUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc2Mzc3ODIyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Urban Life',
    description: 'Street photography capturing everyday moments',
  },
  {
    id: 5,
    type: 'video',
    category: 'Event',
    image: 'https://images.unsplash.com/photo-1694720274936-298495c4dc8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMHBob3RvZ3JhcGh5JTIwY29uY2VydHxlbnwxfHx8fDE3NjM4MzE3NzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Concert Coverage',
    description: 'Live event videography with dynamic camera work',
  },
  {
    id: 6,
    type: 'video',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1677260304441-e2d8ebb0d4ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwcGhvdG9ncmFwaHklMjBjb21tZXJjaWFsfGVufDF8fHx8MTc2MzgyOTc3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Product Showcase',
    description: 'Commercial product videography for brands',
  },
  {
    id: 7,
    type: 'video',
    category: 'Cinematic',
    image: 'https://images.unsplash.com/photo-1670411952195-fffeca152dd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWF0aWMlMjB2aWRlb2dyYXBoeXxlbnwxfHx8fDE3NjM4NTYxOTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Cinematic Short Film',
    description: 'Artistic videography with cinematic storytelling',
  },
  {
    id: 8,
    type: 'photo',
    category: 'Product',
    image: 'https://images.unsplash.com/photo-1677260304441-e2d8ebb0d4ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwcGhvdG9ncmFwaHklMjBjb21tZXJjaWFsfGVufDF8fHx8MTc2MzgyOTc3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'E-commerce Product Shoot',
    description: 'High-quality product photography for online stores',
  },
];

export function Portfolio() {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [activeTab, setActiveTab] = useState<'all' | 'photo' | 'video'>('all');

  const filteredItems = portfolioItems.filter((item) => {
    if (activeTab === 'all') return true;
    return item.type === activeTab;
  });

  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="mb-4">Our Portfolio</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our collection of stunning photography and videography work, from weddings and portraits to
            commercial projects and cinematic productions.
          </p>
        </motion.div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as any)} className="mb-12">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
            <TabsTrigger value="all">All Work</TabsTrigger>
            <TabsTrigger value="photo">Photography</TabsTrigger>
            <TabsTrigger value="video">Videography</TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              onClick={() => setSelectedItem(item)}
              className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="text-sm text-white/80 mb-1">{item.category}</div>
                  <h3 className="mb-2">{item.title}</h3>
                  <p className="text-sm text-white/90">{item.description}</p>
                </div>
                {item.type === 'video' && (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Play size={24} className="text-white ml-1" />
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            >
              <X size={32} />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-5xl w-full"
            >
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              <div className="text-white mt-6 text-center">
                <div className="text-sm text-white/60 mb-2">{selectedItem.category}</div>
                <h2 className="mb-2">{selectedItem.title}</h2>
                <p className="text-white/80">{selectedItem.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
