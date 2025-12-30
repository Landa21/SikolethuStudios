import { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: '10 Tips for Perfect Wedding Photography',
    excerpt: 'Learn the essential techniques and strategies for capturing unforgettable wedding moments that couples will treasure forever.',
    image: 'https://images.unsplash.com/photo-1501691422312-5643640fa418?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcGhvdG9ncmFwaHklMjBiZWF1dGlmdWx8ZW58MXx8fHwxNzYzODU2MTk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    author: 'Alex Thompson',
    date: 'November 15, 2025',
    category: 'Wedding',
    readTime: '5 min read',
  },
  {
    id: 2,
    title: 'The Art of Portrait Lighting',
    excerpt: 'Discover how to master lighting techniques to create stunning portraits that bring out the best in your subjects.',
    image: 'https://images.unsplash.com/photo-1649107835391-07d0b93a409d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHBob3RvZ3JhcGh5JTIwc3R1ZGlvfGVufDF8fHx8MTc2MzgyMjgxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    author: 'Sarah Mitchell',
    date: 'November 10, 2025',
    category: 'Tutorial',
    readTime: '7 min read',
  },
  {
    id: 3,
    title: 'Behind the Scenes: Corporate Event Shoot',
    excerpt: 'Take a look behind the scenes at a recent corporate event and see how we captured the energy and professionalism of the day.',
    image: 'https://images.unsplash.com/photo-1694720274936-298495c4dc8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMHBob3RvZ3JhcGh5JTIwY29uY2VydHxlbnwxfHx8fDE3NjM4MzE3NzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    author: 'Michael Chen',
    date: 'November 5, 2025',
    category: 'Behind the Scenes',
    readTime: '4 min read',
  },
  {
    id: 4,
    title: 'Cinematic Videography: Creating Emotion',
    excerpt: 'Explore the techniques we use to create emotional, cinematic videos that tell compelling stories and connect with audiences.',
    image: 'https://images.unsplash.com/photo-1670411952195-fffeca152dd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWF0aWMlMjB2aWRlb2dyYXBoeXxlbnwxfHx8fDE3NjM4NTYxOTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    author: 'Emily Rodriguez',
    date: 'October 28, 2025',
    category: 'Videography',
    readTime: '6 min read',
  },
  {
    id: 5,
    title: 'Product Photography Best Practices',
    excerpt: 'Learn how to showcase products in their best light with professional photography techniques for e-commerce and marketing.',
    image: 'https://images.unsplash.com/photo-1677260304441-e2d8ebb0d4ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwcGhvdG9ncmFwaHklMjBjb21tZXJjaWFsfGVufDF8fHx8MTc2MzgyOTc3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    author: 'David Park',
    date: 'October 20, 2025',
    category: 'Commercial',
    readTime: '5 min read',
  },
  {
    id: 6,
    title: 'Landscape Photography: Chasing the Light',
    excerpt: 'Join us on a journey through stunning landscapes and learn how we capture the beauty of nature in golden hour.',
    image: 'https://images.unsplash.com/photo-1729011373667-cc344d939de6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW5kc2NhcGUlMjBwaG90b2dyYXBoeSUyMG5hdHVyZXxlbnwxfHx8fDE3NjM4NTYyMDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    author: 'Alex Thompson',
    date: 'October 15, 2025',
    category: 'Landscape',
    readTime: '8 min read',
  },
];

const categories = ['All', 'Wedding', 'Tutorial', 'Behind the Scenes', 'Videography', 'Commercial', 'Landscape'];

export function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = blogPosts.filter(
    (post) => selectedCategory === 'All' || post.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="mb-4">Blog & Updates</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tips, tutorials, and behind-the-scenes insights from our photography and videography adventures.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap gap-3 justify-center mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                selectedCategory === category
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Featured Post */}
        {selectedCategory === 'All' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-gray-50 rounded-2xl overflow-hidden">
              <div className="aspect-video lg:aspect-auto">
                <ImageWithFallback
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 text-sm text-gray-600 mb-4">
                  <Tag size={16} />
                  <span>{blogPosts[0].category}</span>
                </div>
                <h2 className="mb-4">{blogPosts[0].title}</h2>
                <p className="text-gray-600 mb-6">{blogPosts[0].excerpt}</p>
                <div className="flex items-center gap-6 text-sm text-gray-600 mb-6">
                  <div className="flex items-center gap-2">
                    <User size={16} />
                    <span>{blogPosts[0].author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{blogPosts[0].date}</span>
                  </div>
                </div>
                <Button className="bg-black hover:bg-gray-800 w-fit">
                  Read More
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Blog Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.slice(selectedCategory === 'All' ? 1 : 0).map((post, index) => (
            <motion.article
              key={post.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-video overflow-hidden rounded-lg mb-4">
                <ImageWithFallback
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="inline-flex items-center gap-2 text-sm text-gray-600 mb-2">
                <Tag size={14} />
                <span>{post.category}</span>
              </div>
              <h3 className="mb-2 group-hover:text-gray-600 transition-colors">{post.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <User size={14} />
                  <span>{post.author}</span>
                </div>
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500 mt-2">
                <Calendar size={14} />
                <span>{post.date}</span>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-20 bg-black text-white rounded-2xl p-12 text-center"
        >
          <h2 className="text-white mb-4">Stay Updated</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Subscribe to our newsletter for the latest tips, updates, and exclusive behind-the-scenes content delivered
            to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
            />
            <Button className="bg-white text-black hover:bg-gray-100">Subscribe</Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}