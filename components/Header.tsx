
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="py-6 border-b border-border bg-background">
      <div className="container-rtl flex justify-between items-center">
        <div className="font-bold text-xl text-primary">عربي واجهة</div>
        <nav className="hidden md:flex space-x-reverse space-x-6">
          <Button variant="link" className="text-foreground">الرئيسية</Button>
          <Button variant="link" className="text-foreground">المكونات</Button>
          <Button variant="link" className="text-foreground">التوثيق</Button>
          <Button variant="link" className="text-foreground">المجتمع</Button>
        </nav>
        <Button className="bg-primary hover:bg-primary/90">ابدأ الآن</Button>
      </div>
    </header>
  );
};

export default Header;
