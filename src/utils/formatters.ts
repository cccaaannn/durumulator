function currencyFormatter(money: number): string {
    const formatter = new Intl.NumberFormat('tr-TR', {
        style: 'currency',
        currency: 'TRY',
    });

    return formatter.format(money);
}

function numberFormatter(num: number): string {
    const formatter = new Intl.NumberFormat('tr-TR');
    return formatter.format(num);
}

export { currencyFormatter, numberFormatter };
