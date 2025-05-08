
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container-rtl">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight animate-fade-in">
            واجهة مستخدم عربية حديثة
          </h1>
          <p className="text-xl text-muted-foreground mb-8 animate-fade-in" style={{animationDelay: "0.1s"}}>
            مكتبة مكونات سهلة الاستخدام مصممة خصيصاً للواجهات العربية وتدعم RTL بشكل كامل
          </p>
          <div className="flex justify-center gap-4">
            <Button className="bg-primary hover:bg-primary/90 text-lg px-6 py-6 h-auto animate-fade-in" style={{animationDelay: "0.2s"}}>
              ابدأ الاستخدام
            </Button>
            <Button variant="outline" className="text-lg px-6 py-6 h-auto animate-fade-in" style={{animationDelay: "0.3s"}}>
              استعراض المكونات
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
