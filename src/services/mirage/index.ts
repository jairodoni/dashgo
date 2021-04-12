import { createServer, Factory, Model, Response } from 'miragejs';
import faker from 'faker';

type User = {
  name: string;
  email: string;
  created_at: string;
};

export function makeServer() {
  const server = createServer({
    models: {
      //O Partial faz com q não seja obrigatorios todos os campos conter todos os campos
      user: Model.extend<Partial<User>>({}),
    },

    factories: {
      user: Factory.extend({
        name(i: number) {
          return `User ${i + 1}`;
        },
        email() {
          return faker.internet.email().toLowerCase();
        },
        createdAt() {
          return faker.date.recent(10);
        },
      }),
    },

    seeds(server) {
      server.createList('user', 200);
    },

    routes() {
      this.namespace = 'api';
      this.timing = 750;

      this.get('/users', function (schema, request) {
        const { page = 1, per_page = 10 } = request.queryParams;

        const total = schema.all('user').length;

        //Exemplo: de 10-20, de 20-30
        const pageStart = (Number(page) - 1) * Number(per_page);
        const pageEnd = pageStart + Number(per_page);

        //retorna um objeto com uma propriedade users com um array de usuarios dentro
        const users = this.serialize(schema.all('user')).users.slice(
          pageStart,
          pageEnd,
        );

        return new Response(200, { 'x-total-count': String(total) }, { users });
      });

      this.post('/users');

      //pra não prejudicar as outras rotas do next
      this.namespace = '';
      //faz com que todas as chamadas enviadas para o endereço api passem pelo mirage
      //se não forem detectadas voltam a rota original delas
      this.passthrough();
    },
  });

  return server;
}
