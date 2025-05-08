
import { useState } from "react";
import { 
  Sidebar as ShadcnSidebar, 
  SidebarContent, 
  SidebarMenu, 
  SidebarMenuItem, 
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  SidebarSeparator
} from "@/components/ui/sidebar";
import { ChevronDown, ChevronUp } from "lucide-react";

type Section = "introduction" | "installation" | "usage" | "components" | "buttons" | "inputs" | "tabs";

interface SidebarProps {
  activeSection: Section;
  onSectionChange: (section: Section) => void;
}

const Sidebar = ({ activeSection, onSectionChange }: SidebarProps) => {
  const [expandedItems, setExpandedItems] = useState<string[]>(["components"]);

  const toggleExpand = (id: string) => {
    setExpandedItems(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const mainMenuItems: { id: Section; title: string; hasChildren?: boolean; children?: { id: Section; title: string }[] }[] = [
    { id: "introduction", title: "مقدمة" },
    { id: "installation", title: "التثبيت" },
    { id: "usage", title: "الاستخدام" },
    { 
      id: "components", 
      title: "المكونات", 
      hasChildren: true,
      children: [
        { id: "buttons", title: "الأزرار" },
        { id: "inputs", title: "حقول الإدخال" },
        { id: "tabs", title: "التبويبات" }
      ] 
    },
  ];

  return (
    <ShadcnSidebar side="right" className="border-l">
      <SidebarContent className="pt-6">
        <div className="px-4 mb-6">
          <h2 className="text-lg font-semibold text-primary">مكتبة عربي</h2>
          <p className="text-xs text-muted-foreground">مكونات واجهة المستخدم للتطبيقات العربية</p>
        </div>
        <SidebarSeparator className="mb-4" />
        
        <SidebarMenu>
          {mainMenuItems.map((item, index) => (
            <SidebarMenuItem key={item.id} className={index > 0 ? "mt-1" : ""}>
              {item.hasChildren ? (
                <>
                  <SidebarMenuButton 
                    onClick={() => toggleExpand(item.id)}
                    isActive={activeSection === item.id || (item.children && item.children.some(child => child.id === activeSection))}
                    className="group transition-all duration-200 hover:bg-accent/50"
                  >
                    <span>{item.title}</span>
                    <span className="mr-auto">
                      {expandedItems.includes(item.id) ? 
                        <ChevronUp className="h-4 w-4 transition-transform duration-200" /> : 
                        <ChevronDown className="h-4 w-4 transition-transform duration-200" />
                      }
                    </span>
                  </SidebarMenuButton>
                  
                  {expandedItems.includes(item.id) && item.children && (
                    <SidebarMenuSub className="py-1 mr-2 border-r-2 border-primary/20">
                      {item.children.map((child) => (
                        <SidebarMenuSubItem key={child.id} className="relative cursor-pointer before:absolute before:right-[-8px] before:top-1/2 before:h-0.5 before:w-2 before:bg-primary/20">
                          <SidebarMenuSubButton
                            isActive={activeSection === child.id}
                            onClick={() => onSectionChange(child.id)}
                            className="transition-all duration-200 hover:bg-accent/50"
                          >
                            <span>{child.title}</span>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  )}
                </>
              ) : (
                <SidebarMenuButton 
                  isActive={activeSection === item.id}
                  onClick={() => onSectionChange(item.id)}
                  className="transition-all duration-200 hover:bg-accent/50"
                >
                  <span>{item.title}</span>
                </SidebarMenuButton>
              )}
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
        
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <SidebarSeparator className="mb-4" />
          <p className="text-xs text-center text-muted-foreground">إصدار 1.0.0</p>
        </div>
      </SidebarContent>
    </ShadcnSidebar>
  );
};

export default Sidebar;
