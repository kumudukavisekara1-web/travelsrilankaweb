/**
 * Travel Sri Lanka - CMS Admin Management Dashboard
 * Allows managing Destinations, Packages, Blog, Contact Enquiries & Subscribers
 */

class AdminCMS {
  constructor() {
    this.storageKeys = {
      enquiries: 'tsl_enquiries',
      subscribers: 'tsl_subscribers',
      customDestinations: 'tsl_custom_destinations',
      customPackages: 'tsl_custom_packages',
      customBlog: 'tsl_custom_blog'
    };
  }

  init() {
    this.seedDemoDataIfEmpty();
  }

  seedDemoDataIfEmpty() {
    if (!localStorage.getItem(this.storageKeys.enquiries)) {
      const demoEnquiries = [
        {
          id: "ENQ-1001",
          name: "James Harrington",
          email: "james.h@example.co.uk",
          phone: "+44 7911 123456",
          country: "United Kingdom",
          travelDates: "2026-11-15 to 2026-11-28",
          adults: 2,
          children: 0,
          budget: "Luxury ($3,000 - $5,000)",
          interests: ["Wildlife", "Culture", "Beaches"],
          packageInterest: "Sri Lanka Highlights (7 Days)",
          message: "Looking for a luxury private driver and safari glamping in Yala for our 10th anniversary.",
          date: "2026-08-28 14:32",
          status: "New"
        },
        {
          id: "ENQ-1002",
          name: "Dr. Ananya Sharma",
          email: "ananya.sharma@example.in",
          phone: "+91 98200 98200",
          country: "India",
          travelDates: "2026-10-02 to 2026-10-08",
          adults: 4,
          children: 2,
          budget: "Mid-Range ($1,500 - $2,500)",
          interests: ["Culture", "Food", "Mountains"],
          packageInterest: "Cultural Heritage Tour",
          message: "Family trip interested in Ramayana trail sites, Kandy temple and scenic Nuwara Eliya tea hills.",
          date: "2026-08-29 09:15",
          status: "Contacted"
        }
      ];
      localStorage.setItem(this.storageKeys.enquiries, JSON.stringify(demoEnquiries));
    }

    if (!localStorage.getItem(this.storageKeys.subscribers)) {
      const demoSubscribers = [
        { email: "sarah.miller@traveler.com", date: "2026-08-25" },
        { email: "tanaka.kenji@tokyo-voyage.jp", date: "2026-08-27" },
        { email: "lucas.dupont@paris.fr", date: "2026-08-29" }
      ];
      localStorage.setItem(this.storageKeys.subscribers, JSON.stringify(demoSubscribers));
    }
  }

  saveEnquiry(formData) {
    const enquiries = JSON.parse(localStorage.getItem(this.storageKeys.enquiries) || '[]');
    const newEnquiry = {
      id: `ENQ-${Math.floor(1000 + Math.random() * 9000)}`,
      ...formData,
      date: new Date().toISOString().replace('T', ' ').substring(0, 16),
      status: "New"
    };
    enquiries.unshift(newEnquiry);
    localStorage.setItem(this.storageKeys.enquiries, JSON.stringify(enquiries));
    return newEnquiry;
  }

  saveSubscriber(email) {
    const subscribers = JSON.parse(localStorage.getItem(this.storageKeys.subscribers) || '[]');
    if (!subscribers.some(s => s.email.toLowerCase() === email.toLowerCase())) {
      subscribers.unshift({
        email: email.trim(),
        date: new Date().toISOString().substring(0, 10)
      });
      localStorage.setItem(this.storageKeys.subscribers, JSON.stringify(subscribers));
    }
  }

  getEnquiries() {
    return JSON.parse(localStorage.getItem(this.storageKeys.enquiries) || '[]');
  }

  getSubscribers() {
    return JSON.parse(localStorage.getItem(this.storageKeys.subscribers) || '[]');
  }

  deleteEnquiry(id) {
    let enquiries = this.getEnquiries();
    enquiries = enquiries.filter(e => e.id !== id);
    localStorage.setItem(this.storageKeys.enquiries, JSON.stringify(enquiries));
    this.renderAdminPortal();
  }

  updateEnquiryStatus(id, status) {
    const enquiries = this.getEnquiries();
    const target = enquiries.find(e => e.id === id);
    if (target) {
      target.status = status;
      localStorage.setItem(this.storageKeys.enquiries, JSON.stringify(enquiries));
      this.renderAdminPortal();
    }
  }

  exportEnquiriesCSV() {
    const enquiries = this.getEnquiries();
    if (enquiries.length === 0) {
      alert("No enquiries to export.");
      return;
    }

    const headers = ["ID", "Date", "Status", "Name", "Email", "Phone", "Country", "Travel Dates", "Adults", "Children", "Budget", "Package", "Message"];
    const rows = enquiries.map(e => [
      e.id,
      `"${e.date}"`,
      `"${e.status}"`,
      `"${e.name}"`,
      `"${e.email}"`,
      `"${e.phone || ''}"`,
      `"${e.country || ''}"`,
      `"${e.travelDates || ''}"`,
      e.adults,
      e.children,
      `"${e.budget || ''}"`,
      `"${e.packageInterest || ''}"`,
      `"${(e.message || '').replace(/"/g, '""')}"`
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map(r => r.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `Sri_Lanka_Travel_Enquiries_${new Date().toISOString().substring(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  openAdminModal() {
    const modal = document.getElementById("admin-cms-modal");
    if (!modal) return;
    this.renderAdminPortal();
    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }

  closeAdminModal() {
    const modal = document.getElementById("admin-cms-modal");
    if (modal) {
      modal.classList.add("hidden");
      document.body.style.overflow = "";
    }
  }

  switchTab(tabId) {
    const tabs = ["overview", "enquiries", "destinations", "packages", "subscribers"];
    tabs.forEach(t => {
      const content = document.getElementById(`admin-tab-${t}`);
      const btn = document.getElementById(`admin-nav-${t}`);
      if (content) content.classList.add("hidden");
      if (btn) {
        btn.classList.remove("bg-cyan-700", "text-white");
        btn.classList.add("text-slate-600", "hover:bg-slate-100");
      }
    });

    const activeContent = document.getElementById(`admin-tab-${tabId}`);
    const activeBtn = document.getElementById(`admin-nav-${tabId}`);
    if (activeContent) activeContent.classList.remove("hidden");
    if (activeBtn) {
      activeBtn.classList.add("bg-cyan-700", "text-white");
      activeBtn.classList.remove("text-slate-600", "hover:bg-slate-100");
    }
  }

  renderAdminPortal() {
    const enquiries = this.getEnquiries();
    const subscribers = this.getSubscribers();
    const destinations = window.SRI_LANKA_DATA.destinations;
    const packages = window.SRI_LANKA_DATA.tourPackages;

    // Update Counter Badges
    const countEnq = document.getElementById("admin-stat-enquiries");
    const countSub = document.getElementById("admin-stat-subscribers");
    const countDest = document.getElementById("admin-stat-destinations");
    const countPkg = document.getElementById("admin-stat-packages");

    if (countEnq) countEnq.textContent = enquiries.length;
    if (countSub) countSub.textContent = subscribers.length;
    if (countDest) countDest.textContent = destinations.length;
    if (countPkg) countPkg.textContent = packages.length;

    // Render Enquiries Table
    const enqTableBody = document.getElementById("admin-enquiries-table-body");
    if (enqTableBody) {
      if (enquiries.length === 0) {
        enqTableBody.innerHTML = `<tr><td colspan="6" class="text-center py-8 text-slate-400">No incoming traveler enquiries yet.</td></tr>`;
      } else {
        enqTableBody.innerHTML = enquiries.map(e => `
          <tr class="border-b border-slate-100 hover:bg-slate-50/70 text-xs sm:text-sm">
            <td class="py-3.5 px-3 font-semibold text-slate-800">
              ${e.id}<br>
              <span class="text-xs font-normal text-slate-400">${e.date}</span>
            </td>
            <td class="py-3.5 px-3">
              <strong class="text-slate-900">${e.name}</strong><br>
              <span class="text-xs text-slate-500">${e.email} • ${e.country || 'Global'}</span>
            </td>
            <td class="py-3.5 px-3">
              <span class="bg-cyan-50 text-cyan-800 text-xs font-semibold px-2 py-0.5 rounded-md">${e.packageInterest || 'Custom Trip'}</span><br>
              <span class="text-xs text-slate-500">${e.travelDates || 'Flexible'} (${e.adults} Adults)</span>
            </td>
            <td class="py-3.5 px-3">
              <select onchange="window.AdminCMSInstance.updateEnquiryStatus('${e.id}', this.value)" class="text-xs font-semibold rounded-lg px-2 py-1 border ${
                e.status === 'New' ? 'bg-amber-50 text-amber-800 border-amber-300' :
                e.status === 'Contacted' ? 'bg-blue-50 text-blue-800 border-blue-300' :
                'bg-emerald-50 text-emerald-800 border-emerald-300'
              }">
                <option value="New" ${e.status === 'New' ? 'selected' : ''}>🟡 New Lead</option>
                <option value="Contacted" ${e.status === 'Contacted' ? 'selected' : ''}>🔵 Contacted</option>
                <option value="Confirmed" ${e.status === 'Confirmed' ? 'selected' : ''}>🟢 Confirmed</option>
              </select>
            </td>
            <td class="py-3.5 px-3 max-w-xs truncate text-slate-600" title="${e.message}">
              ${e.message || '-'}
            </td>
            <td class="py-3.5 px-3 text-right">
              <button onclick="window.AdminCMSInstance.deleteEnquiry('${e.id}')" class="text-red-500 hover:text-red-700 font-bold p-1 rounded hover:bg-red-50" title="Delete">
                🗑️
              </button>
            </td>
          </tr>
        `).join('');
      }
    }

    // Render Subscribers Table
    const subTableBody = document.getElementById("admin-subscribers-table-body");
    if (subTableBody) {
      subTableBody.innerHTML = subscribers.map((s, idx) => `
        <tr class="border-b border-slate-100 text-xs sm:text-sm">
          <td class="py-3 px-3 text-slate-400 font-mono">#${idx + 1}</td>
          <td class="py-3 px-3 font-semibold text-slate-800">${s.email}</td>
          <td class="py-3 px-3 text-slate-500">${s.date}</td>
          <td class="py-3 px-3 text-right"><span class="bg-emerald-50 text-emerald-700 text-xs font-semibold px-2 py-0.5 rounded-full">Active</span></td>
        </tr>
      `).join('');
    }

    // Render Destinations List
    const destListContainer = document.getElementById("admin-destinations-list");
    if (destListContainer) {
      destListContainer.innerHTML = destinations.map(d => `
        <div class="flex items-center justify-between p-3.5 bg-slate-50 rounded-xl border border-slate-200">
          <div class="flex items-center gap-3">
            <img src="${d.thumbnail}" class="w-12 h-12 rounded-lg object-cover">
            <div>
              <h5 class="font-bold text-slate-800 text-sm">${d.name}</h5>
              <span class="text-xs text-slate-500">${d.province} • ${d.recommendedDuration}</span>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <button onclick="window.App.openDestinationModal('${d.id}')" class="text-xs bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 font-semibold px-3 py-1.5 rounded-lg">Preview</button>
          </div>
        </div>
      `).join('');
    }
  }
}

if (typeof window !== 'undefined') {
  window.AdminCMS = AdminCMS;
}
