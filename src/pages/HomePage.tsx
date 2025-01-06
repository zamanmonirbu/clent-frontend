import React from 'react';
import { Hero } from '../components/sections/Hero';
import { PhoneSlideshow } from '../components/sections/PhoneSlideshow';
import { FeaturedPhones } from '../components/sections/FeaturedPhones';
import { Features } from '../components/sections/Features';
import { TrustpilotReviews } from '../components/sections/TrustpilotReviews';
import { BlogPosts } from '../components/sections/BlogPosts';

export function HomePage() {
  return (
    <>
      <Hero />
      <PhoneSlideshow />
      <FeaturedPhones />
      <Features />
      <TrustpilotReviews />
      <BlogPosts />
    </>
  );
}