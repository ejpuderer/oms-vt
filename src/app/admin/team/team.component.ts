import { Component } from '@angular/core';
import { DBListBasecomponent } from '../DBListBaseComponent';
import { TeamMember } from 'src/app/models/team.model';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent extends DBListBasecomponent<TeamMember> {

  getType() {
    return TeamMember.prototype;
  }

  onModelUpdate(data: any) {
    return new TeamMember(data);
  }

}