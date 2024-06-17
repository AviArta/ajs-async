import json from "../parser";

/*// eslint-disable-next-line no-undef
jest.setTimeout(20000);*/

// eslint-disable-next-line no-undef
test("check function json", () => {
    json((data) => {
        // eslint-disable-next-line no-undef
        expect(data).toEqual({
            id: 9,
            created: 1546300800,
            userInfo: {
                id: 1, name: 'Hitman', level: 10, points: 2000
            }});
        })
    });
    