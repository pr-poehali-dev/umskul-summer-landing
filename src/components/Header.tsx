import { Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-purple-600">Umschool</div>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-gray-600">
              <Phone size={16} />
              <span className="text-sm">+7 (495) 123-45-67</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Mail size={16} />
              <span className="text-sm">hello@umschool.net</span>
            </div>
            <Button className="bg-purple-600 hover:bg-purple-700">
              Записаться
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
