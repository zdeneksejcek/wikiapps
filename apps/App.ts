import {Locale} from "../common/Locale.ts";

export interface IApp {
    signature(locale: Locale): string;
    objectSchemes(): IObjectSchema[];
    linkSchemes(): ILinkSchema[];
}

export interface IDataType {
    name(): string;
}

export interface IField {
    name(): string;
}

export interface IObjectSchema {
    name(): string;
    fields() : IField[];
}

export interface ILinkSchema {
    name(): string;
}