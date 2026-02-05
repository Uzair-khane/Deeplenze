/* Desert Futurism Design - 404 Page */

import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0A1628] flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00D4AA]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#C9A227]/5 rounded-full blur-3xl" />
      
      <div className="container relative z-10">
        <motion.div
          className="text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* 404 Number */}
          <motion.div
            className="text-[150px] md:text-[200px] font-bold leading-none mb-4"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="text-gradient-teal">4</span>
            <span className="text-gradient-gold">0</span>
            <span className="text-gradient-teal">4</span>
          </motion.div>

          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
            Page Not Found
          </h1>
          
          <p className="text-gray-400 text-lg mb-10 font-body">
            The page you're looking for doesn't exist or has been moved.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/">
              <motion.button
                className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00D4AA] to-[#00D4AA]/80 text-[#0A1628] font-semibold rounded-lg hover:shadow-lg hover:shadow-[#00D4AA]/25 transition-all font-body"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Home className="w-5 h-5" />
                Go Home
              </motion.button>
            </Link>
            
            <motion.button
              onClick={() => window.history.back()}
              className="flex items-center gap-2 px-8 py-4 border-2 border-[#C9A227] text-[#C9A227] font-semibold rounded-lg hover:bg-[#C9A227]/10 transition-all font-body"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Decorative geometric elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-[#00D4AA]/20 rotate-45 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 border border-[#C9A227]/20 rotate-12" />
      <div className="absolute top-1/2 right-20 w-16 h-16 bg-[#00D4AA]/10 rounded-full animate-float" />
    </div>
  );
}
