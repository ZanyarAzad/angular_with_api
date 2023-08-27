import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/services/students.service';
@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit{
  constructor(private student: StudentsService) { }
  studentData: any = [];
  currentPage: number = 1;
  itemsPerPage: number = 7;
  totalPages: number = 0; // Initialize totalPages to 0

  ngOnInit(): void {
    this.student.getStudents().subscribe((allData) => {
      this.studentData = allData;
      console.log(this.studentData);
      this.totalPages = Math.ceil(this.studentData.length / this.itemsPerPage);
    });
  }

  goToPage(page: number): void {
    this.currentPage = page;
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  getDisplayedStudent(): any[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.studentData.slice(start, end);
  }
  deleteStudent(id: any) {
    // console.log(id);
    this.student.deleteStudent(id).subscribe((result) => {
      this.ngOnInit();
    });
  }
}
