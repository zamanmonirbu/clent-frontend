import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { Button } from '../ui/Button';
import { useToast } from '../../hooks/useToast';

export function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { showToast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      showToast({
        type: 'success',
        message: 'Check your email for your 10% discount code!'
      });
      setEmail('');
    } catch (error) {
      showToast({
        type: 'error',
        message: 'Something went wrong. Please try again.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
      <h3 className="text-2xl font-bold text-white mb-4">
        Get 10% Off Your Next Purchase
      </h3>
      <p className="text-gray-300 mb-6">
        Fill in your email now and get 10% off your next purchase!
      </p>
      <div className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          required
        />
        <Button
          type="submit"
          variant="primary"
          className="flex items-center gap-2"
          loading={isLoading}
        >
          Subscribe <Send className="w-4 h-4" />
        </Button>
      </div>
    </form>
  );
}