// Temporary user schema
class User {
  constructor(
    id,
    name,
    deviceCode,
    linkedUsers,
    colorPicker,
    receivedColor,
    date,
    streak,
    soundEffects,
    dailyReminder,
    language
  ) {
    this.id = id;
    this.name = name;
    this.deviceCode = deviceCode;
    this.linkedUsers = linkedUsers;
    this.colorPicker = colorPicker;
    this.receivedColor = receivedColor;
    this.date = date;
    this.streak = streak;
    this.soundEffects = soundEffects;
    this.dailyReminder = dailyReminder;
    this.language = language;
  }
}

export default User;
