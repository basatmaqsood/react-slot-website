"use client"
import { SlotTextCharacters, SlotTextWords } from "@basatmaqsood/react-slot"
import { Github } from "lucide-react"

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gray-50 dark:bg-gray-900 py-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-pink-900/20"></div>

      {/* Animated dots background */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute inset-0 bg-grid-pattern"></div>
      </div>

      <div className="relative max-w-screen-xl mx-auto px-6 lg:px-8 flex flex-col items-center">
        <div className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-gray-900 dark:text-white">
            <SlotTextWords
              words={["@basatmaqsood/react-slot"]}
              duration={1200}
              loop={false}
              easing="elastic"
              className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-gray-700"
            />
          </h1>
          <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-700 dark:text-gray-300 mb-8">
            <SlotTextCharacters
              text="Add captivating slot machine text animations to your React app"
              duration={1000}
              delay={50}
              loop={false}
              easing="smooth"
            />
          </div>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            Beautiful, customizable text animations that bring life to your website with eye-catching transitions and
            slot machine effects
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#get-started"
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
          >
            Get Started
          </a>
          <a
            href="https://github.com/basatmaqsood/react-slot-text"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-medium rounded-lg shadow hover:shadow-md border border-gray-200 dark:border-gray-700 flex items-center gap-2 transition-all hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            <Github size={18} />
            View on GitHub
          </a>
        </div>

        <div className="w-full max-w-3xl bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden">
          <div className="flex border-b border-gray-200 dark:border-gray-700">
            <div className="px-4 py-2 bg-gray-100 dark:bg-gray-900 text-xs font-mono flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
              <span className="w-3 h-3 rounded-full bg-green-500"></span>
            </div>
            <div className="px-4 py-2 text-sm text-gray-600 dark:text-gray-400 font-mono">Demo.tsx</div>
          </div>
          <pre className="p-6 text-sm font-mono overflow-x-auto text-gray-800 dark:text-gray-300">
            {`import { SlotTextCharacters, SlotTextWords } from "@basatmaqsood/react-slot";

export default function Demo() {
  return (
    <div>
      {/* Text that animates character by character */}
      <SlotTextCharacters
        text="React Slot Machine Text Animation"
        duration={1000}
        delay={100}
        easing="smooth"
        loop={true}
      />
      
      {/* Words that cycle through one at a time */}
      <SlotTextWords
        words={["Beautiful", "Interactive", "Captivating", "Animated"]}
        duration={1500}
        easing="bounce"
        loop={true}
      />
    </div>
  );
}`}
          </pre>
        </div>
      </div>
    </div>
  )
}

export default Hero

