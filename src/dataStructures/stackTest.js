import {log, objwalk, protowalk} from '../utils';
import Stack from './Stack';


var s1 = new Stack();
s1.push('apple');
s1.push('eggs');
s1.push('milk');
s1.push('bread');
log('s1:', s1.toArray());
log('s1 count:', s1.count);
log('s1 pop:', s1.pop());
log('s1 peek:', s1.peek());
log('s1:', s1.toArray());
log('g1 contains bread?', s1.contains('bread'));
log('g1 contains milk?', s1.contains('milk'));
log('g1 contains eggs?', s1.contains('eggs'));
log('g1 contains apple?', s1.contains('apple'));
log('s1 clear');
s1.clear();
log('s1:', s1.toArray());
