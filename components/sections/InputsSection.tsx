
import { Input } from "@/components/ui/input";

const InputsSection = () => {
  return (
    <section className="py-8">
      <h2 className="section-title">حقول الإدخال</h2>
      
      <div className="card-body">
        <h3 className="text-lg font-semibold mb-4">أنواع حقول الإدخال</h3>
        <div className="flex flex-col gap-4 max-w-xs">
          <Input placeholder="حقل نصي بسيط" />
          <Input placeholder="البريد الإلكتروني" type="email" />
          <Input placeholder="كلمة المرور" type="password" />
          <Input placeholder="رقم الهاتف" type="tel" />
          <Input placeholder="قيمة رقمية" type="number" />
        </div>
        
        <div className="code-block mt-6">
{`<Input placeholder="حقل نصي بسيط" />
<Input placeholder="البريد الإلكتروني" type="email" />
<Input placeholder="كلمة المرور" type="password" />
<Input placeholder="رقم الهاتف" type="tel" />
<Input placeholder="قيمة رقمية" type="number" />`}
        </div>
      </div>
    </section>
  );
};

export default InputsSection;
