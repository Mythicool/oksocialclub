'use client'

import { motion } from 'framer-motion'
import { ChefHat, Flame, Award, Utensils } from 'lucide-react'

const FoodVendors = () => {
  const vendors = [
    {
      name: "Sooner BBQ Co.",
      specialty: "Authentic Oklahoma BBQ",
      description: "Slow-smoked meats with our signature Oklahoma dry rub",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
      featured: true
    },
    {
      name: "Prairie Tacos",
      specialty: "Tex-Mex Fusion",
      description: "Oklahoma-style tacos with a southwestern twist",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1181&q=80",
      featured: false
    },
    {
      name: "Tornado Burgers",
      specialty: "Gourmet Burgers",
      description: "Hand-formed patties with locally sourced ingredients",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1199&q=80",
      featured: false
    },
    {
      name: "Red Dirt Pizza",
      specialty: "Wood-Fired Pizza",
      description: "Artisan pizzas with Oklahoma wheat crust",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      featured: true
    },
    {
      name: "Cowboy Sweets",
      specialty: "Desserts & Treats",
      description: "Homemade desserts with a western flair",
      image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1128&q=80",
      featured: false
    },
    {
      name: "Thunder Brewing",
      specialty: "Craft Beverages",
      description: "Local craft beers and signature cocktails",
      image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      featured: false
    }
  ]

  const highlights = [
    {
      icon: ChefHat,
      title: "Local Chefs",
      description: "Featuring Oklahoma's most talented culinary artists"
    },
    {
      icon: Flame,
      title: "Fresh Daily",
      description: "All ingredients sourced fresh from local farms"
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "Our vendors have won numerous regional awards"
    },
    {
      icon: Utensils,
      title: "Diverse Menu",
      description: "Something delicious for every taste and dietary need"
    }
  ]

  return (
    <section id="food" className="section-padding bg-gray-50 overflow-hidden">
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
            Food & <span className="text-gradient">Vendors</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover Oklahoma's finest culinary talents all under one roof. From traditional BBQ to innovative fusion, 
            our carefully selected vendors represent the best of local cuisine.
          </p>
        </motion.div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-oklahoma-red to-sunset-orange rounded-lg flex items-center justify-center mx-auto mb-4">
                <highlight.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-display text-lg font-bold text-gray-900 mb-2">{highlight.title}</h4>
              <p className="text-gray-600 text-sm">{highlight.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Vendors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vendors.map((vendor, index) => (
            <motion.div
              key={vendor.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group ${
                vendor.featured ? 'lg:col-span-2 lg:row-span-1' : ''
              }`}
            >
              {/* Featured Badge */}
              {vendor.featured && (
                <div className="absolute top-4 left-4 z-10 bg-oklahoma-red text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Featured
                </div>
              )}

              {/* Image */}
              <div className={`relative overflow-hidden ${vendor.featured ? 'h-64' : 'h-48'}`}>
                <img
                  src={vendor.image}
                  alt={vendor.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display text-xl font-bold text-gray-900">{vendor.name}</h3>
                  <span className="text-oklahoma-red font-semibold text-sm">{vendor.specialty}</span>
                </div>
                <p className="text-gray-600 leading-relaxed">{vendor.description}</p>
                
                <motion.button
                  className="mt-4 text-oklahoma-red font-semibold hover:text-sunset-orange transition-colors duration-300 flex items-center space-x-1"
                  whileHover={{ x: 5 }}
                >
                  <span>Learn More</span>
                  <span>→</span>
                </motion.button>
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
          className="text-center mt-16 bg-white rounded-3xl p-8 md:p-12 shadow-xl"
        >
          <h3 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Taste Oklahoma?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join us for an unforgettable culinary journey through the flavors that make Oklahoma special.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="btn-primary text-lg px-8 py-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Reserve Your Table
            </motion.button>
            <motion.button
              className="btn-outline text-lg px-8 py-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Full Menu
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FoodVendors
