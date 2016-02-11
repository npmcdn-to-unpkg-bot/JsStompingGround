import {log, objwalk, protowalk} from '../utils';
import Queue from './Queue';


var q1 = new Queue();
q1.push('apple');
q1.push('eggs');
q1.push('milk');
q1.push('bread');
log('q1:', q1.toArray());
log('q1 count:', q1.count);
log('q1 pop:', q1.pop());
log('q1 peek:', q1.peek());
log('q1:', q1.toArray());
log('g1 contains bread?', q1.contains('bread'));
log('g1 contains milk?', q1.contains('milk'));
log('g1 contains eggs?', q1.contains('eggs'));
log('g1 contains apple?', q1.contains('apple'));
log('q1 clear');
q1.clear();
log('q1:', q1.toArray());
