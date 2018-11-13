import { Component, OnInit } from '@angular/core';
import { JobPosting } from '../models/job.model';
import { AppService } from '../app.service';
import { firebaseList } from '../models/firebaseList.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  
  expandedView: boolean[] = [false];
  availableJobs: firebaseList<JobPosting>[];
  selectedJob: firebaseList<JobPosting>;
  selectedJobIndex = -1;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.getDocListFromDB<JobPosting>(JobPosting.prototype).subscribe(
      (doc) => {
        this.availableJobs = [];
        this.clearJob();
        doc.forEach(
          (model) => {
            this.availableJobs.push(
              {
                name: model.payload.doc.id,
                data: new JobPosting(model.payload.doc.data())
              }
            )
          }
        );
      }
    );
  }

  addUpdateJob() {
    if (this.selectedJobIndex == -1) {
      this.appService.addDataToDatabase<JobPosting>(this.selectedJob.data).then();
    } else {
      this.appService.updateDatabase<JobPosting>(this.selectedJob.name, this.selectedJob.data).then();
    }
  }

  removeJob() {
    this.appService.removeFromDB(JobPosting.prototype, this.selectedJob.name);
    this.availableJobs.splice(this.selectedJobIndex);
    this.clearJob();
  }

  clearJob() {
    this.selectedJobIndex = -1;
    this.selectedJob = {
      name: "",
      data: new JobPosting({})
    }
  }

  expandClick(index: number) {
    this.expandedView[index] = !this.expandedView[index];
  }
}
