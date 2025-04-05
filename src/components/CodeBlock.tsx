"use client"

import type React from "react"
import { useState } from "react"
import { toast } from "react-toastify"
import { Check, Copy } from "lucide-react"

interface CodeBlockProps {
  code: string
  language?: string
  title?: string
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = "tsx", title }) => {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      toast.success("Code copied to clipboard!")

      setTimeout(() => {
        setCopied(false)
      }, 2000)
    } catch (err) {
      toast.error("Failed to copy code")
    }
  }

  return (
    <div className="relative rounded-lg overflow-hidden bg-gray-900 text-white mb-6">
      {title && (
        <div className="px-4 py-2 bg-gray-800 border-b border-gray-700 flex items-center justify-between">
          <span className="font-mono text-sm text-gray-300">{title}</span>
          <span className="text-xs text-gray-400 bg-gray-700 px-2 py-1 rounded">{language}</span>
        </div>
      )}
      <pre className="p-4 overflow-x-auto text-sm">
        <code className={`language-${language}`}>{code}</code>
      </pre>
      <button
        className="absolute top-3 right-3 p-2 rounded-md bg-gray-800 hover:bg-gray-700 transition-colors"
        onClick={copyToClipboard}
        title="Copy code to clipboard"
      >
        {copied ? <Check size={18} className="text-green-500" /> : <Copy size={18} className="text-gray-300" />}
      </button>
    </div>
  )
}

export default CodeBlock

