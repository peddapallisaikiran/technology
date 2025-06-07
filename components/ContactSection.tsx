"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { 
  Phone, 
  Mail, 
  MapPin, 
  Calendar,
  ArrowRight,
  Users,
  Clock,
  Globe
} from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    title: "Call Our Experts",
    value: "+91 90599 19999",
    description: "Available 24/7 for technical support"
  },
  {
    icon: Mail,
    title: "Email Us",
    value: "technology@ixoragroup.com",
    description: "Get detailed technical consultation"
  },
  {
    icon: MapPin,
    title: "Visit Our Innovation Center",
    value: "Hyderabad, India",
    description: "Experience our technology solutions live"
  },
  {
    icon: Calendar,
    title: "Schedule a Demo",
    value: "Book Online",
    description: "See our solutions in action"
  }
]

const teamMembers = [
  {
    name: "Saikiran Peddapalli",
    role: "Software Developer",
    expertise: "AI & Web Technologies"
  },
  {
    name: "Saiteja Duddula",
    role: "Software Testing",
    expertise: "Mobile app and Web testing"
  },
  {
    name: "Varun Chandra",
    role: "Product Analyst",
    expertise: "Strategy & Product Development"
  }
]

export default function ContactSection() {
  console.log("ContactSection component rendered")

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
            Connect with Our Technology Team
          </h2>
          <p className="text-xl text-ixora-gray max-w-3xl mx-auto">
            Partner with industry experts to design and implement technology solutions 
            that transform your facility management operations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 border-0 shadow-lg">
              <h3 className="text-2xl font-bold text-ixora-gray-dark mb-6">
                Get Technical Consultation
              </h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-ixora-gray-dark mb-2">
                      First Name
                    </label>
                    <Input 
                      placeholder="Enter your first name"
                      className="border-gray-200 focus:border-ixora-blue"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-ixora-gray-dark mb-2">
                      Last Name
                    </label>
                    <Input 
                      placeholder="Enter your last name"
                      className="border-gray-200 focus:border-ixora-blue"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-ixora-gray-dark mb-2">
                    Company Email
                  </label>
                  <Input 
                    type="email"
                    placeholder="your.email@company.com"
                    className="border-gray-200 focus:border-ixora-blue"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-ixora-gray-dark mb-2">
                    Company & Role
                  </label>
                  <Input 
                    placeholder="Company Name - Your Role"
                    className="border-gray-200 focus:border-ixora-blue"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-ixora-gray-dark mb-2">
                    Facility Type & Size
                  </label>
                  <Input 
                    placeholder="e.g., Corporate Office - 50,000 sq ft"
                    className="border-gray-200 focus:border-ixora-blue"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-ixora-gray-dark mb-2">
                    Technology Interest
                  </label>
                  <Textarea 
                    placeholder="Describe your technology needs or challenges..."
                    className="border-gray-200 focus:border-ixora-blue min-h-[100px]"
                  />
                </div>

                <Button className="w-full bg-ixora-blue hover:bg-ixora-blue-dark text-white py-3">
                  Schedule Technology Consultation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Methods */}
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-ixora-blue/10 rounded-xl">
                      <info.icon className="w-6 h-6 text-ixora-blue" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-ixora-gray-dark mb-1">
                        {info.title}
                      </h4>
                      <p className="text-lg font-medium text-ixora-blue mb-1">
                        {info.value}
                      </p>
                      <p className="text-sm text-ixora-gray">
                        {info.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Team Members */}
            <Card className="p-6 border-0 shadow-lg">
              <div className="flex items-center space-x-2 mb-4">
                <Users className="w-5 h-5 text-ixora-blue" />
                <h4 className="font-semibold text-ixora-gray-dark">Meet Our Technology Leaders</h4>
              </div>
              <div className="space-y-4">
                {teamMembers.map((member, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-ixora-blue/10 rounded-full flex items-center justify-center">
                      <span className="text-ixora-blue font-medium">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-ixora-gray-dark">{member.name}</p>
                      <p className="text-sm text-ixora-gray">{member.role}</p>
                      <p className="text-xs text-ixora-blue">{member.expertise}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Quick Stats */}
            <Card className="p-6 border-0 shadow-lg bg-ixora-blue text-white">
              <h4 className="font-semibold mb-4 flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                Rapid Implementation
              </h4>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold">30</div>
                  <div className="text-sm opacity-90">Days Average Setup</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-sm opacity-90">Technical Support</div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Global Presence */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="p-8 border-0 shadow-lg">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Globe className="w-6 h-6 text-ixora-blue" />
              <h3 className="text-2xl font-bold text-ixora-gray-dark">Tech-Driven Community Network</h3>
            </div>
            <p className="text-ixora-gray mb-6 max-w-2xl mx-auto">
              With technology centers across India and partnerships worldwide, 
              we deliver consistent, high-quality solutions regardless of location.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-ixora-blue">1700+</div>
                <div className="text-sm text-ixora-gray">Employess</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-ixora-blue">300+</div>
                <div className="text-sm text-ixora-gray">Deployments</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-ixora-blue">24/7</div>
                <div className="text-sm text-ixora-gray">Support</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-ixora-blue">99.5%</div>
                <div className="text-sm text-ixora-gray">Client Satisfaction</div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}