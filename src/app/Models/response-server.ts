export interface ResponseServer <T>{
    number: number;
    results: [T];
    offset: number;
    totalResults: number;
}
