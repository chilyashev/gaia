Keyboards['bg-BDS'] = {
  label: 'Bulgarian (BDS)',
  shortLabel: 'Bg',
  menuLabel: 'Български (БДС)',
  types: ['text', 'url', 'email', 'password'],
  imEngine: 'latin',
  autoCorrectLanguage: 'bg',
  basicLayoutKey: 'AБB',
  width: 11,
  alt: {
    'а': 'à',
    'е': 'ѐ',
    'и': 'ѝ',
    'о': 'ò',
    'у': 'ỳ',
    '.': ',?!;:…'
  },
  keys: [
    [
      { value: 'у' }, { value: 'е' }, { value: 'и' }, { value: 'ш' },
      { value: 'щ' }, { value: 'к' }, { value: 'с' }, { value: 'д' },
      { value: 'з' }, { value: 'ц' }, { value: 'б' }
    ], [
      { value: 'ь' }, { value: 'я' }, { value: 'а' }, { value: 'о' },
      { value: 'ж' }, { value: 'г' }, { value: 'т' }, { value: 'н' },
      { value: 'в' }, { value: 'м' }, { value: 'ч' }
    ], [
      { value: '⇪', ratio: 1.5, keyCode: KeyEvent.DOM_VK_CAPS_LOCK },
      { value: 'ю' }, { value: 'й' }, { value: 'ъ' }, { value: 'ф' },
      { value: 'х' }, { value: 'п' }, { value: 'р' }, { value: 'л' },
      { value: '⌫', ratio: 1.5, keyCode: KeyEvent.DOM_VK_BACK_SPACE }
    ], [
      { value: '&nbsp', ratio: 9, keyCode: KeyboardEvent.DOM_VK_SPACE },
      { value: '↵', ratio: 2, keyCode: KeyEvent.DOM_VK_RETURN }
    ]
  ],
  pages: [undefined, {
    alt: {
      '1': ['¹', '1-ви'],
      '2': ['²', '2-ри'],
      '3': ['³', '3-ти'],
      '4': ['⁴', '4-ти'],
      '5': ['⁵', '5-ти'],
      '6': ['⁶', '6-ти'],
      '7': ['⁷', '7-ми'],
      '8': ['⁸', '8-ми'],
      '9': ['⁹', '9-ти'],
      '0': ['⁰', 'º'],
      '$': [ '€', '£', '¢', '¥'],
      '"': ['„', '“'],
      '-': ['–', '—'],
      '#': ['№']
    },
    keys: [
      [
        { value: '1' }, { value: '2' }, { value: '3' }, { value: '4' },
        { value: '5' }, { value: '6' }, { value: '7' }, { value: '8' },
        { value: '9' }, { value: '0' }
      ], [
        { value: '@' }, { value: '#', className: 'alternate-indicator' },
        { value: '$', className: 'alternate-indicator' }, { value: '&' },
        { value: '*' }, { value: '-' }, { value: '_' }, { value: '/' },
        { value: '(' }, { value: ')' }
      ], [
        { value: 'Alt', ratio: 1.5,
          keyCode: KeyboardEvent.DOM_VK_ALT,
          className: 'page-switch-key',
          targetPage: 2
        },
        { value: '+',
          supportsSwitching: {
            value: ','
          }
        }, { value: ':' }, { value: ';' }, { value: '"', className: 'alternate-indicator' },
        { value: '\'' }, { value: '!' }, { value: '?' },
        { value: '⌫', ratio: 1.5, keyCode: KeyEvent.DOM_VK_BACK_SPACE }
      ], [
        { value: '&nbsp', ratio: 8, keyCode: KeyboardEvent.DOM_VK_SPACE },
        { value: '↵', ratio: 2, keyCode: KeyEvent.DOM_VK_RETURN }
      ]
    ]
  } ]
};
