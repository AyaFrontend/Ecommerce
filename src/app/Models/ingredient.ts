import { Base } from "./base";

export interface Ingredient extends Base {

    aisle: string;

    consistency: string;
    name: string;
    nameClean: string;
    original: string;
    originalName: string;
    amount: number;
    unit: string;
}
