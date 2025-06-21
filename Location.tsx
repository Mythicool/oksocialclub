'use client'

import { motion } from 'framer-motion'
import { MapPin, Car, Bus, Clock, Phone, Navigation } from 'lucide-react'

const Location = () => {
  const transportOptions = [
    {
      icon: Car,
      title: "By Car",
      description: "Free parking available",
      details: "Take I-35 to Exit 123, follow signs to Downtown District"
    },
    {
      icon: Bus,
      title: "Public Transit",
      description: "Multiple bus routes",
      details: "Routes 15, 22, and 45 stop within 2 blocks"
    },
    {
      icon: Navigation,
      title: "Rideshare",
      description: "Uber & Lyft friendly",
      details: "Designated pickup/dropoff zone available"
    }
  ]

  const hours = [
    { day: "Friday", hours: "5:00 PM - 11:00 PM" },
    { day: "Saturday", hours: "12:00 PM - 11:00 PM" },
    { day: "Sunday", hours: "12:00 PM - 8:00 PM" },
    { day: "Mon-Thu", hours: "Private Events Only" }
  ]

  return (
    <section id="location" className="section-padding bg-gray-50 overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Find <span className="text-gradient">Us</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Located in the heart of Oklahoma City, we're easy to find and even easier to love. 
            Come discover your new favorite gathering place.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Address */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-oklahoma-red to-sunset-orange rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-gray-900 mb-2">Our Location</h3>
                  <div className="text-lg text-gray-700 space-y-1">
                    <p className="font-semibold">123 Main Street</p>
                    <p>Oklahoma City, OK 73102</p>
                    <p className="text-gray-600">Downtown Arts District</p>
                  </div>
                </div>
              </div>
              
              <motion.button
                className="btn-primary w-full flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
              </motion.button>
            </div>

            {/* Hours */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-prairie-gold to-sunset-orange rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-2xl font-bold text-gray-900 mb-4">Hours</h3>
                  <div className="space-y-3">
                    {hours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                        <span className="font-medium text-gray-900">{schedule.day}</span>
                        <span className="text-gray-600">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Transportation */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="font-display text-2xl font-bold text-gray-900 mb-6">Getting Here</h3>
              <div className="space-y-4">
                {transportOptions.map((option, index) => (
                  <motion.div
                    key={option.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-sky-blue to-sage-green rounded-lg flex items-center justify-center flex-shrink-0">
                      <option.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{option.title}</h4>
                      <p className="text-sm text-oklahoma-red font-medium mb-1">{option.description}</p>
                      <p className="text-sm text-gray-600">{option.details}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-8"
          >
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              {/* Map Placeholder */}
              <div className="relative h-96 bg-gradient-to-br from-sky-blue to-sage-green flex items-center justify-center">
                <div className="text-center text-white">
                  <MapPin className="w-16 h-16 mx-auto mb-4 opacity-80" />
                  <h4 className="text-xl font-bold mb-2">Interactive Map</h4>
                  <p className="opacity-90">Click to view in Google Maps</p>
                </div>
                
                {/* Overlay for click */}
                <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors duration-300 cursor-pointer flex items-center justify-center">
                  <motion.div
                    className="bg-white/20 backdrop-blur-sm rounded-full p-4"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Navigation className="w-8 h-8 text-white" />
                  </motion.div>
                </div>
              </div>
              
              {/* Map Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-display text-lg font-bold text-gray-900">Doing OK Social Club</h4>
                  <div className="flex items-center space-x-1 text-prairie-gold">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                        viewport={{ once: true }}
                      >
                        ⭐
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">
                  Located in Oklahoma City's vibrant Downtown Arts District, surrounded by galleries, 
                  theaters, and local attractions.
                </p>
                
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Phone className="w-4 h-4" />
                    <span>(405) 555-DOINGOK</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16 bg-white rounded-3xl p-8 md:p-12 shadow-xl"
        >
          <h3 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Questions? We're Here to Help!
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Need directions, have accessibility questions, or want to plan a group visit? 
            Our friendly team is ready to assist.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="btn-primary text-lg px-8 py-4 flex items-center justify-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-5 h-5" />
              <span>Call Us</span>
            </motion.button>
            <motion.button
              className="btn-outline text-lg px-8 py-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Location
