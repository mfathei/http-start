import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http'

@Injectable()
export class ServerService{
    
    constructor(private http: Http){}

    saveServers(servers: any[]){
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('https://http-start-8f266.firebaseio.com/data.json', servers, {
            headers: headers
        });
    }

    getServers(){
        return this.http.get('https://http-start-8f266.firebaseio.com/data.json');
    }
}