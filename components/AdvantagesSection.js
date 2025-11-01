function AdvantagesSection() {
  try {
    const advantages = [
      {
        number: '15+',
        title: 'лет опыта',
        description: 'на рынке промышленного оборудования'
      },
      {
        number: '500+',
        title: 'проектов',
        description: 'успешно реализованных проектов'
      },
      {
        number: '200+',
        title: 'партнеров',
        description: 'надежных поставщиков по всему миру'
      },
      {
        number: '24/7',
        title: 'поддержка',
        description: 'техническая поддержка клиентов'
      }
    ];

    return (
      <section className="section-padding" data-name="advantages-section" data-file="components/AdvantagesSection.js">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Почему выбирают нас</h2>
            <p className="text-lg text-[var(--text-secondary)]">
              Преимущества работы с ПромТехСервис
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-[var(--primary-color)] mb-2">
                  {advantage.number}
                </div>
                <h3 className="text-lg font-semibold mb-2">{advantage.title}</h3>
                <p className="text-[var(--text-secondary)]">{advantage.description}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-gradient-to-r from-[var(--primary-color)] to-[var(--accent-color)] rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Готовы начать сотрудничество?</h3>
            <p className="mb-6 text-blue-100">
              Свяжитесь с нами для получения персонального предложения
            </p>
            <button className="btn-secondary">
              <div className="flex items-center justify-center">
                <div className="icon-phone text-lg mr-2"></div>
                Связаться с нами
              </div>
            </button>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('AdvantagesSection component error:', error);
    return null;
  }
}