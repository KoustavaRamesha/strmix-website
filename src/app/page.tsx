'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Zap, Building2, Truck, ArrowRight, MessageSquare } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50 overflow-x-hidden">
      {/* Animated Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-green-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-yellow-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {/* Logo Animation */}
              <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                <img
                  src="/logo.jpg"
                  alt="STR Mix Logo"
                  className="w-32 h-32 lg:w-40 lg:h-40 object-contain mx-auto lg:mx-0"
                />
              </div>

              {/* Main Heading */}
              <div className={`space-y-4 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-gray-900 via-green-800 to-green-600 bg-clip-text text-transparent leading-tight">
                  STR Mix
                </h1>
                <p className="text-2xl lg:text-3xl text-gray-700 font-medium">
                  Shree Tulasi Ready-Mix Concrete
                </p>
                <p className="text-xl lg:text-2xl text-gray-600">
                  Strong Foundations, Lasting Trust.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <Link href="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                    <Zap className="w-5 h-5 mr-2" />
                    Get Your Quote Today
                  </Button>
                </Link>
                <Link href="/products">
                  <Button variant="outline" size="lg" className="px-8 py-4 text-lg font-semibold border-2 border-green-600 text-green-600 hover:bg-green-50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    View Our Products
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Content - Animated Card */}
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-0 overflow-hidden hover:shadow-3xl transition-all duration-500">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-yellow-500"></div>

                <CardHeader className="pb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-gradient-to-r from-green-500 to-green-600 rounded-lg shadow-lg">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-gray-900">Why Choose STR Mix?</CardTitle>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {[
                    "Premium quality ready-mix concrete (M5-M60)",
                    "On-site delivery & pumping services",
                    "Custom mixes as per project requirements",
                    "Bulk supply for construction firms"
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-green-50 to-yellow-50 transition-all duration-500 hover:shadow-md hover:scale-105`}
                      style={{ animationDelay: `${1000 + index * 200}ms` }}
                    >
                      <div className="p-1 bg-green-600 rounded-full">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Modern Cards */}
      <section className="py-24 px-4 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto max-w-7xl">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Products & Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From residential foundations to large-scale commercial projects,
              we deliver the perfect concrete solution for every need.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Building2,
                title: "Reinforced Concrete",
                description: "High-strength concrete for structural applications",
                grades: "Grades M15 to M60",
                color: "from-green-500 to-green-600",
                link: "/products"
              },
              {
                icon: Truck,
                title: "Surface Concrete",
                description: "Perfect for flooring and surface applications",
                grades: "Grades M5 to M10",
                color: "from-yellow-500 to-orange-500",
                link: "/products"
              },
              {
                icon: Zap,
                title: "Custom Mixes",
                description: "Tailored solutions for specific project needs",
                grades: "Custom formulations",
                color: "from-blue-500 to-purple-500",
                link: "/contact"
              }
            ].map((service, index) => (
              <Card
                key={index}
                className={`group border-0 bg-white/95 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 overflow-hidden relative`}
                style={{ animationDelay: `${1400 + index * 200}ms` }}
              >
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.color}`}></div>

                <CardContent className="p-8">
                  <div className="flex justify-center mb-6">
                    <div className={`p-4 bg-gradient-to-r ${service.color} rounded-2xl shadow-xl group-hover:shadow-2xl transition-shadow`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <div className="text-center space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-green-700 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                    <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                      {service.grades}
                    </Badge>
                  </div>

                  <div className="mt-6">
                    <Link href={service.link}>
                      <Button
                        variant="outline"
                        className="w-full border-2 border-gray-300 hover:border-green-500 hover:bg-green-50 transition-all duration-300 group-hover:shadow-lg"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Modern Design */}
      <section className="py-24 px-4 bg-gradient-to-br from-green-600 via-green-700 to-green-800 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white shadow-2xl">
            <CardContent className="p-12 text-center">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Ready to Get Started?
              </h2>

              <p className="text-xl lg:text-2xl mb-12 opacity-90 leading-relaxed">
                Contact us today for a free quote and consultation.
                Let's build something amazing together.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="bg-white text-green-700 hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 px-8 py-4 text-lg font-semibold">
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Contact Us Now
                  </Button>
                </Link>
                <Link href="/gallery">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-700 shadow-xl hover:shadow-2xl transition-all duration-300 px-8 py-4 text-lg font-semibold">
                    <Building2 className="w-5 h-5 mr-2" />
                    View Our Work
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
