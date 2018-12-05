import { JobPosting } from './../../../models/job.model';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-requirements',
  templateUrl: './requirements.component.html',
  styleUrls: ['./requirements.component.css']
})
export class RequirementsComponent {

  selectedResp: String;
  selectedIndex = -1;

  jobValue: JobPosting;

  @Output()
  jobChange = new EventEmitter();

  @Input()
  get job() {
    return this.jobValue;
  }

  set job(val: JobPosting) {
    this.jobValue = val;
    if (!this.jobValue.responsibilities) this.jobValue.responsibilities = [];
    this.jobChange.emit(this.jobValue);
  }

  addResp() {
    this.jobValue.responsibilities.push(this.selectedResp);
    this.update()
  }

  updateResp(index: number) {
    this.jobValue.responsibilities[index] = this.selectedResp;
    this.update()
  }

  deleteResp(index: number) {
    this.jobValue.responsibilities.splice(index, 1);
    this.update()
  }

  update() {
    this.jobChange.emit(this.jobValue);
    this.clear();
  }

  clear() {
    this.selectedResp = '';
    this.selectedIndex = -1;
  }
}
