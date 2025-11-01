function PartnersGrid() {
  try {
    const partners = [
      {
        name: 'Siemens',
        category: 'Автоматизация и электротехника',
        description: 'Ведущий мировой поставщик систем автоматизации'
      },
      {
        name: 'ABB',
        category: 'Электротехника и робототехника',
        description: 'Инновационные решения для промышленности'
      },
      {
        name: 'Schneider Electric',
        category: 'Энергетические решения',
        description: 'Цифровая трансформация энергетики'
      },
      {
        name: 'Festo',
        category: 'Пневматика и автоматизация',
        description: 'Пневматические и электроприводные системы'
      },
      {
        name: 'Phoenix Contact',
        category: 'Промышленная связь',
        description: 'Соединительные и интерфейсные решения'
      },
      {
        name: 'Bosch Rexroth',
        category: 'Гидравлика и пневматика',
        description: 'Приводная техника и системы управления'
      }
    ];

    return (
      <section className="section-padding" data-name="partners-grid" data-file="components/PartnersGrid.js">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Наши ключевые партнеры</h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Работаем напрямую с производителями, что позволяет предлагать лучшие цены и условия
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {partners.map((partner, index) => (
              <div key={index} className="card hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[var(--primary-color)] to-[var(--accent-color)] flex items-center justify-center">
                    <div className="icon-building text-xl text-white"></div>
                  </div>
                  <span className="px-3 py-1 bg-[var(--secondary-color)] bg-opacity-10 text-[var(--secondary-color)] text-xs font-medium rounded-full">
                    Партнер
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{partner.name}</h3>
                <p className="text-[var(--primary-color)] font-medium mb-2">{partner.category}</p>
                <p className="text-[var(--text-secondary)]">{partner.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-[var(--text-secondary)] mb-6">
              И более 200 других партнеров по всему миру
            </p>
            <button className="btn-primary">
              <div className="flex items-center justify-center">
                <div className="icon-eye text-lg mr-2"></div>
                Посмотреть всех партнеров
              </div>
            </button>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('PartnersGrid component error:', error);
    return null;
  }
}