'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, MapPin, Users, Ticket, Star } from 'lucide-react'

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Oklahoma BBQ Championship",
      date: "July 4th, 2024",
      time: "12:00 PM - 8:00 PM",
      location: "Main Hall",
      price: "$25",
      attendees: 150,
      maxAttendees: 200,
      description: "Celebrate Independence Day with the best BBQ in Oklahoma. Live music, competitions, and fireworks!",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
      featured: true,
      tags: ["BBQ", "Live Music", "Family Friendly"]
    },
    {
      id: 2,
      title: "Sooner Saturday Social",
      date: "July 8th, 2024",
      time: "6:00 PM - 11:00 PM",
      location: "Outdoor Patio",
      price: "$15",
      attendees: 85,
      maxAttendees: 120,
      description: "Weekly social mixer with local craft beers, live acoustic music, and networking.",
      image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      featured: false,
      tags: ["Social", "Networking", "Craft Beer"]
    },
    {
      id: 3,
      title: "Thunder Trivia Night",
      date: "July 12th, 2024",
      time: "7:00 PM - 9:30 PM",
      location: "Main Hall",
      price: "$10",
      attendees: 95,
      maxAttendees: 100,
      description: "Test your Oklahoma knowledge! Prizes, food specials, and bragging rights up for grabs.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      featured: false,
      tags: ["Trivia", "Prizes", "Oklahoma History"]
    },
    {
      id: 4,
      title: "Red Dirt Music Festival",
      date: "July 15th, 2024",
      time: "2:00 PM - 10:00 PM",
      location: "Full Venue",
      price: "$35",
      attendees: 180,
      maxAttendees: 250,
      description: "Celebrating Oklahoma's rich musical heritage with local bands and food trucks.",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      featured: true,
      tags: ["Music Festival", "Local Bands", "Food Trucks"]
    },
    {
      id: 5,
      title: "Cowboy Cooking Class",
      date: "July 20th, 2024",
      time: "10:00 AM - 2:00 PM",
      location: "Kitchen Studio",
      price: "$45",
      attendees: 12,
      maxAttendees: 16,
      description: "Learn traditional Oklahoma cooking techniques from our expert chefs.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      featured: false,
      tags: ["Cooking Class", "Hands-on", "Traditional"]
    },
    {
      id: 6,
      title: "Oklahoma Wine & Dine",
      date: "July 25th, 2024",
      time: "6:30 PM - 9:30 PM",
      location: "Private Dining",
      price: "$65",
      attendees: 28,
      maxAttendees: 40,
      description: "Premium dining experience featuring Oklahoma wines and gourmet cuisine.",
      image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      featured: false,
      tags: ["Wine Tasting", "Gourmet", "Premium"]
    }
  ]

  const getAvailabilityColor = (attendees: number, maxAttendees: number) => {
    const percentage = (attendees / maxAttendees) * 100
    if (percentage >= 90) return 'text-red-500'
    if (percentage >= 70) return 'text-yellow-500'
    return 'text-green-500'
  }

  const getAvailabilityText = (attendees: number, maxAttendees: number) => {
    const remaining = maxAttendees - attendees
    if (remaining <= 5) return `Only ${remaining} spots left!`
    if (remaining <= 20) return `${remaining} spots available`
    return `${remaining} spots available`
  }

  return (
    <section id="events" className="section-padding bg-white overflow-hidden">
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
            Upcoming <span className="text-gradient">Events</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From BBQ championships to intimate cooking classes, discover events that celebrate 
            Oklahoma's culture, cuisine, and community spirit.
          </p>
        </motion.div>

        {/* Events Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {upcomingEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group ${
                event.featured ? 'lg:col-span-2 border-2 border-oklahoma-red' : ''
              }`}
            >
              {/* Featured Badge */}
              {event.featured && (
                <div className="absolute top-4 left-4 z-10 bg-oklahoma-red text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                  <Star className="w-3 h-3 fill-current" />
                  <span>Featured Event</span>
                </div>
              )}

              <div className={`flex ${event.featured ? 'flex-col lg:flex-row' : 'flex-col'}`}>
                {/* Image */}
                <div className={`relative overflow-hidden ${
                  event.featured ? 'lg:w-1/2 h-64 lg:h-auto' : 'h-48'
                }`}>
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Price Badge */}
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full font-bold">
                    {event.price}
                  </div>
                </div>

                {/* Content */}
                <div className={`p-6 ${event.featured ? 'lg:w-1/2' : ''} flex flex-col justify-between`}>
                  <div>
                    <h3 className="font-display text-xl md:text-2xl font-bold text-gray-900 mb-3">
                      {event.title}
                    </h3>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Calendar className="w-4 h-4 text-oklahoma-red" />
                        <span className="font-medium">{event.date}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Clock className="w-4 h-4 text-oklahoma-red" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <MapPin className="w-4 h-4 text-oklahoma-red" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4 text-oklahoma-red" />
                        <span className={`font-medium ${getAvailabilityColor(event.attendees, event.maxAttendees)}`}>
                          {getAvailabilityText(event.attendees, event.maxAttendees)}
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-4">
                      {event.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {event.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    className="btn-primary w-full flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Ticket className="w-4 h-4" />
                    <span>Get Tickets</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16 bg-gradient-to-r from-oklahoma-red to-sunset-orange rounded-3xl p-8 md:p-12 text-white"
        >
          <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Don't Miss Out!
          </h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join our community and be the first to know about new events, special offers, and exclusive experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="bg-white text-oklahoma-red px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Events
            </motion.button>
            <motion.button
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-oklahoma-red transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe to Updates
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Events
