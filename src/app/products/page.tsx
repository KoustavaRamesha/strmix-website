'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Truck, Settings, Star, Phone, Zap, CheckCircle } from "lucide-react"

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our Products
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Premium Quality Ready-Mix Concrete Solutions
          </p>
          <Badge className="bg-green-100 text-green-800 text-lg px-4 py-2">
            M5 to M60 Grades Available
          </Badge>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Concrete Grades</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer a comprehensive range of concrete grades to meet every construction need.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { grade: "M15-M30", type: "Structural Concrete", description: "For beams, columns, and slabs" },
              { grade: "M35-M50", type: "High-Strength Concrete", description: "For bridges and heavy structures" },
              { grade: "M55-M60", type: "Ultra-High Strength", description: "For critical infrastructure" },
              { grade: "M5-M10", type: "Surface Concrete", description: "For flooring and pathways" },
              { grade: "Custom", type: "Specialized Mixes", description: "Tailored for specific needs" },
              { grade: "All Grades", type: "Complete Range", description: "M5 to M60 available" }
            ].map((product, index) => (
              <Card key={index} className="text-center border-t-4 border-t-green-600">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product.grade}</h3>
                  <p className="text-lg font-semibold text-gray-700 mb-2">{product.type}</p>
                  <p className="text-gray-600 text-sm">{product.description}</p>
                  <Button className="mt-4 bg-green-600 hover:bg-green-700">
                    Get Quote
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Beyond just supplying concrete, we offer comprehensive services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Truck className="w-6 h-6" />,
                title: "On-Site Delivery",
                description: "Timely delivery of ready-mix concrete",
                features: ["GPS tracked vehicles", "Multiple delivery options"]
              },
              {
                icon: <Building2 className="w-6 h-6" />,
                title: "Pumping Services",
                description: "Professional concrete pumping services",
                features: ["Boom pumps available", "Experienced operators"]
              },
              {
                icon: <Settings className="w-6 h-6" />,
                title: "Custom Mixes",
                description: "Tailored concrete formulations",
                features: ["Technical consultation", "Quality assurance"]
              },
              {
                icon: <Star className="w-6 h-6" />,
                title: "Quality Control",
                description: "Rigorous testing and quality assurance",
                features: ["Lab testing", "Comprehensive reports"]
              }
            ].map((service, index) => (
              <Card key={index} className="text-center border-t-4 border-t-green-600">
                <CardHeader>
                  <div className="flex justify-center text-green-600 mb-2">
                    {service.icon}
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-3 text-sm">{service.description}</p>
                  <ul className="text-xs text-gray-500 space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>• {feature}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-r from-green-600 to-yellow-600 rounded-xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Need Help Choosing?</h2>
            <p className="text-xl mb-8">Our experts are here to help you select the perfect concrete mix.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-gray-100">
                <Phone className="w-4 h-4 mr-2" />
                Call Us: 07947426693
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                Get Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
