import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private getStudentsUrl = 'http://localhost:3000/student'; 
  private delteteStudentsUrl = 'http://localhost:3000/student/';
  private updateStudentsUrl = "http://localhost:3000/student/";
  private filterStudentUrl = "http://localhost:3000/student/filter/";

  constructor(private http: HttpClient) {}

  getStudents(): Observable<any> {
    return this.http.get<any>(this.getStudentsUrl);
  }

  deleteStudent(id : number){
      this.http.delete<any>(this.delteteStudentsUrl+`${id}`);
  } 
 
  updateStudent(id : number , body : any){
      this.http.put<any>(this.updateStudentsUrl+`${id}`,body);
  }

  filterStudent(key : string , text : string){
    this.http.get<any>(this.filterStudentUrl+`${key}/`+`${text}`);
  } 

}
