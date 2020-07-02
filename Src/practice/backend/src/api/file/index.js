import Router from 'koa-router';
import * as nodeFileCtrl from './nodefile.ctrl';

const file = new Router();

file.get('/', nodeFileCtrl.read);
file.post('/', nodeFileCtrl.write);

export default file;
