"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Brain, 
  Database, 
  Globe, 
  Smartphone, 
  Wifi, 
  BarChart3,
  Leaf,
  Users,
  Lock
} from "lucide-react"

const solutions = [
  {
    icon: Brain,
    title: "AI Based Facial Recognition Attendance System",
    description: "Revolutionary facial recognition technology for seamless employee attendance tracking with real-time monitoring and analytics.",
    features: ["Real-time face detection", "Attendance analytics", "Mobile integration"],
    category: "AI & Analytics",
    color: "bg-blue-500",
    image: "https://ik.imagekit.io/vxkxgjigx/Mobile%20App%20Presentation%20(400%20x%20300%20px)%20(Presentation%20(43))%20(2).png?updatedAt=1748943275578"
  },
  {
    icon: BarChart3,
    title: "AI Based Regular Analysis and Report Generation System",
    description: "Intelligent analytics platform that automatically generates comprehensive facility performance reports and actionable insights.",
    features: ["Automated reports", "Performance analytics", "Predictive insights"],
    category: "Analytics",
    color: "bg-green-500",
    image: "https://ik.imagekit.io/vxkxgjigx/Mobile%20App%20Presentation%20(400%20x%20300%20px)%20(Presentation%20(43))%20(1).png?updatedAt=1748942147023"
  },
  {
    icon: Globe,
    title: "All Sites are Geofenced and Geo Tagged",
    description: "Advanced GPS technology ensures precise location tracking and automated site management for enhanced security and efficiency.",
    features: ["GPS tracking", "Site boundaries", "Automated alerts"],
    category: "Location Tech",
    color: "bg-purple-500",
    image: "https://ik.imagekit.io/vxkxgjigx/Mobile%20App%20Presentation%20(400%20x%20300%20px)%20(Presentation%20(43))%20(4).png?updatedAt=1748943955406"
  },
  {
    icon: Smartphone,
    title: "Smart Feedback Collection App and Dashboard",
    description: "Comprehensive mobile solution for real-time feedback collection with integrated dashboard for instant analysis and response.",
    features: ["Mobile feedback app", "Real-time dashboard", "Analytics integration"],
    category: "Mobile Tech",
    color: "bg-emerald-500",
    image: "https://ik.imagekit.io/vxkxgjigx/Mobile%20App%20Presentation%20(400%20x%20300%20px)%20(Presentation%20(43))%20(3).png?updatedAt=1748943581556"
  },
  {
    icon: Brain,
    title: "IxoraGPT",
    description: "Our custom AI assistant powered by advanced language models to optimize facility operations and provide intelligent recommendations.",
    features: ["AI assistance", "Custom training", "Facility optimization"],
    category: "AI Assistant",
    color: "bg-orange-500",
    image: "https://ik.imagekit.io/vxkxgjigx/Mobile%20App%20Presentation%20(400%20x%20300%20px)%20(Presentation%20(43))%20(8).png?updatedAt=1748945115806",
    comingSoon: false
  },
  {
    icon: Wifi,
    title: "IoT Sensor Networks for Vehic les",
    description: "Comprehensive IoT deployment for monitoring mobile vehicles and their occupancy, fuel usage, environmental conditions and reports in real-time.",
    features: ["Smart sensors", "Vehicle downtime detection", "Remote immobilization and driver management"],
    category: "IoT",
    color: "bg-red-500",
    image: "https://ik.imagekit.io/vxkxgjigx/Mobile%20App%20Presentation%20(400%20x%20300%20px)%20(Presentation%20(43)).jpg?updatedAt=1749277283207"
  }
]

export default function TechnologySolutions() {
  console.log("TechnologySolutions component rendered")

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
          <h2 className="text-4xl lg:text-5xl font-bold text-ixora-gray-dark mb-6">
            Technology-Driven Solutions
          </h2>
          <p className="text-xl text-ixora-gray max-w-3xl mx-auto">
            Our comprehensive suite of technology solutions transforms facility management 
            through innovation, efficiency, and sustainability.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg overflow-hidden">
                <div className="space-y-4">
                  {/* Image */}
                  <div className="relative h-48 -mx-6 -mt-6 mb-4 overflow-hidden">
                    <img 
                      src={solution.image} 
                      alt={solution.title}
                      className="w-full h-full object-cover"
                    />
                    {solution.comingSoon && (
                      <div className="absolute top-4 right-4 bg-ixora-green text-white px-3 py-1 rounded-full text-xs font-medium">
                        Coming Soon...
                      </div>
                    )}
                    <div className="absolute bottom-4 left-4">
                      <div className={`p-3 rounded-xl ${solution.color} bg-opacity-10 backdrop-blur-sm`}>
                        <solution.icon className={`w-6 h-6 ${solution.color.replace('bg-', 'text-')}`} />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="text-xs">
                      {solution.category}
                    </Badge>
                  </div>

                  <h3 className="text-xl font-semibold text-ixora-gray-dark">
                    {solution.title}
                  </h3>

                  <p className="text-ixora-gray leading-relaxed">
                    {solution.description}
                  </p>

                  <div className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-ixora-blue rounded-full"></div>
                        <span className="text-sm text-ixora-gray">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* <Button 
                    variant={solution.comingSoon ? "secondary" : "ghost"}
                    className={`w-full mt-4 ${solution.comingSoon ? 'cursor-not-allowed opacity-60' : 'text-ixora-blue hover:bg-ixora-blue hover:text-white'}`}
                    disabled={solution.comingSoon}
                  >
                    {solution.comingSoon ? 'Coming Soon' : 'Learn More'}
                  </Button> */}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-tech-gradient rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-ixora-gray-dark mb-4">
              Ready to Transform Your Facility?
            </h3>
            <p className="text-ixora-gray mb-8 max-w-2xl mx-auto">
              Connect with our technology experts to design a custom solution 
              that meets your specific operational needs.
            </p>
            <Button size="lg" className="bg-ixora-blue hover:bg-ixora-blue-dark text-white px-8 py-4">
              Schedule Consultation
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}