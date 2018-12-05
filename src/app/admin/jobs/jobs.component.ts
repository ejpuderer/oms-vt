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
    const job = new JobPosting(data);
    if (job.datePosted) job.datePosted = new Date(data["datePosted"].seconds * 1000);
    return job;
  }

}
