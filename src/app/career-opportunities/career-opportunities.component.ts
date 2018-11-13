import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { JobPosting } from '../models/job.model';

@Component({
  selector: 'app-career-opportunities',
  templateUrl: './career-opportunities.component.html',
  styleUrls: ['./career-opportunities.component.css']
})
export class CareerOpportunitiesComponent implements OnInit {
  availableJobs: JobPosting[];

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.availableJobs = [];
    this.appService.getDocListFromDB<JobPosting>(JobPosting.prototype).subscribe(
      (doc) => {
        doc.forEach(          
          (model) => {
            const tmp = model.payload.doc.data();
            this.availableJobs.push(tmp);
          }
        )}
    );
  }

}
