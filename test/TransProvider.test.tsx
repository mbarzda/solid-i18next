import { BackendModule, i18n } from 'i18next';
import { TransProvider, useTransContext } from '../src';
import { messages, renderComponent, resources_lt } from './shared';

describe('TransProvider component', () => {
  test('Should use TransContext', () => {
    renderComponent(() => {
      expect(useTransContext()).toBeInstanceOf(Array);
      return '';
    });
  });

  describe('Instance must be the same', () => {
    let i18next: i18n;
    beforeEach(async () => {
      i18next = (await import('i18next')).default;
    });

    test('Default instance', () => {
      const Comp = () => {
        const [, { getI18next }] = useTransContext();
        expect(getI18next().store).toStrictEqual(i18next.store);
        return '';
      };
      renderComponent(() => {
        return <TransProvider children={<Comp />} />;
      });
    });

    test('New instance', () => {
      let instance: i18n;
      const Comp = () => {
        const [, { getI18next }] = useTransContext();
        expect(getI18next().store).toStrictEqual(instance.store);
        return '';
      };
      renderComponent(() => {
        instance = i18next.createInstance();
        return <TransProvider instance={instance} children={<Comp />} />;
      });
    });
  });

  describe('Add resources', () => {
    test('Should be defined', () => {
      renderComponent(() => {
        const [, actions] = useTransContext();
        expect(actions.addResources).toBeDefined();
        return '';
      });
    });

    test('Adds resources', () => {
      renderComponent(() => {
        const [, actions] = useTransContext();
        actions.addResources('lt', 'translation', resources_lt.translation);
        expect(actions.getI18next().getResource('lt', 'translation', 'greeting')).toEqual(messages.simple.lt);
        expect(actions.getI18next().getResource('lt', 'translation', 'tree.greeting')).toEqual(messages.simple.lt);
        return '';
      });
    });
  });

  describe('Change language', () => {
    test('Changes language', () => {
      renderComponent(() => {
        const [, actions] = useTransContext();
        actions.changeLanguage('lt');
        expect(actions.getI18next().language).toEqual('lt');
        return '';
      });
    });
  });

  describe('BackendModule', () => {
    let i18next: i18n;
    beforeEach(async () => {
      i18next = (await import('i18next')).default.createInstance();
    });

    test('Initial load', () => {
      const Comp = () => {
        const [t] = useTransContext();
        expect(t('greeting')).toEqual(null);
        return '';
      };
      renderComponent(() => <TransProvider instance={i18next} children={Comp} />);
    });

    test('Emit', () => {
      const spy = jest.spyOn(i18next, 'emit');
      i18next.use({
        init() {
          i18next.emit('loaded');
        },
        read(_lng, _ns, cb) {
          cb(null, { greeting: messages.simple.en });
        },
        type: 'backend',
      } as BackendModule);
      const Comp = () => {
        const [t] = useTransContext();
        expect(spy).toBeCalled();
        expect(t('greeting')).toEqual('greeting');
        return '';
      };
      renderComponent(() => <TransProvider instance={i18next} children={Comp} />);
    });
  });
});
