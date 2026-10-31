import { clientsClaim } from 'workbox-core';
import {
  createHandlerBoundToURL,
  precacheAndRoute,
} from 'workbox-precaching';
import { NavigationRoute, registerRoute } from 'workbox-routing';

clientsClaim();
precacheAndRoute(self.__WB_MANIFEST); // eslint-disable-line no-restricted-globals

registerRoute(
  new NavigationRoute(createHandlerBoundToURL('/index.html'), {
    denylist: [/^\/_/, /\/[^/?]+\.[^/]+$/],
  })
);
