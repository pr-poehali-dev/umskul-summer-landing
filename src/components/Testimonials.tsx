import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Анна Петрова",
    role: "Мама ученика",
    text: "Мой сын Максим прошел курс по программированию. Теперь он создает собственные игры и мечтает стать разработчиком!",
    rating: 5,
  },
  {
    name: "Дмитрий Сидоров",
    role: "Отец ученицы",
    text: "Дочка изучала дизайн в Umschool. Преподаватели объясняют сложные вещи простым языком. Результат превзошел ожидания.",
    rating: 5,
  },
  {
    name: "Елена Козлова",
    role: "Мама двоих детей",
    text: "Оба ребенка учились здесь разным направлениям. Отличная организация, интересные проекты, дети довольны!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Отзывы родителей
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Более 2000 довольных семей уже выбрали Umschool для обучения своих
            детей
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              <p className="text-gray-700 mb-4 italic">
                Спасибо Умскул за прекрасных преподавателей! Дочка в восторге от
                объяснений, начала понимать сложные темы. Летняя подготовка
                прошла продуктивно и с пользой!
              </p>

              <div>
                <div className="font-semibold text-gray-900">
                  {testimonial.name}
                </div>
                <div className="text-sm text-gray-600">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
