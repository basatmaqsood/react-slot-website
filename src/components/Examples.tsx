"use client"

import type React from "react"
import { useState } from "react"
import { SlotTextCharacters, SlotTextWords } from "@basatmaqsood/react-slot"
import CodeBlock from "./CodeBlock"
import { ChevronDown, ChevronUp } from "lucide-react"

interface ExampleProps {
  title: string
  description: string
  code: string
  children: React.ReactNode
}

const Example: React.FC<ExampleProps> = ({ title, description, code, children }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden mb-8">
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>

        <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg mb-4">{children}</div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium hover:underline"
        >
          {isExpanded ? (
            <>
              <ChevronUp size={16} /> Hide Code
            </>
          ) : (
            <>
              <ChevronDown size={16} /> Show Code
            </>
          )}
        </button>
      </div>

      {isExpanded && (
        <div className="border-t border-gray-200 dark:border-gray-700">
          <CodeBlock code={code} language="tsx" />
        </div>
      )}
    </div>
  )
}

const Examples = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Example Use Cases
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover creative ways to use the slot text animations in your projects
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Example
            title="Animated Headline"
            description="Create engaging headings with animated text for landing pages."
            code={`<h1 className="text-4xl font-bold">
  Welcome to{" "}
  <SlotTextCharacters
    text="My Awesome Website"
    duration={1000}
    easing="bounce"
    loop={false}
    className="text-blue-600"
  />
</h1>`}
          >
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Welcome to{" "} <br/>
              <SlotTextCharacters
                text="My Awesome Website"
                duration={1000}
                easing="bounce"
                loop={true}
                className="text-blue-600 dark:text-blue-400"
              />
            </h1>
          </Example>

          <Example
            title="Rotating Skills"
            description="Showcase multiple skills or services with an automatic rotation."
            code={`<div className="text-2xl">
  I'm proficient with{" "}
  <SlotTextWords
    words={["React", "TypeScript", "Next.js", "Tailwind CSS"]}
    duration={1200}
    easing="smooth"
    loop={true}
    pauseDuration={2000}
    className="font-bold text-purple-600"
  />
</div>`}
          >
            <div className="text-2xl text-gray-900 dark:text-white">
              <p>
                I'm proficient with<br/>
              <SlotTextWords
                words={["React", "TypeScript", "Next.js", "Tailwind CSS"]}
                duration={1200}
                easing="smooth"
                loop={true}
                pauseDuration={2000}
                className="font-bold text-purple-600 dark:text-purple-400"
                />
                </p>
            </div>
          </Example>

          <Example
            title="Call-to-Action Button"
            description="Attract attention to important buttons with animated text."
            code={`<button className="px-6 py-3 bg-blue-600 text-white rounded-lg">
  <SlotTextCharacters
    text="Click Me Now!"
    duration={800}
    easing="sharp"
    loop={true}
    pauseDuration={3000}
  />
</button>`}
          >
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg">
              <SlotTextCharacters text="Click Me Now!" duration={800} easing="sharp" loop={true} pauseDuration={3000} />
            </button>
          </Example>

          <Example
            title="Loading Indicator"
            description="Create a stylish loading text for async operations."
            code={`<div className="flex items-center gap-2">
  <div className="h-4 w-4 bg-green-500 rounded-full animate-pulse"></div>
  <SlotTextCharacters
    text="Loading your content..."
    duration={1500}
    easing="linear"
    loop={true}
    className="text-gray-600"
  />
</div>`}
          >
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 bg-green-500 rounded-full animate-pulse"></div>
              <SlotTextCharacters
                text="Loading your content..."
                duration={1500}
                easing="linear"
                loop={true}
                className="text-gray-600 dark:text-gray-400"
              />
            </div>
          </Example>
        </div>
      </div>
    </section>
  )
}

export default Examples

