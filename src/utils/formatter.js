/**
 * Format date from given timestamp
 * @param {*} timestamp 
 * @returns 
 */
export const formatTimestamp = (timestamp) => {
  return new Date(timestamp * 1000);
};

/**
 * Format given timestamp and return time
 * @param {*} timestamp 
 * @param {*} localeIso 
 * @returns 
 */
export const getTimestampHour = (timestamp, localeIso) => {
  const date = new Date(timestamp * 1000);

  return date
    .toLocaleTimeString(`fr-${localeIso}`)
    .split(":");
};
