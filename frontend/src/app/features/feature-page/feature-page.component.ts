import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-feature-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="page-header">
      <div>
        <p class="eyebrow">Workspace</p>
        <h1>{{ title }}</h1>
      </div>
      <button class="primary-button">Create {{ title.slice(0, -1) }}</button>
    </section>

    <section class="panel">
      <p class="lead">{{ description }}</p>
      <div class="placeholder-grid">
        <article class="metric-box" *ngFor="let item of metrics">
          <span>{{ item.label }}</span>
          <strong>{{ item.value }}</strong>
        </article>
      </div>
    </section>
  `,
  styles: [
    `
      .page-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1.5rem;
      }
      .eyebrow {
        margin: 0 0 0.5rem;
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
        border: none;
        background: linear-gradient(135deg, #2563eb, #1d4ed8);
        color: white;
        padding: 0.8rem 1.1rem;
        border-radius: 12px;
        font-weight: 600;
        box-shadow: 0 12px 24px rgba(37, 99, 235, 0.18);
      }
      .panel {
        background: white;
        border: 1px solid #e2e8f0;
        border-radius: 18px;
        padding: 1.4rem;
      }
      .lead {
        margin: 0 0 1.5rem;
        color: #475569;
        font-size: 1rem;
      }
      .placeholder-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
        gap: 1rem;
      }
      .metric-box {
        background: linear-gradient(180deg, #f8fafc, #eef7ff);
        border: 1px solid #dbeafe;
        border-radius: 14px;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        gap: 0.45rem;
      }
      .metric-box span {
        color: #64748b;
        font-size: 0.8rem;
      }
      .metric-box strong {
        font-size: 2rem;
        color: #0f172a;
      }
    `,
  ],
})
export class FeaturePageComponent implements OnInit {
  title = 'Workspace';
  description = 'Review the current operating view and move work forward.';
  metrics = [
    { label: 'Active records', value: '128' },
    { label: 'This week', value: '24' },
    { label: 'Open items', value: '12' },
    { label: 'Forecast', value: '$172k' },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.title = data['pageTitle'] ?? this.title;
      this.description = data['pageDescription'] ?? this.description;
    });
  }
}
