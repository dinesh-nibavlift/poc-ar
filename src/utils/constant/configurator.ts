export const applicationOptions = [
  {
    name: 'Indoor',
    value: 'indoor',
    src: '/elite-config/application/Indoor.png'
  },
  {
    name: 'Outdoor',
    value: 'outdoor',
    src: '/elite-config/application/Outdoor.png'
  }
];

export const ralColorOptions = {
  ralCreamWhite: 'RAL-Cream white',
  ralAshenGray: 'RAL-Ashen grey',
  ralMidNightBlack: 'RAL-Midnight black',
  ralPureWhite: 'RAL-Midnight black'
};

export const landingDoorOptions = [
  {
    name: '',
    value: 'RAL-Cream white',
    src: '/elite-config/landing-door-color/1.png'
  },
  {
    name: '',
    value: 'RAL-Ashen grey',
    src: '/elite-config/landing-door-color/2.png'
  },
  {
    name: '',
    value: 'RAL-Midnight black',
    src: '/elite-config/landing-door-color/3.png'
  },
  {
    name: '',
    value: 'RAL-Pure white',
    src: '/elite-config/landing-door-color/4.png'
  }
];

export const ceilingOptions = [
  {
    name: '',
    value: 'logo',
    src: '/elite-config/ceiling/logo.png'
  },
  {
    name: '',
    value: 'plain',
    src: '/elite-config/ceiling/plain.png'
  }
];

export const cabinWallOptions = [
  {
    name: 'Mirror',
    value: 'Mirror'
  },
  {
    name: 'RAL',
    value: 'RAL-Midnight black'
  },
  {
    name: 'Wooden',
    value: 'Nayana Teak'
  }
];

export enum CAMERA_ANGLES {
  INNER = 'INNER',
  OUTER = 'OUTER'
}

export const cameraAngleOptions = [
  {
    name: 'Outer',
    value: CAMERA_ANGLES.OUTER
  },
  {
    name: 'Inner',
    value: CAMERA_ANGLES.INNER
  }
];
