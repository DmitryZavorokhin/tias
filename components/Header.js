function Header() {
  try {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    
    const navigateToPage = (page) => {
      window.location.href = page;
    };

    const getCurrentPage = () => {
      const path = window.location.pathname;
      if (path.includes('about')) return 'about';
      if (path.includes('partners')) return 'partners';
      return 'home';
    };

    const currentPage = getCurrentPage();

    return (
      <header className="bg-white shadow-md sticky top-0 z-50" data-name="header" data-file="components/Header.js">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div 
              className="flex items-center cursor-pointer" 
              onClick={() => navigateToPage('index.html')}
            >
              <div className="w-10 h-10 rounded-lg bg-[var(--primary-color)] flex items-center justify-center mr-3">
                <div className="icon-settings text-xl text-white"></div>
              </div>
              <div>
                <h1 className="text-xl font-bold text-[var(--primary-color)]">ПромТехСервис</h1>
                <p className="text-xs text-[var(--text-secondary)]">Промышленное оборудование</p>
              </div>
            </div>

            <nav className="hidden md:flex space-x-8">
              <button 
                onClick={() => navigateToPage('index.html')}
                className={`text-sm font-medium transition-colors ${
                  currentPage === 'home' 
                    ? 'text-[var(--primary-color)] border-b-2 border-[var(--primary-color)] pb-1' 
                    : 'text-[var(--text-secondary)] hover:text-[var(--primary-color)]'
                }`}
              >
                Главная
              </button>
              <button 
                onClick={() => navigateToPage('about.html')}
                className={`text-sm font-medium transition-colors ${
                  currentPage === 'about' 
                    ? 'text-[var(--primary-color)] border-b-2 border-[var(--primary-color)] pb-1' 
                    : 'text-[var(--text-secondary)] hover:text-[var(--primary-color)]'
                }`}
              >
                О компании
              </button>
              <button 
                onClick={() => navigateToPage('partners.html')}
                className={`text-sm font-medium transition-colors ${
                  currentPage === 'partners' 
                    ? 'text-[var(--primary-color)] border-b-2 border-[var(--primary-color)] pb-1' 
                    : 'text-[var(--text-secondary)] hover:text-[var(--primary-color)]'
                }`}
              >
                Наши партнеры
              </button>
            </nav>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="icon-menu text-xl text-[var(--text-primary)]"></div>
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden pb-4">
              <nav className="flex flex-col space-y-2">
                <button 
                  onClick={() => navigateToPage('index.html')}
                  className="text-left py-2 text-[var(--text-secondary)] hover:text-[var(--primary-color)]"
                >
                  Главная
                </button>
                <button 
                  onClick={() => navigateToPage('about.html')}
                  className="text-left py-2 text-[var(--text-secondary)] hover:text-[var(--primary-color)]"
                >
                  О компании
                </button>
                <button 
                  onClick={() => navigateToPage('partners.html')}
                  className="text-left py-2 text-[var(--text-secondary)] hover:text-[var(--primary-color)]"
                >
                  Наши партнеры
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>
    );
  } catch (error) {
    console.error('Header component error:', error);
    return null;
  }
}