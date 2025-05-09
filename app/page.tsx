"use client";

import { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import GrainOverlay from "@/components/GrainOverlay";
import Sidebar from "@/components/Sidebar";
import IntroductionSection from "@/components/sections/IntroductionSection";
import ComponentsSection from "@/components/sections/ComponentsSection";
import FilterSection from "@/components/sections/FilterSection";

type Section = "introduction" | "installation" | "usage" | "components" | "buttons" | "inputs" | "tabs" | "filter";

const Index = () => {
  const [activeSection, setActiveSection] = useState<Section>("introduction");

  const renderContent = () => {
    switch (activeSection) {
      case "introduction":
        return <IntroductionSection />;
      case "components":
        return <ComponentsSection />;
      case "filter":
        return <FilterSection />;
      default:
        return <IntroductionSection />;
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <GrainOverlay />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar 
            activeSection={activeSection} 
            onSectionChange={setActiveSection} 
          />
          <main className="flex-1 overflow-y-auto p-6">
            <div className="container-rtl max-w-3xl">
              {renderContent()}
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;
