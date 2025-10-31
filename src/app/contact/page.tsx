'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Building2,
  Users,
  Truck,
  MessageSquare,
  Navigation,
  Send,
  CheckCircle,
  Zap,
  Shield,
  Star,
  ArrowRight,
  HeadphonesIcon
} from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would handle the form submission
    // Send email via Nodemailer or Firebase
    alert('Message sent successfully! We will get back to you soon.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "07947426693",
      action: "tel:07947426693",
      description: "Monday to Saturday, 8 AM - 8 PM"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "info@strmix.com",
      action: "mailto:info@strmix.com",
      description: "We respond within 24 hours"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "STR Mix Plant",
      action: "https://www.google.com/maps/place/12°50'34.2%22N+77°33'32.3%22E/@12.8430424,77.5576779,17.79z/data=!4m4!3m3!8m2!3d12.842819!4d77.558976?entry=ttu&g_ep=EgoyMDI1MTAyOC4wIKXMDSoASAFQAw%3D%3D",
      description: "12°50'34.2\"N 77°33'32.3\"E, Bangalore, Karnataka"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      value: "8 AM - 8 PM",
      action: null,
      description: "Monday to Saturday"
    }
  ]

  const services = [
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Concrete Delivery",
      description: "Timely delivery to your site"
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Technical Support",
      description: "Expert advice for your project"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Customer Service",
      description: "Dedicated support team"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50">
      {/* Hero Section - Modern Design */}
      <section className="relative py-24 px-4 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-green-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-yellow-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-xl mb-8">
              <HeadphonesIcon className="w-6 h-6 text-green-600" />
              <span className="text-sm font-semibold text-gray-700">24/7 Customer Support</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-gray-900 via-green-800 to-green-600 bg-clip-text text-transparent mb-6">
              Let's Connect
            </h1>

            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
              Ready to bring your concrete vision to life? Our expert team is here to provide
              exceptional service, technical guidance, and reliable delivery for all your construction needs.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-16">
              <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium text-gray-700">Expert Consultation</span>
              </div>
              <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
                <Zap className="w-5 h-5 text-yellow-600" />
                <span className="text-sm font-medium text-gray-700">Fast Response</span>
              </div>
              <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
                <Shield className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">Quality Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto max-w-7xl px-4 pb-20">
        <div className="grid lg:grid-cols-3 gap-12 -mt-16 relative z-20">
          {/* Contact Form - Modern Design */}
          <div className="lg:col-span-2">
            <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur-sm hover:shadow-3xl transition-all duration-500">
              <CardHeader className="pb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-gradient-to-r from-green-500 to-green-600 rounded-xl shadow-lg">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-gray-900">Send us a Message</CardTitle>
                    <CardDescription className="text-base">
                      Fill out the form below and we'll get back to you within 24 hours
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="h-12 border-2 border-gray-200 focus:border-green-500 transition-colors rounded-lg"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="h-12 border-2 border-gray-200 focus:border-green-500 transition-colors rounded-lg"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="h-12 border-2 border-gray-200 focus:border-green-500 transition-colors rounded-lg"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                      <MessageSquare className="w-4 h-4" />
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your project, concrete requirements, or any questions you have..."
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      required
                      className="border-2 border-gray-200 focus:border-green-500 transition-colors rounded-lg resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-14 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 shadow-xl hover:shadow-2xl transition-all duration-300 text-lg font-semibold rounded-lg"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information - Modern Cards */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/95 backdrop-blur-sm hover:scale-105 cursor-pointer"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-r from-green-500 to-green-600 rounded-xl shadow-lg group-hover:shadow-xl transition-shadow">
                      <div className="text-white">
                        {info.icon}
                      </div>
                    </div>
                    <div className="flex-1 space-y-2">
                      <h3 className="font-bold text-lg text-gray-900">{info.title}</h3>
                      {info.action ? (
                        <a
                          href={info.action}
                          className="text-green-600 hover:text-green-700 font-semibold text-lg transition-colors flex items-center gap-1 group-hover:gap-2"
                        >
                          {info.value}
                          <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                      ) : (
                        <p className="text-gray-700 font-semibold text-lg">{info.value}</p>
                      )}
                      <p className="text-sm text-gray-500 leading-relaxed">{info.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Quick Actions */}
            <Card className="border-0 bg-gradient-to-r from-green-600 to-green-700 text-white shadow-2xl">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full bg-white text-green-700 hover:bg-gray-50 shadow-lg hover:shadow-xl transition-all duration-300 font-semibold" asChild>
                  <a href="tel:07947426693" className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Call Now
                  </a>
                </Button>
                <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-green-700 shadow-lg hover:shadow-xl transition-all duration-300 font-semibold" asChild>
                  <a href="https://www.google.com/maps/place/12°50'34.2%22N+77°33'32.3%22E/@12.8430424,77.5576779,17.79z/data=!4m4!3m3!8m2!3d12.842819!4d77.558976?entry=ttu&g_ep=EgoyMDI1MTAyOC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Navigation className="w-4 h-4" />
                    Get Directions
                  </a>
                </Button>
                <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-green-700 shadow-lg hover:shadow-xl transition-all duration-300 font-semibold" asChild>
                  <a href="mailto:info@strmix.com" className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Send Email
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Services Section - Modern Grid */}
        <section className="mt-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-6">
              <Star className="w-5 h-5 text-yellow-500" />
              <span className="text-sm font-medium text-gray-700">Our Services</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              How We Can Help You
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              From consultation to delivery, our comprehensive services ensure your project
              gets the concrete solutions it deserves with unmatched quality and reliability.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group text-center border-0 bg-white/95 backdrop-blur-sm hover:shadow-2xl hover:scale-105 transition-all duration-500 overflow-hidden relative"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-green-600"></div>
                <CardContent className="p-8">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl shadow-xl group-hover:shadow-2xl transition-shadow">
                      <div className="text-white">
                        {service.icon}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Map Section - Modern Design */}
        <section className="mt-24">
          <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur-sm overflow-hidden">
            <div className="p-8 pb-0">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Find Our Location</h2>
                <p className="text-lg text-gray-600">
                  Visit us at our state-of-the-art facility in Bangalore, Karnataka
                </p>
              </div>
            </div>

            <div className="relative h-96 w-full bg-gradient-to-r from-green-50 to-yellow-50">
              <iframe
                src="https://maps.google.com/maps?q=12.842819,77.558976&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="STR Mix Location on Google Maps"
                className="rounded-t-lg"
              />

              {/* Modern Map Overlay */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl max-w-sm border border-white/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-green-600 rounded-lg">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">STR Mix Plant</h3>
                    <p className="text-sm text-gray-600">Manufacturing Facility</p>
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  <p className="text-sm text-gray-700">
                    12°50'34.2"N 77°33'32.3"E<br />
                    Bangalore, Karnataka
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>Mon-Sat: 8 AM - 8 PM</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button
                    size="sm"
                    className="flex-1 bg-green-600 hover:bg-green-700 shadow-lg"
                    asChild
                  >
                    <a
                      href="https://www.google.com/maps/place/12°50'34.2%22N+77°33'32.3%22E/@12.8430424,77.5576779,17.79z/data=!4m4!3m3!8m2!3d12.842819!4d77.558976?entry=ttu&g_ep=EgoyMDI1MTAyOC4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Navigation className="w-4 h-4 mr-2" />
                      Directions
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-green-600 text-green-600 hover:bg-green-50"
                    asChild
                  >
                    <a
                      href="https://www.google.com/maps/dir/?api=1&destination=12.842819,77.558976"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Navigation className="w-4 h-4 mr-2" />
                      Navigate
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </section>
      </div>

      {/* Emergency Contact - Modern Design */}
      <section className="py-20 px-4 bg-gradient-to-r from-red-50 via-red-100 to-red-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 bg-red-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-red-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto max-w-4xl relative z-10">
          <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur-sm">
            <CardContent className="p-12 text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl shadow-xl">
                  <Phone className="w-8 h-8 text-white" />
                </div>
              </div>

              <h2 className="text-3xl lg:text-4xl font-bold text-red-900 mb-6">
                Emergency Contact
              </h2>

              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                For urgent concrete delivery needs or technical emergencies,
                our team is available 24/7 to assist you.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <div className="flex items-center gap-4 bg-red-50 px-8 py-4 rounded-2xl border-2 border-red-200">
                  <Phone className="w-6 h-6 text-red-600" />
                  <span className="text-2xl font-bold text-red-900">07947426693</span>
                </div>

                <Badge className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 text-lg font-semibold shadow-lg">
                  24/7 Emergency Service
                </Badge>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  Response time: Within 30 minutes for emergency situations
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
