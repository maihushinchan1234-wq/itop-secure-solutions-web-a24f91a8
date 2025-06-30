
import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const BlogsSection = () => {
  const navigate = useNavigate();

  const blogs = [
    {
      id: '1',
      title: 'The Future of Home Security with Smart Door Locks',
      excerpt: 'Explore the latest trends in smart door lock technology and how they are transforming home security.',
      author: 'Alice Johnson',
      date: '2024-01-20',
      category: 'Door Locks'
    },
    {
      id: '2',
      title: 'Top 5 CCTV Cameras for Business Surveillance',
      excerpt: 'A detailed review of the best CCTV cameras for enhancing business security and preventing theft.',
      author: 'Bob Williams',
      date: '2024-02-15',
      category: 'CCTV'
    },
    {
      id: '3',
      title: 'Ensuring Fire Safety: A Guide to Modern Fire Alarms',
      excerpt: 'Learn about the importance of modern fire alarms and how they can save lives and protect property.',
      author: 'Charlie Brown',
      date: '2024-03-10',
      category: 'Fire Alarms'
    },
  ];

  const handleBlogClick = (blogId: string) => {
    navigate(`/blog/${blogId}`);
  };

  const handleViewAllClick = () => {
    // Navigate to feedback page and scroll to top
    navigate('/feedback');
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  };

  return (
    <section id="blogs" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Latest Blogs & FAQs
          </h2>
          <p className="text-lg text-gray-600">
            Stay updated with the latest trends and insights in technology and security
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <article 
              key={blog.id} 
              className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => handleBlogClick(blog.id)}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                    {blog.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(blog.date).toLocaleDateString()}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3 hover:text-blue-600 transition-colors">
                  {blog.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {blog.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-500 text-sm">
                    <User className="h-4 w-4 mr-1" />
                    {blog.author}
                  </div>
                  <div className="flex items-center text-blue-600 hover:text-blue-700 transition-colors">
                    <span className="text-sm font-medium mr-1">Read More</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={handleViewAllClick}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            View Testimonials & Feedback
          </button>
        </div>
      </div>
    </section>
  );
};
