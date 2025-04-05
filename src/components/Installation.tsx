"use client"
import CodeBlock from "./CodeBlock"
import { Terminal, Copy, Code2 } from "lucide-react"

const Installation = () => {
  return (
    <section id="get-started" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Get Started in Minutes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 flex flex-col items-center text-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="h-16 w-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-6">
              <Terminal className="h-7 w-7 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-bold mb-4">1. Install Package</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Add the package to your React project using npm.
            </p>
            <div className="w-full mt-auto">
              <CodeBlock code="npm install @basatmaqsood/react-slot  " language="bash" />
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 flex flex-col items-center text-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="h-16 w-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-6">
              <Copy className="h-7 w-7 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-xl font-bold mb-4">2. Import Components</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Import the components you need in your React application.
            </p>
            <div className="w-full mt-auto">
              <CodeBlock
                code="import { SlotTextCharacters } from '@basatmaqsood/react-slot';"
                language="typescript"
              />
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 flex flex-col items-center text-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="h-16 w-16 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center mb-6">
              <Code2 className="h-7 w-7 text-pink-600 dark:text-pink-400" />
            </div>
            <h3 className="text-xl font-bold mb-4">3. Use Components</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Add the components to your JSX and customize with props.
            </p>
            <div className="w-full mt-auto">
              <CodeBlock
                code={`<SlotTextCharacters text = 'Demo Text here'/>`}
                language="jsx"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Installation

