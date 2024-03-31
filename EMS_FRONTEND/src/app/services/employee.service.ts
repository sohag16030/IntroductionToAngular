import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const BASIC_URL = 'http://localhost:8081';

@Injectable({
    providedIn: 'root'
})
export class EmployeeService {

    constructor(private http: HttpClient) { }

    addEmployee(employeeData: any): Observable<any> {
        return this.http.post(`${BASIC_URL}/api/emsUsers`, employeeData);
    }

    getByIdEmployee(employeeId: number): Observable<any> {
        return this.http.get(`${BASIC_URL}/api/emsUsers/${employeeId}`);
    }

    getAllEmployees(): Observable<any> {
        return this.http.get(`${BASIC_URL}/api/emsUsers`);
    }

    updateEmployee(employeeId: number, updatedData: any): Observable<any> {
        return this.http.put(`${BASIC_URL}/api/emsUsers/${employeeId}`, updatedData);
    }

    deleteEmployee(employeeId: number): Observable<any> {
        return this.http.delete(`${BASIC_URL}/api/emsUsers/${employeeId}`);
    }
   
}
