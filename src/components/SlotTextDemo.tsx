"use client"

import type React from "react"
import { useState } from "react"
import { SlotTextCharacters, SlotTextWords } from "@basatmaqsood/react-slot"
import CodeBlock from "./CodeBlock"

interface DemoProps {
  title: string
  description: string
}

// SlotTextCharacters Demo Component
export const SlotTextCharactersDemo: React.FC<DemoProps> = ({ title, description }) => {
  const [text, setText] = useState("Characters Slot")
  const [duration, setDuration] = useState(1000)
  const [delay, setDelay] = useState(100)
  const [easing, setEasing] = useState<"bounce" | "elastic" | "smooth" | "sharp" | "linear">("smooth")
  const [loop, setLoop] = useState(true)
  const [direction, setDirection] = useState<"forward" | "reverse">("forward")
  const [pauseOnHover, setPauseOnHover] = useState(true)

  const demoCode = `import { SlotTextCharacters } from "@basatmaqsood/react-slot";

<SlotTextCharacters
  text="${text}"
  duration={${duration}}
  delay={${delay}}
  easing="${easing}"
  loop={${loop}}
  direction="${direction}"
  pauseOnHover={${pauseOnHover}}
  pauseDuration={1000}
  className="text-2xl font-bold"
/>`

  return (
    <section className="my-16 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-center bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-gray-800">
        {title}
      </h2>
      <p className="text-lg mb-8 text-center text-gray-700 dark:text-gray-300">{description}</p>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1 p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Try It Out</h3>

          <div className="h-16 flex items-center justify-center mb-8 border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
            <SlotTextCharacters
              text={text}
              duration={duration}
              delay={delay}
              easing={easing}
              loop={loop}
              direction={direction}
              pauseOnHover={pauseOnHover}
              pauseDuration={1000}
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-gray-800"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Text</label>
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Duration (ms)</label>
              <input
                type="number"
                value={duration}
                onChange={(e) => setDuration(Number(e.target.value))}
                className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Delay (ms)</label>
              <input
                type="number"
                value={delay}
                onChange={(e) => setDelay(Number(e.target.value))}
                className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Easing</label>
              <select
                value={easing}
                onChange={(e) => setEasing(e.target.value as any)}
                className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
              >
                <option value="smooth">Smooth</option>
                <option value="bounce">Bounce</option>
                <option value="elastic">Elastic</option>
                <option value="sharp">Sharp</option>
                <option value="linear">Linear</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Direction</label>
              <select
                value={direction}
                onChange={(e) => setDirection(e.target.value as "forward" | "reverse")}
                className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
              >
                <option value="forward">Forward</option>
                <option value="reverse">Reverse</option>
              </select>
            </div>

            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="loop"
                checked={loop}
                onChange={(e) => setLoop(e.target.checked)}
                className="mr-2"
              />
              <label htmlFor="loop" className="text-sm font-medium">
                Loop
              </label>
            </div>

            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="pauseOnHover"
                checked={pauseOnHover}
                onChange={(e) => setPauseOnHover(e.target.checked)}
                className="mr-2"
              />
              <label htmlFor="pauseOnHover" className="text-sm font-medium">
                Pause on Hover
              </label>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <CodeBlock code={demoCode} title="Example Usage" />
        </div>
      </div>
    </section>
  )
}

// SlotTextWords Demo Component
export const SlotTextWordsDemo: React.FC<DemoProps> = ({ title, description }) => {
  const [wordsInput, setWordsInput] = useState("React,Next.js,TypeScript,Tailwind")
  const [duration, setDuration] = useState(1500)
  const [delay, setDelay] = useState(100)
  const [easing, setEasing] = useState<"bounce" | "elastic" | "smooth" | "sharp" | "linear">("smooth")
  const [loop, setLoop] = useState(true)
  const [direction, setDirection] = useState<"forward" | "reverse">("forward")
  const [order, setOrder] = useState<"sequential" | "random">("sequential")
  const [pauseOnHover, setPauseOnHover] = useState(true)

  const words = wordsInput.split(",").map((word) => word.trim())

  const demoCode = `import { SlotTextWords } from "@basatmaqsood/react-slot";

<SlotTextWords
  words={[${words.map((w) => `"${w}"`).join(", ")}]}
  duration={${duration}}
  delay={${delay}}
  easing="${easing}"
  loop={${loop}}
  direction="${direction}"
  order="${order}"
  pauseOnHover={${pauseOnHover}}
  pauseDuration={1000}
  className="text-2xl font-bold"
/>`

  return (
    <section className="my-16 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-center bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
        {title}
      </h2>
      <p className="text-lg mb-8 text-center text-gray-700 dark:text-gray-300">{description}</p>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1 p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Try It Out</h3>

          <div className="h-16 flex items-center justify-center mb-8 border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
            <SlotTextWords
              words={words}
              duration={duration}
              delay={delay}
              easing={easing}
              loop={loop}
              direction={direction}
              order={order}
              pauseOnHover={pauseOnHover}
              pauseDuration={1000}
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-gray-800"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-4 col-span-2">
              <label className="block text-sm font-medium mb-1">Words (comma-separated)</label>
              <input
                type="text"
                value={wordsInput}
                onChange={(e) => setWordsInput(e.target.value)}
                className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Duration (ms)</label>
              <input
                type="number"
                value={duration}
                onChange={(e) => setDuration(Number(e.target.value))}
                className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Delay (ms)</label>
              <input
                type="number"
                value={delay}
                onChange={(e) => setDelay(Number(e.target.value))}
                className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Easing</label>
              <select
                value={easing}
                onChange={(e) => setEasing(e.target.value as any)}
                className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
              >
                <option value="smooth">Smooth</option>
                <option value="bounce">Bounce</option>
                <option value="elastic">Elastic</option>
                <option value="sharp">Sharp</option>
                <option value="linear">Linear</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Direction</label>
              <select
                value={direction}
                onChange={(e) => setDirection(e.target.value as "forward" | "reverse")}
                className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
              >
                <option value="forward">Forward</option>
                <option value="reverse">Reverse</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Order</label>
              <select
                value={order}
                onChange={(e) => setOrder(e.target.value as "sequential" | "random")}
                className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
              >
                <option value="sequential">Sequential</option>
                <option value="random">Random</option>
              </select>
            </div>

            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="loopWords"
                checked={loop}
                onChange={(e) => setLoop(e.target.checked)}
                className="mr-2"
              />
              <label htmlFor="loopWords" className="text-sm font-medium">
                Loop
              </label>
            </div>

            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="pauseOnHoverWords"
                checked={pauseOnHover}
                onChange={(e) => setPauseOnHover(e.target.checked)}
                className="mr-2"
              />
              <label htmlFor="pauseOnHoverWords" className="text-sm font-medium">
                Pause on Hover
              </label>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <CodeBlock code={demoCode} title="Example Usage" />
        </div>
      </div>
    </section>
  )
}

