import Link from "next/link";

const IntroductionSection = () => {
  return (
    <section className="py-8">
      <h2 className="section-title">مقدمة</h2>
      <div className="card-body">
        <p className="mb-4">
          حياك الله في مكتبة مكونات React الخاصة فيني.
          هنا أجمع المكونات اللي أطورها من وقت لآخر، خصوصًا لما أحتاج شيء مش متوفر في المكتبات المعروفة. أحيانًا يكون فيه احتياج لمكوّن معين، وما ألقاه جاهز أو ما يعجبني اللي موجود، فأسويه بنفسي وأستخدمه في مشاريعي المختلفة.
        </p>
        <p className="mb-4">
          هذا الموقع هو بمثابة نقطة انطلاق لي شخصيًا، وأتمنى يكون مفيد لأي شخص ثاني يلقى فيه شيء يساعده.
          قاعد أستخدم shadcn/ui registry كوسيلة سهلة لنشر المكونات، بحيث أقدر أرجع لها أو أستخدمها مباشرة بأي مشروع.
        </p>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
          <h3 className="font-medium text-yellow-800 mb-2">🔸 ملاحظة مهمة</h3>
          <p className="text-yellow-700 text-sm">
            المكونات هنا مبنية لمشاريعي الخاصة (وأحيانًا بمساعدة AI 😅)، فممكن تواجه بعض المشاكل أو تحتاج تعديل بسيط عشان تناسبك.
            افتراضيًا تدعم اللغة العربية وتشتغل باتجاه RTL.
            إذا كنت تستخدم اللغة الإنجليزية أو تحتاج تنسيق مختلف (LTR مثلًا)، أو واجهت أي مشكلة، افتح <Link href="https://github.com/v0id-user/components" target="_blank" className="underline">Issue على GitHub</Link> وبحاول أساعدك قد ما أقدر.
          </p>
        </div>
        <Link href="https://www.v0id.me" target="_blank" className="underline">
          موقعي الشخصي
        </Link>
      </div>
    </section>
  );
};

export default IntroductionSection;
