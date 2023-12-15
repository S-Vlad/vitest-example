import { http, HttpResponse } from 'msw';

import { USERS_LINK } from '../constants/general';

import { FAKE_USERS } from './data';

// describes which requests to intercept and how to handle them
export const handlers = [
  // "http.get()" allows to capture all outgoing
  // "GET /users" requests and execute the given
  // response resolver when they happen

  http.get(USERS_LINK, () => {
    // Response resolver allows to react to captured requests,
    // respond with mock responses

    return HttpResponse.json(FAKE_USERS);
  }),
];

export const failedHandlers = [
  http.get(USERS_LINK, () => {
    return new HttpResponse(null, { status: 404 });
  }),
];
