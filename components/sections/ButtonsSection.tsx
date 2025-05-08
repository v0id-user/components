
import { Button } from "@/components/ui/button";

const ButtonsSection = () => {
  return (
    <section className="py-8">
      <h2 className="section-title">الأزرار</h2>
      
      <div className="card-body">
        <h3 className="text-lg font-semibold mb-4">أنماط الأزرار</h3>
        <div className="flex flex-wrap gap-4 mb-6">
          <Button>زر أساسي</Button>
          <Button variant="outline">زر ثانوي</Button>
          <Button variant="destructive">زر تحذير</Button>
          <Button variant="ghost">زر شبحي</Button>
          <Button variant="link">زر رابط</Button>
        </div>
        
        <h3 className="text-lg font-semibold mb-4 mt-8">أحجام الأزرار</h3>
        <div className="flex flex-wrap gap-4 items-center">
          <Button size="sm">زر صغير</Button>
          <Button>زر متوسط</Button>
          <Button size="lg">زر كبير</Button>
        </div>
        
        <div className="code-block mt-6">
{`<Button>زر أساسي</Button>
<Button variant="outline">زر ثانوي</Button>
<Button variant="destructive">زر تحذير</Button>
<Button variant="ghost">زر شبحي</Button>
<Button variant="link">زر رابط</Button>

<Button size="sm">زر صغير</Button>
<Button size="default">زر متوسط</Button>
<Button size="lg">زر كبير</Button>`}
        </div>
      </div>
    </section>
  );
};

export default ButtonsSection;
