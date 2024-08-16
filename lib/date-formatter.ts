import { format } from "date-fns";
import { Timestamp } from "firebase/firestore";

type Config = {
  timestamp: boolean;
};

export const createdDate = (date: Timestamp, config?: Config) => {
  const d = new Timestamp(
    Number(date.seconds),
    Number(date.nanoseconds),
  ).toDate();

  let defaultFormatter = "do MMM yyy";
  const { timestamp = true } = config || {};

  if (timestamp) {
    defaultFormatter = `${defaultFormatter} (hh:mmaaa)`;
  }

  return format(d, defaultFormatter);
};
