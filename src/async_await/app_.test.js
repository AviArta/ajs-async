import savingLoader_ from "./app_";

// eslint-disable-next-line no-undef
jest.setTimeout(20000);

// eslint-disable-next-line no-undef
test("check async function savingLoader_ resolve", async (done) => {
    const data = await savingLoader_();
    // eslint-disable-next-line no-undef
    expect(data).toEqual({
            id: 9,
            created: 1546300800,
            userInfo: {
              id: 1, name: 'Hitman', level: 10, points: 2000,
            }});
        done();
    });

// eslint-disable-next-line no-undef
test("check async function savingLoader_ reject", async () => {
    //// eslint-disable-next-line no-undef
    //expect.assertions(1);
    try {
        await savingLoader_();
    } catch(error) {
        console.log(error.name);
        // eslint-disable-next-line no-undef
        expect(error.name).toEqual("TypeError");
    }
});
