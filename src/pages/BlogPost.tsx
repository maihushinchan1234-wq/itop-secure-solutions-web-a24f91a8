import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Tag, Clock } from 'lucide-react';
import { HamburgerSidebar } from "@/components/layout/HamburgerSidebar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { useBlogPost, BlogPostContent } from "@/hooks/useCMSContent";

// Fallback content for when Sanity data is not available
const fallbackBlogPosts: Record<string, BlogPostContent> = {
  '1': {
    id: '1',
    title: 'The Future of Home Security with Smart Door Locks',
    excerpt: 'Discover how smart door locks work, their key benefits like remote access and activity logs, and the best brands available in India.',
    htmlContent: `
      <div class="prose prose-lg max-w-none space-y-8">
        <div class="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border-l-4 border-blue-500">
          <h2 class="text-2xl font-semibold text-blue-800 mb-3">Why Smart Door Locks Are Revolutionary</h2>
          <p class="text-blue-700 leading-relaxed">Traditional keys are becoming obsolete. Smart door locks represent the future of home security, offering unprecedented convenience, control, and peace of mind.</p>
        </div>
        <div class="bg-green-50 p-6 rounded-lg border border-green-200">
          <h3 class="text-xl font-semibold text-green-800 mb-4">Key Benefits:</h3>
          <ul class="space-y-3 text-green-700">
            <li><strong>Remote Access Control:</strong> Lock or unlock your door from anywhere using your smartphone.</li>
            <li><strong>Temporary Access Codes:</strong> Create one-time codes for guests or service providers.</li>
            <li><strong>Real-Time Alerts:</strong> Get instant notifications for any security events.</li>
            <li><strong>Activity Tracking:</strong> Monitor who enters and exits with detailed logs.</li>
          </ul>
        </div>
        <div class="bg-blue-50 p-6 rounded-lg border border-blue-200">
          <h3 class="text-xl font-semibold text-blue-800 mb-4">Ready to Upgrade?</h3>
          <p class="text-blue-700">Contact iTOP Services for professional smart lock installation across Delhi NCR.</p>
        </div>
      </div>
    `,
    author: 'Security Expert Team',
    date: 'January 20, 2024',
    category: 'Door Locks',
    readTime: '8 min read'
  },
  '2': {
    id: '2',
    title: 'Top 5 CCTV Cameras for Business Surveillance',
    excerpt: 'A comprehensive guide to choosing the right CCTV system for your business.',
    htmlContent: `
      <div class="prose prose-lg max-w-none space-y-8">
        <div class="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg border-l-4 border-purple-500">
          <h2 class="text-2xl font-semibold text-purple-800 mb-3">Protect Your Business Investment</h2>
          <p class="text-purple-700 leading-relaxed">A comprehensive CCTV surveillance system creates a secure environment where business thrives.</p>
        </div>
        <h3 class="text-xl font-semibold text-gray-800 mb-6">🏆 Top 5 CCTV Brands:</h3>
        <div class="space-y-4">
          <div class="bg-blue-50 p-4 rounded-lg"><strong>1. CP Plus</strong> - Best Value for Money</div>
          <div class="bg-green-50 p-4 rounded-lg"><strong>2. Hikvision</strong> - Industry Technology Leader</div>
          <div class="bg-orange-50 p-4 rounded-lg"><strong>3. Dahua</strong> - Superior Software Integration</div>
          <div class="bg-purple-50 p-4 rounded-lg"><strong>4. Godrej</strong> - Trusted Indian Brand</div>
          <div class="bg-teal-50 p-4 rounded-lg"><strong>5. TP-Link Tapo</strong> - Best for Small Offices</div>
        </div>
      </div>
    `,
    author: 'Security Expert Team',
    date: 'February 15, 2024',
    category: 'CCTV',
    readTime: '12 min read'
  },
  '3': {
    id: '3',
    title: 'Ensuring Fire Safety: A Guide to Modern Fire Alarms',
    excerpt: 'Learn about different types of fire alarm systems and best installation practices.',
    htmlContent: `
      <div class="prose prose-lg max-w-none space-y-8">
        <div class="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg border-l-4 border-red-500">
          <h2 class="text-2xl font-semibold text-red-800 mb-3">Why Fire Alarms Are Non-Negotiable</h2>
          <p class="text-red-700 leading-relaxed">Fire doesn't wait. A fire alarm system provides precious seconds that can mean the difference between a minor incident and a catastrophe.</p>
        </div>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-white p-6 border rounded-lg"><h4 class="font-semibold text-red-600 mb-3">Smoke Detectors</h4><p class="text-gray-600">Detect smoke particles - ideal for bedrooms and hallways.</p></div>
          <div class="bg-white p-6 border rounded-lg"><h4 class="font-semibold text-red-600 mb-3">Heat Detectors</h4><p class="text-gray-600">Perfect for kitchens and garages.</p></div>
          <div class="bg-white p-6 border rounded-lg"><h4 class="font-semibold text-red-600 mb-3">CO Detectors</h4><p class="text-gray-600">Essential for homes with gas appliances.</p></div>
          <div class="bg-white p-6 border rounded-lg"><h4 class="font-semibold text-red-600 mb-3">Addressable Systems</h4><p class="text-gray-600">Advanced systems for large buildings.</p></div>
        </div>
      </div>
    `,
    author: 'Fire Safety Expert Team',
    date: 'March 10, 2024',
    category: 'Fire Alarms',
    readTime: '10 min read'
  },
  '4': {
    id: '4',
    title: 'Laser vs Inkjet Printers: Which One Suits Your Needs?',
    excerpt: 'Compare inkjet and laser printers to make the right choice for your needs.',
    htmlContent: `
      <div class="prose prose-lg max-w-none space-y-8">
        <div class="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-lg border-l-4 border-cyan-500">
          <h2 class="text-2xl font-semibold text-cyan-800 mb-3">Choosing the Right Printer</h2>
          <p class="text-cyan-700 leading-relaxed">The choice between inkjet and laser printers depends on your printing volume, quality needs, and budget.</p>
        </div>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-blue-50 p-6 rounded-lg">
            <h3 class="font-bold text-blue-800 mb-4">Inkjet Printers</h3>
            <ul class="text-blue-700 space-y-2">
              <li>✓ Better for photos and graphics</li>
              <li>✓ Lower initial cost</li>
              <li>✓ Compact size</li>
              <li>✗ Higher cost per page</li>
            </ul>
          </div>
          <div class="bg-gray-50 p-6 rounded-lg">
            <h3 class="font-bold text-gray-800 mb-4">Laser Printers</h3>
            <ul class="text-gray-700 space-y-2">
              <li>✓ Faster printing speed</li>
              <li>✓ Lower cost per page</li>
              <li>✓ Better for text documents</li>
              <li>✗ Higher initial cost</li>
            </ul>
          </div>
        </div>
      </div>
    `,
    author: 'Tech Expert',
    date: 'March 15, 2024',
    category: 'Printers',
    readTime: '7 min read'
  }
};

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  useScrollPosition();

  // Fetch blog post from Sanity CMS
  const { content: cmsPost, isLoading } = useBlogPost(id || '1');

  // Use CMS content if available, otherwise use fallback
  const post = cmsPost || fallbackBlogPosts[id || '1'] || null;

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading blog post...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col w-full">
        <HamburgerSidebar 
          isOpen={isSidebarOpen} 
          onToggle={() => setIsSidebarOpen(!isSidebarOpen)} 
        />
        <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
        
        <main className="flex-1 flex items-center justify-center bg-gray-50 p-4">
          <div className="text-center max-w-md">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Blog Post Not Found</h1>
            <p className="text-gray-600 mb-8">
              The blog post you're looking for doesn't exist or has been removed.
            </p>
            <button
              onClick={() => navigate('/#blogs')}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog Section
            </button>
          </div>
        </main>
        
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col w-full">
      <HamburgerSidebar 
        isOpen={isSidebarOpen} 
        onToggle={() => setIsSidebarOpen(!isSidebarOpen)} 
      />
      <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      
      <main className="flex-1 bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
          <div className="max-w-4xl mx-auto px-4">
            <button
              onClick={() => navigate('/#blogs')}
              className="flex items-center gap-2 text-blue-100 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog Section
            </button>
            
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <div className="flex items-center gap-2 text-blue-200">
                <Calendar className="h-4 w-4" />
                <span className="text-sm">{post.date}</span>
              </div>
              <div className="flex items-center gap-2 text-blue-200">
                <User className="h-4 w-4" />
                <span className="text-sm">{post.author}</span>
              </div>
              <div className="flex items-center gap-2 text-blue-200">
                <Tag className="h-4 w-4" />
                <span className="text-sm">{post.category}</span>
              </div>
              <div className="flex items-center gap-2 text-blue-200">
                <Clock className="h-4 w-4" />
                <span className="text-sm">{post.readTime}</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">{post.title}</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Comprehensive guide with expert insights, practical tips, and professional recommendations from iTOP Services
            </p>
          </div>
        </div>

        {/* Article Content */}
        <article className="max-w-4xl mx-auto px-4 py-12">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8 md:p-12">
              <div 
                className="blog-content"
                dangerouslySetInnerHTML={{ __html: post.htmlContent }}
              />
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Need Professional Help?</h3>
            <p className="text-blue-100 mb-6">
              Our expert team is ready to help you with all your {post.category.toLowerCase()} needs. 
              Get professional consultation, installation, and ongoing support.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => navigate('/#contact')}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Consultation
              </button>
              <button
                onClick={() => navigate('/feedback')}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Read Customer Reviews
              </button>
            </div>
          </div>
        </article>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
