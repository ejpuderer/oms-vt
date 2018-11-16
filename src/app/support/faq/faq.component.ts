import { Component } from '@angular/core';
import { FAQ } from 'src/app/models/faq.model';
import { ShowListBase } from 'src/app/show-list-base';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent extends ShowListBase<FAQ> {
  
  headerList: string[];

  getType() { return FAQ.prototype }

  onListUpdate() {
    this.headerList = [];
    this.availableDocs.sort((a, b) => { 
      let returnVal = 0;
      returnVal = this.compare(a.section, b.section);
      if (returnVal !== 0) return returnVal;
      return returnVal;
    })
    let tmpHeader = "";
    for (let doc of this.availableDocs) {
      if (tmpHeader !== doc.section) {
        this.headerList.push(doc.section);
        tmpHeader = doc.section;
      }
    }
  }

  filterBy(section: string):FAQ[] {
    return this.availableDocs.filter((d) => d.section == section);
  }
}
