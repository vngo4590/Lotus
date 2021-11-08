// Temporary color log schema
class SendColorLog {
  constructor(userId, deviceId, color, date) {
    // primary key = userId + deviceId
    this.userId = userId;
    // devices that color is being sent to
    this.devices = devices;
    this.color = color;
    this.date = date;
  }
}

export default SendColorLog;
