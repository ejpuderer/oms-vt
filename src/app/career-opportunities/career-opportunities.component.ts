import { Component } from '@angular/core';
import { JobPosting } from '../models/job.model';
import { ShowListBase } from '../show-list-base';

@Component({
  selector: 'app-career-opportunities',
  templateUrl: './career-opportunities.component.html',
  styleUrls: ['./career-opportunities.component.css']
})
export class CareerOpportunitiesComponent extends ShowListBase<JobPosting> {
  
  getType() { return JobPosting.prototype }

  onListUpdate() { }

}
