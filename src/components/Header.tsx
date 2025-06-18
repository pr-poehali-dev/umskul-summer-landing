import { Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-orange-500">
              Умскул ЕГЭ/ОГЭ
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-gray-600">
              <Phone size={16} />
              <span className="text-sm">+7 (495) 800-30-40</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Mail size={16} />
              <span className="text-sm">ege@umschool.ru</span>
            </div>
            <Button className="bg-orange-500 hover:bg-orange-600">
              Записаться на курс
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
