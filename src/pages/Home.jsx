
import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Shield, ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const slides = [
  { name: "Title", title: "Title Slide", description: "Jade Security introduction", order: 1 },
  { name: "Team", title: "The Team", description: "Meet our team", order: 2 },
  { name: "Pain", title: "Human Errors Cost Millions", description: "The problem we solve", order: 3 },
  { name: "RecentExamples", title: "Recent Examples", description: "Real-world breach examples", order: 4 },
  { name: "MeetJade", title: "Meet Jade", description: "Jade's solution overview", order: 5 },
  { name: "PAMEvolution", title: "PAM Evolution", description: "Redefining privileged access", order: 6 },
  { name: "JadePlatform", title: "The Jade Platform", description: "Technical architecture", order: 7 },
  { name: "UseCases", title: "Use Cases", description: "Customer applications", order: 8 },
  { name: "Validation", title: "Validation", description: "Customer testimonials", order: 9 },
  { name: "WhyNow", title: "Why Now", description: "Market timing", order: 10 },
  { name: "Vision", title: "The Vision", description: "Our mission and vision", order: 11 },
  { name: "ThankYou", title: "Thank You", description: "Closing slide", order: 12 }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center shadow-lg">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div className="text-left">
              <h1 className="text-4xl font-bold text-gray-900">Jade Security</h1>
              <p className="text-lg text-gray-600">Pitch Deck Presentation</p>
            </div>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Govern insider risk. Stop costly mistakes.
          </p>
          
          <div className="flex justify-center gap-4 mt-8">
            <Link to={createPageUrl("Title")}>
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                <Play className="w-5 h-5 mr-2" />
                Start Presentation
              </Button>
            </Link>
          </div>
        </div>

        {/* Slide Grid */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Presentation Slides
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {slides.map((slide) => (
              <Link key={slide.name} to={createPageUrl(slide.name)}>
                <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border-gray-200">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
                        <span className="text-emerald-600 font-semibold text-sm">
                          {slide.order}
                        </span>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-emerald-600 transition-colors" />
                    </div>
                    
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                      {slide.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {slide.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-gray-200">
          <p className="text-gray-500">
            Navigate through slides using the header controls or click individual slides to jump to them.
          </p>
        </div>
      </div>
    </div>
  );
}
