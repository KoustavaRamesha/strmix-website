import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

// GET all reviews
export async function GET() {
  try {
    const reviews = await db.review.findMany({
      where: { approved: true },
      orderBy: { createdAt: 'desc' }
    })

    return NextResponse.json(reviews)
  } catch (error) {
    console.error('Error fetching reviews:', error)
    return NextResponse.json({ error: 'Failed to fetch reviews' }, { status: 500 })
  }
}

// POST new review
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, rating, message, photoUrl } = body

    if (!name || !rating || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const review = await db.review.create({
      data: {
        name,
        rating: parseInt(rating),
        message,
        photoUrl
      }
    })

    return NextResponse.json(review, { status: 201 })
  } catch (error) {
    console.error('Error creating review:', error)
    return NextResponse.json({ error: 'Failed to create review' }, { status: 500 })
  }
}