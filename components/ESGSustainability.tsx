"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Leaf, 
  Recycle, 
  Sun, 
  Droplets,
  TrendingDown,
  BarChart3,
  Shield,
  Globe
} from "lucide-react"

const esgInitiatives = [
  {
    icon: Sun,
    title: "Energy Optimization",
    metric: "40% Reduction",
    description: "AI-driven energy management systems optimize consumption patterns and identify efficiency opportunities.",
    impact: "Reduced carbon footprint by 2,400 tons CO₂ annually"
  },
  {
    icon: Droplets,
    title: "Water Conservation",
    metric: "30% Savings",
    description: "Smart water monitoring and leak detection systems prevent waste and optimize usage.",
    impact: "Conserved 150 million liters of water last year"
  },
  {
    icon: Recycle,
    title: "Waste Management",
    metric: "85% Recycled",
    description: "Comprehensive waste sorting and recycling programs with real-time tracking and reporting.",
    impact: "Diverted 5,000 tons of waste from landfills"
  },
  {
    icon: TrendingDown,
    title: "Carbon Tracking",
    metric: "Real-time",
    description: "Continuous monitoring of carbon emissions with detailed analytics and reduction strategies.",
    impact: "Achieved carbon neutrality for 200+ facilities"
  }
]

const certifications = [
  { name: "ISO 14001", description: "Environmental Management" },
  { name: "LEED Certified", description: "Green Building Standard" },
  { name: "Energy Star", description: "Energy Efficiency" },
  { name: "BREEAM", description: "Sustainability Assessment" }
]

export default function ESGSustainability() {
  console.log("ESGSustainability component rendered")

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Leaf className="w-8 h-8 text-ixora-green" />
            <Badge className="bg-ixora-green-light text-ixora-green">ESG Leadership</Badge>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-ixora-gray-dark mb-6">
            Sustainability &amp; ESG Excellence
          </h2>
          <p className="text-xl text-ixora-gray max-w-3xl mx-auto">
            Leading the industry in environmental stewardship through innovative 
            technology solutions that create measurable positive impact.
          </p>
        </motion.div>

        {/* ESG Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {esgInitiatives.map((initiative, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full text-center hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                <div className="space-y-4">
                  <div className="mx-auto w-16 h-16 bg-ixora-green-light rounded-2xl flex items-center justify-center">
                    <initiative.icon className="w-8 h-8 text-ixora-green" />
                  </div>
                  
                  <div>
                    <div className="text-2xl font-bold text-ixora-green mb-1">
                      {initiative.metric}
                    </div>
                    <h3 className="text-lg font-semibold text-ixora-gray-dark mb-2">
                      {initiative.title}
                    </h3>
                  </div>

                  <p className="text-sm text-ixora-gray leading-relaxed">
                    {initiative.description}
                  </p>

                  <div className="pt-3 border-t border-gray-100">
                    <p className="text-xs text-ixora-gray font-medium">
                      {initiative.impact}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Detailed ESG Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="p-8 bg-gradient-to-r from-ixora-green-light to-white border-0 shadow-lg">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-ixora-gray-dark mb-4">
                  Real-Time ESG Dashboard
                </h3>
                <p className="text-ixora-gray mb-6 leading-relaxed">
                  Monitor your sustainability metrics in real-time with comprehensive 
                  analytics, automated reporting, and actionable insights for continuous improvement.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <BarChart3 className="w-5 h-5 text-ixora-green" />
                    <span className="text-ixora-gray-dark">Live energy consumption tracking</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-ixora-green" />
                    <span className="text-ixora-gray-dark">Automated compliance reporting</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="w-5 h-5 text-ixora-green" />
                    <span className="text-ixora-gray-dark">Carbon footprint analysis</span>
                  </div>
                </div>
                <Button className="bg-ixora-green hover:bg-ixora-green/90 text-white">
                  View ESG Dashboard Demo
                </Button>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-ixora-gray">Energy Efficiency</span>
                    <span className="text-xl font-bold text-ixora-green">92%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-ixora-green h-2 rounded-full" style={{width: '92%'}}></div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-ixora-gray">Waste Reduction</span>
                    <span className="text-xl font-bold text-ixora-green">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-ixora-green h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-ixora-gray">Water Conservation</span>
                    <span className="text-xl font-bold text-ixora-green">78%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-ixora-green h-2 rounded-full" style={{width: '78%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-ixora-gray-dark mb-8">
            Recognized Environmental Leadership
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-ixora-gray-light rounded-full mx-auto mb-3 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-ixora-green" />
                </div>
                <h4 className="font-semibold text-ixora-gray-dark mb-1">{cert.name}</h4>
                <p className="text-sm text-ixora-gray">{cert.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}