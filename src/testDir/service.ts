// core place for business logic

import {IServicesData} from "./interfaces";

export const testService = (err: boolean): IServicesData => {
    if (err) {
        return {
            data: 'Error text',
            code: 400,
        }
    }

    return {
        data: { text: 'data' },
        code: 200,
    }
};
