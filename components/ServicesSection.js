function ServicesSection() {
  try {
    const services = [
      {
        icon: 'truck',
        title: 'Поставки оборудования',
        description: 'Быстрые и надежные поставки промышленного оборудования от ведущих производителей'
      },
      {
        icon: 'wrench',
        title: 'Техническое внедрение',
        description: 'Профессиональная установка, настройка и запуск оборудования на вашем предприятии'
      },
      {
        icon: 'headphones',
        title: 'Сервисное обслуживание',
        description: 'Полный цикл технического обслуживания и ремонта промышленного оборудования'
      },
      {
        icon: 'users',
        title: 'Консультации и обучение',
        description: 'Экспертные консультации и обучение персонала работе с оборудованием'
      }
    ];

    return (
      <section className="section-padding bg-[var(--bg-light)]" data-name="services-section" data-file="components/ServicesSection.js">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Полный спектр услуг по поставкам и внедрению промышленного оборудования
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="card hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 rounded-lg bg-[var(--secondary-color)] flex items-center justify-center mb-4">
                  <div className={`icon-${service.icon} text-xl text-white`}></div>
                </div>
                <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
                <p className="text-[var(--text-secondary)]">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('ServicesSection component error:', error);
    return null;
  }
}
