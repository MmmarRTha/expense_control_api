export function formatCurrency(amount: number): string {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    }).format(amount)
}

export function formatDate(dateStr: string) : string {
    const dateObj = new Date(dateStr)
    const options : Intl.DateTimeFormatOptions = {
        year: "numeric", 
        month: "long", 
        weekday: "short", 
        day: "numeric" 
    }
    return new Intl.DateTimeFormat("en-US", options).format(dateObj)
}