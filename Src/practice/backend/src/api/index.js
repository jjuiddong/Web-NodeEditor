import Router from 'koa-router';
import file from './file';

const api = new Router();

api.use('/file', file.routes());

export default api;
