import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {User} from './user';

@Injectable()
export class UserService {
    constructor(private http: Http) {
    }

    public getAll() {
        return this.http.get('/users',
            this.authorize())
            .map((response: Response) => response.json());
    }

    public getById(id: number) {
        return this.http.get('/users/' + id,
            this.authorize())
            .map((response: Response) => response.json());
    }

    public create(user: User) {
        return this.http.post('/users/register',
            user, this.authorize())
            .map((response: Response) => response.json())
    }

    private authorize() {
        // create authorization header with authorize token
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            const headers = new Headers({'Authorization': 'Bearer ' + currentUser.token});
            return new RequestOptions({headers: headers});
        }
    }
}
