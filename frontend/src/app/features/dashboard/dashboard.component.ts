import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RouterLink } from '@angular/router';
import { ActivityItem, DashboardSummary, Lead, TaskItem } from '../../models/crm';
import { CrmDataService } from '../../services/crm-data.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="page-header">
      <div>
        <p class="eyebrow">Overview</p>
        <h1>Business dashboard</h1>
      </div>
      <button class="primary-button" routerLink="/customers">New customer</button>
    </section>

    <div class="stats-grid" *ngIf="summary$ | async as summary; else loading">
      <article class="stat-card" *ngFor="let stat of summary.stats">
        <div class="stat-topline">
          <span class="stat-label">{{ stat.title }}</span>
          <span class="stat-badge" [ngClass]="stat.tone">{{ stat.change }}</span>
        </div>
        <div class="stat-value-row">
          <strong>{{ stat.value }}</strong>
          <span class="stat-icon">{{ stat.icon }}</span>
        </div>
      </article>
    </div>

    <div class="content-grid" *ngIf="summary$ | async as summary">
      <section class="panel large-panel">
        <div class="panel-head">
          <h2>Monthly revenue</h2>
          <span class="muted">Last 6 months</span>
        </div>
        <div class="bar-chart" aria-label="Monthly revenue chart">
          <div class="bar-group" *ngFor="let item of summary.revenue">
            <span class="bar" [style.height.%]="Math.min((item.value / 39000) * 100, 100)"></span>
            <span class="bar-label">{{ item.label }}</span>
          </div>
        </div>
      </section>

      <section class="panel">
        <div class="panel-head">
          <h2>Opportunity pipeline</h2>
          <span class="muted">Current stages</span>
        </div>
        <div class="pipeline-list">
          <div class="pipeline-row" *ngFor="let item of summary.pipeline">
            <div class="pipeline-labels">
              <span>{{ item.stage }}</span>
              <strong>{{ item.value }}</strong>
            </div>
            <div class="progress-track">
              <span [style.width.%]="item.percentage"></span>
            </div>
          </div>
        </div>
      </section>
    </div>

    <div class="content-grid lower-grid" *ngIf="summary$ | async as summary">
      <section class="panel">
        <div class="panel-head">
          <h2>Recent activities</h2>
          <a routerLink="/activities">View all</a>
        </div>
        <ul class="list">
          <li *ngFor="let item of summary.activities">
            <div class="dot"></div>
            <div>
              <strong>{{ item.subject }}</strong>
              <small>{{ item.customer }} · {{ item.date }}</small>
            </div>
          </li>
        </ul>
      </section>

      <section class="panel">
        <div class="panel-head">
          <h2>New leads</h2>
        </div>
        <ul class="list">
          <li *ngFor="let lead of summary.leads">
            <div class="avatar-box">{{ getInitials(lead.name) }}</div>
            <div>
              <strong>{{ lead.name }}</strong>
              <small>{{ lead.company }}</small>
            </div>
          </li>
        </ul>
      </section>

      <section class="panel">
        <div class="panel-head">
          <h2>Pending tasks</h2>
        </div>
        <ul class="list">
          <li *ngFor="let task of summary.tasks">
            <div class="task-mark" [ngClass]="task.priority.toLowerCase()">{{ task.priority[0] }}</div>
            <div>
              <strong>{{ task.title }}</strong>
              <small>{{ task.assignedTo }}</small>
            </div>
          </li>
        </ul>
      </section>
    </div>

    <ng-template #loading>
      <div class="loading-box">Loading dashboard…</div>
    </ng-template>
  `,
  styles: [
    `
      .page-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1.3rem;
      }
      .eyebrow {
        margin: 0 0 0.4rem;
        color: #3b82f6;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        font-size: 0.7rem;
        font-weight: 700;
      }
      h1 {
        margin: 0;
        font-size: clamp(2rem, 3vw, 2.6rem);
        color: #172033;
      }
      .primary-button {
        background: linear-gradient(135deg, #2563eb, #1d4ed8);
        color: white;
        border: none;
        border-radius: 12px;
        padding: 0.8rem 1.15rem;
        font-weight: 600;
        box-shadow: 0 10px 30px rgba(37, 99, 235, 0.2);
      }
      .stats-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
        gap: 1rem;
        margin-bottom: 1.2rem;
      }
      .stat-card {
        background: white;
        border: 1px solid #e2e8f0;
        border-radius: 18px;
        padding: 1.1rem 1rem;
        box-shadow: 0 10px 30px rgba(15, 23, 42, 0.025);
      }
      .stat-topline {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
        color: #64748b;
        font-size: 0.8rem;
      }
      .stat-badge {
        border-radius: 999px;
        padding: 0.3rem 0.55rem;
        font-weight: 700;
        font-size: 0.7rem;
      }
      .stat-badge.positive { background: rgba(16, 185, 129, 0.1); color: #047857; }
      .stat-badge.neutral { background: rgba(59, 130, 246, 0.1); color: #1d4ed8; }
      .stat-badge.warning { background: rgba(245, 158, 11, 0.1); color: #b45309; }
      .stat-value-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .stat-value-row strong {
        font-size: 2rem;
        color: #111827;
      }
      .stat-icon {
        display: inline-flex;
        width: 36px;
        height: 36px;
        border-radius: 12px;
        align-items: center;
        justify-content: center;
        background: #edf4ff;
        color: #2563eb;
        font-size: 0.95rem;
      }
      .content-grid {
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 1rem;
        margin-bottom: 1rem;
      }
      .lower-grid {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }
      .panel {
        background: white;
        border: 1px solid #e2e8f0;
        border-radius: 18px;
        padding: 1rem 1.1rem;
      }
      .large-panel {
        min-height: 280px;
      }
      .panel-head {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
      }
      .panel-head h2 {
        margin: 0;
        color: #172033;
        font-size: 1.05rem;
      }
      .muted, .panel-head a {
        color: #64748b;
        font-size: 0.8rem;
        text-decoration: none;
      }
      .bar-chart {
        height: 220px;
        display: flex;
        align-items: end;
        justify-content: space-between;
        gap: 0.75rem;
        padding-top: 1rem;
      }
      .bar-group {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.6rem;
      }
      .bar {
        width: 100%;
        min-height: 18px;
        max-width: 42px;
        display: block;
        border-radius: 10px 10px 0 0;
        background: linear-gradient(180deg, #93c5fd, #2563eb);
      }
      .bar-label {
        font-size: 0.72rem;
        color: #64748b;
      }
      .pipeline-list {
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
      }
      .pipeline-row {
        display: flex;
        flex-direction: column;
        gap: 0.45rem;
      }
      .pipeline-labels {
        display: flex;
        justify-content: space-between;
        color: #334155;
        font-size: 0.82rem;
      }
      .progress-track {
        width: 100%;
        height: 10px;
        border-radius: 999px;
        background: #e2e8f0;
        overflow: hidden;
      }
      .progress-track span {
        display: block;
        height: 100%;
        border-radius: inherit;
        background: linear-gradient(90deg, #60a5fa, #2563eb);
      }
      .list {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 0.9rem;
      }
      .list li {
        display: flex;
        align-items: center;
        gap: 0.75rem;
      }
      .dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: #3b82f6;
      }
      .avatar-box {
        width: 32px;
        height: 32px;
        border-radius: 10px;
        background: #e0edff;
        color: #1d4ed8;
        display: grid;
        place-items: center;
        font-size: 0.68rem;
        font-weight: 700;
      }
      .task-mark {
        width: 28px;
        height: 28px;
        border-radius: 8px;
        display: grid;
        place-items: center;
        font-weight: 700;
      }
      .task-mark.low { background: #dcfce7; color: #166534; }
      .task-mark.medium { background: #dbeafe; color: #1d4ed8; }
      .task-mark.high { background: #fef3c7; color: #b45309; }
      .task-mark.urgent { background: #fee2e2; color: #b91c1c; }
      .list strong {
        display: block;
        margin-bottom: 0.1rem;
        color: #0f172a;
      }
      .list small {
        color: #64748b;
      }
      .loading-box {
        background: white;
        border: 1px solid #e2e8f0;
        border-radius: 16px;
        padding: 2rem;
        color: #64748b;
      }
      @media (max-width: 820px) {
        .content-grid,
        .lower-grid {
          grid-template-columns: 1fr;
        }
        .page-header {
          flex-direction: column;
          align-items: flex-start;
          gap: 0.8rem;
        }
      }
    `,
  ],
})
export class DashboardComponent implements OnInit {
  summary$!: Observable<DashboardSummary>;
  readonly Math = Math;

  constructor(private crmDataService: CrmDataService) {}

  getInitials(name: string): string {
    return (name ?? '')
      .split(' ')
      .filter(Boolean)
      .map((part) => part[0]?.toUpperCase() ?? '')
      .slice(0, 2)
      .join('');
  }

  ngOnInit(): void {
    this.summary$ = this.crmDataService.getDashboardSummary();
  }
}
