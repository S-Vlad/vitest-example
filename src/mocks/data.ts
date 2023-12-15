import { faker } from '@faker-js/faker';

const createRandomUsers = () => ({
  id: faker.number.int(),
  name: faker.person.fullName(),
});

export const FAKE_USERS = faker.helpers.multiple(createRandomUsers, { count: 7 });
