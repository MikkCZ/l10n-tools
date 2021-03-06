
import {NotImplementedError} from 'web-ext-plugins/errors';

import Plugin from 'l10n-tools/addon/plugin';
import TMPlugin from 'l10n-tools/addon/tm';


test('TMPlugin constructor', () => {
    const tmPlugin = new TMPlugin();
    expect(tmPlugin instanceof Plugin).toBe(true);
    expect(() => {
        tmPlugin.tm;
    }).toThrow(NotImplementedError);
})
