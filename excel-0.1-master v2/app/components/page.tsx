"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ComponentModal } from "@/components/ComponentModal";
import { useState, Suspense } from "react";

// Define the component categories and their items
const componentsByCategory = {
  boiler: [
    {
      id: 1,
      title: "Steam Drum",
      description: "High-quality steam drum for efficient steam separation.",
      image: "/component1.jpg",
      fullDescription:
        "Advanced steam drum design with internal separators for optimal steam-water separation.",
      specifications: [
        "High Pressure Rating",
        "ASME Certified",
        "Efficient Separation",
        "Durable Construction",
      ],
      applications: [
        "Power Plants",
        "Industrial Boilers",
        "Process Steam Generation",
      ],
    },
    // Add more boiler components...
  ],
  pressure: [
    {
      id: 1,
      title: "Pressure Vessel",
      description: "Industrial pressure vessels for various applications.",
      image: "/component2.jpg",
      fullDescription:
        "Custom-designed pressure vessels meeting international safety standards.",
      specifications: [
        "ASME Code Compliant",
        "High Pressure Rating",
        "Custom Sizes Available",
      ],
      applications: ["Chemical Processing", "Oil & Gas", "Power Generation"],
    },
    // Add more pressure parts...
  ],
  heat: [
    {
      id: 1,
      title: "Shell and Tube Heat Exchanger",
      description: "Efficient heat transfer solution for industrial processes.",
      image: "/component3.jpg",
      fullDescription:
        "Advanced heat exchanger design for optimal thermal performance.",
      specifications: [
        "High Thermal Efficiency",
        "Customizable Design",
        "Multiple Pass Options",
      ],
      applications: ["Chemical Plants", "Refineries", "HVAC Systems"],
    },
    // Add more heat exchangers...
  ],
  custom: [
    {
      id: 1,
      title: "Custom Industrial Solutions",
      description: "Tailored solutions for specific industrial needs.",
      image: "/component4.jpg",
      fullDescription:
        "Bespoke industrial components designed to meet unique requirements.",
      specifications: [
        "Custom Design",
        "Specialized Materials",
        "Application Specific",
      ],
      applications: ["Special Projects", "Unique Industrial Processes"],
    },
    // Add more custom solutions...
  ],
};

const categoryTitles = {
  boiler: "Boiler Components",
  pressure: "Pressure Parts",
  heat: "Heat Exchangers",
  custom: "Custom Solutions",
};

function ComponentsContent() {
  const searchParams = useSearchParams();
  const [selectedComponent, setSelectedComponent] = useState<any>(null);
  const category = searchParams.get("category") || "boiler";

  const components =
    componentsByCategory[category as keyof typeof componentsByCategory] || [];

  return (
    <main className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">
          {categoryTitles[category as keyof typeof categoryTitles]}
        </h1>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(categoryTitles).map(([key, title]) => (
            <Button
              key={key}
              variant={category === key ? "default" : "outline"}
              className="min-w-[150px]"
              onClick={() => {
                window.history.pushState({}, "", `/components?category=${key}`);
                window.dispatchEvent(new PopStateEvent("popstate"));
              }}
            >
              {title}
            </Button>
          ))}
        </div>

        {/* Components Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {components.map((component) => (
            <div
              key={component.id}
              className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105"
            >
              <div className="relative h-64">
                <Image
                  src={component.image}
                  alt={component.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">
                  {component.title}
                </h2>
                <p className="text-gray-600 mb-4">{component.description}</p>
                <Button
                  variant="outline"
                  onClick={() => setSelectedComponent(component)}
                  className="hover:bg-green-500 hover:text-white transition-colors"
                >
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>

        {selectedComponent && (
          <ComponentModal
            isOpen={!!selectedComponent}
            onClose={() => setSelectedComponent(null)}
            component={selectedComponent}
          />
        )}
      </div>
    </main>
  );
}

export default function ComponentsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ComponentsContent />
    </Suspense>
  );
}
