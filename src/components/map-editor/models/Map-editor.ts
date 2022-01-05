import Tile from "./Tile";

export default class MapEditor {
  size = 640;

  constructor(size) {
    this.size = size;
    for (let index = 0; index < 8192 / 4; index++) {
      const newTile = new Tile();
      newTile.setTerrain("grass");
    }
  }
}

// const Deez = new MapEditor(960);