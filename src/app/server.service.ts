import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

@Injectable()
export class ServerService{
    
    constructor(private http: Http){}
    
    saveServers(servers: any[]){
        return this.http.post('https://http-start-8f266.firebaseio.com/data.json', servers);
    }
}