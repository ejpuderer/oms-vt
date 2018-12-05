import { JobPosting } from './../../../models/job.model';
import { Component, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {

  selectedExp: String;
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
    if (!this.jobValue.experienceRequirements) this.jobValue.experienceRequirements = [];
    this.jobChange.emit(this.jobValue);
  }

  addExp() {
    this.jobValue.experienceRequirements.push(this.selectedExp);
    this.update()
  }

  updateExp(index: number) {
    this.jobValue.experienceRequirements[index] = this.selectedExp;
    this.update()
  }

  deleteExp(index: number) {
    this.jobValue.experienceRequirements.splice(index, 1);
    this.update()
  }

  update() {
    this.jobChange.emit(this.jobValue);
    this.clear();
  }

  clear() {
    this.selectedExp = '';
    this.selectedIndex = -1;
  }

}
