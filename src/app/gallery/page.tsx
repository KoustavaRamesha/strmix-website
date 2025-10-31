'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, Upload, Eye, Calendar, Building, Home, Factory, Camera, Grid3X3, List, Star, Zap } from "lucide-react"

export default function GalleryPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [selectedFacilityImage, setSelectedFacilityImage] = useState<number | null>(null)

  // Facility Pictures from local folder
  const facilityImages = [
    "Screenshot 2025-10-31 201519.png",
    "Screenshot 2025-10-31 201603.png",
    "Screenshot 2025-10-31 201620.png",
    "Screenshot 2025-10-31 201650.png",
    "Screenshot 2025-10-31 201659.png",
    "Screenshot 2025-10-31 201707.png",
    "Screenshot 2025-10-31 201724.png",
    "Screenshot 2025-10-31 201808.png",
    "Screenshot 2025-10-31 201816.png",
    "Screenshot 2025-10-31 201855.png",
    "Screenshot 2025-10-31 201930.png",
    "Screenshot 2025-10-31 201942.png",
    "Screenshot 2025-10-31 202000.png",
    "Screenshot 2025-10-31 202011.png",
    "Screenshot 2025-10-31 202026.png",
    "Screenshot 2025-10-31 202052.png",
    "Screenshot 2025-10-31 202310.png",
    "Screenshot 2025-10-31 202338.png",
    "Screenshot 2025-10-31 202348.png",
    "Screenshot 2025-10-31 202418.png",
    "Screenshot 2025-10-31 202427.png",
    "Screenshot 2025-10-31 202436.png",
    "Screenshot 2025-10-31 202453.png",
    "Screenshot 2025-10-31 202525.png",
    "Screenshot 2025-10-31 202731.png",
    "Screenshot 2025-10-31 202803.png",
    "Screenshot 2025-10-31 202823.png",
    "Screenshot 2025-10-31 202910.png"
  ]

  const plantPictures = facilityImages.map((imageName, index) => ({
    id: `facility-${index + 1}`,
    title: `STR Mix Facility - Image ${index + 1}`,
    imageUrl: `/facility/${imageName}`,
    caption: `STR Mix concrete plant facility - showcasing our advanced manufacturing operations and equipment`,
    category: "plant",
    date: "2025-10-31",
    isOfficial: true
  }))

  // Sample gallery data - this would come from the database
  const projectGallery = [
    {
      id: 1,
      title: "Commercial Building Project",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      caption: "M30 grade concrete for commercial complex",
      category: "commercial",
      date: "2024-01-15",
      isOfficial: true
    },
    {
      id: 2,
      title: "Residential Foundation",
      imageUrl: "https://images.unsplash.com/photo-1503376780353-7b66669c4b32?w=800&h=600&fit=crop",
      caption: "M20 grade concrete for residential foundation",
      category: "residential",
      date: "2024-01-10",
      isOfficial: true
    },
    {
      id: 3,
      title: "Industrial Flooring",
      imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop",
      caption: "M10 grade surface concrete for industrial flooring",
      category: "industrial",
      date: "2024-01-08",
      isOfficial: true
    },
    {
      id: 4,
      title: "Bridge Construction",
      imageUrl: "https://images.unsplash.com/photo-1503575445098-acb7e053c2a7?w=800&h=600&fit=crop",
      caption: "M40 grade concrete for bridge construction",
      category: "infrastructure",
      date: "2024-01-05",
      isOfficial: true
    },
    {
      id: 5,
      title: "Customer Project - Villa",
      imageUrl: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&h=600&fit=crop",
      caption: "Customer submission - Villa construction using STR Mix",
      category: "residential",
      date: "2024-01-03",
      isOfficial: false
    },
    {
      id: 6,
      title: "Office Complex",
      imageUrl: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=600&fit=crop",
      caption: "M35 grade concrete for office complex",
      category: "commercial",
      date: "2024-01-01",
      isOfficial: true
    }
  ]

  const categories = [
    { value: 'all', label: 'All Projects', icon: <Building className="w-4 h-4" /> },
    { value: 'residential', label: 'Residential', icon: <Home className="w-4 h-4" /> },
    { value: 'commercial', label: 'Commercial', icon: <Building className="w-4 h-4" /> },
    { value: 'industrial', label: 'Industrial', icon: <Factory className="w-4 h-4" /> },
    { value: 'infrastructure', label: 'Infrastructure', icon: <Building className="w-4 h-4" /> }
  ]

  const filteredItems = projectGallery.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.caption.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const PlantUploadForm = () => (
    <div className="space-y-4">
      <div>
        <Label htmlFor="plant-title">Plant Area Title</Label>
        <Input 
          id="plant-title" 
          placeholder="e.g., Production Area, Mixing Plant" 
          className="mt-1" 
        />
      </div>
      <div>
        <Label htmlFor="plant-caption">Description</Label>
        <Textarea 
          id="plant-caption" 
          placeholder="Describe this area of the STR Mix plant" 
          className="mt-1" 
          rows={3} 
        />
      </div>
      <div>
        <Label htmlFor="plant-photo">Upload Photo</Label>
        <div className="mt-1">
          <Input 
            id="plant-photo" 
            type="file" 
            accept="image/*" 
            className="hidden" 
          />
          <label
            htmlFor="plant-photo"
            className="flex items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-green-500 transition-colors"
          >
            <div className="text-center">
              <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
              <p className="text-sm text-gray-600">
                Click to upload plant photo
              </p>
              <p className="text-xs text-gray-400">PNG, JPG up to 10MB</p>
            </div>
          </label>
        </div>
      </div>
      <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
        <Upload className="w-4 h-4 mr-2" />
        Upload Plant Photo
      </Button>
    </div>
  )

  const ProjectUploadForm = () => (
    <div className="space-y-4">
      <div>
        <Label htmlFor="project-title">Project Title</Label>
        <Input id="project-title" placeholder="Enter project title" className="mt-1" />
      </div>
      <div>
        <Label htmlFor="project-category">Category</Label>
        <Select>
          <SelectTrigger className="mt-1">
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="residential">Residential</SelectItem>
            <SelectItem value="commercial">Commercial</SelectItem>
            <SelectItem value="industrial">Industrial</SelectItem>
            <SelectItem value="infrastructure">Infrastructure</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="project-caption">Description</Label>
        <Textarea id="project-caption" placeholder="Describe your project" className="mt-1" rows={3} />
      </div>
      <div>
        <Label htmlFor="project-photo">Upload Photo</Label>
        <div className="mt-1">
          <Input 
            id="project-photo" 
            type="file" 
            accept="image/*" 
            className="hidden" 
          />
          <label
            htmlFor="project-photo"
            className="flex items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-yellow-500 transition-colors"
          >
            <div className="text-center">
              <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
              <p className="text-sm text-gray-600">
                Click to upload project photo
              </p>
              <p className="text-xs text-gray-400">PNG, JPG up to 10MB</p>
            </div>
          </label>
        </div>
      </div>
      <Button type="submit" className="w-full bg-yellow-600 hover:bg-yellow-700">
        <Upload className="w-4 h-4 mr-2" />
        Upload Project Photo
      </Button>
    </div>
  )

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-yellow-50 py-16 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Project Gallery
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Showcase of projects built with STR Mix concrete
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              <Building className="w-4 h-4 mr-1" />
              100+ Projects
            </Badge>
            <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
              <Calendar className="w-4 h-4 mr-1" />
              Updated Daily
            </Badge>
          </div>
        </div>
      </section>

      {/* STR Mix Plant Section - Modern Design */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 via-green-50 to-yellow-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 bg-green-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-yellow-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          {/* Facility Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-6">
              <Zap className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium text-gray-700">Advanced Manufacturing</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our State-of-the-Art Facility
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Explore our cutting-edge STR Mix concrete plant where innovation meets precision.
              Every batch of concrete is crafted with advanced technology and unwavering quality standards.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Badge variant="secondary" className="bg-green-100 text-green-800 px-4 py-2 text-sm">
                <Factory className="w-4 h-4 mr-2" />
                28 Facility Images
              </Badge>
              <Badge variant="secondary" className="bg-blue-100 text-blue-800 px-4 py-2 text-sm">
                <Camera className="w-4 h-4 mr-2" />
                High Resolution
              </Badge>
              <Badge variant="secondary" className="bg-purple-100 text-purple-800 px-4 py-2 text-sm">
                <Star className="w-4 h-4 mr-2" />
                Premium Quality
              </Badge>
            </div>
          </div>

          {/* View Toggle and Upload */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-12 gap-4">
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-gray-700">View:</span>
              <div className="flex bg-white rounded-lg shadow-sm border">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className="rounded-r-none"
                >
                  <Grid3X3 className="w-4 h-4 mr-2" />
                  Grid
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className="rounded-l-none"
                >
                  <List className="w-4 h-4 mr-2" />
                  List
                </Button>
              </div>
            </div>

            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 shadow-lg">
                  <Upload className="w-4 h-4 mr-2" />
                  Add Facility Photo
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <h3 className="text-lg font-semibold mb-4">Upload STR Mix Facility Photo</h3>
                <PlantUploadForm />
              </DialogContent>
            </Dialog>
          </div>

          {/* Facility Gallery */}
          <div className={`grid gap-8 ${
            viewMode === 'grid'
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
              : 'grid-cols-1'
          }`}>
            {plantPictures.map((item, index) => (
              <Card
                key={item.id}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:bg-white hover:scale-[1.02] hover:-translate-y-1"
              >
                <div className="relative overflow-hidden">
                  <div className="aspect-square relative">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://images.unsplash.com/photo-1503376780353-7b66669c4b32?w=800&h=600&fit=crop";
                        target.alt = "Fallback image for STR Mix plant";
                      }}
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Badge */}
                    <div className="absolute top-3 right-3">
                      <Badge className="bg-green-600/90 backdrop-blur-sm text-white border-0 shadow-lg">
                        <Factory className="w-3 h-3 mr-1" />
                        Facility
                      </Badge>
                    </div>

                    {/* Hover overlay with actions */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="flex gap-3">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              size="lg"
                              className="bg-white/90 hover:bg-white text-gray-900 shadow-xl backdrop-blur-sm"
                            >
                              <Eye className="w-5 h-5 mr-2" />
                              View Full
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-5xl max-h-[90vh] overflow-auto">
                            <div className="space-y-4">
                              <img
                                src={item.imageUrl}
                                alt={item.title}
                                className="w-full max-h-[70vh] object-contain rounded-lg"
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  target.src = "https://images.unsplash.com/photo-1503376780353-7b66669c4b32?w=800&h=600&fit=crop";
                                  target.alt = "Fallback image for STR Mix plant";
                                }}
                              />
                              <div className="space-y-3">
                                <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{item.caption}</p>
                                <div className="flex items-center gap-4 pt-2 border-t">
                                  <div className="flex items-center gap-2 text-sm text-gray-500">
                                    <Calendar className="w-4 h-4" />
                                    {item.date}
                                  </div>
                                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                                    <Factory className="w-3 h-3 mr-1" />
                                    STR Mix Facility
                                  </Badge>
                                </div>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>
                  </div>
                </div>

                {viewMode === 'list' && (
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <h3 className="font-bold text-lg text-gray-900 group-hover:text-green-700 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                        {item.caption}
                      </p>
                      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                        <Badge variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200">
                          <Factory className="w-3 h-3 mr-1" />
                          Plant Facility
                        </Badge>
                        <span className="text-xs text-gray-500 flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {item.date}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>

          {/* Facility Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">28</div>
              <div className="text-sm text-gray-600 font-medium">Facility Images</div>
            </div>
            <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-sm text-gray-600 font-medium">Operations</div>
            </div>
            <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-sm text-gray-600 font-medium">Equipment Units</div>
            </div>
            <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg">
              <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
              <div className="text-sm text-gray-600 font-medium">Quality Assured</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 px-4 border-b">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex items-center gap-4">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      <div className="flex items-center gap-2">
                        {category.icon}
                        {category.label}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-green-600 hover:bg-green-700">
                    <Upload className="w-4 h-4 mr-2" />
                    Upload Photo
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <h3 className="text-lg font-semibold mb-4">Upload Your Project Photo</h3>
                  <ProjectUploadForm />
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Project Showcase</h2>
            <p className="text-lg text-gray-600">
              Explore our portfolio of successful projects built with STR Mix concrete
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <Card key={item.id} className="group overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      // Fallback to a placeholder image if the image fails to load
                      const target = e.target as HTMLImageElement;
                      target.src = "https://images.unsplash.com/photo-1503376780353-7b66669c4b32?w=800&h=600&fit=crop";
                      target.alt = "Fallback image for project";
                    }}
                  />
                  <div className="absolute top-2 right-2">
                    <Badge 
                      variant={item.isOfficial ? "default" : "secondary"}
                      className={item.isOfficial ? "bg-green-600" : "bg-yellow-600"}
                    >
                      {item.isOfficial ? "Official" : "Customer"}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-transparent transition-all duration-300 flex items-center justify-center">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          variant="secondary" 
                          size="lg"
                          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        >
                          <Eye className="w-4 h-4 mr-2" />
                          View
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-4xl">
                        <img
                          src={item.imageUrl}
                          alt={item.title}
                          className="w-full max-h-96 object-contain"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = "https://images.unsplash.com/photo-1503376780353-7b66669c4b32?w=800&h=600&fit=crop";
                            target.alt = "Fallback image for project";
                          }}
                        />
                        <div className="mt-4">
                          <h3 className="text-xl font-semibold">{item.title}</h3>
                          <p className="text-gray-600 mt-2">{item.caption}</p>
                          <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {item.date}
                            </span>
                            <Badge variant="outline">
                              {categories.find(c => c.value === item.category)?.label}
                            </Badge>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{item.caption}</p>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-xs">
                      {categories.find(c => c.value === item.category)?.label}
                    </Badge>
                    <span className="text-xs text-gray-500">{item.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <Building className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No projects found</h3>
              <p className="text-gray-600 mb-4">Try adjusting your search or filter criteria</p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchTerm('')
                  setSelectedCategory('all')
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-1">150+</div>
              <div className="text-sm text-gray-600">Total Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-1">85%</div>
              <div className="text-sm text-gray-600">Official Photos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-1">15%</div>
              <div className="text-sm text-gray-600">Customer Uploads</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-1">Daily</div>
              <div className="text-sm text-gray-600">New Additions</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
