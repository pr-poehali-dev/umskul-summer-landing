import {
  Zap,
  GraduationCap,
  Target,
  BookOpen,
  Users,
  Trophy,
} from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Мощный старт",
    description: "Заложи базу знаний летом, чтобы в учебном году было легче",
  },
  {
    icon: GraduationCap,
    title: "Опытные преподаватели",
    description: "Получай знания от лучших экспертов ЕГЭ/ОГЭ",
  },
  {
    icon: Target,
    title: "Эффективная программа",
    description: "Интенсивная подготовка по всем темам экзамена",
  },
  {
    icon: BookOpen,
    title: "Практика и разбор ошибок",
    description: "Решай много заданий и учись на своих ошибках",
  },
  {
    icon: Users,
    title: "Поддержка и мотивация",
    description:
      "Будь в команде единомышленников и получай поддержку от кураторов",
  },
  {
    icon: Trophy,
    title: "Результат",
    description: "Начни готовиться заранее и повысь свои шансы на высокий балл",
  },
];

const Benefits = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Почему выбирают нас?
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
                className="text-center p-6 rounded-xl bg-orange-50 hover:bg-orange-100 transition-colors"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500 text-white rounded-full mb-4">
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
