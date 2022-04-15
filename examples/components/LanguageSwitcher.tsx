import { useTransContext } from '@mbarzda/solid-i18next';
import { Component } from 'solid-js';

export const LanguageSwitcher: Component = () => {
    const [, { changeLanguage }] = useTransContext();

    return (
        <select onchange={({ target }) => changeLanguage((target as HTMLSelectElement).value)}>
            <option value="en">English</option>
            <option value="lt">Lietuvių</option>
        </select>
    );
};
