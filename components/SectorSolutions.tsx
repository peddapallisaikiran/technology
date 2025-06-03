"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Building2, 
  GraduationCap, 
  Heart, 
  ShoppingBag,
  Factory,
  Landmark
} from "lucide-react"

const sectors = [
  {
    icon: Building2,
    title: "Corporate & Commercial",
    description: "Smart office solutions with advanced HVAC, lighting, and space optimization systems.",
    solutions: ["Smart HVAC control", "Occupancy optimization", "Energy management", "Security integration"],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=300&fit=crop"
  },
  {
    icon: Heart,
    title: "Healthcare",
    description: "Critical environment monitoring with compliance-focused solutions for patient safety.",
    solutions: ["Air quality monitoring", "Temperature control", "Compliance reporting", "Emergency systems"],
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=500&h=300&fit=crop"
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Creating optimal learning environments with sustainable and safe facility management.",
    solutions: ["Learning space optimization", "Safety systems", "Energy efficiency", "Maintenance scheduling"],
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500&h=300&fit=crop"
  },
  {
    icon: ShoppingBag,
    title: "Retail & Hospitality",
    description: "Customer experience enhancement through ambient control and operational efficiency.",
    solutions: ["Customer comfort systems", "Operational efficiency", "Asset tracking", "Predictive maintenance"],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=300&fit=crop"
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description: "Industrial-grade solutions for equipment monitoring and production optimization.",
    solutions: ["Equipment monitoring", "Production optimization", "Safety compliance", "Quality control"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop"
  },
  {
    icon: Landmark,
    title: "Government",
    description: "Secure, compliant, and efficient solutions for public sector facility management.",
    solutions: ["Security protocols", "Compliance management", "Public safety", "Cost optimization"],
    image: "https://ik.imagekit.io/vxkxgjigx/Mobile%20App%20Presentation%20(400%20x%20300%20px)%20(Presentation%20(43))%20(5).png?updatedAt=1748944198781"
  }
]

export default function SectorSolutions() {
  console.log("SectorSolutions component rendered")

  return (
    <section className="py-20 bg-ixora-gray-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-ixora-gray-dark mb-6">
            Sector-Specific Implementations
          </h2>
          <p className="text-xl text-ixora-gray max-w-3xl mx-auto">
            Tailored technology solutions designed to meet the unique challenges 
            and regulatory requirements of different industries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectors.map((sector, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg">
                {/* Image Header */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={sector.image} 
                    alt={sector.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="p-3 bg-white/90 backdrop-blur-sm rounded-xl">
                      <sector.icon className="w-6 h-6 text-ixora-blue" />
                    </div>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-ixora-gray-dark">
                    {sector.title}
                  </h3>

                  <p className="text-ixora-gray leading-relaxed">
                    {sector.description}
                  </p>

                  <div className="space-y-2">
                    <h4 className="font-medium text-ixora-gray-dark text-sm mb-3">Key Solutions:</h4>
                    {sector.solutions.map((solution, solutionIndex) => (
                      <div key={solutionIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-ixora-green rounded-full"></div>
                        <span className="text-sm text-ixora-gray">{solution}</span>
                      </div>
                    ))}
                  </div>

                  {/* <Button 
                    variant="outline" 
                    className="w-full mt-4 border-ixora-blue text-ixora-blue hover:bg-ixora-blue hover:text-white"
                  >
                    View Solutions
                  </Button> */}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Industry Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-3xl font-bold text-ixora-gray-dark text-center mb-8">
              Proven Results Across Industries
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-ixora-blue mb-2">1000+</div>
                <div className="text-ixora-gray">Facilities Managed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-ixora-green mb-2">99.9%</div>
                <div className="text-ixora-gray">Uptime Achieved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-ixora-blue-light mb-2">30%</div>
                <div className="text-ixora-gray">Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-ixora-green mb-2">6+</div>
                <div className="text-ixora-gray">Industries Served</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}