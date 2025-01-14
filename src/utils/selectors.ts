// Utility Selectors (Utility/Selectors.ts)
import { Selector } from 'testcafe';

export const selectByTestId = (testId: string): Selector => {
    return Selector(`[data-testid="${testId}"]`);
};

export const selectByClassName = (className: string): Selector => {
    return Selector(`.${className}`);
};

export const selectByNthClassName = (className: string, number: number): Selector => {
    return Selector(`.${className}`).nth(number);
};

export const selectByNthTestId = (testId: string, number: number): Selector => {
    return Selector(`[data-testid="${testId}"]`).nth(number);
};

export const selectByTag = (tag: string, Username: any, p0: string): Selector => {
    return Selector(tag);
};

export const selectByAttribute = (attribute: string, value: string): Selector => {
    return Selector(`[${attribute}="${value}"]`);
};

export const selectByTagAndAttribute = (tag: string, attribute: string, value: string): Selector => {
    return Selector(`${tag}[${attribute}="${value}"]`);
};
export const selectByText = (text: string, p0: string): Selector => {
    return Selector('*').withText(text);
};