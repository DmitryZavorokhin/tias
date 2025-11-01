function TeamSection() {
  try {
    const teamMembers = [
      {
        name: 'Александр Петров',
        position: 'Генеральный директор',
        experience: '20 лет в промышленности'
      },
      {
        name: 'Мария Сидорова',
        position: 'Технический директор',
        experience: '15 лет в автоматизации'
      },
      {
        name: 'Дмитрий Козлов',
        position: 'Руководитель отдела продаж',
        experience: '12 лет в продажах оборудования'
      },
      {
        name: 'Елена Морозова',
        position: 'Главный инженер',
        experience: '18 лет в проектировании'
      }
    ];

    return (
      <section className="section-padding bg-[var(--bg-light)]" data-name="team-section" data-file="components/TeamSection.js">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Наша команда</h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Опытные специалисты с глубокими знаниями в области промышленного оборудования
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="card text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[var(--primary-color)] to-[var(--accent-color)] flex items-center justify-center mx-auto mb-4">
                  <div className="icon-user text-2xl text-white"></div>
                </div>
                <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                <p className="text-[var(--primary-color)] font-medium mb-2">{member.position}</p>
                <p className="text-sm text-[var(--text-secondary)]">{member.experience}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <div className="bg-white rounded-xl shadow-lg p-8 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Присоединяйтесь к нашей команде</h3>
              <p className="text-[var(--text-secondary)] mb-6">
                Мы всегда ищем талантливых специалистов для расширения нашей команды
              </p>
              <button className="btn-primary">
                <div className="flex items-center justify-center">
                  <div className="icon-mail text-lg mr-2"></div>
                  Отправить резюме
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('TeamSection component error:', error);
    return null;
  }
}