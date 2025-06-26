
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SidebarProvider } from "@/components/ui/sidebar";
import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { Footer } from "@/components/layout/Footer";
import { ArrowLeft, Calendar, User } from 'lucide-react';

const BlogPost = () => {
  const { slug } = useParams();

  const blogPosts = {
    'choose-printer-office': {
      title: 'How to Choose a Printer for Your Office',
      date: 'December 15, 2024',
      author: 'iTOP Services Team',
      content: `
        <p class="mb-6 text-gray-700 leading-relaxed">Choosing the right printer for your office is crucial for productivity and cost-effectiveness. With so many options available in the market, it can be overwhelming to make the right choice.</p>
        
        <h2 class="text-2xl font-bold mb-4 text-gray-800">Consider Your Printing Volume</h2>
        <p class="mb-6 text-gray-700 leading-relaxed">The first factor to consider is how much you print. Small offices with light printing needs can opt for inkjet printers, while high-volume offices should consider laser printers for better cost per page.</p>
        
        <h2 class="text-2xl font-bold mb-4 text-gray-800">Types of Printing</h2>
        <p class="mb-6 text-gray-700 leading-relaxed">If you primarily print text documents, a monochrome laser printer is ideal. For marketing materials and presentations, consider a color laser or high-quality inkjet printer.</p>
        
        <h2 class="text-2xl font-bold mb-4 text-gray-800">Connectivity Options</h2>
        <p class="mb-6 text-gray-700 leading-relaxed">Modern offices need printers with Wi-Fi, Ethernet, and mobile printing capabilities. Look for printers that support cloud printing and have mobile apps for easy printing from smartphones and tablets.</p>
        
        <h2 class="text-2xl font-bold mb-4 text-gray-800">Maintenance and Support</h2>
        <p class="mb-6 text-gray-700 leading-relaxed">Consider the availability of service and genuine consumables. At iTOP Services, we provide comprehensive support for all major printer brands including HP, Canon, Epson, and Brother.</p>
      `
    },
    'smart-vs-traditional-locks': {
      title: 'Smart Locks vs Traditional Locks',
      date: 'December 10, 2024',
      author: 'iTOP Services Team',
      content: `
        <p class="mb-6 text-gray-700 leading-relaxed">The security landscape is evolving rapidly, and door locks are no exception. Smart locks are becoming increasingly popular, but are they right for everyone?</p>
        
        <h2 class="text-2xl font-bold mb-4 text-gray-800">Traditional Locks: Tried and True</h2>
        <p class="mb-6 text-gray-700 leading-relaxed">Traditional mechanical locks have been securing homes and businesses for decades. They're reliable, don't require power, and are generally more affordable upfront.</p>
        
        <h2 class="text-2xl font-bold mb-4 text-gray-800">Smart Locks: The Future is Here</h2>
        <p class="mb-6 text-gray-700 leading-relaxed">Smart locks offer convenience and advanced features like remote access, temporary codes for guests, and integration with smart home systems. You can lock or unlock your door from anywhere in the world.</p>
        
        <h2 class="text-2xl font-bold mb-4 text-gray-800">Security Considerations</h2>
        <p class="mb-6 text-gray-700 leading-relaxed">Both types can be secure when properly installed and maintained. Smart locks offer additional security features like access logs and alerts, while traditional locks are immune to cyber attacks.</p>
        
        <h2 class="text-2xl font-bold mb-4 text-gray-800">Making the Right Choice</h2>
        <p class="mb-6 text-gray-700 leading-relaxed">The choice depends on your specific needs, budget, and comfort with technology. Our experts at iTOP Services can help you evaluate your requirements and recommend the best solution.</p>
      `
    }
  };

  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    return (
      <SidebarProvider>
        <div className="min-h-screen flex w-full">
          <Sidebar />
          <div className="flex-1 flex flex-col">
            <Header />
            <main className="flex-1 overflow-y-auto">
              <div className="container mx-auto px-4 py-16">
                <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
                <Link to="/" className="text-blue-600 hover:underline">
                  Return to Homepage
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
          <Header />
          <main className="flex-1 overflow-y-auto">
            <article className="container mx-auto px-4 py-16 max-w-4xl">
              <Link 
                to="/#blogs" 
                className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blogs
              </Link>
              
              <header className="mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  {post.title}
                </h1>
                <div className="flex items-center text-gray-600 space-x-6">
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <User className="w-5 h-5 mr-2" />
                    <span>{post.author}</span>
                  </div>
                </div>
              </header>
              
              <div 
                className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              
              <div className="mt-12 p-6 bg-blue-50 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Need Expert Advice?
                </h3>
                <p className="text-gray-700 mb-4">
                  Our team at iTOP Services is here to help with all your technology and security needs.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="tel:9990820830" 
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Call Us: 9990820830
                  </a>
                  <a 
                    href="mailto:sachidanand@live.in" 
                    className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    Email Us
                  </a>
                </div>
              </div>
            </article>
          </main>
          <Footer />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default BlogPost;
