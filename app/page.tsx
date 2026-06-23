import React from 'react';

export default function Home() {
  const services = [
    { title: "Заміна склопакета", time: "20 хвилин", icon: "🪟" },
    { title: "Регулювання вікон", time: "15-20 хвилин", icon: "🔧" },
    { title: "Заміна ущільнювача", time: "60 хвилин", icon: "💨" },
    { title: "Ремонт та заміна ручок", time: "10 хвилин", icon: "🚪" },
    { title: "Утеплення та герметизація", time: "від 30 хвилин", icon: "🌡️" },
    { title: "Відновлення геометрії", time: "від 30 хвилин", icon: "📐" },
    { title: "Заміна фурнітури", time: "від 15 хвилин", icon: "⚙️" },
    { title: "Встановлення аксесуарів", time: "від 10 хвилин", icon: "➕" },
  ];

  const benefits = [
    { title: "Оплата", desc: "Готівкою, банківською карткою або на розрахунковий рахунок." },
    { title: "Ремонт за 1 день", desc: "Дрібний ремонт проводимо у день візиту майстра на об'єкт." },
    { title: "Гнучкий графік", desc: "Працюємо та виїжджаємо у зручний для вас час, включаючи вихідні." },
    { title: "Все чесно та відкрито", desc: "Офіційний договір на послуги - всі роботи і суми зафіксовані." },
    { title: "Зробимо під ключ", desc: "Самі закупимо та привеземо необхідні матеріали та комплектуючі." },
    { title: "Гарантія якості", desc: "Надаємо офіційну гарантію на виконані роботи строком до 15 років." },
  ];

  return (
    <main className="flex-grow font-sans">
      {/* Шапка */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap justify-between items-center gap-4">
          <div className="text-2xl sm:text-3xl font-black text-blue-600 tracking-tight">
            ViknoMayster
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex flex-col text-right text-sm">
              <span className="font-semibold text-gray-900">+380 00 000 00 00</span>
              {/* <span className="font-semibold text-gray-900">+380 77 033 27 70</span> */}
              <span className="text-gray-500 text-xs">БЕЗ ВИХІДНИХ 09:00-21:00</span>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-medium transition duration-200 shadow-md">
              Замовити дзвінок
            </button>
          </div>
        </div>
      </header>

      {/* Главный экран (Hero) */}
      <section className="bg-gradient-to-br from-blue-800 to-blue-600 text-white py-16 sm:py-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-500/30 text-blue-100 text-sm font-semibold mb-6 border border-blue-400/30">
            Вже більше 8 років дбаємо про Ваш затишок
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Ремонт та встановлення вікон <br className="hidden lg:block" /> у Києві та передмісті
          </h1>
          <p className="text-lg sm:text-xl mb-10 max-w-3xl mx-auto text-blue-100 font-light">
            Ремонт віконних конструкцій у зручний для вас час з гарантією. Безкоштовний виїзд майстра додому в день звернення протягом 1 години.
          </p>
          
          <div className="flex justify-center mb-16">
            <button className="bg-yellow-500 text-gray-900 font-bold py-4 px-10 rounded-full shadow-lg hover:bg-yellow-400 transition duration-300 text-lg">
              Викликати майстра
            </button>
          </div>

          {/* Преимущества из Hero */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
              <h4 className="font-bold text-lg mb-2 text-yellow-400">Будь-який графік</h4>
              <p className="text-sm text-blue-50">Підлаштуємося під вас - виїжджаємо у вечірній час та вихідний день.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
              <h4 className="font-bold text-lg mb-2 text-yellow-400">Величезний досвід</h4>
              <p className="text-sm text-blue-50">Вирішимо будь-яку проблему - відремонтували 11 217 вікон за 8 років роботи.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
              <h4 className="font-bold text-lg mb-2 text-yellow-400">Якісні комплектуючі</h4>
              <p className="text-sm text-blue-50">Використовуємо перевірену фурнітуру та ущільнювачі від надійних виробників.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
              <h4 className="font-bold text-lg mb-2 text-yellow-400">Оперативність</h4>
              <p className="text-sm text-blue-50">Ремонтуємо 90% віконних поломок безпосередньо у день звернення.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Послуги (Services) */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Наші послуги</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Протягом 15 хвилин після заявки ми зв'яжемося з вами для уточнення деталей і відправимо майстра.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 border border-gray-100 flex flex-col h-full">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-800 flex-grow">{service.title}</h3>
                <div className="text-sm text-gray-500 mb-4 bg-gray-50 inline-block px-3 py-1 rounded-md border border-gray-200">
                  ⏳ Час робіт: {service.time}
                </div>
                <button className="w-full bg-blue-50 hover:bg-blue-600 hover:text-white text-blue-600 font-semibold py-2.5 rounded-lg transition duration-200">
                  Замовити
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Умови роботи (Benefits) */}
      <section className="py-20 px-4 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-16 text-gray-900">
            Зручні та вигідні умови
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-xl">
                  ✓
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Блок захвата контактов (CTA) */}
      <section className="py-20 px-4 bg-blue-50">
        <div className="max-w-4xl mx-auto text-center bg-white rounded-3xl p-8 sm:p-14 shadow-lg border border-blue-100">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Не знайшли свою проблему?</h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Залишіть ваші контакти, ми передзвонимо протягом 10 хвилин, безкоштовно проконсультуємо та допоможемо знайти рішення.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center">
            <input 
              type="tel" 
              placeholder="Ваш телефон (+380...)" 
              className="px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent flex-grow max-w-md text-lg bg-gray-50"
            />
            <button 
              type="button" 
              className="bg-blue-600 text-white font-bold py-4 px-8 rounded-xl shadow-md hover:bg-blue-700 transition duration-300 text-lg whitespace-nowrap"
            >
              Отримати консультацію
            </button>
          </form>
          <p className="mt-4 text-xs text-gray-400">
            Натискаючи кнопку, ви даєте згоду на обробку персональних даних.
          </p>
        </div>
      </section>
      
      {/* Подвал */}
      <footer className="bg-gray-900 text-gray-400 py-10 text-center">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-4">
          <div className="text-2xl font-black text-white tracking-tight opacity-50 mb-4">ViknoMayster</div>
          <p className="text-sm">&copy; {new Date().getFullYear()} Усі права захищено. Київ, Україна.</p>
          <div className="text-sm mt-2 flex gap-4 justify-center">
            <span>+380 63 868 49 88</span>
            <span>+380 77 033 27 70</span>
          </div>
        </div>
      </footer>
    </main>
  );
}