"use client"
const darkMode = false // Replace with your dark mode state management
const Footer = () => {
  return (
    <footer className={`${darkMode ? "bg-gray-800" : "bg-gray-100"} py-6`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <p
          className={`text-base ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Made with <span className="text-red-500">❤️</span> using{" "}
          <a
            href="https://www.npmjs.com/package/@basatmaqsood/react-slot"
            target="_blank"
            rel="noopener noreferrer"
            className={`font-medium ${
              darkMode
                ? "text-indigo-400 hover:text-indigo-300"
                : "text-indigo-600 hover:text-indigo-500"
            }`}
          >
            @basatmaqsood/react-slot
          </a>
        </p>
        <p
          className={`mt-4 text-sm mb-2 ${
            darkMode ? "text-gray-500" : "text-gray-400"
          }`}
        >
          © {new Date().getFullYear()} Basat Maqsood. All rights reserved.
        </p>
        <a
          href="https://www.basatmaqsood.live"
          target="_blank"
          className={` text-md  ${
            darkMode ? "text-gray-500" : "text-gray-400"
          } `}
        >
          Visit Developer
        </a>
      </div>
    </div>
  </footer>
  )
}

export default Footer

