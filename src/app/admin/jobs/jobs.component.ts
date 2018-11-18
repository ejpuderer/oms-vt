import { Component } from '@angular/core';
import { DBListBasecomponent } from '../DBListBaseComponent';
import { JobPosting } from 'src/app/models/job.model';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent extends DBListBasecomponent<JobPosting> {

  getType() {
    return JobPosting.prototype;
  }
  
  onModelUpdate(data: any) {
    return new JobPosting(data);
  }

}
