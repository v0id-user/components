
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const UsageExamplesSection = () => {
  return (
    <section className="section">
      <div className="container-rtl">
        <h2 className="section-title">أمثلة الاستخدام</h2>
        
        <Tabs defaultValue="buttons" dir="rtl" className="w-full">
          <TabsList className="mb-6 flex justify-start overflow-x-auto pb-2">
            <TabsTrigger value="buttons">الأزرار</TabsTrigger>
            <TabsTrigger value="cards">البطاقات</TabsTrigger>
            <TabsTrigger value="forms">النماذج</TabsTrigger>
            <TabsTrigger value="tables">الجداول</TabsTrigger>
          </TabsList>
          
          <TabsContent value="buttons">
            <Card>
              <CardHeader>
                <CardTitle>مكون الأزرار</CardTitle>
                <CardDescription>أنماط مختلفة للأزرار تدعم اللغة العربية بشكل كامل</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-4">
                  <Button>زر أساسي</Button>
                  <Button variant="secondary">زر ثانوي</Button>
                  <Button variant="outline">زر محيط</Button>
                  <Button variant="destructive">زر تحذيري</Button>
                  <Button variant="ghost">زر شبحي</Button>
                  <Button variant="link">زر رابط</Button>
                </div>
                
                <pre className="code-block mt-6">
                  <code dir="ltr">{`import { Button } from "arabesque-ui/button";

export default function ButtonExample() {
  return (
    <>
      <Button>زر أساسي</Button>
      <Button variant="secondary">زر ثانوي</Button>
      <Button variant="outline">زر محيط</Button>
      <Button variant="destructive">زر تحذيري</Button>
      <Button variant="ghost">زر شبحي</Button>
      <Button variant="link">زر رابط</Button>
    </>
  );
}`}</code>
                </pre>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="cards">
            <Card>
              <CardHeader>
                <CardTitle>مكون البطاقات</CardTitle>
                <CardDescription>بطاقات متعددة الاستخدامات مع دعم كامل للغة العربية</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>عنوان البطاقة</CardTitle>
                      <CardDescription>وصف البطاقة هنا</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>هذا محتوى البطاقة الذي يحتوي على نص عربي.</p>
                    </CardContent>
                    <CardFooter>
                      <Button>إجراء</Button>
                    </CardFooter>
                  </Card>
                  
                  <Card className="bg-sand-light">
                    <CardHeader>
                      <CardTitle>بطاقة مميزة</CardTitle>
                      <CardDescription>بطاقة بتصميم مختلف</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>نص توضيحي آخر باللغة العربية لعرض المحتوى.</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline">إجراء ثانوي</Button>
                    </CardFooter>
                  </Card>
                </div>
                
                <pre className="code-block mt-6">
                  <code dir="ltr">{`import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "arabesque-ui/card";
import { Button } from "arabesque-ui/button";

export default function CardExample() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>عنوان البطاقة</CardTitle>
        <CardDescription>وصف البطاقة هنا</CardDescription>
      </CardHeader>
      <CardContent>
        <p>هذا محتوى البطاقة الذي يحتوي على نص عربي.</p>
      </CardContent>
      <CardFooter>
        <Button>إجراء</Button>
      </CardFooter>
    </Card>
  );
}`}</code>
                </pre>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="forms">
            <Card>
              <CardHeader>
                <CardTitle>مكونات النماذج</CardTitle>
                <CardDescription>عناصر النموذج المختلفة مع دعم RTL</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">قريباً سيتم إضافة أمثلة للنماذج هنا...</p>
                <pre className="code-block">
                  <code dir="ltr">{`// Form component examples coming soon...`}</code>
                </pre>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="tables">
            <Card>
              <CardHeader>
                <CardTitle>مكونات الجداول</CardTitle>
                <CardDescription>جداول بيانات تدعم اللغة العربية</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">قريباً سيتم إضافة أمثلة للجداول هنا...</p>
                <pre className="code-block">
                  <code dir="ltr">{`// Table component examples coming soon...`}</code>
                </pre>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default UsageExamplesSection;
