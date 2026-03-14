'use client'

import { useState, useEffect } from 'react'

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zip: '',
    situation: '',
    timeline: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (res.ok) setSubmitted(true)
    } catch (err) {
      console.error('Submission error:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-600 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-lg text-center transform animate-pulse">
          <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <span className="text-5xl text-white">✓</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Thank You, {formData.name.split(' ')[0]}!</h2>
          <p className="text-lg text-gray-600 mb-6">
            We've received your property information. One of our home buying specialists will contact you within <strong className="text-emerald-600">24 hours</strong> with a fair cash offer.
          </p>
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-6 mb-6 border border-emerald-100">
            <p className="text-gray-700 font-semibold mb-2">📧 Questions? Email us:</p>
            <a href="mailto:offers@832cash.com" className="text-xl font-bold text-emerald-600 hover:text-emerald-700 transition">offers@832cash.com</a>
          </div>
          <p className="text-sm text-gray-500">
            Reference #<span className="font-mono bg-gray-100 px-3 py-1 rounded-lg">{Math.random().toString(36).substr(2, 8).toUpperCase()}</span>
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Header */}
      <header className={`bg-white/80 backdrop-blur-lg sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-2xl' : 'shadow-md'}`}>
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg transform hover:scale-105 transition">
              <span className="text-white font-bold text-xl">832</span>
            </div>
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Cash</div>
              <div className="text-xs text-gray-500 -mt-1 font-medium">Houston Home Buyers</div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="text-gray-600 hover:text-blue-600 transition font-medium relative group">
              How It Works
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition"></span>
            </a>
            <a href="#why-us" className="text-gray-600 hover:text-blue-600 transition font-medium relative group">
              Why Us
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition"></span>
            </a>
            <a href="#testimonials" className="text-gray-600 hover:text-blue-600 transition font-medium relative group">
              Reviews
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition"></span>
            </a>
            <a href="#faq" className="text-gray-600 hover:text-blue-600 transition font-medium relative group">
              FAQ
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition"></span>
            </a>
          </div>
          <a href="mailto:offers@832cash.com" className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-bold transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2">
            <span>✉️</span> Contact Us
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white overflow-hidden py-20 md:py-32">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        </div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-2000"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-2.5 rounded-full text-sm font-semibold border border-white/30">
                <span className="text-yellow-300">🏆</span> #1 Rated Cash Home Buyer in Houston
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
                Sell Your House{' '}
                <span className="bg-gradient-to-r from-yellow-300 via-amber-300 to-orange-300 bg-clip-text text-transparent animate-gradient">FAST</span>
                {' '}for Cash
              </h1>
              
              <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
                No repairs. No commissions. No showings. No hassle. We buy houses in Houston and surrounding areas —{' '}
                <strong className="text-white">as-is, any condition, any situation.</strong>
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: '⏱️', text: 'Close in 7-14 days' },
                  { icon: '💵', text: 'Fair cash offers' },
                  { icon: '📋', text: 'Zero closing costs' },
                  { icon: '🔧', text: 'No repairs needed' },
                  { icon: '🏠', text: 'No realtor fees' },
                  { icon: '✅', text: 'No obligations' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl border border-white/20">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                      <span className="text-white text-sm">{item.icon}</span>
                    </div>
                    <span className="font-medium">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-2xl border border-white/20">
                <div className="flex -space-x-3">
                  {[1,2,3,4,5].map(i => (
                    <div key={i} className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full border-3 border-white flex items-center justify-center text-xs font-bold text-white shadow-lg">★</div>
                  ))}
                </div>
                <div>
                  <div className="font-bold text-lg">4.9/5 Rating</div>
                  <div className="text-blue-200 text-sm">from 200+ verified reviews</div>
                </div>
              </div>
            </div>

            {/* Lead Form */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl blur-2xl opacity-30 transform rotate-6"></div>
              <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 lg:p-10 relative">
                <div className="text-center mb-6">
                  <div className="inline-block bg-gradient-to-r from-blue-100 to-indigo-100 px-4 py-2 rounded-full text-sm font-semibold text-blue-700 mb-3">
                    ⚡ Get Your Offer in 24 Hours
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Get Your Fair Cash Offer</h2>
                  <p className="text-gray-600">Complete the form below — it takes less than 2 minutes.</p>
                </div>
                
                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-5 mb-6 border border-emerald-100">
                  <div className="flex items-start gap-3">
                    <span className="text-3xl">🔒</span>
                    <div>
                      <p className="font-bold text-gray-800 text-lg">100% Free & Confidential</p>
                      <p className="text-sm text-gray-600 mt-1">No obligation to accept. Your information is never shared.</p>
                    </div>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition bg-gray-50 hover:bg-white"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition bg-gray-50 hover:bg-white"
                        placeholder="(832) 555-0123"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition bg-gray-50 hover:bg-white"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Property Address *</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition bg-gray-50 hover:bg-white"
                      placeholder="123 Main Street"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">City *</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition bg-gray-50 hover:bg-white"
                        placeholder="Houston"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">ZIP Code *</label>
                      <input
                        type="text"
                        name="zip"
                        value={formData.zip}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition bg-gray-50 hover:bg-white"
                        placeholder="77001"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">What's Your Situation?</label>
                      <select
                        name="situation"
                        value={formData.situation}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition bg-gray-50 hover:bg-white"
                      >
                        <option value="">Select one...</option>
                        <option value="inherited">Inherited Property</option>
                        <option value="foreclosure">Facing Foreclosure</option>
                        <option value="repairs">Needs Major Repairs</option>
                        <option value="relocating">Relocating for Job</option>
                        <option value="divorce">Divorce Settlement</option>
                        <option value="vacant">Vacant Property</option>
                        <option value="tenant">Has Problematic Tenants</option>
                        <option value="probate">Probate Property</option>
                        <option value="downsizing">Downsizing</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">When Do You Want to Sell?</label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition bg-gray-50 hover:bg-white"
                      >
                        <option value="">Select timeline...</option>
                        <option value="asap">As Soon As Possible</option>
                        <option value="1-2 weeks">1-2 Weeks</option>
                        <option value="1 month">1 Month</option>
                        <option value="2-3 months">2-3 Months</option>
                        <option value="4-6 months">4-6 Months</option>
                        <option value="just-looking">Just Looking / Curious</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white py-5 rounded-xl font-bold text-xl transition disabled:opacity-50 disabled:cursor-not-allowed shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center gap-3"
                  >
                    {loading ? (
                      <span className="animate-spin">⏳</span>
                    ) : (
                      <>
                        <span>🚀</span> Get My Cash Offer Now
                      </>
                    )}
                  </button>

                  <div className="text-center">
                    <p className="text-xs text-gray-500 flex items-center justify-center gap-2">
                      <span>🔒</span> Your information is protected with 256-bit SSL encryption
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0 leading-none">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white py-16 border-b relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '500+', label: 'Homes Purchased', color: 'from-blue-500 to-indigo-600' },
              { value: '$50M+', label: 'Cash Paid to Homeowners', color: 'from-green-500 to-emerald-600' },
              { value: '15+', label: 'Years Experience', color: 'from-purple-500 to-pink-600' },
              { value: '4.9★', label: 'Average Rating', color: 'from-amber-500 to-orange-600' },
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <div className={`text-4xl md:text-5xl font-extrabold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition`}>
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block bg-gradient-to-r from-blue-100 to-indigo-100 px-5 py-2 rounded-full text-sm font-bold text-blue-700 mb-4">
              SIMPLE 3-STEP PROCESS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Selling your house to us is simple, fast, and stress-free. Here's our proven process.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                num: '1',
                title: 'Contact Us',
                desc: 'Fill out the form or call us directly. We will ask a few quick questions about your property and situation.',
                time: '2 minutes',
                commitment: 'No commitment',
                gradient: 'from-blue-500 to-indigo-600',
                bg: 'from-blue-50 to-indigo-50',
                icon: '📞',
              },
              {
                num: '2',
                title: 'Get Your Offer',
                desc: 'Within 24 hours, we will present a fair, all-cash offer based on your property condition and market value.',
                time: 'Within 24 hours',
                commitment: 'No obligation',
                gradient: 'from-green-500 to-emerald-600',
                bg: 'from-green-50 to-emerald-50',
                icon: '💵',
              },
              {
                num: '3',
                title: 'Get Paid',
                desc: 'Close on your timeline at a reputable title company. Walk away with cash in hand, no hassles.',
                time: '7-30 days',
                commitment: 'We pay closing costs',
                gradient: 'from-purple-500 to-pink-600',
                bg: 'from-purple-50 to-pink-50',
                icon: '🏆',
              },
            ].map((step, i) => (
              <div key={i} className="relative group">
                {i < 2 && (
                  <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-gray-200 to-transparent -ml-8 z-0"></div>
                )}
                <div className="bg-white rounded-3xl shadow-xl p-8 text-center relative overflow-hidden border border-gray-100 hover:shadow-2xl transition group-hover:-translate-y-2">
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${step.bg} rounded-bl-full -mr-8 -mt-8 opacity-50`}></div>
                  <div className={`w-20 h-20 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 relative z-10 shadow-lg transform group-hover:scale-110 transition`}>
                    <span className="text-3xl font-bold text-white">{step.num}</span>
                  </div>
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{step.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{step.desc}</p>
                  <div className={`text-left bg-gradient-to-br ${step.bg} rounded-2xl p-5 border border-gray-100`}>
                    <p className="text-sm text-gray-700"><strong>Time:</strong> {step.time}</p>
                    <p className="text-sm text-gray-700 mt-2"><strong>{step.commitment}</strong></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block bg-gradient-to-r from-green-100 to-emerald-100 px-5 py-2 rounded-full text-sm font-bold text-green-700 mb-4">
              THE 832 CASH ADVANTAGE
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why Houston Homeowners Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're not just another investor. We're your neighbors, built on trust and results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🏆', title: 'Local & Trusted', desc: 'Houston locals who understand the market. Hundreds of families helped in the 832 area.', color: 'from-blue-500 to-indigo-600' },
              { icon: '💵', title: 'Fair Cash Offers', desc: 'Competitive offers based on market values — no lowball tactics, no games.', color: 'from-green-500 to-emerald-600' },
              { icon: '⚡', title: 'Fast Closing', desc: 'Close in as little as 7 days, or on your timeline. You are in control.', color: 'from-purple-500 to-pink-600' },
              { icon: '📋', title: 'No Hidden Fees', desc: 'We cover all closing costs and title fees. The offer is what you receive.', color: 'from-orange-500 to-red-600' },
              { icon: '🔧', title: 'As-Is Condition', desc: 'No repairs, no cleaning. We buy houses in any condition.', color: 'from-teal-500 to-cyan-600' },
              { icon: '🤝', title: 'No Pressure', desc: 'Zero obligation to accept. We provide all info for your best decision.', color: 'from-amber-500 to-yellow-600' },
            ].map((item, i) => (
              <div key={i} className={`bg-gradient-to-br ${item.color} rounded-3xl p-8 text-white relative overflow-hidden group hover:shadow-2xl transition transform hover:-translate-y-2`}>
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/10 rounded-full -ml-16 -mb-16"></div>
                <div className="text-6xl mb-6 relative z-10">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-4 relative z-10">{item.title}</h3>
                <p className="text-white/90 leading-relaxed relative z-10">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block bg-gradient-to-r from-purple-100 to-pink-100 px-5 py-2 rounded-full text-sm font-bold text-purple-700 mb-4">
              SEE THE DIFFERENCE
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">832 Cash vs. Traditional Sale</h2>
            <p className="text-xl text-gray-600">See why homeowners are choosing the faster, easier option.</p>
          </div>
          
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="grid md:grid-cols-3 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
              <div className="p-6"></div>
              <div className="p-6 text-center bg-gradient-to-r from-blue-600 to-indigo-600">
                <h3 className="text-2xl font-bold">832 Cash</h3>
                <p className="text-blue-200 text-sm mt-1">Our Way</p>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold">Traditional Sale</h3>
                <p className="text-gray-400 text-sm mt-1">With Realtor</p>
              </div>
            </div>
            
            <div className="divide-y divide-gray-100">
              {[
                { feature: 'Time to Close', us: '7-14 days', them: '60-90 days' },
                { feature: 'Realtor Commissions', us: '0%', them: '5-6%' },
                { feature: 'Closing Costs', us: 'We Pay', them: 'You Pay 2-3%' },
                { feature: 'Repairs Needed', us: 'None', them: 'Often Required' },
                { feature: 'Showings', us: 'None', them: 'Dozens' },
                { feature: 'Certainty', us: 'Guaranteed', them: 'Fall-Through Risk' },
              ].map((row, i) => (
                <div key={i} className="grid md:grid-cols-3 p-6 hover:bg-gray-50 transition">
                  <div className="font-bold text-gray-700 mb-2 md:mb-0 flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    {row.feature}
                  </div>
                  <div className="text-center text-green-600 font-bold bg-green-50 rounded-xl py-2">{row.us}</div>
                  <div className="text-center text-gray-500 bg-gray-50 rounded-xl py-2">{row.them}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block bg-gradient-to-r from-teal-100 to-cyan-100 px-5 py-2 rounded-full text-sm font-bold text-teal-700 mb-4">
              PROUDLY SERVING HOUSTON
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Areas We Serve</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We buy houses throughout the Greater Houston area and surrounding communities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-4">
            {[
              'Houston', 'Katy', 'Sugar Land', 'Pearland',
              'The Woodlands', 'Spring', 'Tomball', 'Cypress',
              'Pasadena', 'Baytown', 'League City', 'Friendswood',
              'Missouri City', 'Stafford', 'Bellaire', 'West University',
              'Memorial', 'Heights', 'Montrose', 'Midtown',
              'Galleria', 'Downtown', 'Medical Center', 'Energy Corridor',
            ].map((area) => (
              <div key={area} className="bg-gradient-to-br from-gray-50 to-gray-100 hover:from-blue-50 hover:to-indigo-50 rounded-2xl p-5 text-center transition border border-gray-100 hover:border-blue-200 transform hover:-translate-y-1 hover:shadow-lg">
                <span className="text-gray-700 font-semibold">{area}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <p className="text-gray-600 text-lg">
              Don't see your area? <a href="mailto:offers@832cash.com" className="text-blue-600 font-bold hover:underline">Email us</a> — we probably still serve it!
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block bg-white/20 backdrop-blur-sm px-5 py-2 rounded-full text-sm font-semibold mb-4 border border-white/30">
              REAL STORIES FROM REAL HOMEOWNERS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">What Homeowners Say About Us</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what real Houston homeowners experienced.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                initial: 'M',
                name: 'Maria G.',
                location: 'Houston, TX',
                text: '832 Cash made selling my inherited property so easy. No repairs needed, no realtor fees, and they closed in just 10 days. I could not have asked for a better experience.',
                color: 'from-yellow-400 to-amber-500',
              },
              {
                initial: 'J',
                name: 'James T.',
                location: 'Katy, TX',
                text: 'I was facing foreclosure and felt trapped. 832 Cash helped me out of an impossible situation with a fair offer and professional handling. They truly care about people.',
                color: 'from-green-400 to-emerald-500',
              },
              {
                initial: 'R',
                name: 'Robert L.',
                location: 'Sugar Land, TX',
                text: 'Best decision I made. They bought my house exactly as-is — I did not have to fix anything or even clean. Walked away with cash and zero stress. Highly recommend!',
                color: 'from-purple-400 to-pink-500',
              },
            ].map((testimonial, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition transform hover:-translate-y-2">
                <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
                <p className="text-lg mb-8 leading-relaxed italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 bg-gradient-to-br ${testimonial.color} rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg`}>
                    {testimonial.initial}
                  </div>
                  <div>
                    <div className="font-bold text-lg">{testimonial.name}</div>
                    <div className="text-blue-200">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-6 bg-white/10 backdrop-blur-sm rounded-full px-10 py-6 border border-white/30">
              <span className="text-5xl font-extrabold">4.9/5</span>
              <div className="text-yellow-400 text-3xl">★★★★★</div>
              <div className="text-left">
                <div className="font-bold text-lg">from 200+ verified reviews</div>
                <div className="text-blue-200 text-sm">Google • Facebook • BBB</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block bg-gradient-to-r from-amber-100 to-orange-100 px-5 py-2 rounded-full text-sm font-bold text-amber-700 mb-4">
              GOT QUESTIONS?
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about selling to 832 Cash.</p>
          </div>
          
          <div className="space-y-4">
            <FAQItem
              question="How quickly can I close?"
              answer="We can close in as little as 7 days, but we work on your timeline. Whether you need to sell immediately or in a few months, we're flexible and will accommodate your needs."
            />
            <FAQItem
              question="Do I need to make any repairs?"
              answer="Absolutely not! We buy houses in any condition. Whether it needs cosmetic updates or major structural work, we'll handle all repairs after closing. You can leave everything as-is."
            />
            <FAQItem
              question="How do you determine your offer?"
              answer="We analyze recent sales of similar properties in your area, subtract estimated repair costs, and factor in our holding costs. We aim to make fair offers that work for both parties — no lowball tactics."
            />
            <FAQItem
              question="Are there any fees or commissions?"
              answer="None whatsoever. We pay all closing costs, title fees, and there are no realtor commissions. The offer we present is the exact amount you receive at closing. No surprises."
            />
            <FAQItem
              question="What if I still have a mortgage?"
              answer="No problem at all. We work with your lender to pay off your mortgage at closing. If you owe more than the property is worth (underwater), we can still help — call us to discuss your options."
            />
            <FAQItem
              question="Is this a scam?"
              answer="We completely understand the skepticism — there are bad actors out there. But we're a legitimate, local business with hundreds of successful transactions. We work with reputable title companies, you're under no obligation, and we have verified reviews. Check our BBB rating and Google reviews!"
            />
            <FAQItem
              question="What types of properties do you buy?"
              answer="We buy houses, condos, townhomes, duplexes, and multi-family properties in any condition — including inherited properties, foreclosures, probate, properties with tenants, fire damage, water damage, and more."
            />
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block bg-gradient-to-r from-blue-100 to-indigo-100 px-5 py-2 rounded-full text-sm font-bold text-blue-700 mb-4">
                OUR STORY
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About 832 Cash</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We're a family-owned home buying company serving the Greater Houston area. For over 15 years, we've helped hundreds of homeowners sell their properties quickly, fairly, and without the hassle of traditional sales.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our mission is simple: Provide Houston homeowners with a legitimate, professional alternative to listing with a realtor. Whether you're facing foreclosure, inherited a property, relocating, or just need to sell fast — we're here to help.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
                  <div className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">500+</div>
                  <div className="text-gray-600 font-medium">Families Helped</div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100">
                  <div className="text-4xl font-extrabold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">15+</div>
                  <div className="text-gray-600 font-medium">Years in Business</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-12 min-h-[500px] flex items-center justify-center relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
              </div>
              <div className="text-center relative z-10">
                <div className="text-8xl mb-6">🏠</div>
                <p className="text-2xl font-bold text-white mb-3">Your Local Houston Home Buyer</p>
                <p className="text-blue-200 text-lg">Serving the 832 area and beyond</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        </div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Your Cash Offer?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Fill out the form above or give us a call. There's no obligation, and it only takes 2 minutes to get started.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <a href="mailto:offers@832cash.com" className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white px-10 py-5 rounded-2xl font-bold text-xl transition shadow-xl hover:shadow-2xl transform hover:-translate-y-1 inline-flex items-center justify-center gap-3">
              <span>✉️</span> Get Your Cash Offer
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">832</span>
                </div>
                <div className="text-2xl font-bold text-white">Cash</div>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Houston's most trusted cash home buyer. Fast, fair, and hassle-free.
              </p>
              <div className="flex gap-4">
                {['f', 't', 'i', 'l'].map((social, i) => (
                  <a key={i} href="#" className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-blue-600 transition text-white font-bold">
                    {social}
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-6 text-lg">Quick Links</h4>
              <ul className="space-y-3">
                {['How It Works', 'Why Choose Us', 'Reviews', 'FAQ', 'Service Areas', 'About Us'].map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-white transition flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-6 text-lg">Contact</h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <span className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">✉️</span>
                  <a href="mailto:offers@832cash.com" className="hover:text-white transition">offers@832cash.com</a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">📍</span>
                  <span>Houston, TX 77001</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-6 text-lg">Service Areas</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Houston, Katy, Sugar Land, Pearland, The Woodlands, Spring, Cypress, Pasadena, Baytown, and all surrounding areas.
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-sm">
                © {new Date().getFullYear()} 832 Cash. All rights reserved.
              </p>
              <div className="flex gap-8 text-sm">
                <a href="#" className="hover:text-white transition">Privacy Policy</a>
                <a href="#" className="hover:text-white transition">Terms of Service</a>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-6 text-center max-w-3xl mx-auto">
              832 Cash is a professional home buying company. We are not realtors and we do not charge any fees or commissions. All information provided is for educational purposes only.
            </p>
          </div>
        </div>
      </footer>

      {/* Custom Styles for Animations */}
      <style jsx global>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes gradient {
          0%, 100% { background-size: 200% 200%; background-position: left center; }
          50% { background-size: 200% 200%; background-position: right center; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  )
}

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition"
      >
        <span className="font-bold text-gray-800 text-lg">{question}</span>
        <span className={`w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-xl transition-transform ${isOpen ? 'rotate-45' : ''}`}>+</span>
      </button>
      {isOpen && (
        <div className="px-8 pb-6 text-gray-600 leading-relaxed text-lg">
          {answer}
        </div>
      )}
    </div>
  )
}
