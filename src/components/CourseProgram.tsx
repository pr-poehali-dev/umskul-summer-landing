import { CheckCircle } from "lucide-react";

const programSteps = [
  {
    week: "Неделя 1-2",
    title: "Основы и знакомство",
    topics: [
      "Введение в выбранное направление",
      "Основные инструменты",
      "Первый проект",
    ],
  },
  {
    week: "Неделя 3-4",
    title: "Практические навыки",
    topics: ["Углубленное изучение", "Работа с проектами", "Командная работа"],
  },
  {
    week: "Неделя 5-6",
    title: "Продвинутый уровень",
    topics: ["Сложные задачи", "Собственные проекты", "Презентация работ"],
  },
  {
    week: "Неделя 7-8",
    title: "Финальный проект",
    topics: [
      "Создание итогового проекта",
      "Защита проекта",
      "Получение сертификата",
    ],
  },
];

const CourseProgram = () => {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Программа обучения
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            8 недель интенсивного обучения с практическими заданиями и личными
            проектами
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {programSteps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-8 h-8 bg-purple-600 text-white rounded-full text-sm font-semibold mr-3">
                  {index + 1}
                </div>
                <span className="text-sm text-purple-600 font-medium">
                  {step.week}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {step.title}
              </h3>

              <ul className="space-y-2">
                {step.topics.map((topic, topicIndex) => (
                  <li
                    key={topicIndex}
                    className="flex items-center text-gray-600"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseProgram;
