"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  Menu, 
  Phone, 
  Mail, 
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram
} from "lucide-react"

export default function Header() {
  console.log("Header component rendered")

  const navigationItems = [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services", 
      submenu: [
        "Integrated Facility Management",
        "Security Services", 
        "Smart Public Toilets (LooCafe)",
        "Soft Services & Housekeeping",
        "Hard Services and MEP"
      ]
    },
    { name: "Technology", href: "/technology" },
    { name: "ESG", href: "/esg" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" }
  ]

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-ixora-blue text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+91 1800-123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>info@ixoragroup.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Facebook className="w-4 h-4 hover:text-ixora-green cursor-pointer" />
            <Twitter className="w-4 h-4 hover:text-ixora-green cursor-pointer" />
            <Linkedin className="w-4 h-4 hover:text-ixora-green cursor-pointer" />
            <Instagram className="w-4 h-4 hover:text-ixora-green cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-ixora-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">IX</span>
              </div>
              <div className="text-xl font-bold text-ixora-gray-dark">
                Ixora Group
              </div>
            </Link>
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:flex space-x-8">
            {navigationItems.map((item, index) => (
              <div key={index} className="relative group">
                <Link 
                  href={item.href}
                  className="text-ixora-gray-dark hover:text-ixora-blue transition-colors py-2 px-1"
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-2">
                      {item.submenu.map((subitem, subindex) => (
                        <Link
                          key={subindex}
                          href={`/services/${subitem.toLowerCase().replace(/\s+/g, '-')}`}
                          className="block px-4 py-2 text-sm text-ixora-gray hover:bg-ixora-gray-light hover:text-ixora-blue"
                        >
                          {subitem}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm">
              <Menu className="w-5 h-5" />
            </Button>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button className="bg-ixora-green hover:bg-ixora-green/90 text-white">
              Get Quote
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}