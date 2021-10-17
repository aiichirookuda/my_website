import museAcademy from '../img/banner_muse-academy.png';

import { MuseAcademy } from '../Pages/Introduction/MuseAcademy';

export const banner = [
  {
    title: 'Muse Academy',
    image: museAcademy,
    path: '/muse-academy',
    children: (
      <MuseAcademy
        topImage={museAcademy}
        title={'MuseAcademy　出来るかもバナー'}
      />
    ),
  },
];
