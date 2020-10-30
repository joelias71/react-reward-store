export const amountFormat = amount => amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

const getMonth = (m) => {
    let month = ['January', 'February', 'March', 'April', 'May', 'June',
     'July', 'August', 'September', 'October', 'November', 'December']
    
    return month[m]
}

export const getTextDate = date => {
    let newDate = new Date(date)
    return `${getMonth(newDate.getMonth())} ${date.substring(8,10)}, ${newDate.getFullYear()}`
}