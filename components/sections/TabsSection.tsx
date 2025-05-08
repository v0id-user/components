
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TabsSection = () => {
  return (
    <section className="py-8">
      <h2 className="section-title">التبويبات</h2>
      
      <div className="card-body">
        <h3 className="text-lg font-semibold mb-4">مثال بسيط للتبويبات</h3>
        
        <Tabs defaultValue="tab1" className="w-full max-w-xl">
          <TabsList className="mb-4">
            <TabsTrigger value="tab1">التبويب الأول</TabsTrigger>
            <TabsTrigger value="tab2">التبويب الثاني</TabsTrigger>
            <TabsTrigger value="tab3">التبويب الثالث</TabsTrigger>
          </TabsList>
          
          <TabsContent value="tab1">
            <div className="p-4 bg-muted/50 rounded-md">
              <h4 className="font-medium mb-2">محتوى التبويب الأول</h4>
              <p>هذا هو المحتوى المعروض في التبويب الأول، يمكنك تخصيصه كما تشاء.</p>
            </div>
          </TabsContent>
          
          <TabsContent value="tab2">
            <div className="p-4 bg-muted/50 rounded-md">
              <h4 className="font-medium mb-2">محتوى التبويب الثاني</h4>
              <p>هذا هو المحتوى المعروض في التبويب الثاني، يمكنك تخصيصه كما تشاء.</p>
            </div>
          </TabsContent>
          
          <TabsContent value="tab3">
            <div className="p-4 bg-muted/50 rounded-md">
              <h4 className="font-medium mb-2">محتوى التبويب الثالث</h4>
              <p>هذا هو المحتوى المعروض في التبويب الثالث، يمكنك تخصيصه كما تشاء.</p>
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="code-block mt-6">
{`<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">التبويب الأول</TabsTrigger>
    <TabsTrigger value="tab2">التبويب الثاني</TabsTrigger>
    <TabsTrigger value="tab3">التبويب الثالث</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">محتوى التبويب الأول</TabsContent>
  <TabsContent value="tab2">محتوى التبويب الثاني</TabsContent>
  <TabsContent value="tab3">محتوى التبويب الثالث</TabsContent>
</Tabs>`}
        </div>
      </div>
    </section>
  );
};

export default TabsSection;
