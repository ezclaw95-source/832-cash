# 832 Cash - We Buy Houses Lead Funnel

A high-converting landing page for generating real estate leads.

## 🚀 Quick Start

### 1. Install Dependencies

```bash
cd 832cash
npm install
```

### 2. Configure Environment

```bash
cp .env.example .env.local
```

Edit `.env.local` with your settings:

**Email Notifications (Required):**
- Use Gmail with an [App Password](https://support.google.com/accounts/answer/185833)
- Or use your own SMTP server

**SMS Notifications (Optional):**
- Get Twilio credentials at [twilio.com](https://twilio.com)
- SMS alerts when leads come in

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 📦 Deploy to Vercel (Recommended)

1. Push to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

Or use CLI:
```bash
npm i -g vercel
vercel
```

## 🎨 Customization

### Update Phone Number
Edit `app/page.js` - search for `(832) 227-4669` and replace with your number.

### Update Email
Edit `app/page.js` footer section.

### Colors
The site uses Tailwind CSS. Change `blue-600` to any Tailwind color.

### Service Areas
Update the footer section with your actual service areas.

## 📊 Lead Flow

```
Visitor fills form → API Route → Email + SMS → You get notified!
```

## 🔒 Security Notes

- Form submissions are server-side only (no client-side exposure)
- Environment variables never exposed to browser
- Consider adding reCAPTCHA for spam protection

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS (via inline styles for simplicity)
- **Email:** Nodemailer
- **SMS:** Twilio (optional)
- **Hosting:** Vercel (recommended)

## 📱 Mobile Optimized

Fully responsive design tested on:
- iPhone (all sizes)
- Android devices
- Tablets
- Desktop

## 🎯 Conversion Tips

1. **Speed matters** - Respond to leads within 5 minutes when possible
2. **Follow up** - Most conversions happen after 5+ touchpoints
3. **Call first** - Phone contact converts better than email
4. **Track sources** - Add UTM parameters to marketing campaigns

## 📈 Next Steps

- Add Google Analytics for tracking
- Add Facebook Pixel for retargeting
- Connect to CRM (HubSpot, Pipedrive, etc.)
- Add chatbot for instant engagement
- Create thank-you page with next steps

---

Built with ❤️ for 832 Cash
