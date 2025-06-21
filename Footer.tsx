'use client'

import { motion } from 'framer-motion'
import { Heart, MapPin, Phone, Mail, Instagram, Facebook, Twitter, ArrowUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const footerLinks = {
    "Quick Links": [
      { name: "Events", href: "#events" },
      { name: "Food & Vendors", href: "#food" },
      { name: "About Us", href: "#about" },
      { name: "Location", href: "#location" }
    ],
    "Services": [
      { name: "Private Events", href: "#" },
      { name: "Corporate Catering", href: "#" },
      { name: "Vendor Applications", href: "#" },
      { name: "Gift Cards", href: "#" }
    ],
    "Support": [
      { name: "Contact Us", href: "#contact" },
      { name: "FAQ", href: "#" },
      { name: "Accessibility", href: "#" },
      { name: "Feedback", href: "#" }
    ]
  }

  const socialLinks = [
    { icon: Instagram, href: "#", name: "Instagram" },
    { icon: Facebook, href: "#", name: "Facebook" },
    { icon: Twitter, href: "#", name: "Twitter" }
  ]

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 oklahoma-pattern opacity-10"></div>
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container-custom py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                {/* Logo */}
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-oklahoma-red to-sunset-orange rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">OK</span>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-2xl">Doing OK</h3>
                    <p className="text-gray-400 text-sm">Oklahoma Social Club</p>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed">
                  Where Oklahoma hospitality meets exceptional dining. Join our community and 
                  experience the best of local culture, cuisine, and connection.
                </p>

                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-gray-300">
                    <MapPin className="w-4 h-4 text-oklahoma-red flex-shrink-0" />
                    <span className="text-sm">123 Main Street, Oklahoma City, OK 73102</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Phone className="w-4 h-4 text-oklahoma-red flex-shrink-0" />
                    <span className="text-sm">(405) 555-DOINGOK</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Mail className="w-4 h-4 text-oklahoma-red flex-shrink-0" />
                    <span className="text-sm">hello@doingoksocial.com</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-oklahoma-red transition-colors duration-300 group"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Links Columns */}
            {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
              <div key={category}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4 className="font-display font-bold text-lg mb-6 text-white">{category}</h4>
                  <ul className="space-y-3">
                    {links.map((link, linkIndex) => (
                      <motion.li
                        key={link.name}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: (categoryIndex * 0.1) + (linkIndex * 0.05) }}
                        viewport={{ once: true }}
                      >
                        <a
                          href={link.href}
                          className="text-gray-300 hover:text-oklahoma-red transition-colors duration-300 text-sm block py-1"
                        >
                          {link.name}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            ))}
          </div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 pt-12 border-t border-gray-800"
          >
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="font-display text-2xl font-bold mb-4">Stay in the Loop</h3>
              <p className="text-gray-300 mb-8">
                Get the latest updates on events, new vendors, and special offers delivered to your inbox.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-oklahoma-red focus:border-transparent transition-all duration-300"
                />
                <motion.button
                  className="btn-primary px-6 py-3 whitespace-nowrap"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="container-custom py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-400">
                <p>&copy; 2024 Doing OK Social Club. All rights reserved.</p>
                <div className="flex space-x-4">
                  <a href="#" className="hover:text-oklahoma-red transition-colors duration-300">Privacy Policy</a>
                  <a href="#" className="hover:text-oklahoma-red transition-colors duration-300">Terms of Service</a>
                  <a href="#" className="hover:text-oklahoma-red transition-colors duration-300">Accessibility</a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-400 flex items-center space-x-1">
                  <span>Made with</span>
                  <Heart className="w-4 h-4 text-oklahoma-red fill-current" />
                  <span>in Oklahoma</span>
                </span>
                
                <motion.button
                  onClick={scrollToTop}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-oklahoma-red transition-colors duration-300 group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ArrowUp className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
