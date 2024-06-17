import read from "./reader";
import json from "./parser";

export default class GameSavingLoader {
    static load() {
      return read().then(data => json(data)).catch(error => { throw Error(error.message); });
    }}
