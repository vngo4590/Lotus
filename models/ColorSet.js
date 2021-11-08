// Temporary ColorSet schema
class ColorSet {
  constructor(id, name, properties, active) {
    this.id = id;
    this.name = name;
    // properties of the color
    // This includes icon and color code
    this.properties = properties;
    this.active = active;
  }
}

export default ColorSet;
