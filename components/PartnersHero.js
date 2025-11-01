function PartnersHero() {
  try {
    return (
      <section className="bg-gradient-to-br from-[var(--primary-color)] to-[var(--accent-color)] text-white section-padding" data-name="partners-hero" data-file="components/PartnersHero.js">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Наши
            <span className="text-[var(--secondary-color)]"> партнеры</span>
          </h1>
          <p className="text-xl lg:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
            Сотрудничаем с ведущими мировыми производителями промышленного оборудования 
            для обеспечения наших клиентов лучшими решениями
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-secondary">
              <div className="flex items-center justify-center">
                <div className="icon-handshake text-lg mr-2"></div>
                Стать партнером
              </div>
            </button>
            <button className="btn-primary bg-white text-[var(--primary-color)] hover:bg-gray-100">
              <div className="flex items-center justify-center">
                <div className="icon-download text-lg mr-2"></div>
                Скачать каталог
              </div>
            </button>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('PartnersHero component error:', error);
    return null;
  }
}