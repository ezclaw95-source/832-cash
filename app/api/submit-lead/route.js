import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import twilio from 'twilio'

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, phone, address, city, zip, situation, timeline } = body

    // Validate required fields
    if (!name || !email || !phone || !address || !city || !zip) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Send email notification
    await sendEmailNotification(body)

    // Send SMS notification (optional - requires Twilio setup)
    await sendSmsNotification(body)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Lead submission error:', error)
    return NextResponse.json(
      { error: 'Failed to submit lead' },
      { status: 500 }
    )
  }
}

async function sendEmailNotification(data) {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.EMAIL_PORT || '587'),
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  const emailHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">🏠 New Lead from 832 Cash</h2>
      
      <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="margin-top: 0; color: #1f2937;">Contact Information</h3>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
      </div>

      <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="margin-top: 0; color: #1f2937;">Property Information</h3>
        <p><strong>Address:</strong> ${data.address}</p>
        <p><strong>City:</strong> ${data.city}</p>
        <p><strong>ZIP:</strong> ${data.zip}</p>
        <p><strong>Situation:</strong> ${data.situation || 'Not specified'}</p>
        <p><strong>Timeline:</strong> ${data.timeline || 'Not specified'}</p>
      </div>

      <div style="text-align: center; margin-top: 30px;">
        <a href="tel:${data.phone}" style="background: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">📞 Call Now</a>
        <a href="mailto:${data.email}" style="background: #10b981; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block; margin-left: 10px;">✉️ Email</a>
      </div>

      <p style="color: #6b7280; font-size: 12px; margin-top: 30px; text-align: center;">
        Lead submitted from 832cash.com on ${new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' })}
      </p>
    </div>
  `

  await transporter.sendMail({
    from: `"832 Cash Website" <${process.env.EMAIL_FROM || process.env.EMAIL_USER}>`,
    to: process.env.LEAD_EMAIL || process.env.EMAIL_USER,
    subject: `🏠 New Lead: ${data.address} - ${data.name}`,
    html: emailHtml,
  })
}

async function sendSmsNotification(data) {
  if (!process.env.TWILIO_ACCOUNT_SID || !process.env.TWILIO_AUTH_TOKEN) {
    console.log('Twilio not configured, skipping SMS')
    return
  }

  const client = twilio(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
  )

  const smsBody = `🏠 NEW LEAD\n\n${data.name}\n${data.address}, ${data.city} ${data.zip}\n📞 ${data.phone}\n📧 ${data.email}\nSituation: ${data.situation || 'N/A'}`

  await client.messages.create({
    body: smsBody,
    from: process.env.TWILIO_PHONE_NUMBER,
    to: process.env.LEAD_PHONE,
  })
}
