
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const InstallationSection = () => {
  return (
    <section className="section bg-sand-light">
      <div className="container-rtl">
        <h2 className="section-title text-right">طريقة التثبيت</h2>
        
        <div className="card-body">
          <Tabs defaultValue="npm" dir="rtl" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="npm">NPM</TabsTrigger>
              <TabsTrigger value="yarn">Yarn</TabsTrigger>
              <TabsTrigger value="pnpm">PNPM</TabsTrigger>
            </TabsList>
            
            <TabsContent value="npm" className="text-left">
              <pre className="code-block">
                <code dir="ltr">npm install arabesque-ui</code>
              </pre>
            </TabsContent>
            
            <TabsContent value="yarn" className="text-left">
              <pre className="code-block">
                <code dir="ltr">yarn add arabesque-ui</code>
              </pre>
            </TabsContent>
            
            <TabsContent value="pnpm" className="text-left">
              <pre className="code-block">
                <code dir="ltr">pnpm add arabesque-ui</code>
              </pre>
            </TabsContent>
          </Tabs>
          
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">إعداد الخطوط العربية</h3>
            <p className="text-muted-foreground mb-4">
              يمكنك استخدام خطوط Noto Sans Arabic من Google Fonts للحصول على أفضل تجربة مستخدم.
            </p>
            <pre className="code-block">
              <code dir="ltr">{`@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@300;400;500;700&display=swap');

// Add to your CSS
html {
  direction: rtl;
  font-family: 'Noto Sans Arabic', sans-serif;
}`}</code>
            </pre>
          </div>
          
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">تكوين RTL</h3>
            <p className="text-muted-foreground mb-4">
              تم تحسين جميع المكونات للعمل بشكل صحيح مع واجهات RTL. قم بإضافة الإعداد التالي:
            </p>
            <pre className="code-block">
              <code dir="ltr">{`// In your tailwind.config.js or tailwind.config.ts
module.exports = {
  theme: {
    extend: {
      // Add your arabesque theme settings
    }
  },
  // Important for RTL support
  plugins: [require('arabesque-ui/plugin')]
}`}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstallationSection;
