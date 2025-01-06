import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { BlogPost } from '../../types/blog';

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link to={`/blog/${post.slug}`} className="group">
      <article className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
        <div className="aspect-video overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-6">
          <div className="text-sm text-emerald-600 mb-2">{post.category}</div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
            {post.title}
          </h2>
          <p className="text-gray-600 mb-4">{post.excerpt}</p>
          <div className="flex items-center text-emerald-600 font-semibold">
            Read More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </article>
    </Link>
  );
}