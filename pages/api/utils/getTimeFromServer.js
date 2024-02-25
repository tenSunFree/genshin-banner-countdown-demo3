import { DateTime } from "luxon";
import formatTime from "./formatTime";
import getDifferenceInSeconds from "./getDifferenceInSeconds";
import getFirstKey from "./getFirstKey";
import secondsToTime from "./secondsToTime";
import Times from "../times.json";

export default function getTimeFromServer() {
  const actualCountdown = getFirstKey(Times);
  const newTimeForAsia = DateTime.now()
    .plus({ hours: 23, minutes: 59, seconds: 59 })
    .toISO();
  if (actualCountdown["Asia"]) {
    actualCountdown["Asia"]["time"] = newTimeForAsia;
  }
  Object.entries(actualCountdown).forEach(([key, value]) => {
    const date = DateTime.fromISO(value.time);
    const totalSeconds = getDifferenceInSeconds(date);
    const { days, hours, minutes, seconds } = secondsToTime(totalSeconds);
    value.days = days;
    value.hours = hours;
    value.minutes = minutes;
    value.seconds = seconds;
    value.timeFormatted = `${formatTime(days)} days ${formatTime(
      hours
    )} hours ${formatTime(minutes)} minutes ${formatTime(seconds)} seconds`;
    value.totalSeconds = totalSeconds;
  });
  return actualCountdown;
}
