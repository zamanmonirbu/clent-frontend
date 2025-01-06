import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { blogPosts } from '../../data/blogPosts';

export function BlogPosts() {
  // Only show the first 3 blog posts on the homepage
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Latest from Our Blog</h2>
          <Link 
            to="/blog"
            className="text-emerald-600 hover:text-emerald-700 font-semibold flex items-center gap-2"
          >
            View All Posts <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredPosts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              className="group block bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-emerald-600 mb-2">{post.category}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center text-emerald-600 font-semibold">
                  Read More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}