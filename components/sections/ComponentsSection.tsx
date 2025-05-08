
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ComponentsSection = () => {
  return (
    <section className="py-8">
      <h2 className="section-title">المكونات</h2>
      
      <div className="card-body">
        <p className="mb-6">
          مكتبة عربي توفر مجموعة متنوعة من المكونات المصممة خصيصًا للتطبيقات العربية،
          مع دعم كامل للغة العربية وتصميم RTL.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          <Card className="bg-card hover:bg-card/80 transition-colors">
            <CardHeader className="pb-2">
              <CardTitle>الأزرار</CardTitle>
              <CardDescription>مكونات للتفاعل مع المستخدم</CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex gap-2 flex-wrap">
                <Button size="sm">زر</Button>
                <Button size="sm" variant="outline">زر</Button>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-card hover:bg-card/80 transition-colors">
            <CardHeader className="pb-2">
              <CardTitle>حقول الإدخال</CardTitle>
              <CardDescription>عناصر لإدخال البيانات</CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <Input placeholder="أدخل نصًا هنا" className="max-w-[200px]" />
            </CardContent>
          </Card>
          
          <Card className="bg-card hover:bg-card/80 transition-colors">
            <CardHeader className="pb-2">
              <CardTitle>التبويبات</CardTitle>
              <CardDescription>عرض المحتوى في مساحات منفصلة</CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <Tabs defaultValue="example" className="w-full">
                <TabsList>
                  <TabsTrigger value="example" className="text-xs">مثال</TabsTrigger>
                  <TabsTrigger value="preview" className="text-xs">معاينة</TabsTrigger>
                </TabsList>
              </Tabs>
            </CardContent>
          </Card>
        </div>
        
        <p className="mt-6">
          تصفح المكونات المختلفة من القائمة الجانبية لمعرفة المزيد عن كل مكون وكيفية استخدامه.
        </p>
      </div>
    </section>
  );
};

export default ComponentsSection;
