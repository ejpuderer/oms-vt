import { Component, OnInit } from '@angular/core';
import { ShowListBase } from 'src/app/show-list-base';
import { TeamMember } from 'src/app/models/team.model';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent extends ShowListBase<TeamMember> {
  
  getType(): TeamMember {
    return TeamMember.prototype;
  }  
  
  onListUpdate() { }
  
  onModelUpdate(data: any): TeamMember {
    return new TeamMember(data);
  }

  getImg(member: TeamMember) {
    return '../../../assets/team/' + member.firstName + ' ' + member.lastName + '.jpg';
  }

}
