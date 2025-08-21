// src/components/sections/Services.tsx

import { Globe, FileText, Gauge, Smartphone, Monitor, Palette } from 'lucide-react';
import { Card, CardContent } from '../ui/Card';

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Custom, Dynamic and e-commerce web development solutions",
    hoverColor: "hover:bg-blue-50 hover:border-blue-200",
    iconColor: "text-blue-500",
  },
  {
    icon: FileText,
    title: "App Development",
    description: "Data migration services, Backup and Disaster Recovery Solutions.",
    hoverColor: "hover:bg-orange-50 hover:border-orange-200",
    iconColor: "text-orange-500",
  },
  {
    icon: Gauge,
    title: "DevOps",
    description: "Skills that we offer are Cloud skills, Automation skills, Security skills, Testing skills and much more.",
    hoverColor: "hover:bg-red-50 hover:border-red-200",
    iconColor: "text-red-500",
  },
  {
    icon: Smartphone,
    title: "Mobile Application",
    description: "Your one stop solution for both Android & iPhone Apps.",
    hoverColor: "hover:bg-yellow-50 hover:border-yellow-200",
    iconColor: "text-yellow-600",
  },
  {
    icon: Monitor,
    title: "Digital Transformation",
    description: "Optimize & Commercialize their business by using Digital Technologies",
    hoverColor: "hover:bg-purple-50 hover:border-purple-200",
    iconColor: "text-purple-500",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Easy-to-use interfaces and high performance enterprise-grade code quality.",
    hoverColor: "hover:bg-teal-50 hover:border-teal-200",
    iconColor: "text-teal-500",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 px-4 bg-zinc-950 ">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-yellow-500 mb-4">SERVICES</h2>
          <p className="text-xl text-neutral-50">We&apos;re Here To Help</p>
        </div>
        
        {/* Updated grid layout to be 3x2 on larger screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className={`transition-all duration-300 border-2  hover:shadow-lg-${service.hoverColor} h-full`}
              >
                <CardContent className="p-6 text-center flex flex-col items-center">
                  <div className="w-16 h-16 mb-4 bg-gray-100 rounded-full flex items-center justify-center ">
                    <Icon className={`w-8 h-8 ${service.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-neutral-50">
                    {service.title}
                  </h3>
                  <p className="text-neutral-50">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
