const lessThenTen = (num: number): string => {
    return num <= 9 ? `0${num.toString()}` : num.toString();
};

export const getTime = (time: Date): string => {
    const day = lessThenTen(time.getDate());
    const month = lessThenTen(time.getMonth() + 1);
    const year = time.getFullYear();
    const hours = lessThenTen(time.getHours());
    const minutes = lessThenTen(time.getMinutes());
    const seconds = lessThenTen(time.getSeconds());

    return `${hours}:${minutes}:${seconds} ${day}/${month}/${year}`;
};
