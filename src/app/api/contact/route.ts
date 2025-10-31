import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

// POST contact form
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, message } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const contact = await db.contact.create({
      data: {
        name,
        email,
        phone,
        message
      }
    })

    // Here you would also send an email notification
    // using Nodemailer or another email service

    return NextResponse.json({ 
      message: 'Contact form submitted successfully',
      id: contact.id 
    }, { status: 201 })
  } catch (error) {
    console.error('Error creating contact:', error)
    return NextResponse.json({ error: 'Failed to submit contact form' }, { status: 500 })
  }
}