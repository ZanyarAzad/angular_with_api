import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  url = 'http://localhost:3000';
  constructor(private http: HttpClient) {}
  getStudents() {
    return this.http.get(this.url + '/student');
  }
  saveStudentData(data: any) {
    console.log(data);
    return this.http.post(this.url + '/student', data);
  }
  updateStudentData(id: number, data: any) {
    return this.http.put(this.url + '/student/'+id, data);
   }  getStudentById(id: number) {
    return this.http.get(this.url + '/student/' + id);
   }
  deleteStudent(id: any) {
    // console.log(id);
    return this.http.delete(this.url+'/student/'+id);
  }

}
