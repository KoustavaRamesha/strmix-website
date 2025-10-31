import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

// GET all gallery items
export async function GET() {
  try {
    const gallery = await db.gallery.findMany({
      orderBy: { createdAt: 'desc' }
    })

    return NextResponse.json(gallery)
  } catch (error) {
    console.error('Error fetching gallery:', error)
    return NextResponse.json({ error: 'Failed to fetch gallery' }, { status: 500 })
  }
}

// POST new gallery item
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { title, imageUrl, caption, isOfficial } = body

    if (!title || !imageUrl) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const gallery = await db.gallery.create({
      data: {
        title,
        imageUrl,
        caption,
        isOfficial: isOfficial || false
      }
    })

    return NextResponse.json(gallery, { status: 201 })
  } catch (error) {
    console.error('Error creating gallery item:', error)
    return NextResponse.json({ error: 'Failed to create gallery item' }, { status: 500 })
  }
}