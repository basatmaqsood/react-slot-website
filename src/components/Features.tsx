"use client"
import { SlotTextCharacters } from "@basatmaqsood/react-slot"
import { MousePointer, RefreshCw, Zap, Sliders, Palette, Settings } from "lucide-react"

const Features = () => {
  const features = [
    {
      icon: <Zap className="h-7 w-7 text-yellow-500" />,
      title: "Smooth Animations",
      description: "Eye-catching slot machine style animations with multiple easing options",
    },
    {
      icon: <Sliders className="h-7 w-7 text-blue-500" />,
      title: "Highly Customizable",
      description: "Extensive props to control animation speed, direction, easing, and behavior",
    },
    {
      icon: <MousePointer className="h-7 w-7 text-green-500" />,
      title: "Interactive",
      description: "Pause on hover and other interactive features for better user engagement",
    },
    {
      icon: <RefreshCw className="h-7 w-7 text-purple-500" />,
      title: "Looping Options",
      description: "Choose between one-time animations or continuous loops with customizable delays",
    },
    {
      icon: <Palette className="h-7 w-7 text-pink-500" />,
      title: "Easy Styling",
      description: "Full support for CSS classes and inline styles for complete design control",
    },
    {
      icon: <Settings className="h-7 w-7 text-indigo-500" />,
      title: "Two Components",
      description: "Choose between animating individual characters or cycling through whole words",
    },
  ]

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-gray-800">
            <SlotTextCharacters text="Powerful Features" duration={1000} delay={50} easing="bounce" loop={true} />
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Everything you need to create captivating text animations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col"
            >
              <div className="h-14 w-14 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center mb-6 shadow-md">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

