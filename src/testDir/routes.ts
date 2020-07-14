// managing routes to controller

import { retrieve } from './controller';
import { asyncMiddleware } from '../utils';

export const testRoute = (app:any) => {
    app.get(
        '/test',
        asyncMiddleware(retrieve),
    );
};
