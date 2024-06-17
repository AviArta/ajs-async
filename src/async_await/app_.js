import GameSavingLoader_ from "../async_await/GameSavingLoader_";

export default async function savingLoader_() {
    try {
        await GameSavingLoader_.load();
        saving => JSON.parse(saving);
    } catch(error) {
        throw Error(error);
    }
}
