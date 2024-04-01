import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeDetailsComponent } from './employee-list/employee-details/employee-details.component';

const appRoute: Routes = [
  { path: '', component: EmployeeListComponent},
  { path: 'Employees', component: EmployeeListComponent},
  {
    path: 'Employees', children: [
      { path: 'Employee/:id', component: EmployeeDetailsComponent },
    ]
  },
  { path: 'AddEmployee', component: AddEmployeeComponent},
  { path: '**', component: ErrorComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(appRoute)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
