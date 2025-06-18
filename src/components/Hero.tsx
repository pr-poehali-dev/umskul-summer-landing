import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-purple-50 to-purple-100 py-16 lg:py-24">
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
              4.9 из 5 от 2847 учеников
            </span>
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Летняя онлайн-школа
            <span className="block text-purple-600">для детей 7-17 лет</span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Увлекательные курсы программирования, дизайна и цифровых технологий.
            Ваш ребенок проведет лето с пользой и получит востребованные навыки
            будущего.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-3"
            >
              Записаться на курс
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3">
              Посмотреть программу
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-purple-600">2847</div>
              <div className="text-gray-600">довольных учеников</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">15</div>
              <div className="text-gray-600">направлений обучения</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">98%</div>
              <div className="text-gray-600">завершают курс</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
