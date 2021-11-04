import User from "../models/User";
import ColorSet from "../models/ColorSet";
import IconsConfigs from "../constants/IconsConfigs";
export let USERS = [
  new User("7", "Ethan S.", true, 15000),
  new User("4", "Kimi", true, 10),
  new User("5", "Hannah M.", true, 115),
  new User("2", "Jonathan C.", true, 10),
  new User("1", "Eva L.", true, 10),
  new User("3", "Hex W.", false, 10),
  new User("6", "Demi L.", false, 0),
  new User("8", "HF.", false, 10),
  new User("9", "Hermit", false, 10),
  new User("10", "Hellen W.", false, 10),
  new User("11", "Alice L.", false, 0),
  new User("12", "Peter", false, 10),
  new User("13", "Henry", false, 1000000),
];

export let COLOR_SETS = [
  new ColorSet("1", "White", IconsConfigs.cloud, false),
  new ColorSet("2", "Red", IconsConfigs.strawberry, false),
  new ColorSet("3", "Orange", IconsConfigs.carrot, false),
  new ColorSet("4", "Yellow", IconsConfigs.sun, false),
  new ColorSet("5", "Green", IconsConfigs.leaf, false),
  new ColorSet("6", "Ice Blue", IconsConfigs.ice, false),
  new ColorSet("7", "Dark Blue", IconsConfigs.wave, false),
  new ColorSet("8", "Purple", IconsConfigs.grapes, false),
  new ColorSet("9", "Pink", IconsConfigs.flamingo, false),
];
