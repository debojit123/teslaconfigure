import { ModelColor } from "./color.type";

export type CarModel = {
    code: string;
    description: string;
    colors: ModelColor[];
};