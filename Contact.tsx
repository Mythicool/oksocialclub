'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MessageCircle, Instagram, Facebook, Twitter, Send, MapPin } from 'lucide-react'

const Contact = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our team",
      contact: "(405) 555-DOINGOK",
      action: "tel:+14055553646465"
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "Send us a detailed message",
      contact: "hello@doingoksocial.com",
      action: "mailto:hello@doingoksocial.com"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant answers",
      contact: "Available 9 AM - 9 PM",
      action: "#"
    }
  ]

  const socialLinks = [
    {
      icon: Instagram,
      name: "Instagram",
      handle: "@doingoksocial",
      followers: "2.5K",
      color: "from-pink-500 to-purple-500"
    },
    {
      icon: Facebook,
      name: "Facebook",
      handle: "Doing OK Social Club",
      followers: "1.8K",
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: Twitter,
      name: "Twitter",
      handle: "@doingoksocial",
      followers: "950",
      color: "from-sky-400 to-sky-500"
    }
  ]

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-oklahoma-red via-sunset-orange to-prairie-gold text-white overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
            Get In <span className="text-oklahoma-cream">Touch</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed opacity-90">
            Ready to join the Doing OK family? Have questions about events, private dining, or partnerships? 
            We'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Methods */}
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.title}
                  href={method.action}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="block bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-white/30 transition-colors duration-300">
                      <method.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold mb-2">{method.title}</h3>
                      <p className="text-white/80 mb-2">{method.description}</p>
                      <p className="font-semibold text-oklahoma-cream">{method.contact}</p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Media */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="font-display text-2xl font-bold mb-6 text-center">Follow Our Journey</h3>
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href="#"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300 group"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-10 h-10 bg-gradient-to-r ${social.color} rounded-lg flex items-center justify-center`}>
                        <social.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold">{social.name}</p>
                        <p className="text-sm text-white/80">{social.handle}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">{social.followers}</p>
                      <p className="text-xs text-white/80">followers</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
          >
            <h3 className="font-display text-2xl font-bold mb-6 text-center">Send Us a Message</h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-white/90">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-white/90">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-white/90">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-white/90">Phone (Optional)</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300"
                  placeholder="(405) 555-0123"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-white/90">Subject</label>
                <select className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300">
                  <option value="" className="text-gray-900">Select a topic</option>
                  <option value="events" className="text-gray-900">Event Information</option>
                  <option value="private" className="text-gray-900">Private Events</option>
                  <option value="vendor" className="text-gray-900">Vendor Partnership</option>
                  <option value="feedback" className="text-gray-900">Feedback</option>
                  <option value="other" className="text-gray-900">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-white/90">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="w-full bg-white text-oklahoma-red px-8 py-4 rounded-lg font-semibold hover:bg-oklahoma-cream transition-colors duration-300 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Quick Info Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-white/10 backdrop-blur-sm rounded-2xl p-6"
        >
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center space-x-3">
              <MapPin className="w-6 h-6 text-oklahoma-cream" />
              <div>
                <p className="font-semibold">123 Main Street</p>
                <p className="text-sm text-white/80">Oklahoma City, OK</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Phone className="w-6 h-6 text-oklahoma-cream" />
              <div>
                <p className="font-semibold">(405) 555-DOINGOK</p>
                <p className="text-sm text-white/80">Mon-Sun 9AM-9PM</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Mail className="w-6 h-6 text-oklahoma-cream" />
              <div>
                <p className="font-semibold">hello@doingoksocial.com</p>
                <p className="text-sm text-white/80">We reply within 24hrs</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
