"use client"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import ThemeToggle from "./components/ThemeToggle"
import Hero from "./components/Hero"
import Installation from "./components/Installation"
import Features from "./components/Features"
import { SlotTextCharactersDemo, SlotTextWordsDemo } from "./components/SlotTextDemo"
import Examples from "./components/Examples"
import Footer from "./components/Footer"
import { Github } from "lucide-react"
import { FaNpm } from "react-icons/fa"
import { DiNpm } from "react-icons/di"

export default function App() {
  return (
    <main>
      <div className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <a
              href="#"
              className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              @basatmaqsood/react-slot
            </a>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://www.basatmaqsood.live"
              target="_blank"
              className="hidden md:block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Visit Developer
            </a>
            <a
              href="https://github.com/basatmaqsood/react-slot-text"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <Github/>
            </a>
            <a
              href="https://www.npmjs.com/package/@basatmaqsood/react-slot"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <FaNpm size={40}/>

            </a>
            {/* <ThemeToggle /> */}
          </div>
        </div>
      </div>

      <Hero />
      <Examples />
      <Installation />

      <SlotTextCharactersDemo
        title="SlotTextCharacters Component"
        description="Animate text with a slot machine effect character-by-character"
      />

      <SlotTextWordsDemo title="SlotTextWords Component" description="Cycle through words with a slot machine effect" />
      <Features />

      <Footer />

      <ToastContainer position="bottom-right" theme="colored" />
    </main>
  )
}

