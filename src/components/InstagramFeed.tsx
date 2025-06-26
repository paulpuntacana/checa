import { useState, useEffect } from 'react';
import { Card } from "@/components/ui/card";
import { ExternalLink, Instagram } from 'lucide-react';

interface InstagramPost {
  id: string;
  caption: string;
  media_url: string;
  media_type: string;
  permalink: string;
  timestamp: string;
  like_count?: number;
  comments_count?: number;
}

const InstagramFeed = () => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Portfolio images - using local images instead of Instagram API
  const portfolioImages: InstagramPost[] = [
    {
      id: '1',
      caption: '',
      media_url: '/images/portfolio1.jpeg',
      media_type: 'IMAGE',
      permalink: 'https://www.instagram.com/checa_makeup/',
      timestamp: new Date().toISOString(),
    },
    {
      id: '2',
      caption: '',
      media_url: '/images/portfolio2.jpeg',
      media_type: 'IMAGE',
      permalink: 'https://www.instagram.com/checa_makeup/',
      timestamp: new Date().toISOString(),
    },
    {
      id: '3',
      caption: '',
      media_url: '/images/portfolio3.jpeg',
      media_type: 'IMAGE',
      permalink: 'https://www.instagram.com/checa_makeup/',
      timestamp: new Date().toISOString(),
    },
    {
      id: '4',
      caption: '',
      media_url: '/images/portfolio4.jpeg',
      media_type: 'IMAGE',
      permalink: 'https://www.instagram.com/checa_makeup/',
      timestamp: new Date().toISOString(),
    },
    {
      id: '5',
      caption: '',
      media_url: '/images/portfolio5.jpeg',
      media_type: 'IMAGE',
      permalink: 'https://www.instagram.com/checa_makeup/',
      timestamp: new Date().toISOString(),
    },
    {
      id: '6',
      caption: '',
      media_url: '/images/portfolio6.jpeg',
      media_type: 'IMAGE',
      permalink: 'https://www.instagram.com/checa_makeup/',
      timestamp: new Date().toISOString(),
    }
  ];

  useEffect(() => {
    // Simulate API call delay
    const timer = setTimeout(() => {
      setPosts(portfolioImages);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const formatCaption = (caption: string, maxLength: number = 100) => {
    if (caption.length <= maxLength) return caption;
    return caption.substring(0, maxLength) + '...';
  };

  const formatTimeAgo = (timestamp: string) => {
    const now = new Date();
    const postTime = new Date(timestamp);
    const diffInHours = Math.floor((now.getTime() - postTime.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 24) {
      return `${diffInHours}h ago`;
    } else {
      const days = Math.floor(diffInHours / 24);
      return `${days}d ago`;
    }
  };

  if (loading) {
    return (
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Card key={i} className="overflow-hidden animate-pulse">
              <div className="aspect-square bg-gray-200"></div>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <Instagram className="w-12 h-12 text-gray-400 mx-auto mb-4" />
        <p className="text-gray-600 mb-4">Unable to load Instagram posts</p>
        <a 
          href="https://www.instagram.com/checa_makeup/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium"
        >
          View on Instagram <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header with Instagram link */}
      <div className="text-center">
        <a 
          href="https://www.instagram.com/checa_makeup/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium text-lg transition-colors"
        >
          <Instagram className="w-5 h-5" />
          @checa_makeup
          <ExternalLink className="w-4 h-4" />
        </a>
        <p className="text-gray-600 mt-2">Latest from our Instagram</p>
      </div>

      {/* Posts Grid */}
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Card key={post.id} className="group overflow-hidden hover:shadow-lg transition-all duration-300 border-0 shadow-md">
            <div className="relative aspect-square overflow-hidden">
              <img 
                src={post.media_url} 
                alt={`Checa Makeup portfolio - Professional bridal and wedding makeup work in Punta Cana, Dominican Republic by Franchesca Martinez Castillo`}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <a 
                  href={post.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/90 text-purple-600 px-4 py-2 rounded-full font-medium hover:bg-white transition-colors flex items-center gap-2"
                >
                  <Instagram className="w-4 h-4" />
                  View on Instagram
                </a>
              </div>
            </div>
          </Card>
        ))}
        </div>
      </div>

      {/* Footer link */}
      <div className="text-center pt-4">
        <a 
          href="https://www.instagram.com/checa_makeup/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          <Instagram className="w-5 h-5" />
          Follow @checa_makeup
        </a>
      </div>
    </div>
  );
};

export default InstagramFeed; 