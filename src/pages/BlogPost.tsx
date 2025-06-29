import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SidebarProvider } from "@/components/ui/sidebar";
import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User } from 'lucide-react';

const BlogPost = () => {
  const { id } = useParams();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Mock blog posts data
  const blogPosts = {
    '1': {
      title: 'The Future of Home Security with Smart Door Locks',
      content: 'Explore the latest trends in smart door lock technology and how they are transforming home security.',
      author: 'Alice Johnson',
      date: '2024-01-20'
    },
    '2': {
      title: 'Top 5 CCTV Cameras for Business Surveillance',
      content: 'A detailed review of the best CCTV cameras for enhancing business security and preventing theft.',
      author: 'Bob Williams',
      date: '2024-02-15'
    },
    '3': {
      title: 'Ensuring Fire Safety: A Guide to Modern Fire Alarms',
      content: 'Learn about the importance of modern fire alarms and how they can save lives and protect property.',
      author: 'Charlie Brown',
      date: '2024-03-10'
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
              <div className="container mx-auto">
                <div className="alert alert-error">
                  <div className="flex-1">
                    <label>
                      Blog post not found.
                    </label>
                  </div>
                </div>
                <Link to="/" className="btn btn-primary mt-4">
                  <ArrowLeft className="mr-2" /> Back to Home
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
          
          <main className="flex-1 overflow-y-auto p-4">
            <div className="container mx-auto">
              <div className="mb-4">
                <Link to="/" className="btn btn-ghost">
                  <ArrowLeft className="mr-2" /> Back to Home
                </Link>
              </div>
              <h1 className="text-3xl font-bold text-gray-800 mb-4">{post.title}</h1>
              <div className="flex items-center text-gray-600 mb-2">
                <User className="mr-2" size={16} />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center text-gray-600 mb-4">
                <Calendar className="mr-2" size={16} />
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <p className="text-gray-700 leading-relaxed">{post.content}</p>
            </div>
          </main>
          
          <Footer />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default BlogPost;
