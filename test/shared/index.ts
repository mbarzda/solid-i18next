export const messages = {
    en: 'Hello!',
    lt: 'Labas!',
    pl: 'Cześć!',
};

export const messages_interpolation = {
    en: 'Hello {{name}}!',
    lt: 'Labas, {{name}}!',
    pl: 'Cześć {{name}}!',
};

export const messages_custom_interpolation = {
    en: 'Hello ##name##!',
    lt: 'Labas, ##name##!',
    pl: 'Cześć ##name##!',
};

export const resources_lt = {
    translation: {
        greeting: messages.lt,
        greeting_interpolation: messages_interpolation.lt,
        greeting_custom_interpolation: messages_custom_interpolation.lt,
    },
};

export const resources_pl = {
    translation: {
        greeting: messages.pl,
        greeting_interpolation: messages_interpolation.pl,
        greeting_custom_interpolation: messages_custom_interpolation.pl,
    },
};
