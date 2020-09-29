import { initExpress } from './libs/express_no-save'
import { initStream } from './libs/nms'
import log from './utils/log'

log('info', 'Skeleton', 'Skeleton Loaded')

initExpress()
initStream()