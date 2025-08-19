"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Heart, Mail } from 'lucide-react'

export default function HomePage() {
  console.log("[v0] Component rendering started")

  const [currentPage, setCurrentPage] = useState<"question" | "letter" | "final">("question")
  const [showLetter, setShowLetter] = useState(false)

  const handleYesClick = () => {
    console.log("[v0] Yes button clicked")
    setCurrentPage("letter")
  }

  const handleEnvelopeClick = () => {
    console.log("[v0] Envelope clicked")
    setShowLetter(true)
  }

  const handleLetterClose = () => {
    console.log("[v0] Letter closed")
    setShowLetter(false)
    setCurrentPage("final")
  }

  console.log("[v0] Current page:", currentPage)

  if (currentPage === "question") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 flex items-center justify-center p-4 relative overflow-hidden">
        {/* Floating sunflowers */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-10 left-10 w-16 h-16 bg-yellow-400 rounded-full animate-bounce flex items-center justify-center text-2xl font-bold"
            style={{ animationDelay: "0s" }}
          >
            🌻
          </div>
          <div
            className="absolute top-20 right-20 w-12 h-12 bg-yellow-400 rounded-full animate-bounce flex items-center justify-center text-xl font-bold"
            style={{ animationDelay: "1s" }}
          >
            🌻
          </div>
          <div
            className="absolute bottom-20 left-20 w-10 h-10 bg-yellow-400 rounded-full animate-bounce flex items-center justify-center text-lg font-bold"
            style={{ animationDelay: "2s" }}
          >
            🌻
          </div>
          <div
            className="absolute bottom-10 right-10 w-16 h-16 bg-yellow-400 rounded-full animate-bounce flex items-center justify-center text-2xl font-bold"
            style={{ animationDelay: "0.5s" }}
          >
            🌻
          </div>
          <div
            className="absolute top-1/2 left-5 w-12 h-12 bg-yellow-400 rounded-full animate-bounce flex items-center justify-center text-xl font-bold"
            style={{ animationDelay: "1.5s" }}
          >
            🌻
          </div>
          <div
            className="absolute top-1/3 right-5 w-10 h-10 bg-yellow-400 rounded-full animate-bounce flex items-center justify-center text-lg font-bold"
            style={{ animationDelay: "2.5s" }}
          >
            🌻
          </div>
        </div>

        <Card className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-2xl max-w-md w-full text-center">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-6 leading-relaxed">
              {"Locked in tight like a booty hole? 🍑"}
            </h1>
            <p className="text-gray-600 mb-8">{"Click your answer below! 💕"}</p>
          </div>

          <div className="space-y-4">
            <Button
              onClick={handleYesClick}
              className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-4 text-lg rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              {"YES! 💖"}
            </Button>
            <Button
              onClick={handleYesClick}
              className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-4 text-lg rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              {"YESSS! ✨"}
            </Button>
          </div>
        </Card>
      </div>
    )
  }

  if (currentPage === "letter") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-red-700 flex items-center justify-center p-4 relative overflow-hidden">
        {/* Floating images placeholder */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-10 left-10 w-16 h-16 bg-white/20 rounded-full animate-float"
            style={{ animationDelay: "0s" }}
          ></div>
          <div
            className="absolute top-20 right-20 w-12 h-12 bg-white/20 rounded-full animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-20 left-20 w-20 h-20 bg-white/20 rounded-full animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute bottom-10 right-10 w-14 h-14 bg-white/20 rounded-full animate-float"
            style={{ animationDelay: "0.5s" }}
          ></div>
        </div>

        <div className="max-w-2xl w-full text-center">
          {/* Inspirational lyrics-style text */}
          <div className="mb-12 text-white/90">
            <p className="text-lg mb-4 animate-fade-in" style={{ animationDelay: "0.5s" }}>
              Close your eyes and rest your mind
            </p>
            <p className="text-lg mb-4 animate-fade-in" style={{ animationDelay: "1s" }}>
              Let the worries fall behind
            </p>
            <p className="text-lg mb-4 animate-fade-in" style={{ animationDelay: "1.5s" }}>
              Tomorrow brings a brand new day
            </p>
            <p className="text-lg mb-8 animate-fade-in" style={{ animationDelay: "2s" }}>
              Sleep well, let peace find its way
            </p>
          </div>

          {/* Envelope */}
          <div className="flex justify-center mb-8">
            <Button
              onClick={handleEnvelopeClick}
              className="bg-yellow-600 hover:bg-yellow-700 text-white p-6 rounded-2xl shadow-2xl transform hover:scale-110 transition-all duration-300"
            >
              <Mail size={48} />
              <span className="ml-3 text-xl">Open Letter</span>
            </Button>
          </div>
        </div>

        {/* Letter Modal */}
        {showLetter && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <Card className="bg-amber-50 p-8 rounded-2xl shadow-2xl max-w-lg w-full max-h-[80vh] overflow-y-auto">
              <div className="text-gray-800 leading-relaxed">
                <h2 className="text-2xl font-bold mb-6 text-center text-red-800">{"A Letter for You 💕"}</h2>

                <p className="mb-4">Hey beautiful soul,</p>

                <p className="mb-4">
                  I want you to know that you are doing your best, and that's more than enough. If things feel
                  overwhelming right now, that's okay. You will get through this, just like you've gotten through
                  everything else before.
                </p>

                <p className="mb-4">
                  I understand that traumatic things have happened to you. None of it was your fault. You don't deserve
                  any of the pain you've experienced, and you should never blame yourself for what happened or for the
                  choices you made. You were doing what you thought was right in those moments.
                </p>

                <p className="mb-4">
                  Your scars and mistakes don't define you. You are so much bigger than them. You are destined for
                  greatness, and you are enough exactly as you are. You are beautiful, inside and out.
                </p>

                <p className="mb-6 font-semibold text-red-800">You matter. You are loved. You are worthy.</p>

                <div className="text-center">
                  <Button
                    onClick={handleLetterClose}
                    className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full"
                  >
                    {"Continue 💖"}
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        )}
      </div>
    )
  }

  if (currentPage === "final") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-50 flex items-center justify-center p-4 relative overflow-hidden">
        {/* Floating elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full animate-float opacity-60"
            style={{ animationDelay: "0s" }}
          ></div>
          <div
            className="absolute top-20 right-20 w-16 h-16 bg-gradient-to-r from-blue-300 to-teal-300 rounded-full animate-float opacity-60"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-r from-yellow-300 to-orange-300 rounded-full animate-float opacity-60"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute bottom-10 right-10 w-16 h-16 bg-gradient-to-r from-green-300 to-blue-300 rounded-full animate-float opacity-60"
            style={{ animationDelay: "0.5s" }}
          ></div>
        </div>

        <div className="max-w-2xl w-full text-center">
          {/* Inspirational lyrics-style text */}
          <div className="mb-12 text-gray-800">
            <p className="text-xl mb-4 animate-fade-in" style={{ animationDelay: "0.5s" }}>
              Good times, summer time, white Ferrari
            </p>
            <p className="text-xl mb-4 animate-fade-in" style={{ animationDelay: "1s" }}>
              Had a good time, summer time
            </p>
            <p className="text-xl mb-4 animate-fade-in" style={{ animationDelay: "1.5s" }}>
              Mind over matter is magic
            </p>
            <p className="text-xl mb-8 animate-fade-in" style={{ animationDelay: "2s" }}>
              I do magic, if you can have it
            </p>
          </div>

          {/* Final message */}
          <Card className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-2xl">
            <Heart className="mx-auto mb-6 text-red-500" size={48} />

            <h2 className="text-2xl font-bold mb-6 text-gray-800">My Promise to You</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I love you more than words can express. Like a shadow, I will follow you through the ends of the earth to
              show you how much you mean to me. I care about you and value your existence and worth so deeply.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {"You are never alone. You are cherished. You are my everything. 💕"}
            </p>

            <div className="flex justify-center">
              <Button
                onClick={() => setCurrentPage("question")}
                className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-8 py-3 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                {"Start Over ✨"}
              </Button>
            </div>
          </Card>
        </div>
      </div>
    )
  }

  return null
}