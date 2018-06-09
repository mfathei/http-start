import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class ServerService{
    
    constructor(private http: Http){}

    saveServers(servers: any[]){
        const headers = new Headers({'Content-Type': 'application/json'});
        // return this.http.post('https://http-start-8f266.firebaseio.com/data.json', servers, {
        //     headers: headers
        // });
        return this.http.put('https://http-start-8f266.firebaseio.com/data.json', servers, {
            headers: headers
        });
    }

    getServers(){
        return this.http.get('https://http-start-8f266.firebaseio.com/data')
            .map(
                (res: Response) => { 
                    const data = res.json();
                    for(const server of data){
                        server.name = 'FETCHED_' + server.name;
                    }
                    return data;
                }
            )
            .catch(
                (err: Response) => {
                    console.log(err);
                    return Observable.throw('Something went wrong!');
                }
            );
    }
}