import { ts } from "@microsoft/typescript-etw";
ts = ts || {};

function randomTsCode() {
    const min = 1;
    const max = 50;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}