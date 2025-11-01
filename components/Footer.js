function Footer() {
  try {
    return (
      <footer className="bg-[var(--text-primary)] text-white" data-name="footer" data-file="components/Footer.js">
        <div className="max-w-7xl mx-auto px-4 section-padding">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 rounded-lg bg-[var(--secondary-color)] flex items-center justify-center mr-3">
                  <div className="icon-settings text-lg text-white"></div>
                </div>
                <h3 className="text-xl font-bold">ПромТехСервис</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Профессиональные поставки и внедрение промышленного оборудования 
                для предприятий любого масштаба.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center">
                  <div className="icon-phone text-sm mr-2"></div>
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center">
                  <div className="icon-mail text-sm mr-2"></div>
                  <span>info@promtechservice.ru</span>
                </div>
                <div className="flex items-center">
                  <div className="icon-map-pin text-sm mr-2"></div>
                  <span>Москва, ул. Промышленная, 1</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Поставка оборудования</li>
                <li>Техническое внедрение</li>
                <li>Сервисное обслуживание</li>
                <li>Консультации</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 ПромТехСервис. Все права защищены.</p>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    return null;
  }
}