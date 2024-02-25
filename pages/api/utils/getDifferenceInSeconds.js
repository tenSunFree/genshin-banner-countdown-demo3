import { DateTime } from "luxon";

export default function getDifferenceInSeconds(date) {
  const now = DateTime.now().setZone("Asia/Taipei");
  return Math.trunc(date.diff(now).as("seconds")) > 0
    ? Math.trunc(date.diff(now).as("seconds"))
    : 0;
}
