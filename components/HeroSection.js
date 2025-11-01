function HeroSection() {
  try {
    return (
      <section className="bg-gradient-to-br from-[var(--primary-color)] to-[var(--accent-color)] text-white section-padding" data-name="hero-section" data-file="components/HeroSection.js">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Профессиональные поставки 
                <span className="text-[var(--secondary-color)]"> промышленного оборудования</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Комплексные решения для автоматизации производства: электрика, 
                автоматика, пневматика и гидравлика от ведущих производителей
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-secondary">
                  <div className="flex items-center justify-center">
                    <div className="icon-phone text-lg mr-2"></div>
                    Получить консультацию
                  </div>
                </button>
                <button className="btn-primary bg-white text-[var(--primary-color)] hover:bg-gray-100">
                  <div className="flex items-center justify-center">
                    <div className="icon-file-text text-lg mr-2"></div>
                    Каталог оборудования
                  </div>
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="card bg-white/10 backdrop-blur-sm border-white/20">
                  <div className="w-12 h-12 rounded-lg bg-[var(--secondary-color)] flex items-center justify-center mb-4">
                    <div className="icon-zap text-xl text-white"></div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Электрика</h3>
                  <p className="text-blue-100 text-sm">Промышленная электротехника</p>
                </div>
                
                <div className="card bg-white/10 backdrop-blur-sm border-white/20 mt-8">
                  <div className="w-12 h-12 rounded-lg bg-[var(--secondary-color)] flex items-center justify-center mb-4">
                    <div className="icon-cpu text-xl text-white"></div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Автоматика</h3>
                  <p className="text-blue-100 text-sm">Системы автоматизации</p>
                </div>
                
                <div className="card bg-white/10 backdrop-blur-sm border-white/20">
                  <div className="w-12 h-12 rounded-lg bg-[var(--secondary-color)] flex items-center justify-center mb-4">
                    <div className="icon-wind text-xl text-white"></div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Пневматика</h3>
                  <p className="text-blue-100 text-sm">Пневматические системы</p>
                </div>
                
                <div className="card bg-white/10 backdrop-blur-sm border-white/20 mt-8">
                  <div className="w-12 h-12 rounded-lg bg-[var(--secondary-color)] flex items-center justify-center mb-4">
                    <div className="icon-droplet text-xl text-white"></div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Гидравлика</h3>
                  <p className="text-blue-100 text-sm">Гидравлическое оборудование</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('HeroSection component error:', error);
    return null;
  }
}