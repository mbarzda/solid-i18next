export const messages = {
    custom_interpolation: {
        en: 'Hello ##name##!',
        lt: 'Labas, ##name##!',
        pl: 'Cześć ##name##!',
    },
    interpolation: {
        en: 'Hello {{name}}!',
        lt: 'Labas, {{name}}!',
        pl: 'Cześć {{name}}!',
    },
    pluralization: {
        en: '',
        lt: '',
        pl: '',
    },
    simple: {
        en: 'Hello!',
        lt: 'Labas!',
        pl: 'Cześć!',
    },
};

export const resources_lt = {
    translation: {
        greeting: messages.simple.lt,
        greeting_interpolation: messages.interpolation.lt,
        greeting_custom_interpolation: messages.custom_interpolation.lt,
    },
};

export const resources_pl = {
    translation: {
        greeting: messages.simple.pl,
        greeting_interpolation: messages.interpolation.pl,
        greeting_custom_interpolation: messages.custom_interpolation.pl,
    },
};
