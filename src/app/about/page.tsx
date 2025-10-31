'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Award, Users, Clock, CheckCircle, TrendingUp, Star, Target, Heart } from "lucide-react"
import { useEffect, useState } from "react"

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])
  const milestones = [
    { year: "2005", title: "Founded as Tulasi Concretes", description: "Started with a vision to provide quality concrete solutions" },
    { year: "2010", title: "Expanded Operations", description: "Added advanced mixing technology and delivery fleet" },
    { year: "2015", title: "Quality Certification", description: "Achieved industry standards certification" },
    { year: "2020", title: "1000+ Projects", description: "Successfully completed over 1000 projects" },
    { year: "2025", title: "Rebranded to STR Mix", description: "New identity, same commitment to quality" },
  ]

  const achievements = [
    { icon: <Building2 className="w-8 h-8" />, title: "1000+ Projects", description: "Completed successfully across the region" },
    { icon: <Users className="w-8 h-8" />, title: "500+ Happy Clients", description: "Including major construction firms" },
    { icon: <Award className="w-8 h-8" />, title: "Quality Certified", description: "Meeting industry standards" },
    { icon: <Clock className="w-8 h-8" />, title: "20+ Years", description: "Of trusted service and expertise" },
  ]

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

        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-green-800 to-green-600 bg-clip-text text-transparent mb-6">
              About STR Mix
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-12 leading-relaxed">
              From Tulasi Concretes to STR Mix - A Journey of Excellence
            </p>
            <Badge className="bg-green-100 text-green-800 text-lg px-6 py-3 shadow-lg hover:shadow-xl transition-shadow">
              <Star className="w-4 h-4 mr-2" />
              20+ Years of Trusted Quality
            </Badge>
          </div>
        </div>
      </section>

      {/* Our Story - Animated */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">Our Story</h2>
              <div className="space-y-6 text-gray-700">
                <p className="text-lg lg:text-xl leading-relaxed">
                  Founded in 2005 as <strong className="text-green-700">Tulasi Concretes</strong>, we began our journey with a simple mission:
                  to provide the highest quality ready-mix concrete to the construction industry.
                </p>
                <p className="text-lg lg:text-xl leading-relaxed">
                  Over the past two decades, we've grown from a small local supplier to a trusted name in the
                  construction industry, completing over 1000 projects and building lasting relationships with
                  more than 500 clients.
                </p>
                <p className="text-lg lg:text-xl leading-relaxed">
                  In 2025, we proudly rebranded to <strong className="text-green-700">STR Mix (Shree Tulasi Ready-Mix Concrete)</strong>,
                  reflecting our commitment to innovation while honoring our heritage of quality and trust.
                </p>
              </div>
            </div>

            <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <Card className="bg-gradient-to-br from-green-50 via-yellow-50 to-green-100 border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
                <CardContent className="p-10">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl shadow-xl mb-6">
                      <TrendingUp className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">Our Commitment</h3>
                    <p className="text-gray-600">Excellence in every concrete batch</p>
                  </div>

                  <ul className="space-y-4">
                    {[
                      "Uncompromising quality in every batch",
                      "On-time delivery, every time",
                      "Custom solutions for unique requirements",
                      "Environmentally responsible practices"
                    ].map((item, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl hover:bg-white/80 transition-all duration-300 hover:shadow-md hover:scale-105"
                        style={{ animationDelay: `${700 + index * 100}ms` }}
                      >
                        <div className="p-2 bg-green-600 rounded-full shadow-lg">
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-gray-700 font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline - Animated */}
      <section className="py-24 px-4 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our Journey</h2>
            <p className="text-xl text-gray-600">Two decades of growth, innovation, and excellence</p>
          </div>

          <div className="relative">
            {/* Animated Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-400 via-green-500 to-green-600 rounded-full shadow-lg"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  style={{ animationDelay: `${900 + index * 200}ms` }}
                >
                  <div className="flex-1 p-6">
                    <Card className={`border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-white/95 backdrop-blur-sm ${
                      index % 2 === 0 ? 'border-l-4 border-l-green-600' : 'border-r-4 border-r-green-600'
                    }`}>
                      <CardHeader>
                        <div className="flex items-center gap-4">
                          <Badge className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 shadow-lg">
                            {milestone.year}
                          </Badge>
                          <CardTitle className="text-xl lg:text-2xl text-gray-900">{milestone.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 text-lg leading-relaxed">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="flex-1 flex justify-center relative z-10">
                    <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-green-600 rounded-full border-4 border-white shadow-2xl animate-pulse"></div>
                  </div>

                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements - Animated */}
      <section className="py-24 px-4 bg-gradient-to-br from-green-50 via-white to-yellow-50">
        <div className="container mx-auto max-w-7xl">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our Achievements</h2>
            <p className="text-xl text-gray-600">Milestones that define our success story</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="group text-center border-0 bg-white/95 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 overflow-hidden relative"
                style={{ animationDelay: `${1100 + index * 150}ms` }}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-yellow-500"></div>

                <CardHeader className="pb-4">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl shadow-xl group-hover:shadow-2xl transition-shadow">
                      <div className="text-white">
                        {achievement.icon}
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-2xl text-gray-900 group-hover:text-green-700 transition-colors">
                    {achievement.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values - Animated */}
      <section className="py-24 px-4 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Quality",
                description: "Never compromising on the quality of our products and services",
                color: "from-green-500 to-green-600",
                bgColor: "from-green-50 to-green-100"
              },
              {
                icon: Clock,
                title: "Reliability",
                description: "Consistent delivery and dependable service you can count on",
                color: "from-yellow-500 to-orange-500",
                bgColor: "from-yellow-50 to-orange-100"
              },
              {
                icon: Heart,
                title: "Customer Focus",
                description: "Putting our customers' needs at the heart of everything we do",
                color: "from-blue-500 to-purple-500",
                bgColor: "from-blue-50 to-purple-100"
              }
            ].map((value, index) => (
              <Card
                key={index}
                className={`group text-center border-0 bg-gradient-to-br ${value.bgColor} shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2`}
                style={{ animationDelay: `${1300 + index * 200}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex justify-center mb-6">
                    <div className={`p-4 bg-gradient-to-r ${value.color} rounded-2xl shadow-xl group-hover:shadow-2xl transition-shadow`}>
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-700 transition-colors">
                    {value.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
