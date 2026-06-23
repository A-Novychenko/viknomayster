import Logo from '@/components/ui/Logo';

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
    <main className="grow font-sans bg-gray-50">
      {/* Шапка */}
      <header className="bg-white shadow-xs sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center">
            <Logo light={true} />
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex flex-col text-right text-sm">
              <span className="font-semibold text-gray-900">+380 00 000 00 00</span>
              <span className="text-gray-400 text-xs font-medium tracking-wide uppercase mt-0.5">БЕЗ ВИХІДНИХ 09:00-21:00</span>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-semibold transition duration-200 shadow-sm hover:shadow-md cursor-pointer">
              Замовити дзвінок
            </button>
          </div>
        </div>
      </header>

   
      <section className="relative bg-blue-950 text-white py-20 sm:py-28 px-4 overflow-hidden">
        
        <div 
          className="absolute inset-0 bg-[url('/hero.png')] bg-cover bg-position-[75%_center] sm:bg-right bg-no-repeat opacity-50 pointer-events-none"
        />
        
        <div 
          className="absolute inset-0 bg-linear-to-br from-blue-950/85 via-blue-900/70 to-blue-950/40 mix-blend-multiply pointer-events-none"
        />

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <span className="inline-block py-1 px-4 rounded-full bg-blue-500/20 text-blue-300 text-xs sm:text-sm font-bold mb-6 border border-blue-400/20 backdrop-blur-xs uppercase tracking-wider">
            Вже більше 8 років дбаємо про Ваш затишок
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight tracking-tight drop-shadow-md">
            Ремонт та встановлення вікон <br className="hidden lg:block" /> у Києві та передмісті
          </h1>
          <p className="text-lg sm:text-xl mb-12 max-w-3xl mx-auto text-blue-100/90 font-light leading-relaxed drop-shadow-xs">
            Ремонт віконних конструкцій у зручний для вас час з гарантією. Безкоштовний виїзд майстра додому в день звернення протягом 1 години.
          </p>
          
          <div className="flex justify-center mb-20">
            <button className="bg-yellow-500 text-gray-900 font-extrabold py-4 px-12 rounded-full shadow-lg hover:bg-yellow-400 hover:scale-105 transition duration-300 text-lg cursor-pointer tracking-wide uppercase">
              Викликати майстра
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {[
              { title: "Будь-який графік", desc: "Підлаштуємося під вас - виїжджаємо у вечірній час та вихідний день." },
              { title: "Величезний досвід", desc: "Вирішимо будь-яку проблему - відремонтували 11 217 вікон за 8 років роботи." },
              { title: "Якісні комплектуючі", desc: "Використовуємо перевірену фурнітуру та ущільнювачі від надійних виробників." },
              { title: "Оперативність", desc: "Ремонтуємо 90% віконних поломок безпосередньо у день звернення." }
            ].map((benefit, i) => (
              <div key={i} className="bg-blue-950/50 p-6 rounded-2xl backdrop-blur-md border border-white/10 shadow-xs hover:border-white/20 transition duration-300">
                <h4 className="font-bold text-lg mb-2 text-yellow-400 tracking-tight">{benefit.title}</h4>
                <p className="text-sm text-blue-100/80 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* Послуги */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-950 tracking-tight mb-4">Наші послуги</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg font-light">
              Протягом 15 хвилин після заявки ми зв&apos;яжемося з вами для уточнення деталей і відправимо майстра.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-xs hover:shadow-xl hover:-translate-y-1 transition duration-300 border border-gray-100 flex flex-col h-full group">
                <div className="text-4xl mb-5 group-hover:scale-110 transition duration-200 origin-left">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 tracking-tight grow">{service.title}</h3>
                <div className="text-xs font-semibold text-blue-700 mb-5 bg-blue-50/70 inline-block px-3 py-1.5 rounded-lg border border-blue-100/50 w-max">
                  ⏳ Час робіт: {service.time}
                </div>
                <button className="w-full bg-gray-50 group-hover:bg-blue-600 group-hover:text-white text-blue-600 font-bold py-3 rounded-xl transition duration-200 cursor-pointer text-sm tracking-wide">
                  Замовити послугу
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Умови роботи */}
      <section className="py-24 px-4 bg-white border-t border-gray-100 shadow-inner">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-16 text-gray-950 tracking-tight">
            Зручні та вигідні умови
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-5 items-start">
                <div className="shrink-0 w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center font-black text-xl shadow-sm shadow-blue-500/20">
                  ✓
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-950 tracking-tight">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed font-light">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Блок захоплення контактів (CTA) */}
      <section className="py-24 px-4 bg-blue-50/50">
        <div className="max-w-4xl mx-auto text-center bg-white rounded-3xl p-8 sm:p-16 shadow-xl border border-blue-100/60 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none" />
          <h2 className="text-3xl sm:text-4xl font-black mb-4 text-gray-950 tracking-tight">Не знайшли свою проблему?</h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto font-light">
            Залишіть ваші контакти, ми передзвонимо протягом 10 хвилин, безкоштовно проконсультуємо та допоможемо знайти рішення.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <input 
              type="tel" 
              placeholder="Ваш телефон (+380...)" 
              className="px-6 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent grow max-w-md text-lg bg-gray-50 font-medium text-gray-950"
            />
            <button 
              type="button" 
              className="bg-blue-600 text-white font-extrabold py-4 px-10 rounded-xl shadow-md hover:bg-blue-700 hover:shadow-lg transition duration-300 text-base whitespace-nowrap cursor-pointer uppercase tracking-wider"
            >
              Отримати консультацію
            </button>
          </form>
          <p className="mt-5 text-xs text-gray-400 font-medium">
            Натискаючи кнопку, ви даєте згоду на обробку персональних даних.
          </p>
        </div>
      </section>
      
      {/* Підвал (Гармоничный глубокий темно-синий цвет) */}
      <footer className="bg-blue-950 text-blue-200/70 py-12 text-center border-t border-blue-900/40">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-5">
          <div>
            <Logo light={false} />
          </div>
          <p className="text-sm font-light tracking-wide mt-2">&copy; {new Date().getFullYear()} Усі права захищено. Київ, Україна.</p>
          <div className="text-sm font-semibold text-white/90 bg-blue-900/40 px-4 py-2 rounded-xl border border-blue-800/30 tracking-wide">
            <span>+380 00 000 00 00</span>
          </div>
        </div>
      </footer>
    </main>
  );
}