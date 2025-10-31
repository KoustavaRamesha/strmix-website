'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star, Upload, Camera, MessageSquare, User } from "lucide-react"

export default function ReviewsPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [rating, setRating] = useState('')
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Sample reviews data - this would come from the database
  const reviews = [
    {
      id: 1,
      name: "Rajesh Patel",
      rating: 5,
      message: "Excellent quality concrete and timely delivery. STR Mix has been our preferred supplier for over 5 years.",
      photoUrl: "https://images.unsplash.com/photo-1503376780353-7b66669c4b32?w=200&h=200&fit=crop",
      date: "2024-01-15"
    },
    {
      id: 2,
      name: "Priya Sharma",
      rating: 4,
      message: "Good service and quality concrete. The team is professional and delivers on time.",
      photoUrl: null,
      date: "2024-01-10"
    },
    {
      id: 3,
      name: "Amit Kumar",
      rating: 5,
      message: "Outstanding service! The M25 grade concrete was perfect for our commercial project. Highly recommended.",
      photoUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=200&fit=crop",
      date: "2024-01-08"
    }
  ]

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0])
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would handle the form submission
    // Upload image to ImgBB and save review to database
    alert('Review submitted successfully! (This is a demo - in production, this would save to the database)')
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ))
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-yellow-50 py-16 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Customer Reviews
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Hear from our satisfied customers
          </p>
          <Badge variant="secondary" className="bg-green-100 text-green-800 text-lg px-4 py-2">
            4.8/5 Average Rating
          </Badge>
        </div>
      </section>

      <div className="container mx-auto max-w-6xl py-12 px-4">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Review Form */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  Write a Review
                </CardTitle>
                <CardDescription>
                  Share your experience with STR Mix
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your name"
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="rating">Rating</Label>
                    <Select value={rating} onValueChange={setRating} required>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select rating" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="5">⭐⭐⭐⭐⭐ (5 stars)</SelectItem>
                        <SelectItem value="4">⭐⭐⭐⭐ (4 stars)</SelectItem>
                        <SelectItem value="3">⭐⭐⭐ (3 stars)</SelectItem>
                        <SelectItem value="2">⭐⭐ (2 stars)</SelectItem>
                        <SelectItem value="1">⭐ (1 star)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Your Review</Label>
                    <Textarea
                      id="message"
                      placeholder="Share your experience with STR Mix..."
                      className="mt-1"
                      rows={4}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="photo">Upload Photo (Optional)</Label>
                    <div className="mt-1">
                      <Input
                        id="photo"
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                      <label
                        htmlFor="photo"
                        className="flex items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-green-500 transition-colors"
                      >
                        <div className="text-center">
                          <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                          <p className="text-sm text-gray-600">
                            {selectedFile ? selectedFile.name : 'Click to upload photo'}
                          </p>
                          <p className="text-xs text-gray-400">PNG, JPG up to 10MB</p>
                        </div>
                      </label>
                    </div>
                  </div>

                  <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                    Submit Review
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Reviews List */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {reviews.map((review) => (
                <Card key={review.id} className="border-l-4 border-l-green-600">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        {review.photoUrl ? (
                          <img
                            src={review.photoUrl}
                            alt={review.name}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                        ) : (
                          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                            <User className="w-6 h-6 text-green-600" />
                          </div>
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <h3 className="font-semibold text-gray-900">{review.name}</h3>
                            <div className="flex items-center gap-1">
                              {renderStars(review.rating)}
                              <span className="text-sm text-gray-500 ml-1">
                                {review.rating}/5
                              </span>
                            </div>
                          </div>
                          <span className="text-sm text-gray-500">{review.date}</span>
                        </div>
                        <p className="text-gray-700 mb-3">{review.message}</p>
                        {review.photoUrl && (
                          <div className="mt-3">
                            <img
                              src={review.photoUrl}
                              alt="Review photo"
                              className="w-full max-w-md rounded-lg shadow-sm"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Empty State */}
            {reviews.length === 0 && (
              <Card className="text-center py-12">
                <CardContent>
                  <MessageSquare className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">No reviews yet</h3>
                  <p className="text-gray-600 mb-4">Be the first to share your experience with STR Mix</p>
                  <Button className="bg-green-600 hover:bg-green-700">
                    Write a Review
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-1">4.8</div>
              <div className="text-sm text-gray-600">Average Rating</div>
              <div className="flex justify-center mt-1">
                {renderStars(5)}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-1">127</div>
              <div className="text-sm text-gray-600">Total Reviews</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-1">98%</div>
              <div className="text-sm text-gray-600">Satisfied</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-1">24h</div>
              <div className="text-sm text-gray-600">Response Time</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
