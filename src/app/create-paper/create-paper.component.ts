import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { WebApiService } from '../utils/web-api-service';
import { CreatePaperRequest } from '../utils/request-models/create-paper-request';

@Component({
  selector: 'app-create-paper',
  templateUrl: './create-paper.component.html',
  styleUrls: ['./create-paper.component.css']
})
export class CreatePaperComponent implements OnInit {

  createPaperForm: FormGroup;
  submitted : boolean;
  existingAuthors : string[];
  selectedAuthors = [];
  dropdownSettings = {};

  constructor(private formBuilder: FormBuilder, private api : WebApiService) { }

  ngOnInit() {
    this.registerForm();
    this.setUpDropdownSettings();
  }

  registerForm() {
    this.createPaperForm = this.formBuilder.group({
      title: ['', Validators.required],
      paperAbstract: ['', Validators.required],
      authors: ['', Validators.required]
    });
  }

  displayAllAuthors() {
    this.api.getAllAuthors().subscribe((data : string[]) => {
        this.existingAuthors = data;
      });
  }

  setUpDropdownSettings() {
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_text',
      textField: 'item_text',
      itemsShowLimit: 3,
      allowSearchFilter: true,
      enableCheckAll: false,
      noDataAvailablePlaceholderText: "Loading..."
    };
  }

  onItemSelect(item: string) {
    this.selectedAuthors.push(item);
  }

  onSubmit() {
    console.log("Submitted!!!!!")
    this.submitted = true;

    if (this.createPaperForm.invalid) {
        return;
    }

    let paper = new CreatePaperRequest(this.fields["title"].value, this.fields["paperAbstract"].value, this.selectedAuthors);
    this.api.createPaper(paper).subscribe((data) => {
      this.displaydata(data);
      this.createPaperForm.reset();
    });
  }

  displaydata(data) {
    alert('Paper created successfully with id: \n\n' + JSON.stringify(data))
  }

  get fields() { return this.createPaperForm.controls; }
}
