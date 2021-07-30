import { testObservable } from './playground';
import { Observable } from 'rxjs';

describe('Playground tests', function () {

  describe('`testObservable`', () => {

    it('should be defined', () => {
      expect(testObservable).toBeDefined();
      expect(testObservable).toBeInstanceOf(Observable);
    });

    it('should return true value', (done) => {
      testObservable.subscribe((value) => {
        expect(value).toBe(true);
        done();
      });
    });

  });

});
