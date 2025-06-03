"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Cpu, Shield, Zap } from "lucide-react"

export default function TechnologyHero() {
  console.log("TechnologyHero component rendered")

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-ixora-gray-light to-white flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-ixora-blue rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-ixora-green rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-ixora-blue-light rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Floating Icons */}
          <div className="flex justify-center space-x-8 mb-8">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg"
            >
              <Cpu className="w-8 h-8 text-ixora-blue" />
            </motion.div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
              className="p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg"
            >
              <Shield className="w-8 h-8 text-ixora-green" />
            </motion.div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
              className="p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg"
            >
              <Zap className="w-8 h-8 text-ixora-blue-light" />
            </motion.div>
          </div>

          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-3 h-3 bg-ixora-blue rounded-full"></div>
            <span className="text-ixora-blue font-medium tracking-wider uppercase text-sm">
              EMBRACING INDUSTRY 4.0
            </span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold text-ixora-gray-dark leading-tight mb-8">
            Ixora's Tech{" "}
            <span className="bg-ixora-gradient bg-clip-text text-transparent">
              Adoptions
            </span>
          </h1>

          <p className="text-xl lg:text-2xl text-ixora-gray max-w-4xl mx-auto leading-relaxed">
            As A.I takes over the world we are optimizing our everyday operations 
            by harnessing the power of A.I for smarter facility management solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <Button size="lg" className="bg-ixora-blue hover:bg-ixora-blue-dark text-white px-8 py-4 text-lg">
              Explore Solutions
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            {/* <Button variant="outline" size="lg" className="border-ixora-blue text-ixora-blue hover:bg-ixora-blue hover:text-white px-8 py-4 text-lg">
              View Case Studies
            </Button> */}
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-ixora-blue">500+</div>
              <div className="text-ixora-gray text-lg">Smart Facilities</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-ixora-green">40%</div>
              <div className="text-ixora-gray text-lg">Energy Savings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-ixora-blue-light">24/7</div>
              <div className="text-ixora-gray text-lg">Monitoring</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}