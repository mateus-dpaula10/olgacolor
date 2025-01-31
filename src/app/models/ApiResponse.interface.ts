import { Currency } from "./Currency.interface";

export interface ApiResponse {
    results: {
        currencies: { [key: string]: Currency };
    }
}