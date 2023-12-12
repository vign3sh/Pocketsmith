
export const roundAmount = (amount) => {
        amount=amount.toPrecision(4);
        amount=Math.round((amount) * 100) / 100;
        return amount;
}