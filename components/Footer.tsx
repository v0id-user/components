
const Footer = () => {
  return (
    <footer className="py-12 bg-sand-light border-t border-border mt-12">
      <div className="container-rtl">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">عربي واجهة</h3>
            <p className="text-muted-foreground">مكتبة مكونات سهلة الاستخدام<br />مصممة خصيصاً للواجهات العربية</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-medium mb-4">الموارد</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">التوثيق</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">المكونات</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">الأمثلة</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">المجتمع</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">GitHub</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Discord</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Twitter</a></li>
              </ul>
            </div>
            
            <div className="col-span-2 md:col-span-1">
              <h4 className="font-medium mb-4">القانوني</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">الخصوصية</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">الشروط والأحكام</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">الترخيص</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} عربي واجهة. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
