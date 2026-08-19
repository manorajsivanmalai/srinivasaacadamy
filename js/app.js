/**
 * app.js
 * Clean Light-Themed Presentation Controller with Proposal Boundary Gating
 */

class PresentationApp {
  constructor(data) {
    this.data = data;
    this.currentIndex = 0;
    this.totalSlides = data.slides.length;
    this.isNotesOpen = false;
    this.isGridOpen = false;
    this.isShortcutsOpen = false;
    this.isBoundaryModalOpen = false;
    this.touchStartX = 0;
    this.touchEndX = 0;

    this.initElements();
    this.renderCategoryPills();
    this.renderSlides();
    this.renderGridModal();
    this.initEventListeners();
    this.goToSlide(0, false);
  }

  initElements() {
    this.stage = document.getElementById('slides-stage');
    this.progressBar = document.getElementById('slide-progress');
    this.slideCounter = document.getElementById('slide-counter');
    this.currentCategoryBadge = document.getElementById('current-category-badge');
    this.categorySelect = document.getElementById('category-select');
    this.categoryPills = document.getElementById('category-pills');
    this.notesDrawer = document.getElementById('notes-drawer');
    this.notesContent = document.getElementById('notes-content');
    this.gridModal = document.getElementById('grid-modal');
    this.gridContainer = document.getElementById('grid-container');
    this.shortcutsModal = document.getElementById('shortcuts-modal');
    this.boundaryModal = document.getElementById('boundary-modal');
    this.boundaryText = document.getElementById('boundary-text');
    this.boundaryNextBtn = document.getElementById('boundary-next-btn');
    this.prevBtn = document.getElementById('prev-slide-btn');
    this.nextBtn = document.getElementById('next-slide-btn');
    this.fullscreenBtn = document.getElementById('fullscreen-btn');
    this.notesToggleBtn = document.getElementById('notes-toggle-btn');
    this.gridToggleBtn = document.getElementById('grid-toggle-btn');
    this.shortcutsToggleBtn = document.getElementById('shortcuts-toggle-btn');
  }

  renderCategoryPills() {
    if (!this.categoryPills) return;
    this.categoryPills.innerHTML = this.data.categories.map(cat => `
      <button 
        data-category-id="${cat.id}"
        class="category-pill-btn px-3 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 whitespace-nowrap bg-slate-100 text-slate-700 hover:bg-blue-50 hover:text-blue-700 border border-slate-200"
      >
        <span>${cat.name}</span>
      </button>
    `).join('');

    this.categoryPills.querySelectorAll('.category-pill-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const catId = btn.dataset.categoryId;
        this.hideBoundaryModal();
        this.goToCategory(catId);
      });
    });

    if (this.categorySelect) {
      this.categorySelect.innerHTML = this.data.categories.map(cat => `
        <option value="${cat.id}">${cat.name}</option>
      `).join('');

      this.categorySelect.addEventListener('change', (e) => {
        this.hideBoundaryModal();
        this.goToCategory(e.target.value);
      });
    }
  }

  renderSlides() {
    this.stage.innerHTML = '';
    this.data.slides.forEach((slide, index) => {
      const slideEl = document.createElement('div');
      slideEl.className = `slide-wrapper ${index === 0 ? 'active' : ''}`;
      slideEl.id = `slide-wrapper-${index}`;
      slideEl.innerHTML = this.generateSlideHTML(slide, index);
      this.stage.appendChild(slideEl);
    });

    this.initPrototypes();
  }

  generateSlideHTML(slide, index) {
    let bodyContent = '';

    switch (slide.layout) {
      case 'hero':
        bodyContent = this.renderHeroLayout(slide);
        break;
      case 'audit':
        bodyContent = this.renderAuditLayout(slide);
        break;
      case 'sitemap-compare':
        bodyContent = this.renderSitemapCompareLayout(slide);
        break;
      case 'feature-grid':
        bodyContent = this.renderFeatureGridLayout(slide);
        break;
      case 'app-audit':
        bodyContent = this.renderAppAuditLayout(slide);
        break;
      case 'flow-diagram':
        bodyContent = this.renderFlowDiagramLayout(slide);
        break;
      case 'sep-overview':
        bodyContent = this.renderSepOverviewLayout(slide);
        break;
      case 'pillars-grid':
        bodyContent = this.renderPillarsGridLayout(slide);
        break;
      case 'urgent-audit':
        bodyContent = this.renderUrgentAuditLayout(slide);
        break;
      case 'online-solutions':
        bodyContent = this.renderOnlineSolutionsLayout(slide);
        break;
      case 'techmaax-overview':
        bodyContent = this.renderTechmaaxOverviewLayout(slide);
        break;
      case 'value-table':
        bodyContent = this.renderValueTableLayout(slide);
        break;
      case 'sap-audit':
        bodyContent = this.renderSapAuditLayout(slide);
        break;
      case 'sap-solutions':
        bodyContent = this.renderSapSolutionsLayout(slide);
        break;
      case 'hostel-overview':
        bodyContent = this.renderHostelOverviewLayout(slide);
        break;
      case 'hostel-features':
        bodyContent = this.renderHostelFeaturesLayout(slide);
        break;
      case 'tech-stack':
        bodyContent = this.renderTechStackLayout(slide);
        break;
      case 'roadmap':
        bodyContent = this.renderRoadmapLayout(slide);
        break;
      case 'demo-gated-notes':
        bodyContent = this.renderDemoGatedNotesLayout(slide);
        break;
      case 'demo-student-dashboard':
        bodyContent = this.renderDemoStudentDashboardLayout(slide);
        break;
      case 'demo-sep-modules':
        bodyContent = this.renderDemoSepModulesLayout(slide);
        break;
      case 'demo-video-course':
        bodyContent = this.renderDemoVideoCourseLayout(slide);
        break;
      case 'demo-branch-locator':
        bodyContent = this.renderDemoBranchLocatorLayout(slide);
        break;
      case 'demo-sap-viewer':
        bodyContent = this.renderDemoSapViewerLayout(slide);
        break;
      case 'demo-hostel-finder':
        bodyContent = this.renderDemoHostelFinderLayout(slide);
        break;
      case 'demo-sa3d-quote':
        bodyContent = this.renderDemoSa3dQuoteLayout(slide);
        break;
      case 'demo-selfie-admin':
        bodyContent = this.renderDemoSelfieAdminLayout(slide);
        break;
      default:
        bodyContent = `<div class="p-6 text-slate-600">Content for ${slide.title}</div>`;
    }

    return `
      <div class="slide-card flex flex-col justify-between">
        <!-- Slide Header with Prominent Domain Highlight -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-200 pb-4 mb-4 gap-3">
          <div>
            <div class="flex flex-wrap items-center gap-2 mb-1.5">
              <!-- Domain Name Highlighted Badge -->
              <span class="domain-highlight-banner">
                <svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/></svg>
                <span>${slide.domain || 'srinivasaacademy.com'}</span>
              </span>

              <span class="glass-badge text-slate-700 bg-slate-100 border border-slate-200 text-[11px]">
                ${slide.tag}
              </span>
              <span class="text-xs text-slate-500 font-mono">Slide ${index + 1} of ${this.totalSlides}</span>
            </div>
            <h1 class="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight">${slide.title}</h1>
            <p class="text-xs sm:text-sm text-slate-500 mt-1">${slide.subtitle}</p>
          </div>
          <div class="hidden sm:flex items-center gap-2 flex-shrink-0">
            <button onclick="window.app.toggleSpeakerNotes()" class="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 text-xs font-semibold flex items-center gap-1.5" title="Presenter Notes (N)">
              <svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
              <span>Notes</span>
            </button>
          </div>
        </div>

        <!-- Slide Body -->
        <div class="flex-1 overflow-y-auto pr-1 text-slate-800">
          ${bodyContent}
        </div>
      </div>
    `;
  }

  // --- Slide Layout Renderers (Clean Light Theme) ---

  renderHeroLayout(slide) {
    const c = slide.content;
    return `
      <div class="space-y-6">
        <div class="p-6 rounded-2xl bg-gradient-to-r from-blue-50 via-indigo-50 to-slate-50 border border-blue-200">
          <h2 class="text-xl lg:text-2xl font-bold text-blue-900 mb-2">${c.headline}</h2>
          <p class="text-slate-700 text-sm lg:text-base leading-relaxed">${c.description}</p>
        </div>

        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
          ${c.stats.map(s => `
            <div class="glass-panel p-4 text-center border-l-4 border-blue-600 bg-white shadow-sm">
              <div class="text-2xl lg:text-3xl font-black text-slate-900">${s.value}</div>
              <div class="text-xs font-bold text-blue-700 uppercase tracking-wide mt-1">${s.label}</div>
              <div class="text-xs text-slate-500 mt-0.5">${s.sub}</div>
            </div>
          `).join('')}
        </div>

        <div>
          <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">9 Portals Included in this Comprehensive Proposal</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            ${c.portalsList.map((p, i) => `
              <div class="glass-panel glass-panel-hover p-3.5 flex items-start gap-3 cursor-pointer bg-white" onclick="window.app.goToCategory('${this.getCategoryByPortalIndex(i)}')">
                <div class="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm flex-shrink-0">
                  ${i + 1}
                </div>
                <div class="min-w-0">
                  <div class="text-xs sm:text-sm font-bold text-slate-900 truncate font-mono">${p.name}</div>
                  <div class="text-xs text-blue-600 font-semibold">${p.type}</div>
                  <div class="text-xs text-slate-500 mt-0.5 truncate">${p.status}</div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }

  getCategoryByPortalIndex(i) {
    const cats = [
      'srinivasa-record',
      'srinivasa-app',
      'srinivasa-sep',
      'srinivasa-online',
      'techmaax-main',
      'techmaax-record',
      'lucky-hostels',
      'sa-3d',
      'selfie-miniature'
    ];
    return cats[i] || 'intro';
  }

  renderAuditLayout(slide) {
    const c = slide.content;
    return `
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div class="lg:col-span-4 space-y-4">
          <div class="glass-panel p-4 border-amber-300 bg-amber-50/50">
            <div class="flex items-center gap-2 text-amber-800 font-bold text-xs mb-1.5">
              <svg class="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/></svg>
              <span>Target Website URL</span>
            </div>
            <a href="${c.url}" target="_blank" class="text-blue-700 hover:underline font-mono text-xs font-bold break-all">${c.url}</a>
          </div>

          <div class="glass-panel p-4 bg-white">
            <div class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Current Site Map Structure</div>
            <div class="space-y-1.5">
              ${c.currentSitemap.map(item => `
                <div class="flex items-center justify-between p-2 rounded bg-slate-50 text-xs border border-slate-200">
                  <span class="font-bold text-slate-800">${item.name}</span>
                  <span class="text-amber-700 text-[11px] font-medium">${item.status}</span>
                </div>
              `).join('')}
            </div>
          </div>
        </div>

        <div class="lg:col-span-8 space-y-3">
          <div class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Identified Pain Points & Credibility Roadblocks</div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            ${c.painPoints.map(p => `
              <div class="glass-panel p-4 border-l-4 ${p.severity === 'Critical' ? 'border-red-500 bg-red-50/40' : 'border-amber-500 bg-amber-50/30'} bg-white shadow-sm">
                <div class="flex items-center justify-between mb-1.5">
                  <span class="text-xs font-extrabold ${p.severity === 'Critical' ? 'text-red-700' : 'text-amber-800'}">${p.badge}</span>
                  <span class="px-2 py-0.5 rounded text-[10px] font-bold ${p.severity === 'Critical' ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-800'}">${p.severity}</span>
                </div>
                <h4 class="text-xs sm:text-sm font-bold text-slate-900 mb-1">${p.title}</h4>
                <p class="text-xs text-slate-600 leading-relaxed">${p.desc}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }

  renderSitemapCompareLayout(slide) {
    const c = slide.content;
    return `
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
        <!-- Current Sitemap -->
        <div class="glass-panel p-5 border-red-200 bg-red-50/20 flex flex-col">
          <div class="flex items-center justify-between pb-3 border-b border-red-200 mb-3">
            <span class="font-bold text-red-700 text-xs sm:text-sm flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full bg-red-500"></span>
              ${c.currentTree.name}
            </span>
            <span class="text-xs text-red-600 font-medium">Limited / Confusing</span>
          </div>
          <div class="flex-1 overflow-y-auto space-y-1.5">
            ${this.renderTreeNodes(c.currentTree.children, 'red')}
          </div>
        </div>

        <!-- Proposed Sitemap -->
        <div class="glass-panel p-5 border-emerald-200 bg-emerald-50/20 flex flex-col">
          <div class="flex items-center justify-between pb-3 border-b border-emerald-200 mb-3">
            <span class="font-bold text-emerald-700 text-xs sm:text-sm flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
              ${c.proposedTree.name}
            </span>
            <span class="text-xs text-emerald-700 font-bold">SEO & Conversion Optimized</span>
          </div>
          <div class="flex-1 overflow-y-auto space-y-1.5 pr-1">
            ${this.renderTreeNodes(c.proposedTree.children, 'emerald')}
          </div>
        </div>
      </div>
    `;
  }

  renderTreeNodes(nodes, color) {
    if (!nodes) return '';
    return nodes.map(node => `
      <div class="sitemap-node ${node.children ? 'has-children' : ''}">
        <div class="p-2 rounded bg-white border border-slate-200 text-xs flex items-center justify-between shadow-xs">
          <span class="font-semibold text-slate-800">${node.name}</span>
          ${node.children ? `<span class="text-[10px] px-1.5 py-0.5 rounded bg-${color === 'red' ? 'red-100 text-red-700' : 'emerald-100 text-emerald-700'} font-bold">${node.children.length} subpages</span>` : ''}
        </div>
        ${node.children ? `<div class="ml-3 mt-1 space-y-1">${this.renderTreeNodes(node.children, color)}</div>` : ''}
      </div>
    `).join('');
  }

  renderFeatureGridLayout(slide) {
    const c = slide.content;
    return `
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        ${c.features.map(f => `
          <div class="glass-panel glass-panel-hover p-3.5 flex items-start gap-3 bg-white shadow-xs">
            <span class="text-xs font-mono font-extrabold text-blue-700 bg-blue-50 px-2 py-1 rounded border border-blue-200 flex-shrink-0">
              ${f.num}
            </span>
            <div>
              <h4 class="text-xs font-bold text-slate-900 mb-1">${f.title}</h4>
              <p class="text-xs text-slate-600 leading-relaxed">${f.desc}</p>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  renderAppAuditLayout(slide) {
    const c = slide.content;
    return `
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div class="glass-panel p-5 border-slate-200 bg-white">
          <div class="flex items-center gap-2 text-slate-800 font-bold text-xs sm:text-sm pb-3 border-b border-slate-200 mb-3">
            <span class="w-2.5 h-2.5 rounded-full bg-slate-400"></span>
            ${c.currentPublicState.title}
          </div>
          <div class="space-y-2">
            ${c.currentPublicState.items.map(item => `
              <div class="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between text-xs">
                <div>
                  <div class="font-bold text-slate-900">${item.name}</div>
                  <div class="text-[11px] text-slate-500">${item.desc}</div>
                </div>
                <span class="text-[10px] text-slate-400 font-mono">Public</span>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="glass-panel p-5 border-emerald-200 bg-emerald-50/30">
          <div class="flex items-center gap-2 text-emerald-800 font-bold text-xs sm:text-sm pb-3 border-b border-emerald-200 mb-3">
            <span class="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse"></span>
            ${c.missingAdvertising.title}
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            ${c.missingAdvertising.items.map(item => `
              <div class="p-2.5 rounded-lg bg-white border border-emerald-200 shadow-xs">
                <div class="text-xs font-bold text-emerald-700 flex items-center gap-1.5">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                  ${item.name}
                </div>
                <div class="text-[11px] text-slate-600 mt-1 leading-snug">${item.desc}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }

  renderFlowDiagramLayout(slide) {
    const c = slide.content;
    return `
      <div class="space-y-6">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          ${c.architectureNodes.map(node => `
            <div class="glass-panel p-4 border-t-4 border-blue-600 bg-white shadow-sm relative">
              <span class="text-2xl font-black text-blue-600/20">${node.step}</span>
              <h4 class="text-xs sm:text-sm font-bold text-slate-900 mt-1 mb-1.5">${node.title}</h4>
              <p class="text-xs text-slate-600 leading-relaxed">${node.desc}</p>
            </div>
          `).join('')}
        </div>

        <div class="p-4 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200">
          <div class="text-xs font-bold text-blue-900 uppercase tracking-wider mb-2">Core Business Impact</div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
            ${c.businessImpact.map(impact => `
              <div class="flex items-start gap-2 text-xs text-slate-700">
                <svg class="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                <span>${impact}</span>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }

  renderSepOverviewLayout(slide) {
    const c = slide.content;
    const p = c.programOverview;
    return `
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div class="lg:col-span-5 space-y-4">
          <div class="p-5 rounded-xl bg-purple-50 border border-purple-200">
            <span class="glass-badge text-purple-700 bg-purple-100 border-purple-200 mb-2">Ed-Tech Offering</span>
            <h3 class="text-base sm:text-lg font-bold text-purple-950">${p.name}</h3>
            <p class="text-xs text-slate-600 mt-1 leading-relaxed">${p.tagline}</p>
          </div>

          <div class="glass-panel p-4 bg-white">
            <div class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Current Multi-Domain Funnel Friction</div>
            <div class="p-3 rounded bg-red-50 border border-red-200 text-xs text-red-800 leading-relaxed font-mono text-[11px]">
              ${p.currentFunnel}
            </div>
          </div>
        </div>

        <div class="lg:col-span-7 space-y-4">
          <div class="glass-panel p-4 bg-white">
            <div class="text-xs font-bold text-purple-800 uppercase tracking-wider mb-2.5">6 Practical Simulated Compliance Modules</div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
              ${p.simulatedModules.map(mod => `
                <div class="p-2 rounded bg-slate-50 border border-slate-200 text-xs font-medium text-slate-800 flex items-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-purple-600"></span>
                  ${mod}
                </div>
              `).join('')}
            </div>
          </div>

          <div class="glass-panel p-4 bg-white">
            <div class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Career-Aligned Tracks</div>
            <div class="flex flex-wrap gap-2">
              ${p.tracks.map(t => `
                <span class="px-3 py-1.5 rounded-lg bg-purple-100 text-purple-800 text-xs font-bold border border-purple-200">${t}</span>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  renderPillarsGridLayout(slide) {
    const c = slide.content;
    return `
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        ${c.pillars.map(p => `
          <div class="glass-panel p-3.5 border-t-4 border-purple-600 bg-white shadow-xs">
            <div class="flex items-center gap-2 mb-2">
              <span class="w-6 h-6 rounded-full bg-purple-100 text-purple-700 text-xs font-extrabold flex items-center justify-center">${p.num}</span>
              <h4 class="text-xs sm:text-sm font-bold text-slate-900">${p.title}</h4>
            </div>
            <div class="space-y-1.5 text-xs">
              <div class="p-2 rounded bg-red-50 border border-red-100 text-red-800 text-[11px]">
                <span class="font-bold">Issue:</span> ${p.problem}
              </div>
              <div class="p-2 rounded bg-emerald-50 border border-emerald-100 text-emerald-800 text-[11px]">
                <span class="font-bold">Upgrade:</span> ${p.solution}
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  renderUrgentAuditLayout(slide) {
    const c = slide.content;
    return `
      <div class="space-y-4">
        <div class="p-3.5 rounded-xl bg-red-50 border border-red-300 flex items-center justify-between">
          <div class="flex items-center gap-2.5">
            <span class="px-2.5 py-1 rounded bg-red-600 text-white font-bold text-[10px] tracking-wider animate-pulse">URGENT ACTION REQUIRED</span>
            <span class="text-xs text-red-800 font-mono font-bold">${c.url}</span>
          </div>
          <span class="text-xs text-slate-600 hidden sm:inline">${c.coreBusiness}</span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          ${c.criticalBugs.map(bug => `
            <div class="glass-panel p-4 border-l-4 border-red-600 bg-white shadow-sm">
              <span class="text-[10px] font-extrabold px-2 py-0.5 rounded bg-red-100 text-red-700 uppercase tracking-wide">${bug.badge}</span>
              <h4 class="text-xs sm:text-sm font-bold text-slate-900 mt-2 mb-1">${bug.title}</h4>
              <p class="text-xs text-slate-600 leading-relaxed">${bug.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  renderOnlineSolutionsLayout(slide) {
    const c = slide.content;
    return `
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        ${c.solutions.map(s => `
          <div class="glass-panel glass-panel-hover p-4 border-l-4 border-amber-500 bg-white shadow-xs">
            <span class="text-xs font-mono font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">${s.num}</span>
            <h4 class="text-xs sm:text-sm font-bold text-slate-900 mt-2 mb-1">${s.title}</h4>
            <p class="text-xs text-slate-600 leading-relaxed">${s.desc}</p>
          </div>
        `).join('')}
      </div>
    `;
  }

  renderTechmaaxOverviewLayout(slide) {
    const c = slide.content;
    return `
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div class="lg:col-span-5 space-y-4">
          <div class="p-5 rounded-xl bg-gradient-to-br from-rose-50 to-orange-50 border border-rose-200">
            <div class="text-3xl font-extrabold text-slate-900 mb-0.5">21 Centres</div>
            <div class="text-xs font-bold text-rose-700 uppercase tracking-wide">Multi-City Training Footprint</div>
            <p class="text-xs text-slate-600 mt-2 leading-relaxed">${c.locationsCount}</p>
          </div>

          <div class="glass-panel p-4 bg-white">
            <div class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Core Training Verticals</div>
            <div class="flex flex-wrap gap-1.5 text-xs">
              <span class="px-2.5 py-1 rounded bg-slate-100 text-slate-700 border border-slate-200">SAP (End-User & Consultant)</span>
              <span class="px-2.5 py-1 rounded bg-slate-100 text-slate-700 border border-slate-200">Autodesk / CAD</span>
              <span class="px-2.5 py-1 rounded bg-slate-100 text-slate-700 border border-slate-200">Full-Stack IT</span>
              <span class="px-2.5 py-1 rounded bg-slate-100 text-slate-700 border border-slate-200">AI Masterclasses</span>
            </div>
          </div>
        </div>

        <div class="lg:col-span-7 space-y-2.5">
          <div class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Current Friction Points in Multi-Branch Operations</div>
          <div class="space-y-2">
            ${c.currentGaps.map(gap => `
              <div class="p-3 rounded-lg bg-white border border-slate-200 text-xs text-slate-700 flex items-start gap-2.5 shadow-xs">
                <span class="text-rose-600 font-bold mt-0.5">•</span>
                <span>${gap}</span>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }

  renderValueTableLayout(slide) {
    const c = slide.content;
    return `
      <div class="overflow-x-auto">
        <table class="w-full text-left text-xs border-collapse">
          <thead>
            <tr class="border-b border-slate-300 bg-slate-100">
              <th class="p-3 font-bold text-slate-700 uppercase tracking-wider w-1/4">Strategic Area</th>
              <th class="p-3 font-bold text-slate-700 uppercase tracking-wider w-5/12">Proposed Action</th>
              <th class="p-3 font-bold text-emerald-800 uppercase tracking-wider w-1/3">Direct Business ROI</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 bg-white">
            ${c.rows.map(row => `
              <tr class="hover:bg-slate-50 transition-colors">
                <td class="p-3 font-bold text-slate-900 align-top">${row.area}</td>
                <td class="p-3 text-slate-600 align-top leading-relaxed">${row.action}</td>
                <td class="p-3 text-emerald-800 font-semibold align-top leading-relaxed bg-emerald-50/50">${row.businessValue}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  }

  renderSapAuditLayout(slide) {
    const c = slide.content;
    return `
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div class="lg:col-span-5 space-y-4">
          <div class="p-5 rounded-xl bg-orange-50 border border-orange-200">
            <span class="glass-badge text-orange-800 bg-orange-100 border-orange-200 mb-2">Portal Status</span>
            <p class="text-xs text-slate-700 leading-relaxed">${c.currentStatus}</p>
          </div>
        </div>

        <div class="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
          ${c.currentRoadblocks.map(r => `
            <div class="glass-panel p-4 border-l-4 border-orange-500 bg-white shadow-xs">
              <h4 class="text-xs font-bold text-slate-900 mb-1">${r.title}</h4>
              <p class="text-xs text-slate-600 leading-relaxed">${r.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  renderSapSolutionsLayout(slide) {
    const c = slide.content;
    return `
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        ${c.steps.map(step => `
          <div class="glass-panel glass-panel-hover p-3.5 border-t-2 border-orange-500 bg-white shadow-xs">
            <span class="text-xs font-mono font-bold text-orange-700 bg-orange-50 px-2 py-0.5 rounded border border-orange-200">${step.step}</span>
            <h4 class="text-xs font-bold text-slate-900 mt-2 mb-1">${step.title}</h4>
            <p class="text-[11px] text-slate-600 leading-relaxed">${step.desc}</p>
          </div>
        `).join('')}
      </div>
    `;
  }

  renderHostelOverviewLayout(slide) {
    const c = slide.content;
    return `
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div class="lg:col-span-5 space-y-4">
          <div class="p-5 rounded-xl bg-emerald-50 border border-emerald-200">
            <span class="glass-badge text-emerald-800 bg-emerald-100 border-emerald-200 mb-2">Target Customer</span>
            <p class="text-xs text-slate-700 leading-relaxed">${c.targetAudience}</p>
          </div>

          <div class="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 leading-relaxed">
            <span class="font-bold block mb-1">Critical 5-Second Journey Challenge:</span>
            ${c.coreProblem}
          </div>
        </div>

        <div class="lg:col-span-7 space-y-2">
          <div class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">4 Strategic Chennai Branch Locations</div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            ${c.currentFourLocations.map(loc => `
              <div class="glass-panel p-3.5 bg-white shadow-xs">
                <div class="flex items-center justify-between mb-1">
                  <span class="text-xs font-bold text-slate-900">${loc.name}</span>
                  <span class="text-[10px] px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">${loc.type}</span>
                </div>
                <div class="text-[11px] text-slate-500">${loc.near}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }

  renderHostelFeaturesLayout(slide) {
    const c = slide.content;
    return `
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        ${c.features.map(f => `
          <div class="glass-panel glass-panel-hover p-4 border-l-4 border-emerald-600 bg-white shadow-xs">
            <span class="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">${f.num}</span>
            <h4 class="text-xs sm:text-sm font-bold text-slate-900 mt-2 mb-1">${f.title}</h4>
            <p class="text-xs text-slate-600 leading-relaxed">${f.desc}</p>
          </div>
        `).join('')}
      </div>
    `;
  }

  renderTechStackLayout(slide) {
    const c = slide.content;
    return `
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        ${c.pillars.map(p => `
          <div class="glass-panel p-5 border border-slate-200 bg-white shadow-xs">
            <h3 class="text-sm font-bold text-blue-700 mb-1.5">${p.title}</h3>
            <p class="text-xs text-slate-600 mb-3 leading-relaxed">${p.desc}</p>
            <div class="flex flex-wrap gap-1.5">
              ${p.tags.map(t => `<span class="px-2 py-1 rounded bg-slate-100 text-[10px] font-mono text-slate-700 border border-slate-200">${t}</span>`).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  renderRoadmapLayout(slide) {
    const c = slide.content;
    return `
      <div class="space-y-6">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
          ${c.phases.map((p, i) => `
            <div class="glass-panel p-5 border-t-4 ${i === 0 ? 'border-blue-600' : i === 1 ? 'border-emerald-600' : 'border-purple-600'} bg-white shadow-sm">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs font-mono text-slate-500 font-bold">${p.phase}</span>
                <span class="text-[10px] px-2 py-0.5 rounded font-bold ${i === 0 ? 'bg-blue-100 text-blue-800' : i === 1 ? 'bg-emerald-100 text-emerald-800' : 'bg-purple-100 text-purple-800'}">${p.badge}</span>
              </div>
              <h4 class="text-xs sm:text-sm font-bold text-slate-900 mb-3">${p.title}</h4>
              <ul class="space-y-2 text-xs text-slate-600">
                ${p.items.map(item => `
                  <li class="flex items-start gap-2">
                    <svg class="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                    <span>${item}</span>
                  </li>
                `).join('')}
              </ul>
            </div>
          `).join('')}
        </div>

        <div class="p-6 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center shadow-lg">
          <h3 class="text-lg font-bold mb-1">${c.callToAction.headline}</h3>
          <p class="text-xs text-blue-100 mb-4">${c.callToAction.subtext}</p>
          <div class="flex flex-wrap items-center justify-center gap-3">
            ${c.callToAction.actions.map(action => `
              <button class="px-4 py-2 rounded-lg bg-white hover:bg-blue-50 text-blue-800 font-bold text-xs shadow-md transition-all">
                ${action}
              </button>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }

  // --- Interactive Prototypes ---

  renderDemoGatedNotesLayout(slide) {
    return `
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full items-start">
        <div class="lg:col-span-5 space-y-4">
          <div class="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
            <span class="glass-badge text-emerald-800 bg-emerald-100 border-emerald-200 mb-2">Live Lead Magnet Demo</span>
            <h3 class="text-sm font-bold text-emerald-950">Gated CMA Study Materials</h3>
            <p class="text-xs text-slate-600 mt-1">Simulates how prospective students unlock revision materials in exchange for WhatsApp lead details.</p>
          </div>

          <div class="glass-panel p-4 space-y-3 bg-white">
            <div class="text-xs font-bold text-slate-500 uppercase tracking-wider">Available Revision Vault</div>
            <div class="space-y-2">
              <div class="p-2.5 rounded bg-slate-50 border border-slate-200 flex items-center justify-between text-xs cursor-pointer hover:border-emerald-500 transition-colors" onclick="window.app.selectNotesDoc('CMA Intermediate: Paper 8 Cost Accounting Formula Vault (PDF)', '4.8 MB • 54 Pages')">
                <div>
                  <div class="font-bold text-slate-900">Paper 8: Cost Accounting Formula Vault</div>
                  <div class="text-[10px] text-slate-500">PDF • 54 Pages • 2026 Edition</div>
                </div>
                <button class="px-2.5 py-1 rounded bg-emerald-600 text-white font-bold text-[11px]">Get PDF</button>
              </div>
              <div class="p-2.5 rounded bg-slate-50 border border-slate-200 flex items-center justify-between text-xs cursor-pointer hover:border-emerald-500 transition-colors" onclick="window.app.selectNotesDoc('CMA Final: Direct Tax 100 Most Expected Case Studies', '6.2 MB • 80 Pages')">
                <div>
                  <div class="font-bold text-slate-900">CMA Final: Direct Tax 100 Case Studies</div>
                  <div class="text-[10px] text-slate-500">PDF • 80 Pages • 2026 Edition</div>
                </div>
                <button class="px-2.5 py-1 rounded bg-emerald-600 text-white font-bold text-[11px]">Get PDF</button>
              </div>
            </div>
          </div>
        </div>

        <div class="lg:col-span-7">
          <div class="glass-panel p-6 border-emerald-300 bg-white shadow-sm relative">
            <div id="notes-form-container">
              <div class="flex items-center justify-between pb-3 border-b border-slate-200 mb-4">
                <div>
                  <div class="text-xs font-bold text-emerald-700 uppercase tracking-wide">Instant WhatsApp Unlock</div>
                  <h4 class="text-xs sm:text-sm font-bold text-slate-900" id="selected-doc-title">CMA Intermediate: Cost Accounting Formula Vault</h4>
                </div>
                <span class="text-xs font-mono text-slate-500" id="selected-doc-meta">4.8 MB • PDF</span>
              </div>

              <form id="gated-notes-form" onsubmit="window.app.handleGatedNotesSubmit(event)" class="space-y-3">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label class="block text-[11px] font-semibold text-slate-700 mb-1">Student Full Name</label>
                    <input type="text" id="lead-name" required placeholder="e.g. Rahul Sharma" class="w-full px-3 py-2 rounded bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-emerald-600">
                  </div>
                  <div>
                    <label class="block text-[11px] font-semibold text-slate-700 mb-1">WhatsApp Mobile Number</label>
                    <input type="tel" id="lead-phone" required placeholder="+91 98765 43210" class="w-full px-3 py-2 rounded bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-emerald-600">
                  </div>
                </div>

                <button type="submit" class="w-full py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md">
                  <span>Send PDF to WhatsApp & Download</span>
                </button>
              </form>
            </div>

            <div id="notes-success-state" class="hidden text-center py-8 space-y-3">
              <div class="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto text-xl font-bold">✓</div>
              <h4 class="text-sm sm:text-base font-bold text-slate-900">Lead Successfully Captured!</h4>
              <p class="text-xs text-slate-600 max-w-sm mx-auto">PDF dispatched to student's WhatsApp number and direct download triggered.</p>
              <button onclick="window.app.resetNotesForm()" class="px-4 py-1.5 rounded bg-slate-100 text-xs text-slate-700 hover:bg-slate-200 border border-slate-300">Test Another Download</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  selectNotesDoc(title, meta) {
    const titleEl = document.getElementById('selected-doc-title');
    const metaEl = document.getElementById('selected-doc-meta');
    if (titleEl) titleEl.innerText = title;
    if (metaEl) metaEl.innerText = meta;
  }

  handleGatedNotesSubmit(e) {
    e.preventDefault();
    document.getElementById('notes-form-container').classList.add('hidden');
    document.getElementById('notes-success-state').classList.remove('hidden');
  }

  resetNotesForm() {
    document.getElementById('notes-form-container').classList.remove('hidden');
    document.getElementById('notes-success-state').classList.add('hidden');
    document.getElementById('gated-notes-form').reset();
  }

  renderDemoStudentDashboardLayout(slide) {
    return `
      <div class="space-y-4">
        <div class="flex items-center justify-between p-3 rounded-xl bg-slate-100 border border-slate-200">
          <div class="flex items-center gap-3">
            <div class="w-9 h-9 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-sm">SA</div>
            <div>
              <div class="text-xs font-bold text-slate-900">Karthik Narayanan</div>
              <div class="text-[10px] text-blue-700 font-mono">Roll: CMA-2026-IN042 • CMA Inter (Both Groups)</div>
            </div>
          </div>

          <div class="flex items-center gap-1.5 text-xs">
            <button class="dash-tab-btn active px-3 py-1.5 rounded-lg bg-blue-600 text-white font-bold" onclick="window.app.switchDashTab('attendance')">Attendance</button>
            <button class="dash-tab-btn px-3 py-1.5 rounded-lg bg-white text-slate-700 font-bold hover:bg-slate-50 border border-slate-200" onclick="window.app.switchDashTab('timetable')">Timetable</button>
            <button class="dash-tab-btn px-3 py-1.5 rounded-lg bg-white text-slate-700 font-bold hover:bg-slate-50 border border-slate-200" onclick="window.app.switchDashTab('scores')">Mock Scores</button>
            <button class="dash-tab-btn px-3 py-1.5 rounded-lg bg-white text-slate-700 font-bold hover:bg-slate-50 border border-slate-200" onclick="window.app.switchDashTab('fees')">Fee Due</button>
          </div>
        </div>

        <div id="dash-panel-attendance" class="dash-panel glass-panel p-5 bg-white shadow-xs">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div class="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-center">
              <div class="text-3xl font-black text-emerald-700">92%</div>
              <div class="text-xs font-bold text-slate-900 mt-1">Overall Attendance</div>
              <div class="text-[10px] text-slate-500">46 of 50 Lectures Attended</div>
            </div>
            <div class="p-4 rounded-xl bg-blue-50 border border-blue-200 text-center">
              <div class="text-3xl font-black text-blue-700">4</div>
              <div class="text-xs font-bold text-slate-900 mt-1">Authorized Leaves</div>
              <div class="text-[10px] text-slate-500">Approved by Faculty</div>
            </div>
            <div class="p-4 rounded-xl bg-purple-50 border border-purple-200 text-center">
              <div class="text-3xl font-black text-purple-700">100%</div>
              <div class="text-xs font-bold text-slate-900 mt-1">Cost Accounting</div>
              <div class="text-[10px] text-slate-500">18 of 18 Sessions</div>
            </div>
          </div>
        </div>

        <div id="dash-panel-timetable" class="dash-panel glass-panel p-5 bg-white shadow-xs hidden">
          <div class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Today's Class Schedule (Live Updates)</div>
          <div class="p-3 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-between">
            <div>
              <span class="px-2 py-0.5 rounded bg-blue-600 text-white font-bold text-[10px]">LIVE NOW</span>
              <span class="font-bold text-slate-900 ml-2">Paper 10: Cost & Management Accounting</span>
              <div class="text-slate-500 text-[11px] mt-1">Faculty: CMA S. Ramanathan • Room 302 & Zoom Hybrid</div>
            </div>
            <button class="px-3 py-1.5 rounded bg-blue-600 text-white font-bold text-xs">Join Hybrid Stream</button>
          </div>
        </div>

        <div id="dash-panel-scores" class="dash-panel glass-panel p-5 bg-white shadow-xs hidden">
          <div class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Mock Test Analytics</div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div class="p-3 rounded bg-slate-50 border border-slate-200">
              <div class="flex items-center justify-between mb-1">
                <span class="font-bold text-slate-900">Full Mock Test #3 (Group 1)</span>
                <span class="text-emerald-700 font-bold">78 / 100</span>
              </div>
              <div class="text-[11px] text-slate-500">Academy Rank: #4 of 240 Students</div>
            </div>
          </div>
        </div>

        <div id="dash-panel-fees" class="dash-panel glass-panel p-5 bg-white shadow-xs hidden">
          <div class="p-4 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-between">
            <div>
              <div class="text-xs font-bold text-amber-800 uppercase tracking-wide">Next Installment Due</div>
              <div class="text-xl font-black text-slate-900 mt-0.5">₹12,500 <span class="text-xs font-normal text-slate-500">(Due on 25th Aug 2026)</span></div>
            </div>
            <button onclick="alert('Simulating Razorpay UPI Payment...')" class="px-4 py-2 rounded-lg bg-emerald-600 text-white font-bold text-xs">Pay Now via UPI</button>
          </div>
        </div>
      </div>
    `;
  }

  switchDashTab(tabName) {
    document.querySelectorAll('.dash-tab-btn').forEach(btn => {
      btn.classList.remove('active', 'bg-blue-600', 'text-white');
      btn.classList.add('bg-white', 'text-slate-700');
    });
    if (event.currentTarget) {
      event.currentTarget.classList.add('active', 'bg-blue-600', 'text-white');
      event.currentTarget.classList.remove('bg-white', 'text-slate-700');
    }
    document.querySelectorAll('.dash-panel').forEach(panel => panel.classList.add('hidden'));
    const target = document.getElementById(`dash-panel-${tabName}`);
    if (target) target.classList.remove('hidden');
  }

  renderDemoSepModulesLayout(slide) {
    return `
      <div class="space-y-4">
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
          <button class="sep-mod-btn active p-2.5 rounded-lg bg-purple-600 text-white font-bold text-xs text-left" onclick="window.app.switchSepMod('gst')">
            <span class="block text-[10px] text-purple-200">Module 01</span>
            GST Registration & Filing
          </button>
          <button class="sep-mod-btn p-2.5 rounded-lg bg-white text-slate-700 font-bold text-xs text-left hover:bg-slate-50 border border-slate-200" onclick="window.app.switchSepMod('itr')">
            <span class="block text-[10px] text-slate-500">Module 02</span>
            Income Tax & AIS Filing
          </button>
          <button class="sep-mod-btn p-2.5 rounded-lg bg-white text-slate-700 font-bold text-xs text-left hover:bg-slate-50 border border-slate-200" onclick="window.app.switchSepMod('tds')">
            <span class="block text-[10px] text-slate-500">Module 03</span>
            TDS / TCS TRACES Portals
          </button>
          <button class="sep-mod-btn p-2.5 rounded-lg bg-white text-slate-700 font-bold text-xs text-left hover:bg-slate-50 border border-slate-200" onclick="window.app.switchSepMod('mca')">
            <span class="block text-[10px] text-slate-500">Module 04</span>
            MCA & Director DIN
          </button>
        </div>

        <div class="glass-panel p-5 border-purple-200 bg-white shadow-xs">
          <div id="sep-mod-gst" class="sep-content-panel space-y-3">
            <div class="flex items-center justify-between pb-2 border-b border-slate-200">
              <h4 class="text-xs sm:text-sm font-bold text-purple-900">GST Practical E-Filing Simulator</h4>
              <span class="text-xs font-mono text-emerald-700 font-bold">Simulated GSTN Live Sandbox</span>
            </div>
            <div class="p-3 rounded-lg bg-slate-50 border border-slate-200 font-mono text-xs text-slate-700 space-y-2">
              <div class="flex justify-between border-b border-slate-200 pb-1">
                <span class="text-slate-500">Simulated Environment:</span>
                <span class="font-bold text-slate-900">GST Portal (GSTR-1 / GSTR-3B Sandbox)</span>
              </div>
              <div class="flex justify-between">
                <span class="text-slate-500">Tools Practiced:</span>
                <span class="text-purple-700 font-bold">GSTN Offline Utility, Tally Prime JSON export</span>
              </div>
            </div>
          </div>

          <div id="sep-mod-itr" class="sep-content-panel space-y-3 hidden">
            <h4 class="text-xs sm:text-sm font-bold text-purple-900">Income Tax e-Filing & AIS/TIS Reconciliation</h4>
            <p class="text-xs text-slate-600">Practice live reconciliation of Form 26AS with Annual Information Statement (AIS).</p>
          </div>

          <div id="sep-mod-tds" class="sep-content-panel space-y-3 hidden">
            <h4 class="text-xs sm:text-sm font-bold text-purple-900">TDS / TCS TRACES Portals & Form 16/16A</h4>
            <p class="text-xs text-slate-600">RPU and FVU quarterly return filing and statement generation.</p>
          </div>

          <div id="sep-mod-mca" class="sep-content-panel space-y-3 hidden">
            <h4 class="text-xs sm:text-sm font-bold text-purple-900">MCA V3 Portal & Director DIN Applications</h4>
            <p class="text-xs text-slate-600">DIR-3 KYC verification and SPICe+ company incorporation workflows.</p>
          </div>
        </div>
      </div>
    `;
  }

  switchSepMod(modId) {
    document.querySelectorAll('.sep-mod-btn').forEach(btn => {
      btn.classList.remove('active', 'bg-purple-600', 'text-white');
      btn.classList.add('bg-white', 'text-slate-700');
    });
    if (event.currentTarget) {
      event.currentTarget.classList.add('active', 'bg-purple-600', 'text-white');
      event.currentTarget.classList.remove('bg-white', 'text-slate-700');
    }
    document.querySelectorAll('.sep-content-panel').forEach(panel => panel.classList.add('hidden'));
    const target = document.getElementById(`sep-mod-${modId}`);
    if (target) target.classList.remove('hidden');
  }

  renderDemoVideoCourseLayout(slide) {
    return `
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full items-start">
        <div class="lg:col-span-7 space-y-3">
          <div class="rounded-xl overflow-hidden bg-slate-900 border border-amber-400 relative aspect-video flex flex-col justify-between p-4 text-white">
            <div class="flex items-center justify-between">
              <span class="px-2.5 py-1 rounded bg-red-600 text-white font-bold text-[10px] tracking-wider animate-pulse">FREE TRIAL DEMO LECTURE</span>
              <span class="text-xs text-slate-300 font-mono">1080p Full HD</span>
            </div>

            <div class="text-center py-6">
              <div class="w-16 h-16 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 flex items-center justify-center mx-auto cursor-pointer shadow-xl transform hover:scale-110 transition-transform" onclick="alert('Playing 15-Minute Sample Video Lecture: Marginal Costing...')">
                <svg class="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              </div>
              <div class="text-xs sm:text-sm font-bold text-white mt-3">Paper 8: Marginal Costing (Free Preview)</div>
              <div class="text-xs text-amber-300 mt-0.5">Faculty: CMA S. Ramanathan (18+ Years Exp)</div>
            </div>

            <div class="flex items-center justify-between text-xs text-slate-300 border-t border-slate-800 pt-2">
              <span>Duration: 18 mins preview</span>
              <span class="text-emerald-400 font-bold">✓ 3 Free Demo Lectures Included</span>
            </div>
          </div>
        </div>

        <div class="lg:col-span-5 space-y-3">
          <div class="glass-panel p-5 border-amber-200 bg-white shadow-sm space-y-4">
            <div>
              <span class="text-[10px] px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-bold uppercase">Recorded Video Vault</span>
              <h3 class="text-sm sm:text-base font-extrabold text-slate-900 mt-1">CMA Intermediate Group 1 & 2</h3>
              <p class="text-xs text-slate-600 mt-1">2000+ Hours of HD video lectures covering Papers 5 through 12.</p>
            </div>

            <div class="p-3 rounded-lg bg-slate-50 border border-slate-200 space-y-1.5 text-xs">
              <div class="flex justify-between text-slate-600">
                <span>Validity:</span>
                <span class="font-bold text-slate-900">12 Months (Unlimited Views)</span>
              </div>
              <div class="flex justify-between text-slate-600">
                <span>Device Access:</span>
                <span class="font-bold text-slate-900">Android, iOS, Windows PC</span>
              </div>
            </div>

            <div class="flex items-baseline justify-between pt-2 border-t border-slate-200">
              <div>
                <span class="text-xs text-slate-400 line-through">₹24,999</span>
                <div class="text-xl sm:text-2xl font-black text-slate-900">₹14,999</div>
              </div>
              <button onclick="alert('Adding CMA Inter to Cart...')" class="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-md">
                Buy / Enroll Now
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  renderDemoBranchLocatorLayout(slide) {
    const branches = [
      { city: "Chennai", name: "Tambaram Branch", address: "Near Railway Station, GST Road", phone: "+91 98401 23456", courses: "SAP, Autodesk, Full-Stack" },
      { city: "Chennai", name: "Velachery Branch", address: "Opp. Phoenix Market City, Bypass Rd", phone: "+91 98402 34567", courses: "SAP FICO, AI Masterclass" },
      { city: "Chennai", name: "Anna Nagar Branch", address: "2nd Avenue, Near Roundana", phone: "+91 98403 45678", courses: "Autodesk Revit, SAP MM" },
      { city: "Coimbatore", name: "Gandhipuram Branch", address: "Cross Cut Road, Coimbatore", phone: "+91 98421 11223", courses: "SAP All Modules, Autodesk" },
      { city: "Trichy", name: "Thillai Nagar Branch", address: "11th Cross, Main Road, Trichy", phone: "+91 98431 99887", courses: "SAP FICO, MM, CAD" },
      { city: "Pondicherry", name: "Mission Street Branch", address: "Heritage Town, Pondicherry", phone: "+91 98411 77665", courses: "Autodesk, SAP End-User" },
      { city: "Bangalore", name: "Koramangala Branch", address: "80 Feet Rd, 4th Block, Bangalore", phone: "+91 98800 55443", courses: "SAP Consultant, AI/ML" }
    ];

    return `
      <div class="space-y-4">
        <div class="glass-panel p-4 flex flex-col sm:flex-row items-center justify-between gap-3 bg-white shadow-xs">
          <div class="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0" id="branch-city-filters">
            <button class="branch-filter-btn active px-3 py-1 rounded-lg bg-rose-600 text-white font-bold text-xs" onclick="window.app.filterBranches('All')">All (21)</button>
            <button class="branch-filter-btn px-3 py-1 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs hover:bg-slate-200 border border-slate-200" onclick="window.app.filterBranches('Chennai')">Chennai (9)</button>
            <button class="branch-filter-btn px-3 py-1 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs hover:bg-slate-200 border border-slate-200" onclick="window.app.filterBranches('Coimbatore')">Coimbatore (4)</button>
            <button class="branch-filter-btn px-3 py-1 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs hover:bg-slate-200 border border-slate-200" onclick="window.app.filterBranches('Trichy')">Trichy (3)</button>
            <button class="branch-filter-btn px-3 py-1 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs hover:bg-slate-200 border border-slate-200" onclick="window.app.filterBranches('Bangalore')">Bangalore (3)</button>
          </div>

          <div class="w-full sm:w-56">
            <input type="text" id="branch-search-input" onkeyup="window.app.searchBranches(this.value)" placeholder="Search branch..." class="w-full px-3 py-1.5 rounded bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-rose-600">
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 overflow-y-auto max-h-[320px] pr-1" id="branches-list-container">
          ${branches.map(b => `
            <div class="branch-card glass-panel glass-panel-hover p-3.5 flex flex-col justify-between bg-white shadow-xs" data-city="${b.city}" data-text="${b.name} ${b.address} ${b.courses}">
              <div>
                <div class="flex items-center justify-between mb-1">
                  <span class="text-xs font-bold text-slate-900">${b.name}</span>
                  <span class="text-[10px] px-2 py-0.5 rounded bg-rose-100 text-rose-800 font-bold">${b.city}</span>
                </div>
                <p class="text-[11px] text-slate-500 mb-1.5">${b.address}</p>
                <div class="text-[10px] text-slate-700 font-mono bg-slate-50 p-1.5 rounded border border-slate-200 mb-2">${b.courses}</div>
              </div>
              <div class="flex items-center justify-between pt-2 border-t border-slate-200 text-xs">
                <a href="tel:${b.phone}" class="text-emerald-700 font-bold hover:underline">📞 Call Branch</a>
                <button onclick="alert('Opening Google Maps location for ${b.name}...')" class="text-blue-600 text-[11px] hover:underline">Directions</button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  filterBranches(city) {
    document.querySelectorAll('.branch-filter-btn').forEach(btn => {
      btn.classList.remove('active', 'bg-rose-600', 'text-white');
      btn.classList.add('bg-slate-100', 'text-slate-700');
    });
    if (event.currentTarget) {
      event.currentTarget.classList.add('active', 'bg-rose-600', 'text-white');
      event.currentTarget.classList.remove('bg-slate-100', 'text-slate-700');
    }

    const cards = document.querySelectorAll('.branch-card');
    cards.forEach(card => {
      if (city === 'All' || card.dataset.city === city) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  }

  searchBranches(query) {
    const q = query.toLowerCase();
    const cards = document.querySelectorAll('.branch-card');
    cards.forEach(card => {
      const text = card.dataset.text.toLowerCase();
      if (text.includes(q)) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  }

  renderDemoSapViewerLayout(slide) {
    return `
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full items-start">
        <div class="lg:col-span-4 space-y-3">
          <div class="text-xs font-bold text-slate-500 uppercase tracking-wider">Select SAP Track</div>
          <div class="space-y-2">
            <button class="sap-track-btn active w-full p-3 rounded-lg bg-orange-600 text-white font-bold text-xs text-left" onclick="window.app.switchSapTrack('fico', 'SAP FICO (Financial Accounting)', '₹6.5L - ₹14.5L / year', 'SAP Certified Application Associate')">
              <span class="block text-[10px] text-orange-200">Finance & Costing</span>
              SAP FICO Consultant Track
            </button>
            <button class="sap-track-btn w-full p-3 rounded-lg bg-white text-slate-700 font-bold text-xs text-left hover:bg-slate-50 border border-slate-200" onclick="window.app.switchSapTrack('mm', 'SAP MM (Materials Management)', '₹5.5L - ₹12.0L / year', 'SAP Certified Associate - Procurement')">
              <span class="block text-[10px] text-slate-400">Supply Chain</span>
              SAP MM Consultant Track
            </button>
          </div>
        </div>

        <div class="lg:col-span-8">
          <div class="glass-panel p-6 border-orange-300 bg-white shadow-sm space-y-4">
            <div class="flex items-center justify-between pb-3 border-b border-slate-200">
              <div>
                <span class="text-[10px] px-2 py-0.5 rounded bg-orange-100 text-orange-800 font-bold uppercase">Career Benchmark</span>
                <h3 class="text-sm sm:text-base font-bold text-slate-900 mt-1" id="sap-track-title">SAP FICO (Financial Accounting)</h3>
              </div>
              <div class="text-right">
                <div class="text-xs text-slate-500">Avg Placement Salary</div>
                <div class="text-sm font-black text-emerald-700" id="sap-track-salary">₹6.5L - ₹14.5L / year</div>
              </div>
            </div>

            <div class="flex items-center justify-between pt-2">
              <button onclick="alert('Starting Free 15-Minute SAP FICO Demo...')" class="px-4 py-2 rounded-lg bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs shadow-md">
                ▶ Start Free 15-Min Demo
              </button>
              <button onclick="alert('Connecting to Senior SAP Counselor via WhatsApp...')" class="px-4 py-2 rounded-lg bg-emerald-600 text-white font-bold text-xs">
                💬 Talk to SAP Counselor
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  switchSapTrack(id, title, salary, cert) {
    document.querySelectorAll('.sap-track-btn').forEach(btn => {
      btn.classList.remove('active', 'bg-orange-600', 'text-white');
      btn.classList.add('bg-white', 'text-slate-700');
    });
    if (event.currentTarget) {
      event.currentTarget.classList.add('active', 'bg-orange-600', 'text-white');
      event.currentTarget.classList.remove('bg-white', 'text-slate-700');
    }
    document.getElementById('sap-track-title').innerText = title;
    document.getElementById('sap-track-salary').innerText = salary;
  }

  renderDemoHostelFinderLayout(slide) {
    return `
      <div class="space-y-4">
        <div class="glass-panel p-4 border-emerald-300 bg-white shadow-sm">
          <div class="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-2">Find Your Perfect PG / Hostel (Instant Availability)</div>
          <div class="grid grid-cols-1 sm:grid-cols-4 gap-3">
            <div>
              <label class="block text-[10px] font-semibold text-slate-700 mb-1">Select Location</label>
              <select id="hostel-loc-select" onchange="window.app.updateHostelResults()" class="w-full px-2.5 py-1.5 rounded bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-emerald-600">
                <option value="tambaram">Tambaram (Near Station/MEPZ)</option>
                <option value="velachery">Velachery (Near IT Corridor)</option>
                <option value="ashoknagar">Ashok Nagar (Near Metro)</option>
                <option value="puzhuthivakkam">Puzhuthivakkam (Near Madipakkam)</option>
              </select>
            </div>

            <div>
              <label class="block text-[10px] font-semibold text-slate-700 mb-1">Gender</label>
              <select id="hostel-gender-select" onchange="window.app.updateHostelResults()" class="w-full px-2.5 py-1.5 rounded bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-emerald-600">
                <option value="mens">Men's Hostel</option>
                <option value="womens">Women's Hostel</option>
              </select>
            </div>

            <div>
              <label class="block text-[10px] font-semibold text-slate-700 mb-1">Room Sharing</label>
              <select id="hostel-share-select" onchange="window.app.updateHostelResults()" class="w-full px-2.5 py-1.5 rounded bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-emerald-600">
                <option value="2">2-Sharing (Double)</option>
                <option value="single">Single Private Room</option>
                <option value="3">3-Sharing</option>
                <option value="4">4-Sharing (Budget)</option>
              </select>
            </div>

            <div class="flex items-end">
              <button onclick="window.app.updateHostelResults()" class="w-full py-1.5 rounded bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md">
                <span>Check Live Availability</span>
              </button>
            </div>
          </div>
        </div>

        <div class="glass-panel p-5 border-slate-200 bg-white shadow-sm" id="hostel-result-card">
          <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-3 border-b border-slate-200">
            <div>
              <div class="flex items-center gap-2">
                <h3 class="text-xs sm:text-base font-bold text-slate-900" id="hostel-res-name">Lucky Men's Hostel — Tambaram</h3>
                <span class="status-pill available" id="hostel-avail-pill">
                  <span class="status-dot-pulse"></span>
                  <span id="hostel-avail-text">3 Beds Available</span>
                </span>
              </div>
              <p class="text-xs text-slate-500 mt-1" id="hostel-res-address">2 mins walk from Tambaram West Railway Station & MEPZ</p>
            </div>

            <div class="text-right">
              <div class="text-xs text-slate-500">Monthly Rent (3x Food Included)</div>
              <div class="text-xl sm:text-2xl font-black text-emerald-700" id="hostel-res-price">₹7,500 <span class="text-xs font-normal text-slate-500">/ mo</span></div>
            </div>
          </div>

          <div class="flex flex-wrap items-center justify-between gap-3 pt-3">
            <div class="text-xs text-slate-600 font-mono">Helpline: <span class="text-slate-900 font-bold">+91 78258 29272</span></div>
            <div class="flex items-center gap-2">
              <a href="tel:+917825829272" class="px-3 py-1.5 rounded bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs border border-slate-300">📞 Call Now</a>
              <button onclick="alert('Opening WhatsApp (+91 78258 29272) to book room in Tambaram...')" class="px-4 py-1.5 rounded bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md">
                💬 Book via WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  updateHostelResults() {
    const loc = document.getElementById('hostel-loc-select')?.value || 'tambaram';
    const gender = document.getElementById('hostel-gender-select')?.value || 'mens';
    const share = document.getElementById('hostel-share-select')?.value || '2';

    const nameEl = document.getElementById('hostel-res-name');
    const pillEl = document.getElementById('hostel-avail-pill');
    const availTextEl = document.getElementById('hostel-avail-text');
    const priceEl = document.getElementById('hostel-res-price');
    const addrEl = document.getElementById('hostel-res-address');

    if (loc === 'tambaram') {
      nameEl.innerText = gender === 'mens' ? "Lucky Men's Hostel — Tambaram" : "Lucky Women's Hostel — Tambaram Extension";
      addrEl.innerText = "2 mins walk from Tambaram West Railway Station & MEPZ Gate";
      if (share === 'single') {
        pillEl.className = 'status-pill full';
        availTextEl.innerText = 'Full (Waitlist Open)';
        priceEl.innerHTML = '₹11,000 <span class="text-xs font-normal text-slate-500">/ mo</span>';
      } else {
        pillEl.className = 'status-pill available';
        availTextEl.innerText = share === '2' ? '3 Beds Available' : '5 Beds Available';
        priceEl.innerHTML = (share === '2' ? '₹7,500' : '₹6,500') + ' <span class="text-xs font-normal text-slate-500">/ mo</span>';
      }
    } else if (loc === 'velachery') {
      nameEl.innerText = gender === 'mens' ? "Lucky Men's Hostel — Velachery" : "Lucky Women's PG — Velachery Bypass";
      addrEl.innerText = "Behind Phoenix Marketcity, 5 mins from OMR IT Corridor";
      pillEl.className = 'status-pill available';
      availTextEl.innerText = '2 Beds Available';
      priceEl.innerHTML = (share === 'single' ? '₹12,500' : '₹8,500') + ' <span class="text-xs font-normal text-slate-500">/ mo</span>';
    } else if (loc === 'ashoknagar') {
      nameEl.innerText = "Lucky Women's Hostel — Ashok Nagar";
      addrEl.innerText = "100m from Ashok Nagar Metro Station & Vadapalani Hub";
      pillEl.className = 'status-pill available';
      availTextEl.innerText = '4 Beds Available';
      priceEl.innerHTML = (share === 'single' ? '₹13,000' : '₹9,000') + ' <span class="text-xs font-normal text-slate-500">/ mo</span>';
    } else {
      nameEl.innerText = "Lucky Women's Hostel — Puzhuthivakkam";
      addrEl.innerText = "Near Madipakkam Junction & Velachery MRTS";
      pillEl.className = 'status-pill available';
      availTextEl.innerText = '2 Beds Available';
      priceEl.innerHTML = '₹7,000 <span class="text-xs font-normal text-slate-500">/ mo</span>';
    }
  }

  // --- Prototype for Proposal 8 (sa3dsolutions.com) ---
  renderDemoSa3dQuoteLayout(slide) {
    return `
      <div class="space-y-4">
        <div class="glass-panel p-5 border-cyan-300 bg-white shadow-sm">
          <div class="flex items-center justify-between pb-3 border-b border-slate-200 mb-4">
            <div>
              <span class="text-[10px] px-2 py-0.5 rounded bg-cyan-100 text-cyan-800 font-bold uppercase">B2B Architectural Project Scope</span>
              <h3 class="text-sm sm:text-base font-bold text-slate-900 mt-1">Get Your 3D Scale Model Quotation</h3>
            </div>
            <span class="text-xs font-mono text-cyan-700 font-semibold">Response Time: &lt; 4 Hours</span>
          </div>

          <form onsubmit="window.app.handleSa3dQuoteSubmit(event)" class="space-y-3.5">
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label class="block text-[11px] font-semibold text-slate-700 mb-1">Project Type</label>
                <select id="sa3d-type" class="w-full px-2.5 py-1.5 rounded bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-cyan-600">
                  <option>High-Rise Commercial / Residential</option>
                  <option>Gated Township / Villa Layout</option>
                  <option>Industrial Factory Flow Model</option>
                  <option>Interior Sectional Scale Model</option>
                </select>
              </div>

              <div>
                <label class="block text-[11px] font-semibold text-slate-700 mb-1">Desired Scale Ratio</label>
                <select id="sa3d-scale" class="w-full px-2.5 py-1.5 rounded bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-cyan-600">
                  <option>1:100 (Standard Presentation Scale)</option>
                  <option>1:50 (High-Detail Architectural Scale)</option>
                  <option>1:200 (Township Masterplan Scale)</option>
                  <option>1:500 (Regional Infrastructure Scale)</option>
                </select>
              </div>

              <div>
                <label class="block text-[11px] font-semibold text-slate-700 mb-1">Illumination & Acrylic Case</label>
                <select class="w-full px-2.5 py-1.5 rounded bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-cyan-600">
                  <option>LED Micro-Lighting + Dust-proof Acrylic Case</option>
                  <option>Standard Non-Illuminated + Baseboard</option>
                  <option>Interactive Floor-by-Floor Lighting System</option>
                </select>
              </div>
            </div>

            <div class="p-3 rounded-lg border-2 border-dashed border-cyan-300 bg-cyan-50/40 text-center cursor-pointer hover:bg-cyan-50 transition-colors">
              <svg class="w-6 h-6 text-cyan-600 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/></svg>
              <div class="text-xs font-bold text-cyan-900">Upload CAD Drawing, Revit BIM, or Architectural PDF</div>
              <div class="text-[10px] text-slate-500">Supports .DWG, .DXF, .RVT, .PDF up to 50MB</div>
            </div>

            <div class="flex items-center justify-between pt-2">
              <div class="text-xs text-slate-600 font-mono">Chennai Facility: <span class="text-slate-900 font-bold">+91 (044) 2834-5678</span></div>
              <button type="submit" class="px-5 py-2 rounded-lg bg-cyan-700 hover:bg-cyan-600 text-white font-bold text-xs shadow-md">
                Submit Drawing for Detailed Estimate
              </button>
            </div>
          </form>
        </div>
      </div>
    `;
  }

  handleSa3dQuoteSubmit(e) {
    e.preventDefault();
    alert('Thank you! Your architectural CAD drawings have been received. The SA 3D engineering team in Chennai will send you a 3D scaling report and quotation within 4 hours.');
  }

  // --- Prototype for Proposal 9 (selfie-miniature.com) ---
  renderDemoSelfieAdminLayout(slide) {
    return `
      <div class="space-y-4">
        <!-- Admin Dashboard Mockup Tabs -->
        <div class="flex items-center justify-between p-3 rounded-xl bg-slate-100 border border-slate-200">
          <div class="flex items-center gap-2.5">
            <span class="px-2 py-0.5 rounded bg-indigo-700 text-white font-bold text-xs">SELFIE MINIATURE ADMIN</span>
            <span class="text-xs text-slate-500 font-mono">Backend Database v3.0</span>
          </div>

          <div class="flex items-center gap-1.5 text-xs">
            <button class="selfie-tab-btn active px-3 py-1.5 rounded-lg bg-indigo-700 text-white font-bold" onclick="window.app.switchSelfieTab('sales')">Sales & KPIs</button>
            <button class="selfie-tab-btn px-3 py-1.5 rounded-lg bg-white text-slate-700 font-bold hover:bg-slate-50 border border-slate-200" onclick="window.app.switchSelfieTab('inventory')">SKU Inventory</button>
            <button class="selfie-tab-btn px-3 py-1.5 rounded-lg bg-white text-slate-700 font-bold hover:bg-slate-50 border border-slate-200" onclick="window.app.switchSelfieTab('ga4')">GA4 E-Com Funnel</button>
          </div>
        </div>

        <!-- Sales KPI Panel -->
        <div id="selfie-panel-sales" class="selfie-panel glass-panel p-5 bg-white shadow-xs">
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
            <div class="p-3.5 rounded-xl bg-indigo-50 border border-indigo-200 text-center">
              <div class="text-2xl font-black text-indigo-900">₹82,450</div>
              <div class="text-xs font-bold text-indigo-700 mt-0.5">Today's Revenue</div>
              <div class="text-[10px] text-slate-500">+18% vs Yesterday</div>
            </div>
            <div class="p-3.5 rounded-xl bg-blue-50 border border-blue-200 text-center">
              <div class="text-2xl font-black text-blue-900">127</div>
              <div class="text-xs font-bold text-blue-700 mt-0.5">Total Orders</div>
              <div class="text-[10px] text-slate-500">Avg Order: ₹649</div>
            </div>
            <div class="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-center">
              <div class="text-2xl font-black text-emerald-900">3.8%</div>
              <div class="text-xs font-bold text-emerald-700 mt-0.5">Conversion Rate</div>
              <div class="text-[10px] text-slate-500">Benchmark: 2.5%</div>
            </div>
            <div class="p-3.5 rounded-xl bg-red-50 border border-red-200 text-center">
              <div class="text-2xl font-black text-red-900">21</div>
              <div class="text-xs font-bold text-red-700 mt-0.5">Abandoned Carts</div>
              <div class="text-[10px] text-slate-500">Auto-WhatsApp Sent</div>
            </div>
          </div>
        </div>

        <!-- SKU Inventory Panel -->
        <div id="selfie-panel-inventory" class="selfie-panel glass-panel p-5 bg-white shadow-xs hidden">
          <div class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Live Warehouse SKU Matrix & Low-Stock Alerts</div>
          <table class="w-full text-xs text-left">
            <thead class="bg-slate-100 border-b border-slate-200">
              <tr>
                <th class="p-2 text-slate-700 font-bold">SKU Code</th>
                <th class="p-2 text-slate-700 font-bold">Product Name</th>
                <th class="p-2 text-slate-700 font-bold">Total</th>
                <th class="p-2 text-slate-700 font-bold">Reserved</th>
                <th class="p-2 text-slate-700 font-bold">Available</th>
                <th class="p-2 text-slate-700 font-bold">Status</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200 font-mono text-[11px]">
              <tr>
                <td class="p-2 font-bold text-slate-900">DP-001-BLK</td>
                <td class="p-2 font-sans font-medium text-slate-800">45L Travel Duffel Pack (Black)</td>
                <td class="p-2">100</td>
                <td class="p-2 text-amber-700">8</td>
                <td class="p-2 font-bold text-emerald-700">92</td>
                <td class="p-2 font-sans"><span class="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-[10px]">In Stock</span></td>
              </tr>
              <tr>
                <td class="p-2 font-bold text-slate-900">BP-004-NAV</td>
                <td class="p-2 font-sans font-medium text-slate-800">16" Water-Resistant Laptop Backpack</td>
                <td class="p-2">15</td>
                <td class="p-2 text-amber-700">7</td>
                <td class="p-2 font-bold text-red-700">8</td>
                <td class="p-2 font-sans"><span class="px-2 py-0.5 rounded bg-red-100 text-red-800 font-bold text-[10px]">⚠️ Low Stock</span></td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- GA4 E-Com Funnel Panel -->
        <div id="selfie-panel-ga4" class="selfie-panel glass-panel p-5 bg-white shadow-xs hidden">
          <div class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Google Analytics 4 E-Commerce Funnel Drop-Offs</div>
          <div class="grid grid-cols-5 gap-2 text-center text-xs">
            <div class="p-2.5 rounded bg-slate-100 border border-slate-200">
              <div class="text-lg font-black text-slate-900">10,000</div>
              <div class="text-[10px] text-slate-500">Visitors</div>
            </div>
            <div class="p-2.5 rounded bg-blue-50 border border-blue-200">
              <div class="text-lg font-black text-blue-900">4,000</div>
              <div class="text-[10px] text-blue-700">Product Views (40%)</div>
            </div>
            <div class="p-2.5 rounded bg-indigo-50 border border-indigo-200">
              <div class="text-lg font-black text-indigo-900">1,000</div>
              <div class="text-[10px] text-indigo-700">Add to Cart (25%)</div>
            </div>
            <div class="p-2.5 rounded bg-amber-50 border border-amber-200">
              <div class="text-lg font-black text-amber-900">600</div>
              <div class="text-[10px] text-amber-700">Checkouts (60%)</div>
            </div>
            <div class="p-2.5 rounded bg-emerald-50 border border-emerald-200">
              <div class="text-lg font-black text-emerald-900">300</div>
              <div class="text-[10px] text-emerald-700">Purchases (50%)</div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  switchSelfieTab(tabName) {
    document.querySelectorAll('.selfie-tab-btn').forEach(btn => {
      btn.classList.remove('active', 'bg-indigo-700', 'text-white');
      btn.classList.add('bg-white', 'text-slate-700');
    });
    if (event.currentTarget) {
      event.currentTarget.classList.add('active', 'bg-indigo-700', 'text-white');
      event.currentTarget.classList.remove('bg-white', 'text-slate-700');
    }
    document.querySelectorAll('.selfie-panel').forEach(panel => panel.classList.add('hidden'));
    const target = document.getElementById(`selfie-panel-${tabName}`);
    if (target) target.classList.remove('hidden');
  }

  // --- Proposal Boundary Gating & Navigation Engine ---

  isLastSlideOfCurrentProposal() {
    const currentSlide = this.data.slides[this.currentIndex];
    const nextSlide = this.data.slides[this.currentIndex + 1];

    if (!nextSlide) return true; // Very last slide of entire presentation
    return currentSlide.categoryId !== nextSlide.categoryId;
  }

  showProposalEndBoundary() {
    this.isBoundaryModalOpen = true;
    const currentSlide = this.data.slides[this.currentIndex];
    const currentCategory = this.data.categories.find(c => c.id === currentSlide.categoryId);
    const currentCatIndex = this.data.categories.findIndex(c => c.id === currentSlide.categoryId);
    const nextCategory = this.data.categories[currentCatIndex + 1];

    if (this.boundaryModal && nextCategory) {
      this.boundaryText.innerHTML = `
        <div class="text-sm font-bold text-slate-800">You have completed all slides for:</div>
        <div class="text-lg font-extrabold text-blue-700 font-mono mt-1 mb-2">${currentCategory.name}</div>
        <p class="text-xs text-slate-500">To proceed to the next proposal, click below or choose a proposal from the top menu.</p>
      `;

      this.boundaryNextBtn.innerHTML = `
        <span>Proceed to ${nextCategory.name} →</span>
      `;
      this.boundaryNextBtn.onclick = () => {
        this.hideBoundaryModal();
        this.goToCategory(nextCategory.id);
      };

      this.boundaryModal.classList.add('open');
    }
  }

  hideBoundaryModal() {
    this.isBoundaryModalOpen = false;
    if (this.boundaryModal) {
      this.boundaryModal.classList.remove('open');
    }
  }

  nextSlide() {
    if (this.isBoundaryModalOpen) {
      return;
    }

    if (this.isLastSlideOfCurrentProposal()) {
      // STOP at proposal boundary and show indicator modal!
      this.showProposalEndBoundary();
      return;
    }

    if (this.currentIndex < this.totalSlides - 1) {
      this.goToSlide(this.currentIndex + 1);
    }
  }

  prevSlide() {
    if (this.isBoundaryModalOpen) {
      this.hideBoundaryModal();
      return;
    }

    if (this.currentIndex > 0) {
      this.goToSlide(this.currentIndex - 1);
    }
  }

  goToSlide(index, animate = true) {
    if (index < 0 || index >= this.totalSlides) return;

    this.hideBoundaryModal();
    this.currentIndex = index;

    for (let i = 0; i < this.totalSlides; i++) {
      const slideEl = document.getElementById(`slide-wrapper-${i}`);
      if (!slideEl) continue;

      if (i === this.currentIndex) {
        slideEl.className = 'slide-wrapper active';
      } else if (i < this.currentIndex) {
        slideEl.className = 'slide-wrapper prev';
      } else {
        slideEl.className = 'slide-wrapper';
      }
    }

    const progressPercent = ((this.currentIndex + 1) / this.totalSlides) * 100;
    if (this.progressBar) this.progressBar.style.width = `${progressPercent}%`;

    if (this.slideCounter) {
      this.slideCounter.innerText = `${this.currentIndex + 1} / ${this.totalSlides}`;
    }

    const currentSlide = this.data.slides[this.currentIndex];

    if (this.currentCategoryBadge) {
      const cat = this.data.categories.find(c => c.id === currentSlide.categoryId);
      if (cat) {
        this.currentCategoryBadge.innerText = cat.name;
      }
    }

    if (this.categorySelect) {
      this.categorySelect.value = currentSlide.categoryId;
    }

    document.querySelectorAll('.category-pill-btn').forEach(btn => {
      if (btn.dataset.categoryId === currentSlide.categoryId) {
        btn.classList.add('bg-blue-600', 'text-white', 'border-blue-600');
        btn.classList.remove('bg-slate-100', 'text-slate-700', 'border-slate-200');
      } else {
        btn.classList.remove('bg-blue-600', 'text-white', 'border-blue-600');
        btn.classList.add('bg-slate-100', 'text-slate-700', 'border-slate-200');
      }
    });

    if (this.notesContent) {
      this.notesContent.innerHTML = `
        <div class="text-xs font-mono text-blue-700 font-bold mb-1">Slide ${this.currentIndex + 1}: ${currentSlide.title}</div>
        <p class="text-xs text-slate-700 leading-relaxed">${currentSlide.speakerNotes || 'No notes for this slide.'}</p>
      `;
    }

    document.querySelectorAll('.grid-slide-thumb').forEach((thumb, idx) => {
      if (idx === this.currentIndex) {
        thumb.classList.add('border-blue-600', 'ring-2', 'ring-blue-600/30', 'bg-blue-50/50');
      } else {
        thumb.classList.remove('border-blue-600', 'ring-2', 'ring-blue-600/30', 'bg-blue-50/50');
      }
    });
  }

  goToCategory(categoryId) {
    const target = this.data.slides.findIndex(s => s.categoryId === categoryId);
    if (target !== -1) {
      this.goToSlide(target);
    }
  }

  toggleSpeakerNotes() {
    this.isNotesOpen = !this.isNotesOpen;
    if (this.notesDrawer) {
      if (this.isNotesOpen) this.notesDrawer.classList.add('open');
      else this.notesDrawer.classList.remove('open');
    }
  }

  toggleGridModal() {
    this.isGridOpen = !this.isGridOpen;
    if (this.gridModal) {
      if (this.isGridOpen) this.gridModal.classList.add('open');
      else this.gridModal.classList.remove('open');
    }
  }

  toggleShortcutsModal() {
    this.isShortcutsOpen = !this.isShortcutsOpen;
    if (this.shortcutsModal) {
      if (this.isShortcutsOpen) this.shortcutsModal.classList.add('open');
      else this.shortcutsModal.classList.remove('open');
    }
  }

  toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.warn('Fullscreen request blocked or unsupported:', err);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }

  renderGridModal() {
    if (!this.gridContainer) return;
    this.gridContainer.innerHTML = this.data.slides.map((slide, idx) => `
      <div 
        class="grid-slide-thumb p-3 rounded-xl bg-white border border-slate-200 hover:border-blue-600 cursor-pointer transition-all flex flex-col justify-between shadow-xs"
        onclick="window.app.goToSlide(${idx}); window.app.toggleGridModal();"
      >
        <div>
          <div class="flex items-center justify-between mb-1">
            <span class="text-[10px] font-mono text-blue-700 font-bold">#${idx + 1}</span>
            <span class="text-[9px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-700 font-semibold">${slide.tag}</span>
          </div>
          <div class="text-xs font-bold text-slate-900 line-clamp-2">${slide.title}</div>
        </div>
        <div class="text-[10px] text-slate-500 mt-2 truncate">${slide.domain || slide.subtitle}</div>
      </div>
    `).join('');
  }

  initEventListeners() {
    window.addEventListener('keydown', (e) => {
      if (['input', 'textarea', 'select'].includes(document.activeElement.tagName.toLowerCase())) {
        return;
      }

      switch (e.key) {
        case 'ArrowRight':
        case 'PageDown':
        case ' ':
          e.preventDefault();
          this.nextSlide();
          break;
        case 'ArrowLeft':
        case 'PageUp':
          e.preventDefault();
          this.prevSlide();
          break;
        case 'Home':
          e.preventDefault();
          this.goToSlide(0);
          break;
        case 'End':
          e.preventDefault();
          this.goToSlide(this.totalSlides - 1);
          break;
        case 'f':
        case 'F':
          e.preventDefault();
          this.toggleFullscreen();
          break;
        case 'n':
        case 'N':
          e.preventDefault();
          this.toggleSpeakerNotes();
          break;
        case 'g':
        case 'G':
          e.preventDefault();
          this.toggleGridModal();
          break;
        case '?':
          e.preventDefault();
          this.toggleShortcutsModal();
          break;
        case 'Escape':
          if (this.isGridOpen) this.toggleGridModal();
          if (this.isShortcutsOpen) this.toggleShortcutsModal();
          if (this.isBoundaryModalOpen) this.hideBoundaryModal();
          break;
      }
    });

    this.stage.addEventListener('touchstart', (e) => {
      this.touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    this.stage.addEventListener('touchend', (e) => {
      this.touchEndX = e.changedTouches[0].screenX;
      const diff = this.touchStartX - this.touchEndX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) this.nextSlide();
        else this.prevSlide();
      }
    }, { passive: true });

    if (this.prevBtn) this.prevBtn.addEventListener('click', () => this.prevSlide());
    if (this.nextBtn) this.nextBtn.addEventListener('click', () => this.nextSlide());
    if (this.fullscreenBtn) this.fullscreenBtn.addEventListener('click', () => this.toggleFullscreen());
    if (this.notesToggleBtn) this.notesToggleBtn.addEventListener('click', () => this.toggleSpeakerNotes());
    if (this.gridToggleBtn) this.gridToggleBtn.addEventListener('click', () => this.toggleGridModal());
    if (this.shortcutsToggleBtn) this.shortcutsToggleBtn.addEventListener('click', () => this.toggleShortcutsModal());
  }

  initPrototypes() {}
}

window.addEventListener('DOMContentLoaded', () => {
  window.app = new PresentationApp(PROPOSAL_DATA);
});
