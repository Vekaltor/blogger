import FakeUser from 'src/app/core/models/users.model';

const Users: Array<FakeUser> = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    password: 'password123',
    token: 'abc123xyz456',
  },
  {
    id: 2,
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane.smith@example.com',
    password: 'securepass',
    token: 'def456uvw789',
  },
  {
    id: 3,
    firstName: 'TEST',
    lastName: 'Testwoe',
    email: 'test@op.pl',
    password: 'test',
    token: 'def456uvw789',
  },
];

export default Users;
