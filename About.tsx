'use client'

import { motion } from 'framer-motion'
import { Heart, Users, MapPin, Star, Coffee, Music } from 'lucide-react'

const About = () => {
  const features = [
    {
      icon: Heart,
      title: "Community First",
      description: "Built by Oklahomans, for Oklahomans. We celebrate the spirit of community that makes our state special."
    },
    {
      icon: Coffee,
      title: "Local Flavors",
      description: "Showcasing the best of Oklahoma's culinary scene with local vendors and authentic regional cuisine."
    },
    {
      icon: Music,
      title: "Live Entertainment",
      description: "From country to blues, we feature local artists and create unforgettable musical experiences."
    },
    {
      icon: Users,
      title: "Social Connection",
      description: "More than just dining - we're creating lasting friendships and meaningful connections."
    }
  ]

  const stats = [
    { number: "500+", label: "Happy Members" },
    { number: "50+", label: "Local Vendors" },
    { number: "100+", label: "Events Hosted" },
    { number: "5★", label: "Community Rating" }
  ]

  return (
    <section id="about" className="section-padding bg-white overflow-hidden">
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
            The <span className="text-gradient">Doing OK</span> Story
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Where Oklahoma hospitality meets innovative social dining. We're not just a restaurant - 
            we're a celebration of everything that makes Oklahoma great.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <div className="flex items-center space-x-2 text-oklahoma-red">
                <Star className="w-5 h-5 fill-current" />
                <span className="font-semibold text-sm uppercase tracking-wide">Our Mission</span>
              </div>
              
              <h3 className="font-display text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                Bringing Oklahoma Together, One Meal at a Time
              </h3>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Started by a group of friends who believed Oklahoma deserved a unique social dining experience, 
                Doing OK was born from a simple idea: great food tastes even better when shared with great people.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                We've created a space where local vendors showcase their incredible talents, where neighbors become 
                friends, and where every weekend feels like a celebration of Oklahoma's rich culture and community spirit.
              </p>

              <div className="flex items-center space-x-4 pt-4">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-oklahoma-red" />
                  <span className="text-gray-700 font-medium">Proudly Oklahoma Born</span>
                </div>
                <div className="w-2 h-2 bg-prairie-gold rounded-full"></div>
                <span className="text-gray-600">Est. 2024</span>
              </div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Oklahoma Social Dining"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Badge */}
            <motion.div
              className="absolute -top-6 -right-6 bg-oklahoma-red text-white p-4 rounded-full shadow-lg"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Heart className="w-8 h-8 fill-current" />
            </motion.div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-oklahoma-red to-sunset-orange rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-display text-xl font-bold text-gray-900 mb-2">{feature.title}</h4>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-oklahoma-red to-sunset-orange rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="text-center mb-8">
            <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Making Oklahoma Proud
            </h3>
            <p className="text-xl opacity-90">
              Join the growing community that's redefining social dining in Oklahoma
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
