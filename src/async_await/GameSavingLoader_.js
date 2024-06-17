import read from "../promises/reader";
import json from "../promises/parser";

export default class GameSavingLoader_ {
  static async load() {
    try {
      const data = await read();
      return await json(data);
    } catch (e) {
      throw new Error(e.message);
    }
  }
}