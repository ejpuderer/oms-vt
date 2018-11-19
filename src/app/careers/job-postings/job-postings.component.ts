import { Component } from '@angular/core';
import { JobPosting } from 'src/app/models/job.model';
import { ShowListBase } from 'src/app/show-list-base';

@Component({
  selector: 'app-job-postings',
  templateUrl: './job-postings.component.html',
  styleUrls: ['./job-postings.component.css']
})
export class JobPostingsComponent extends ShowListBase<JobPosting> {
  
  getType() { return JobPosting.prototype }

  onListUpdate() { }

  onModelUpdate(data: any) {
    return new JobPosting(data);
  }

}