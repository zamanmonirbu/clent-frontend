import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

export function BlogPostPage() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 pt-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-gray-900">Post not found</h1>
          <Link to="/blog" className="text-emerald-600 hover:text-emerald-700">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-32">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/blog"
          className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full aspect-video object-cover"
          />
          
          <div className="p-8">
            <div className="text-sm text-emerald-600 mb-2">{post.category}</div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h1>
            
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-8">
              <span>{post.author}</span>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {post.date}
              </div>
            </div>

            <div className="prose prose-emerald max-w-none">
              {post.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}