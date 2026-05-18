// ==========================================
// 1. CẤU HÌNH SVG VÀ DỮ LIỆU DỰ ÁN
// ==========================================
const SVG_ICON = `<svg viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="8" y="10" width="36" height="32" rx="1" stroke="#888" stroke-width="1.2"/>
<circle cx="18" cy="20" r="4" stroke="#888" stroke-width="1.2"/>
<path d="M8 34 L20 24 L30 32 L36 26 L44 34" stroke="#888" stroke-width="1.2" fill="none"/>
</svg>`;

const THUMB_ICON = `<svg class="thumb-icon" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="8" y="10" width="36" height="32" rx="1" stroke="#888" stroke-width="1.2"/>
<circle cx="18" cy="20" r="4" stroke="#888" stroke-width="1.2"/>
<path d="M8 34 L20 24 L30 32 L36 26 L44 34" stroke="#888" stroke-width="1.2" fill="none"/>
</svg>`;

const projects = [
  {
    title: 'Riobook',
    date: 'Jan 31 2025',
    d1: 'Ảo ảnh trong xã hội dư thừa kết nối—Riobook, khổ 17x24,8mm',
    images: ['images/Riobook/rio-01.jpg', 'images/Riobook/rio-02.jpg', 'images/Riobook/rio-03.jpg']
    },
  {
    title: 'Kiến Trúc Đông Dương',
    date: 'June 12 2024',
    d1: 'In 50 cuốn, khổ 17x24,8mm',
    images: ['images/ktdd/KTDD-01.jpg', 'images/ktdd/KTDD-02.jpg', 'images/ktdd/KTDD-03.jpg',
              'images/ktdd/KTDD-04.jpg', 'images/ktdd/KTDD-05.jpg', 'images/ktdd/KTDD-06.jpg',
              'images/ktdd/KTDD-07.jpg', 'images/ktdd/KTDD-08.jpg', 'images/ktdd/KTDD-09.jpg',
              'images/ktdd/KTDD-10.jpg', 'images/ktdd/KTDD-11.jpg'
    ]
  },
  { title: 'Tập Thơ(Nguyễn Bính)',
    date: 'Aug 3 2022', 
    d1: 'Nguyễn Bính (tập thơ). 200x260 mm, 198 trang',
    images: ['images/tt/tt-01.jpg', 'images/tt/tt-02.jpg']
    },
  { title: "Quand l'art s'industrialise",
    date: 'September 20 2047', 
    d1: "It's not the first art movement in the world, it's just the first movement that comes to mind when it comes to graphic design",
    images: ['images/franc/franc-01.jpg', 'images/franc/france-02.jpg', 'images/franc/france-03.jpg',
             'images/franc/france-04.jpg', 'images/franc/france-05.jpg', 'images/franc/france-06.jpg',
             'images/franc/france-08.jpg', 'images/franc/france-09.jpg',
             'images/franc/france-10.jpg']
            },
  { title: 'TBG Logo/Label', 
    date: 'Oct 2024', 
    d1: '', images: ['images/TBG/TBG-01.jpg', 'images/TBG/TBG-02.jpg']
    },
  { title: 'SAV Complex', 
    date: 'Jun 11 2025', 
    d1: '...', 
    images: ['images/SAV/sav-02.jpg', 'images/SAV/sav-01.jpg'] },
  { title: 'Kanobeat', 
    date: '2025', 
    d1: '...', 
    images: ['images/kanobeat/kanobeat-01.jpg'] },
  { title: 'Nafertari Bakery', 
    date: 'May 2026', 
    d1: 'Một cửa hàng nhỏ tại địa phương', 
    images: ['images/nafertari/nafertari-01.jpg', 'images/nafertari/nafertari-02.jpg', 'images/nafertari/nafertari-03.jpg'] }
];

// ==========================================
// 2. DỰNG GRID TRANG CHỦ
// ==========================================
const grid = document.getElementById('grid');
projects.forEach((p, i) => {
  const el = document.createElement('div');
  el.className = 'grid-item';
  const thumbnailHTML = (p.images && p.images.length > 0)
    ? `<img src="${p.images[0]}" class="thumb-img" alt="${p.title}" style="width:100%; height:100%; object-fit:cover;">`
    : THUMB_ICON;
  el.innerHTML = `<div class="thumb">${thumbnailHTML}</div><div class="grid-label">${p.title}</div>`;
  el.onclick = () => openProject(i);
  grid.appendChild(el);
});

// ==========================================
// 3. ĐÓNG / MỞ DỰ ÁN (KHÔNG ANIMATION)
// ==========================================
function openProject(i) {
  const p = projects[i];
  const projectPage = document.getElementById('page-project');

  // Đổ dữ liệu vào giao diện trước
  document.getElementById('proj-title').textContent = p.title;
  document.getElementById('proj-date').textContent = p.date;

  if (p.d2) {
    document.getElementById('proj-desc').innerHTML = `<p>${p.d1}</p><p style="margin-top: 1em;">${p.d2}</p>`;
  } else {
    document.getElementById('proj-desc').innerHTML = `<p>${p.d1}</p>`;
  }

  const imgsContainer = document.getElementById('proj-images');
  imgsContainer.innerHTML = '';

  if (p.images && p.images.length > 0) {
    p.images.forEach(imgUrl => {
      const div = document.createElement('div');
      div.className = 'project-img';
      div.innerHTML = `<img src="${imgUrl}" alt="${p.title}" style="width:100%; height:100%; object-fit:cover;">`;
      imgsContainer.appendChild(div);
    });
  } else {
    for (let j = 0; j < 4; j++) {
      const div = document.createElement('div');
      div.className = 'project-img';
      div.innerHTML = SVG_ICON;
      imgsContainer.appendChild(div);
    }
  }

  // Bật trang dự án lên ngay lập tức, không dùng hiệu ứng trượt
  projectPage.style.display = 'block';
  projectPage.style.transition = 'none';
  projectPage.style.transform = 'none';

  // Đổi trạng thái nút điều hướng lập tức
  const homeLink = document.getElementById('nav-home-link');
  const backLink = document.getElementById('nav-back-link');
  if (homeLink) homeLink.style.display = 'none';
  if (backLink) backLink.style.display = 'block';

  projectPage.scrollTo(0, 0);
}

function showHome() {
  const projectPage = document.getElementById('page-project');

  // Ẩn trang dự án ngay lập tức không cần đợi setTimeout nữa
  projectPage.style.display = 'none';
  projectPage.style.transform = 'none';
  projectPage.style.transition = 'none';
  
  // Trả lại các nút điều hướng về trang chủ luôn
  const homeLink = document.getElementById('nav-home-link');
  const backLink = document.getElementById('nav-back-link');
  if (homeLink) homeLink.style.display = 'block';
  if (backLink) backLink.style.display = 'none';
}

// Lắng nghe sự kiện click trực tiếp vào nút quay lại
const backBtn = document.getElementById('nav-back-link');
if (backBtn) {
  backBtn.onclick = (e) => { 
    e.preventDefault(); 
    showHome(); 
  };
}

// Bấm phím ESC để thoát nhanh dự án (Dành cho máy tính)
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const projectPage = document.getElementById('page-project');
    if (projectPage && projectPage.style.display === 'block') showHome();
  }
});

// ==========================================
// 4. ĐỒNG HỒ GỐC
// ==========================================
function tick() {
  const n = new Date();
  const pad = v => String(v).padStart(2, '0');
  const el = document.getElementById('clock');
  if (el) el.textContent = pad(n.getHours()) + ':' + pad(n.getMinutes()) + ':' + pad(n.getSeconds());
}
tick(); 
setInterval(tick, 1000);
