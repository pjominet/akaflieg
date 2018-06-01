import {first} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {User} from './user';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) {
    }

    public getAll() {
        return this.http.get<User[]>('/users').pipe(first());
    }

    public getById(id: number) {
        return this.http.get<User>('/users/' + id).pipe(first());
    }

    public create(user: User) {
        return this.http.post<any>('/users/register', user).pipe(first())
    }
}
