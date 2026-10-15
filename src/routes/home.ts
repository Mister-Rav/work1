import type { FastifyInstance } from 'fastify';

export async function registerHomeRoutes(app: FastifyInstance) {
  app.get('/', async (request, reply) => {
    const feed = [
      {
        id: '1',
        title: 'Быстрые свидания в центре',
        city: 'Москва',
        date: '2 ноября',
        organizerName: 'Клуб «Искра»',
      },
      {
        id: '2',
        title: 'Поход выходного дня',
        city: 'Санкт-Петербург',
        date: '9 ноября',
        organizerName: 'Тропа',
      },
      {
        id: '3',
        title: 'Тренинг по публичным выступлениям',
        city: 'Казань',
        date: '15 ноября',
        organizerName: 'Речь+',
      },
    ];

    return reply.view('pages/home.ejs', {
      title: 'Интересные мероприятия',
      user: null,
      feed,
    });
  });
}