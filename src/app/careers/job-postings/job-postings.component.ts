import { AppService } from 'src/app/app.service';
import { Component } from '@angular/core';
import { JobPosting } from 'src/app/models/job.model';
import { ShowListBase } from 'src/app/show-list-base';

@Component({
  selector: 'app-job-postings',
  templateUrl: './job-postings.component.html',
  styleUrls: ['./job-postings.component.css']
})
export class JobPostingsComponent extends ShowListBase<JobPosting> {

  schema = [];

  expandedView: boolean[];
  expandedIndex: number[];

  constructor(appService: AppService) { 
    super(appService);
    
  }
  
  getType() { return JobPosting.prototype }

  onListUpdate() {
    this.expandedView = [];
    this.expandedView.fill(false, 0, this.availableDocs.length);
    this.schema = [];
    for (let job of this.availableDocs) {
      this.schema.push({
        '@context': 'http://schema.org',
        '@type': 'JobPosting',
        "title": job.title,
        "baseSalary": job.salary,
        "salaryCurrency": "USD",
        "workHours": "40 hours per week",
        "description": job.description,
        "educationRequirements": job.educationRequirements,
        "employmentType": job.employmentType,
        "experienceRequirements": { ...job.experienceRequirements },
        "responsibilities": { ...job.responsibilities }
      });
    }
  }

  onModelUpdate(data: any) {
    const job = new JobPosting(data);
    if (job.datePosted) job.datePosted = new Date(data["datePosted"].seconds * 1000);
    return job;
  }

  expandClick(index: number) {
    this.expandedView[index] = !this.expandedView[index];
  }
}