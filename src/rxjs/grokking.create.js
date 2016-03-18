import {Observable} from 'rxjs';
import {log} from '../utils';

function getNumStream() {
    return Observable.create(observer => {
        log('create');
        let cancel = setInterval(() => observer.next(Math.floor(Math.random() * 100)), 1000);
        
        return function () {
            log('dispose');
            clearInterval(cancel);
        };
    });
}
let num$ = getNumStream();

num$.subscribe(log);
