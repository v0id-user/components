import { Input } from "@/components/ui/input";
import { SectionLayout } from "@/components/ui/section-layout";

const InputsSection = () => {
  const inputExamples = (
    <div className="flex flex-col gap-4 max-w-xs">
      <Input placeholder="حقل نصي بسيط" />
      <Input placeholder="البريد الإلكتروني" type="email" />
      <Input placeholder="كلمة المرور" type="password" />
      <Input placeholder="رقم الهاتف" type="tel" />
      <Input placeholder="قيمة رقمية" type="number" />
    </div>
  );

  return (
    <SectionLayout
      title="حقول الإدخال"
      subtitle="أنواع حقول الإدخال"
      description="حقول الإدخال المختلفة تتيح للمستخدم إدخال البيانات بأشكال متنوعة مثل النصوص والأرقام والبريد الإلكتروني وكلمات المرور."
      codeExample={`<Input placeholder="حقل نصي بسيط" />
<Input placeholder="البريد الإلكتروني" type="email" />
<Input placeholder="كلمة المرور" type="password" />
<Input placeholder="رقم الهاتف" type="tel" />
<Input placeholder="قيمة رقمية" type="number" />`}
    >
      {inputExamples}
    </SectionLayout>
  );
};

export default InputsSection;
