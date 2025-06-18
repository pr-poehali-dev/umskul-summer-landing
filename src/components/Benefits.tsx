import { Code, Palette, Gamepad2, Users, Clock, Trophy } from "lucide-react";

const benefits = [
  {
    icon: Code,
    title: "Программирование",
    description: "Python, JavaScript, создание игр и веб-сайтов",
  },
  {
    icon: Palette,
    title: "Дизайн",
    description: "Графический дизайн, UI/UX, 3D-моделирование",
  },
  {
    icon: Gamepad2,
    title: "Геймдизайн",
    description: "Создание игр в Unity и Roblox Studio",
  },
  {
    icon: Users,
    title: "Малые группы",
    description: "До 8 человек в группе для лучшего усвоения",
  },
  {
    icon: Clock,
    title: "Гибкий график",
    description: "Занятия в удобное время, записи всех уроков",
  },
  {
    icon: Trophy,
    title: "Сертификат",
    description: "Официальный сертификат по завершении курса",
  },
];

const Benefits = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Почему выбирают нас
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Современные методики обучения и опытные преподаватели помогут вашему
            ребенку освоить IT-профессии
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-purple-50 hover:bg-purple-100 transition-colors"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-600 text-white rounded-full mb-4">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
