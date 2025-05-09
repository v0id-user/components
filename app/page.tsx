"use client";

import { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import GrainOverlay from "@/components/GrainOverlay";
import Sidebar from "@/components/Sidebar";
import IntroductionSection from "@/components/sections/IntroductionSection";
import InstallationSection from "@/components/InstallationSection";
import UsageExamplesSection from "@/components/UsageExamplesSection";
import ComponentsSection from "@/components/sections/ComponentsSection";
import ButtonsSection from "@/components/sections/ButtonsSection";
import InputsSection from "@/components/sections/InputsSection";
import TabsSection from "@/components/sections/TabsSection";
import FilterSection from "@/components/sections/FilterSection";

type Section = "introduction" | "installation" | "usage" | "components" | "buttons" | "inputs" | "tabs" | "filter";

const Index = () => {
  const [activeSection, setActiveSection] = useState<Section>("introduction");

  const renderContent = () => {
    switch (activeSection) {
      case "introduction":
        return <IntroductionSection />;
      case "installation":
        return <InstallationSection />;
      case "usage":
        return <UsageExamplesSection />;
      case "components":
        return <ComponentsSection />;
      case "buttons":
        return <ButtonsSection />;
      case "inputs":
        return <InputsSection />;
      case "tabs":
        return <TabsSection />;
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
