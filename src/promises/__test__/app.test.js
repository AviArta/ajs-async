import savingLoader from '../app';

// eslint-disable-next-line no-undef
jest.setTimeout(30000);

// eslint-disable-next-line no-undef
test("check function savingLoader in app.js", () => savingLoader()
// eslint-disable-next-line no-undef
.then((data) => expect(data).toEqual({
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1, name: 'Hitman', level: 10, points: 2000,
    }
  })
));
