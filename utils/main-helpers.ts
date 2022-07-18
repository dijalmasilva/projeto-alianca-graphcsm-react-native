export const getValueOfPercentFromValue = (value: number, percent: number) => {
    if (percent === 100) return value

    return (value * percent) / 100
}