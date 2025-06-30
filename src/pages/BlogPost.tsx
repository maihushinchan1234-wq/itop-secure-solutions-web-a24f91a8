
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SidebarProvider } from "@/components/ui/sidebar";
import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';

const BlogPost = () => {
  const { id } = useParams();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Mock blog posts data
  const blogPosts = {
    '1': {
      title: 'The Future of Home Security with Smart Door Locks',
      content: `Smart door locks are revolutionizing home security by combining convenience with advanced protection. These innovative devices eliminate the need for traditional keys while providing enhanced security features that give homeowners peace of mind.

      Modern smart locks offer multiple access methods including keypads, smartphone apps, biometric scanners, and even voice control. This flexibility means you can grant access to family members, guests, or service providers without being physically present.

      Key benefits of smart door locks include:
      • Remote access control from anywhere
      • Activity logs to track who enters and exits
      • Temporary access codes for guests
      • Integration with home automation systems
      • Automatic locking features for added security

      When choosing a smart lock, consider factors like battery life, connectivity options (Wi-Fi, Bluetooth, Z-Wave), and compatibility with your existing door hardware. Professional installation ensures optimal performance and security.`,
      author: 'Alice Johnson',
      date: '2024-01-20',
      readTime: '5 min read',
      category: 'Door Locks',
      image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=400&fit=crop'
    },
    '2': {
      title: 'Top 5 CCTV Cameras for Business Surveillance',
      content: `Choosing the right CCTV system is crucial for business security. Here's our comprehensive guide to the top 5 CCTV cameras that provide excellent surveillance for businesses of all sizes.

      1. IP Network Cameras - High-resolution digital cameras that connect to your network, offering remote viewing and recording capabilities.

      2. PTZ (Pan-Tilt-Zoom) Cameras - Perfect for large areas, these cameras can be controlled remotely to focus on specific areas.

      3. Thermal Cameras - Detect heat signatures, ideal for perimeter security and low-light conditions.

      4. Wireless Cameras - Easy installation with no cable requirements, perfect for temporary setups or hard-to-reach locations.

      5. 4K Ultra HD Cameras - Crystal clear footage with incredible detail, essential for identifying faces and license plates.

      Consider factors like resolution, night vision capabilities, weather resistance, and storage requirements when selecting your CCTV system. Professional installation ensures optimal camera placement and system configuration.`,
      author: 'Bob Williams',
      date: '2024-02-15',
      readTime: '7 min read',
      category: 'CCTV',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=400&fit=crop'
    },
    '3': {
      title: 'Ensuring Fire Safety: A Guide to Modern Fire Alarms',
      content: `Fire safety is paramount in any building, and modern fire alarm systems provide the early warning needed to protect lives and property. Understanding the different types of fire alarms and their applications is essential for comprehensive fire protection.

      Types of Fire Alarm Systems:
      • Conventional Fire Alarms - Basic systems suitable for small buildings
      • Addressable Fire Alarms - Advanced systems that pinpoint exact alarm locations
      • Wireless Fire Alarms - Easy installation with no wiring required
      • Aspirating Smoke Detection - Ultra-sensitive systems for critical areas

      Modern fire alarms offer features like:
      - Multi-sensor detection (smoke, heat, carbon monoxide)
      - Voice evacuation systems
      - Integration with building management systems
      - Remote monitoring capabilities
      - Automated emergency response

      Regular maintenance and testing are crucial for fire alarm effectiveness. Professional installation ensures compliance with local fire codes and optimal system performance. Don't compromise on fire safety - invest in a quality fire alarm system today.`,
      author: 'Charlie Brown',
      date: '2024-03-10',
      readTime: '6 min read',
      category: 'Fire Alarms',
      image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=800&h=400&fit=crop'
    },
  };

  const post = blogPosts[id as keyof typeof blogPosts];

  if (!post) {
    return (
      <SidebarProvider>
        <div className="min-h-screen flex w-full">
          <Sidebar />
          <div className="flex-1 flex flex-col">
            <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
            <main className="flex-1 overflow-y-auto p-4">
              <div className="container mx-auto max-w-4xl">
                <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
                  <div className="text-red-800">
                    <h2 className="text-xl font-semibold mb-2">Blog post not found</h2>
                    <p>The requested blog post could not be found.</p>
                  </div>
                </div>
                <Link to="/#blogs" className="inline-flex items-center text-blue-600 hover:text-blue-700">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog Section
                </Link>
              </div>
            </main>
            <Footer />
          </div>
        </div>
      </SidebarProvider>
    );
  }

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
          
          <main className="flex-1 overflow-y-auto">
            {/* Hero Section with Featured Image */}
            <div className="relative h-64 md:h-80 bg-gradient-to-r from-blue-600 to-blue-800">
              <div className="absolute inset-0">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover opacity-30"
                />
              </div>
              <div className="relative container mx-auto px-4 h-full flex items-center">
                <div className="text-white max-w-4xl">
                  <div className="mb-4">
                    <Link to="/#blogs" className="inline-flex items-center text-blue-200 hover:text-white transition-colors">
                      <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog Section
                    </Link>
                  </div>
                  <span className="bg-blue-500 text-white text-sm px-3 py-1 rounded-full mb-4 inline-block">
                    {post.category}
                  </span>
                  <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                    {post.title}
                  </h1>
                </div>
              </div>
            </div>

            {/* Article Content */}
            <div className="container mx-auto px-4 py-8">
              <div className="max-w-4xl mx-auto">
                {/* Article Meta */}
                <div className="flex flex-wrap items-center gap-6 mb-8 text-gray-600">
                  <div className="flex items-center">
                    <User className="mr-2 h-4 w-4" />
                    <span className="font-medium">{post.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>{new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-2 h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Article Body */}
                <div className="prose prose-lg max-w-none">
                  <div className="text-gray-700 leading-relaxed space-y-6">
                    {post.content.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="text-lg leading-relaxed">
                        {paragraph.trim()}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Back to Blog Button */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <Link to="/#blogs" className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to All Articles
                  </Link>
                </div>
              </div>
            </div>
          </main>
          
          <Footer />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default BlogPost;
