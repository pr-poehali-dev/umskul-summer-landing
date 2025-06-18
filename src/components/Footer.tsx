import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold text-purple-400 mb-4">
              Umschool
            </div>
            <p className="text-gray-400 mb-4">
              Онлайн-школа программирования и дизайна для детей и подростков
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Курсы</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Программирование</li>
              <li>Веб-дизайн</li>
              <li>Создание игр</li>
              <li>3D-моделирование</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Компания</h3>
            <ul className="space-y-2 text-gray-400">
              <li>О нас</li>
              <li>Преподаватели</li>
              <li>Отзывы</li>
              <li>Блог</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Контакты</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center">
                <Phone size={16} className="mr-2" />
                <span>+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="mr-2" />
                <span>hello@umschool.net</span>
              </div>
              <div className="flex items-center">
                <MapPin size={16} className="mr-2" />
                <span>Москва, ул. Примерная, 123</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Umschool. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
