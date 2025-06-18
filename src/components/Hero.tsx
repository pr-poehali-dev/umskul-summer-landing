import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-orange-50 to-orange-100 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center items-center space-x-1 mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className="w-5 h-5 text-yellow-400 fill-current"
              />
            ))}
            <span className="ml-2 text-sm text-gray-600">
              4.9 из 5 от 15,847 учеников
            </span>
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Подготовка к ЕГЭ и ОГЭ
            <span className="block text-orange-500">Летняя школа 2025</span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Интенсивная подготовка к экзаменам с экспертами. Повысим балл на
            20-40 пунктов за лето. Гарантируем результат или вернем деньги.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-lg px-8 py-3"
            >
              Начать подготовку
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3">
              Пробный урок бесплатно
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-orange-500">87</div>
              <div className="text-gray-600">средний балл ЕГЭ</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-500">12</div>
              <div className="text-gray-600">предметов ЕГЭ/ОГЭ</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-500">94%</div>
              <div className="text-gray-600">поступили в ВУЗ мечты</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
