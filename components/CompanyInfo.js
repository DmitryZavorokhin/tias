function CompanyInfo() {
  try {
    return (
      <section className="section-padding" data-name="company-info" data-file="components/CompanyInfo.js">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Наша миссия</h2>
              <p className="text-lg text-[var(--text-secondary)] mb-6">
                Обеспечивать российские предприятия качественным промышленным 
                оборудованием и комплексными решениями для автоматизации производства, 
                способствуя развитию отечественной промышленности.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-[var(--secondary-color)] flex items-center justify-center mr-3 mt-1">
                    <div className="icon-check text-sm text-white"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Качество</h4>
                    <p className="text-[var(--text-secondary)]">Работаем только с проверенными производителями</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-[var(--secondary-color)] flex items-center justify-center mr-3 mt-1">
                    <div className="icon-check text-sm text-white"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Надежность</h4>
                    <p className="text-[var(--text-secondary)]">Гарантируем соблюдение сроков и обязательств</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-[var(--secondary-color)] flex items-center justify-center mr-3 mt-1">
                    <div className="icon-check text-sm text-white"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Экспертиза</h4>
                    <p className="text-[var(--text-secondary)]">Глубокие знания в области промышленного оборудования</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="card">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                  <div className="icon-target text-xl text-[var(--primary-color)]"></div>
                </div>
                <h3 className="font-semibold mb-2">Точность</h3>
                <p className="text-sm text-[var(--text-secondary)]">Подбираем оборудование под ваши задачи</p>
              </div>
              <div className="card">
                <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center mb-4">
                  <div className="icon-clock text-xl text-[var(--secondary-color)]"></div>
                </div>
                <h3 className="font-semibold mb-2">Скорость</h3>
                <p className="text-sm text-[var(--text-secondary)]">Быстрая обработка заявок и поставки</p>
              </div>
              <div className="card">
                <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mb-4">
                  <div className="icon-shield text-xl text-green-600"></div>
                </div>
                <h3 className="font-semibold mb-2">Гарантия</h3>
                <p className="text-sm text-[var(--text-secondary)]">Полная гарантия на все оборудование</p>
              </div>
              <div className="card">
                <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                  <div className="icon-star text-xl text-purple-600"></div>
                </div>
                <h3 className="font-semibold mb-2">Качество</h3>
                <p className="text-sm text-[var(--text-secondary)]">Только сертифицированное оборудование</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('CompanyInfo component error:', error);
    return null;
  }
}