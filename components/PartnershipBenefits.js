function PartnershipBenefits() {
  try {
    const benefits = [
      {
        icon: 'globe',
        title: 'Международная сеть',
        description: 'Партнеры из Европы, Азии и Америки'
      },
      {
        icon: 'award',
        title: 'Сертификация',
        description: 'Все партнеры имеют международные сертификаты'
      },
      {
        icon: 'truck',
        title: 'Логистика',
        description: 'Прямые поставки от производителей'
      },
      {
        icon: 'shield-check',
        title: 'Гарантии',
        description: 'Официальная гарантия производителей'
      }
    ];

    return (
      <section className="section-padding bg-[var(--bg-light)]" data-name="partnership-benefits" data-file="components/PartnershipBenefits.js">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Преимущества партнерства</h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Что дает нам сотрудничество с ведущими производителями
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="card text-center">
                <div className="w-16 h-16 rounded-xl bg-[var(--secondary-color)] flex items-center justify-center mx-auto mb-4">
                  <div className={`icon-${benefit.icon} text-2xl text-white`}></div>
                </div>
                <h3 className="text-lg font-semibold mb-3">{benefit.title}</h3>
                <p className="text-[var(--text-secondary)]">{benefit.description}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-gradient-to-r from-[var(--primary-color)] to-[var(--accent-color)] rounded-2xl p-8 text-white">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                  Хотите стать нашим партнером?
                </h3>
                <p className="text-blue-100 mb-6">
                  Мы всегда открыты для сотрудничества с надежными производителями 
                  и поставщиками промышленного оборудования
                </p>
                <button className="btn-secondary">
                  <div className="flex items-center">
                    <div className="icon-handshake text-lg mr-2"></div>
                    Обсудить партнерство
                  </div>
                </button>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[var(--secondary-color)]">200+</div>
                  <div className="text-blue-100">Активных партнеров</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[var(--secondary-color)]">50</div>
                  <div className="text-blue-100">Стран</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[var(--secondary-color)]">15</div>
                  <div className="text-blue-100">Лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[var(--secondary-color)]">1000+</div>
                  <div className="text-blue-100">Проектов</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('PartnershipBenefits component error:', error);
    return null;
  }
}