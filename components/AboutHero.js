function AboutHero() {
  try {
    return (
      <section className="bg-gradient-to-br from-[var(--primary-color)] to-[var(--accent-color)] text-white section-padding" data-name="about-hero" data-file="components/AboutHero.js">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            О компании
            <span className="text-[var(--secondary-color)]"> ПромТехСервис</span>
          </h1>
          <p className="text-xl lg:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
            Более 15 лет мы являемся надежным партнером в области поставок 
            промышленного оборудования для предприятий России и СНГ
          </p>
          <div className="flex items-center justify-center space-x-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-[var(--secondary-color)]">2009</div>
              <div className="text-blue-100">Год основания</div>
            </div>
            <div className="w-px h-12 bg-blue-300"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[var(--secondary-color)]">500+</div>
              <div className="text-blue-100">Довольных клиентов</div>
            </div>
            <div className="w-px h-12 bg-blue-300"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[var(--secondary-color)]">50+</div>
              <div className="text-blue-100">Сотрудников</div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('AboutHero component error:', error);
    return null;
  }
}