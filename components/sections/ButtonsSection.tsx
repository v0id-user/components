import { Button } from "@/components/ui/button";
import { SectionLayout } from "@/components/ui/section-layout";

const ButtonsSection = () => {
  const buttonStyles = (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-4 mb-6">
        <Button>زر أساسي</Button>
        <Button variant="outline">زر ثانوي</Button>
        <Button variant="destructive">زر تحذير</Button>
        <Button variant="ghost">زر شبحي</Button>
        <Button variant="link">زر رابط</Button>
      </div>
      
      <div className="flex flex-wrap gap-4 items-center">
        <Button size="sm">زر صغير</Button>
        <Button>زر متوسط</Button>
        <Button size="lg">زر كبير</Button>
      </div>
    </div>
  );

  return (
    <SectionLayout
      title="الأزرار"
      subtitle="أنماط الأزرار"
      description={buttonStyles}
      codeExample={`<Button>زر أساسي</Button>
<Button variant="outline">زر ثانوي</Button>
<Button variant="destructive">زر تحذير</Button>
<Button variant="ghost">زر شبحي</Button>
<Button variant="link">زر رابط</Button>

<Button size="sm">زر صغير</Button>
<Button size="default">زر متوسط</Button>
<Button size="lg">زر كبير</Button>`}
    >
      {buttonStyles}
    </SectionLayout>
  );
};

export default ButtonsSection;
