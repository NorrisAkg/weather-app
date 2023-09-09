export const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp * 1000);
    console.log(date);

    const time = date.toLocaleTimeString("fr-Bj")
    return time
}