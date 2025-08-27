
import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi('fca_live_6o9vl9nsQcNAXuozDIMyWwSs9xAg7EsA6uxHXOew');



export async function convertCurrency(fromCurrency, toCurrency, units){


    const res = await freecurrencyapi.latest({
        base_currency: fromCurrency,
        currencies: toCurrency
    });
    const multiplier = res.data[toCurrency];
    return multiplier * units;
}


