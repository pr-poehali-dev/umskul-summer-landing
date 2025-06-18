import { Button } from "@/components/ui/button";
import { ArrowRight, Clock } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-r from-orange-500 to-orange-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center mb-4">
          <Clock className="w-6 h-6 text-orange-200 mr-2" />
          <span className="text-orange-200 font-medium">
            Ограниченное предложение
          </span>
        </div>

        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
          Запишитесь сейчас и получите скидку 30%
        </h2>

        <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
          До конца месяца действует специальная цена на все курсы. Количество
          мест ограничено!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-white text-orange-500 hover:bg-gray-100 text-lg px-8 py-3"
          >
            Записаться со скидкой
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="text-white border-white hover:bg-white hover:text-orange-500 text-lg px-8 py-3"
          >
            Задать вопрос
          </Button>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="text-white">
            <div className="text-2xl font-bold">9,900₽</div>
            <div className="text-orange-200 line-through">14,200₽</div>
            <div className="text-sm text-orange-200">за полный курс</div>
          </div>
          <div className="text-white">
            <div className="text-2xl font-bold">Осталось</div>
            <div className="text-orange-200">12 мест</div>
            <div className="text-sm text-orange-200">в этом потоке</div>
          </div>
          <div className="text-white">
            <div className="text-2xl font-bold">Старт</div>
            <div className="text-orange-200">1 июля</div>
            <div className="text-sm text-orange-200">ближайший поток</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
