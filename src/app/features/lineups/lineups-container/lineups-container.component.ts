import { Component, OnInit } from '@angular/core';
import { AgentsService } from '@services/agents.service';
import { Agent } from '@models/agent';
import { MetaService } from '@services/meta.service';

@Component({
  selector: 'app-lineups-container',
  templateUrl: './lineups-container.component.html',
  styleUrls: ['./lineups-container.component.scss'],
})
export class LineupsContainerComponent implements OnInit {
  constructor(
    private agentsService: AgentsService,
    private metaService: MetaService
  ) {}

  agents: Agent[];
  filteredAgents: Agent[];

  ngOnInit(): void {
    this.generateTags();

    if (this.agentsService.agents.length) {
      this.agents = this.agentsService.agents;
      this.filteredAgents = this.agents;
    } else {
      this.agentsService.getAllAgents().subscribe((agents) => {
        this.agents = agents;
        this.filteredAgents = this.agents;
      });
    }
  }

  searchAgent(e: Event) {
    const filterText = (e.target as HTMLInputElement).value;
    this.filteredAgents = this.agents.filter((agent) =>
      agent.displayName.toLowerCase().includes(filterText.toLowerCase())
    );
  }

  generateTags() {
    this.metaService.generateTags({
      title: 'Lineups',
      description: 'Find best lineups for every agent and win games easily',
      image: 'https://valoranthelper.com.ge/assets/images/lineup.webp',
    });
  }
}
