import { Observable } from 'rxjs';

export default interface UseCase<S, T> {
  execute(params: S): Observable<T>;
}
