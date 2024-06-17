import GameSavingLoader from "./GameSavingLoader";

export default function savingLoader() {
  return GameSavingLoader.load()
  .then(saving => {
      // saving объект класса GameSaving
      JSON.parse(saving);
    }, error => {
      throw Error(error);
    });
}
