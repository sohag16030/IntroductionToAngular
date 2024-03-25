import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class DataProviderService {

    dataEmitter = new Subject<string>();

    // dataEmitter = new EventEmitter<String>();

    raiseThisEmitter(value: string) {
        this.dataEmitter.next(value);
        console.log(value);
    }
}