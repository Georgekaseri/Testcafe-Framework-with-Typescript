import { Selector } from 'testcafe';

export const selectByTestId = (testId: string): Selector => {
    if (!testId) {
        throw new Error('TestId cannot be empty');
    }
    return Selector(`[data-testid="${testId}"]`);
};

export const selectByClassName = (className: string): Selector => Selector(`.${className}`);
export const selectByTagAndClassName = (tag: string, className: string): Selector => Selector(`${tag}.${className}`);

export const selectByNthClassName = (className: string, number: number): Selector => {
    if (!className) {
        throw new Error('ClassName cannot be empty');
    }
    if (number < 0) {
        throw new Error('Index cannot be negative');
    }
    return Selector(`.${className}`).nth(number);
};

export const selectByNthTestId = (testId: string, number: number): Selector => {
    if (!testId) {
        throw new Error('TestId cannot be empty');
    }
    if (number < 0) {
        throw new Error('Index cannot be negative');
    }
    return Selector(`[data-testid="${testId}"]`).nth(number);
};

export const selectByTag = (tag: string): Selector => {
    if (!tag) {
        throw new Error('Tag cannot be empty');
    }
    return Selector(tag);
};

export const selectByAttribute = (attribute: string, value: string): Selector => {
    if (!attribute || !value) {
        throw new Error('Attribute and value cannot be empty');
    }
    return Selector(`[${attribute}="${value}"]`);
};

export const selectByTagAndAttribute = (tag: string, attribute: string, value: string): Selector => {
    if (!tag || !attribute || !value) {
        throw new Error('Tag, attribute, and value cannot be empty');
    }
    return Selector(`${tag}[${attribute}="${value}"]`);
};

export const selectByText = (text: string): Selector => {
    if (!text) {
        throw new Error('Text cannot be empty');
    }
    return Selector('*').withText(text);
};
