import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule, Search, Bell, UserCircle2, PanelLeftClose, PanelLeftOpen, ArrowUpRight, BriefcaseBusiness, FileText, Users, BarChart3, CalendarRange, StickyNote, Settings, LayoutDashboard, Building2, FolderKanban, CheckSquare, ClipboardList, Sparkles, SearchX } from 'lucide-angular';
import { SearchService } from '../services/search.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet, RouterLink, RouterLinkActive, LucideAngularModule],
  template: `
    <div class="app-shell">
      <aside class="sidebar" [class.sidebar-collapsed]="collapsed">
        <div class="brand-row">
          <div class="brand-mark">L</div>
          <div class="brand-copy" *ngIf="!collapsed">
            <span class="brand-name">LINDBERG</span>
            <span class="brand-subtitle">Business Suite</span>
          </div>
          <button class="icon-button collapse-button" (click)="collapsed = !collapsed" aria-label="Toggle sidebar">
            <lucide-icon [img]="collapsed ? PanelLeftOpen : PanelLeftClose" [size]="18"></lucide-icon>
          </button>
        </div>

        <nav class="nav" aria-label="Sidebar navigation">
          <a *ngFor="let item of navItems"
             [routerLink]="item.route"
             routerLinkActive="active"
             [routerLinkActiveOptions]="{ exact: false }"
             class="nav-item"
             [title]="item.label">
            <lucide-icon [img]="item.icon" [size]="17"></lucide-icon>
            <span *ngIf="!collapsed">{{ item.label }}</span>
          </a>
        </nav>
      </aside>

      <div class="main-panel">
        <header class="topbar">
          <div class="search-wrap">
            <lucide-icon [img]="Search" [size]="17"></lucide-icon>
            <input type="search" placeholder="Search customers, leads, opportunities..." aria-label="Global search" [(ngModel)]="query" (ngModelChange)="runSearch($event)" />
            <div class="search-results" *ngIf="query.trim() || searchOpened">
              <div class="results-header">
                <span>Search</span>
                <span class="result-count">{{ results.length }} matches</span>
              </div>
              <div class="result-item" *ngFor="let result of results; let i = index" [attr.data-index]="i">
                <span class="result-type">{{ result.type }}</span>
                <strong>{{ result.label }}</strong>
                <small>{{ result.sublabel }}</small>
              </div>
              <div class="empty-results" *ngIf="results.length === 0 && query.trim()">
                <lucide-icon [img]="SearchX" [size]="18"></lucide-icon>
                No matches found.
              </div>
            </div>
          </div>

          <div class="topbar-actions">
            <button class="icon-button" aria-label="Notifications">
              <lucide-icon [img]="Bell" [size]="17"></lucide-icon>
            </button>
            <div class="profile-box">
              <div class="avatar-circle">AM</div>
              <div class="profile-detail">
                <strong>Alicia Martin</strong>
                <span>Sales Lead</span>
              </div>
            </div>
          </div>
        </header>

        <main class="page-content">
          <router-outlet />
        </main>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        min-height: 100vh;
        background: #f3f6fb;
      }
      .app-shell {
        display: flex;
        min-height: 100vh;
        background: #f5f7fb;
        color: #1f2a37;
      }
      .sidebar {
        width: 260px;
        background: linear-gradient(180deg, #0f172a 0%, #111c34 100%);
        color: #e2e8f0;
        padding: 1.25rem 0.85rem;
        border-right: 1px solid rgba(148, 163, 184, 0.18);
        transition: width 0.2s ease;
      }
      .sidebar-collapsed {
        width: 92px;
      }
      .brand-row {
        display: flex;
        align-items: center;
        gap: 0.8rem;
        padding: 0.4rem 0.5rem 1rem;
        border-bottom: 1px solid rgba(148,163,184,0.14);
        margin-bottom: 1rem;
      }
      .brand-mark {
        width: 38px;
        height: 38px;
        border-radius: 12px;
        display: grid;
        place-items: center;
        background: linear-gradient(135deg, #4f8ef7, #1d4ed8);
        color: white;
        font-weight: 800;
        letter-spacing: 0.08em;
      }
      .brand-copy {
        display: flex;
        flex-direction: column;
        flex: 1;
      }
      .brand-name {
        font-weight: 700;
        letter-spacing: 0.16em;
        font-size: 0.75rem;
      }
      .brand-subtitle {
        font-size: 0.68rem;
        color: #a8b8d3;
      }
      .nav {
        display: flex;
        flex-direction: column;
        gap: 0.35rem;
        margin-top: 0.6rem;
      }
      .nav-item {
        display: flex;
        align-items: center;
        gap: 0.8rem;
        padding: 0.78rem 0.9rem;
        border-radius: 12px;
        color: #dbeafe;
        text-decoration: none;
        transition: all 0.2s ease;
      }
      .nav-item:hover,
      .nav-item.active {
        background: rgba(96, 165, 250, 0.18);
        color: #fff;
        box-shadow: inset 0 0 0 1px rgba(96, 165, 250, 0.26);
      }
      .main-panel {
        flex: 1;
        min-width: 0;
      }
      .topbar {
        height: 76px;
        background: rgba(255,255,255,0.8);
        backdrop-filter: blur(10px);
        border-bottom: 1px solid rgba(148, 163, 184, 0.2);
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 1.5rem;
        position: sticky;
        top: 0;
        z-index: 10;
      }
      .search-wrap {
        position: relative;
        width: min(640px, 58vw);
        display: flex;
        align-items: center;
        gap: 0.7rem;
        border: 1px solid #dfe7f5;
        background: #f8fafc;
        border-radius: 12px;
        padding: 0.75rem 0.9rem;
      }
      .search-wrap input {
        flex: 1;
        border: none;
        background: transparent;
        color: #18212f;
        font-size: 0.95rem;
        outline: none;
      }
      .search-results {
        position: absolute;
        top: calc(100% + 0.7rem);
        left: 0;
        right: 0;
        background: white;
        border: 1px solid #e2e8f0;
        border-radius: 14px;
        box-shadow: 0 18px 36px rgba(15, 23, 42, 0.1);
        padding: 0.7rem;
        z-index: 20;
      }
      .results-header {
        display: flex;
        justify-content: space-between;
        font-size: 0.7rem;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        color: #64748b;
        padding: 0 0.3rem 0.55rem;
      }
      .result-item {
        display: flex;
        flex-direction: column;
        gap: 0.2rem;
        border-radius: 10px;
        padding: 0.7rem 0.75rem;
        background: #f8fafc;
        margin-bottom: 0.5rem;
      }
      .result-type {
        font-size: 0.65rem;
        color: #3b82f6;
        text-transform: uppercase;
        letter-spacing: 0.08em;
      }
      .empty-results {
        display: flex;
        align-items: center;
        gap: 0.6rem;
        padding: 0.9rem;
        color: #64748b;
      }
      .topbar-actions {
        display: flex;
        align-items: center;
        gap: 1rem;
      }
      .icon-button {
        width: 38px;
        height: 38px;
        border-radius: 10px;
        border: 1px solid #e2e8f0;
        background: white;
        display: grid;
        place-items: center;
        color: #334155;
        cursor: pointer;
      }
      .profile-box {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        padding: 0.45rem 0.7rem;
        border-radius: 12px;
        border: 1px solid #e2e8f0;
        background: #fff;
      }
      .avatar-circle {
        width: 38px;
        height: 38px;
        border-radius: 50%;
        background: linear-gradient(135deg, #dbeafe, #bfdbfe);
        color: #1d4ed8;
        display: grid;
        place-items: center;
        font-size: 0.72rem;
        font-weight: 700;
      }
      .profile-detail {
        display: flex;
        flex-direction: column;
      }
      .profile-detail strong {
        font-size: 0.78rem;
      }
      .profile-detail span {
        font-size: 0.68rem;
        color: #64748b;
      }
      .page-content {
        padding: 1.5rem;
      }
      @media (max-width: 960px) {
        .sidebar {
          position: fixed;
          left: 0;
          top: 0;
          bottom: 0;
          z-index: 50;
          transform: translateX(0);
        }
        .sidebar-collapsed {
          width: 72px;
        }
        .main-panel {
          width: 100%;
        }
      }
    `,
  ],
})
export class AppShellComponent {
  collapsed = false;
  query = '';
  searchOpened = false;
  results: any[] = [];

  readonly Search = Search;
  readonly Bell = Bell;
  readonly SearchX = SearchX;
  readonly PanelLeftClose = PanelLeftClose;
  readonly PanelLeftOpen = PanelLeftOpen;
  readonly LayoutDashboard = LayoutDashboard;
  readonly Users = Users;
  readonly Building2 = Building2;
  readonly FileText = FileText;
  readonly FolderKanban = FolderKanban;
  readonly CheckSquare = CheckSquare;
  readonly ClipboardList = ClipboardList;
  readonly CalendarRange = CalendarRange;
  readonly StickyNote = StickyNote;
  readonly BarChart3 = BarChart3;
  readonly Settings = Settings;

  navItems = [
    { label: 'Dashboard', route: '/dashboard', icon: this.LayoutDashboard },
    { label: 'Customers', route: '/customers', icon: this.Users },
    { label: 'Companies', route: '/companies', icon: this.Building2 },
    { label: 'Leads', route: '/leads', icon: this.FileText },
    { label: 'Opportunities', route: '/opportunities', icon: this.FolderKanban },
    { label: 'Tasks', route: '/tasks', icon: this.CheckSquare },
    { label: 'Activities', route: '/activities', icon: this.ClipboardList },
    { label: 'Appointments', route: '/appointments', icon: this.CalendarRange },
    { label: 'Notes', route: '/notes', icon: this.StickyNote },
    { label: 'Reports', route: '/reports', icon: this.BarChart3 },
    { label: 'Settings', route: '/settings', icon: this.Settings },
  ];

  constructor(private searchService: SearchService) {
    this.searchService.results$.pipe(takeUntilDestroyed()).subscribe((items) => {
      this.results = items.map((item) => ({ ...item }));
    });
  }

  runSearch(value: string): void {
    this.query = value;
    this.searchOpened = value.trim().length > 0;
    this.searchService.search(value);
  }
}
