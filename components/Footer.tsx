"use client"

import Link from "next/link"
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ExternalLink
} from "lucide-react"

export default function Footer() {
  console.log("Footer component rendered")

  const services = [
    "Integrated Facility Management",
    "Security Services",
    "Smart Public Toilets (LooCafe)",
    "Soft Services & Housekeeping",
    "Hard Services and MEP",
    "Technology Solutions"
  ]

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "ESG Policy", href: "/esg" },
    { name: "Quality Policy", href: "/quality" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms & Conditions", href: "/terms" }
  ]

  const certifications = [
    "ISO 9001:2015",
    "ISO 14001:2015", 
    "ISO 45001:2018",
    "IAF Certified",
    "DPIIT Recognized"
  ]

  return (
    <footer className="bg-ixora-gray-dark text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-ixora-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">IX</span>
              </div>
              <div className="text-xl font-bold">Ixora Group</div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              India's largest integrated facility management company, 
              delivering global standards with Indian innovation at heart.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-ixora-green flex-shrink-0" />
                <span className="text-sm text-gray-300">
                  Mumbai, India - Nationwide Operations
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-ixora-green flex-shrink-0" />
                <span className="text-sm text-gray-300">+91 1800-123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-ixora-green flex-shrink-0" />
                <span className="text-sm text-gray-300">info@ixoragroup.com</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    href={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-300 hover:text-ixora-green transition-colors text-sm flex items-center group"
                  >
                    <span>{service}</span>
                    <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-ixora-green transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Certifications</h3>
            <ul className="space-y-2 mb-8">
              {certifications.map((cert, index) => (
                <li key={index} className="text-sm text-gray-300 flex items-center">
                  <div className="w-1.5 h-1.5 bg-ixora-green rounded-full mr-2"></div>
                  {cert}
                </li>
              ))}
            </ul>

            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <Link href="#" className="p-2 bg-gray-700 rounded-lg hover:bg-ixora-blue transition-colors">
                  <Facebook className="w-4 h-4" />
                </Link>
                <Link href="#" className="p-2 bg-gray-700 rounded-lg hover:bg-ixora-blue transition-colors">
                  <Twitter className="w-4 h-4" />
                </Link>
                <Link href="#" className="p-2 bg-gray-700 rounded-lg hover:bg-ixora-blue transition-colors">
                  <Linkedin className="w-4 h-4" />
                </Link>
                <Link href="#" className="p-2 bg-gray-700 rounded-lg hover:bg-ixora-blue transition-colors">
                  <Instagram className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2024 Ixora Group. All rights reserved. | Indian from the heart but global in standards.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Powered by Technology & Innovation</span>
              <div className="flex items-center space-x-1">
                <span>ESG Compliant</span>
                <div className="w-2 h-2 bg-ixora-green rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}