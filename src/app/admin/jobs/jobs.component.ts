import { Component } from '@angular/core';
import { DBListBasecomponent } from '../DBListBaseComponent';
import { JobPosting } from 'src/app/models/job.model';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css'],
  providers: [ DBListBasecomponent ]
})
export class JobsComponent extends DBListBasecomponent<JobPosting> {

  getType() {
    return JobPosting.prototype;
  }
  
}
