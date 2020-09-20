import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {

  uploadedFiles: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onUpload(event) {
    for(let file of event.files) {
        this.uploadedFiles.push(file)
    }    
}

}
