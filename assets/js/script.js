// Global project data dengan BTS yang fleksibel


// Hero Slider Functionality
function initHeroSlider() {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    
    if (slides.length === 0) return;
    
    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }
    
    // Change slide every 5 seconds
    setInterval(nextSlide, 5000);
}

// Showcase Page Functionality dengan Pagination
function initShowcasePage() {
    const projectsGrid = document.getElementById('projects-grid');
    const searchInput = document.getElementById('search-input');
    const typeFilter = document.getElementById('type-filter');
    const categoryFilter = document.getElementById('category-filter');
    const clearFiltersBtn = document.getElementById('clear-filters');
    const activeFiltersContainer = document.getElementById('active-filters');
    const resultsCount = document.getElementById('results-count');
    const paginationContainer = document.getElementById('pagination');
    
    if (!projectsGrid) return;
    
    let filteredProjects = [...allProjects];
    let activeFilters = {
        search: '',
        type: '',
        category: ''
    };
    
    // Pagination variables
    const projectsPerPage = 9;
    let currentPage = 1;
    
    // Render projects grid dengan pagination
    function renderProjects() {
        projectsGrid.innerHTML = '';
        
        if (filteredProjects.length === 0) {
            projectsGrid.innerHTML = '<p class="no-results">No projects found matching your criteria.</p>';
            renderPagination(); // Render pagination even when no results
            return;
        }
        
        // Calculate projects to show for current page
        const startIndex = (currentPage - 1) * projectsPerPage;
        const endIndex = startIndex + projectsPerPage;
        const projectsToShow = filteredProjects.slice(startIndex, endIndex);
        
        projectsToShow.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            projectCard.innerHTML = `
                <img src="${project.image}" alt="${project.title}">
                <div class="project-card-content">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="project-meta">
                        <span><i class="far fa-calendar"></i> ${project.date}</span>
                        <span><i class="far fa-user"></i> ${project.client}</span>
                    </div>
                    <div class="project-tags">
                        ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                    </div>
                </div>
            `;
            
            projectCard.addEventListener('click', () => {
                window.location.href = `project-detail.html?id=${project.id}`;
            });
            
            projectsGrid.appendChild(projectCard);
        });
        
        renderPagination();
    }
    
    // Render pagination controls
    function renderPagination() {
        if (!paginationContainer) return;
        
        const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
        
        // Hide pagination if only one page or no projects
        if (totalPages <= 1 || filteredProjects.length === 0) {
            paginationContainer.innerHTML = '';
            return;
        }
        
        let paginationHTML = '';
        
        // Previous button - SELALU TAMPILKAN, tapi disabled jika di halaman pertama
        if (currentPage > 1) {
            paginationHTML += `<button class="pagination-btn" id="prev-page">
                <i class="fas fa-chevron-left"></i> Previous
            </button>`;
        } else {
            paginationHTML += `<button class="pagination-btn disabled" disabled>
                <i class="fas fa-chevron-left"></i> Previous
            </button>`;
        }
        
        // Page info - SELALU TAMPILKAN
        paginationHTML += `<div class="pagination-info">Page ${currentPage} of ${totalPages}</div>`;
        
        // Page numbers - SELALU TAMPILKAN
        paginationHTML += `<div class="page-numbers">`;
        
        // Show first page, current page, and pages around current page
        const maxVisiblePages = 5;
        let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
        let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
        
        // Adjust start page if we're near the end
        if (endPage - startPage + 1 < maxVisiblePages) {
            startPage = Math.max(1, endPage - maxVisiblePages + 1);
        }
        
        // Show first page and ellipsis if needed
        if (startPage > 1) {
            paginationHTML += `<a href="#" class="page-number" data-page="1">1</a>`;
            if (startPage > 2) {
                paginationHTML += `<span class="page-number disabled">...</span>`;
            }
        }
        
        // Show page numbers
        for (let i = startPage; i <= endPage; i++) {
            if (i === currentPage) {
                paginationHTML += `<a href="#" class="page-number active" data-page="${i}">${i}</a>`;
            } else {
                paginationHTML += `<a href="#" class="page-number" data-page="${i}">${i}</a>`;
            }
        }
        
        // Show last page and ellipsis if needed
        if (endPage < totalPages) {
            if (endPage < totalPages - 1) {
                paginationHTML += `<span class="page-number disabled">...</span>`;
            }
            paginationHTML += `<a href="#" class="page-number" data-page="${totalPages}">${totalPages}</a>`;
        }
        
        paginationHTML += `</div>`;
        
        // Next button - SELALU TAMPILKAN, tapi disabled jika di halaman terakhir
        if (currentPage < totalPages) {
            paginationHTML += `<button class="pagination-btn" id="next-page">
                Next <i class="fas fa-chevron-right"></i>
            </button>`;
        } else {
            paginationHTML += `<button class="pagination-btn disabled" disabled>
                Next <i class="fas fa-chevron-right"></i>
            </button>`;
        }
        
        paginationContainer.innerHTML = paginationHTML;
        
        // Add event listeners untuk tombol Previous
        const prevButton = document.getElementById('prev-page');
        if (prevButton && !prevButton.classList.contains('disabled')) {
            prevButton.addEventListener('click', () => {
                if (currentPage > 1) {
                    currentPage--;
                    renderProjects();
                    scrollToProjectsGrid();
                }
            });
        }
        
        // Add event listeners untuk tombol Next
        const nextButton = document.getElementById('next-page');
        if (nextButton && !nextButton.classList.contains('disabled')) {
            nextButton.addEventListener('click', () => {
                if (currentPage < totalPages) {
                    currentPage++;
                    renderProjects();
                    scrollToProjectsGrid();
                }
            });
        }
        
        // Add event listeners untuk nomor halaman
        document.querySelectorAll('.page-number:not(.disabled)').forEach(pageBtn => {
            pageBtn.addEventListener('click', (e) => {
                e.preventDefault();
                const page = parseInt(pageBtn.getAttribute('data-page'));
                if (page && page !== currentPage) {
                    currentPage = page;
                    renderProjects();
                    scrollToProjectsGrid();
                }
            });
        });
    }
    
    // Scroll to projects grid when changing pages
    function scrollToProjectsGrid() {
        const element = document.querySelector('.showcase-page');
        if (element) {
            const headerHeight = document.querySelector('header').offsetHeight;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 20;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    }
    
    // Filter projects based on active filters
    function filterProjects() {
        filteredProjects = allProjects.filter(project => {
            // Search filter
            if (activeFilters.search) {
                const searchTerm = activeFilters.search.toLowerCase();
                const searchableText = `${project.title} ${project.description} ${project.tags.join(' ')} ${project.client}`.toLowerCase();
                if (!searchableText.includes(searchTerm)) return false;
            }
            
            // Type filter
            if (activeFilters.type && project.type !== activeFilters.type) return false;
            
            // Category filter
            if (activeFilters.category && project.category !== activeFilters.category) return false;
            
            return true;
        });
        
        // Reset to first page when filters change
        currentPage = 1;
        
        renderProjects();
        updateResultsCount();
        updateActiveFiltersDisplay();
    }
    
    // Update results count text
    function updateResultsCount() {
        if (!resultsCount) return;
        
        const startIndex = (currentPage - 1) * projectsPerPage + 1;
        const endIndex = Math.min(currentPage * projectsPerPage, filteredProjects.length);
        
        if (filteredProjects.length === allProjects.length) {
            resultsCount.textContent = `Showing ${startIndex}-${endIndex} of ${allProjects.length} projects`;
        } else {
            resultsCount.textContent = `Showing ${startIndex}-${endIndex} of ${filteredProjects.length} projects (filtered from ${allProjects.length} total)`;
        }
    }
    
    // Update active filters display
    function updateActiveFiltersDisplay() {
        if (!activeFiltersContainer) return;
        
        activeFiltersContainer.innerHTML = '';
        
        if (activeFilters.search) {
            const filterTag = document.createElement('span');
            filterTag.className = 'filter-tag';
            filterTag.innerHTML = `Search: "${activeFilters.search}" <span class="remove" data-filter="search">×</span>`;
            activeFiltersContainer.appendChild(filterTag);
        }
        
        if (activeFilters.type) {
            const filterTag = document.createElement('span');
            filterTag.className = 'filter-tag';
            filterTag.innerHTML = `Type: ${activeFilters.type} <span class="remove" data-filter="type">×</span>`;
            activeFiltersContainer.appendChild(filterTag);
        }
        
        if (activeFilters.category) {
            const filterTag = document.createElement('span');
            filterTag.className = 'filter-tag';
            filterTag.innerHTML = `Category: ${activeFilters.category} <span class="remove" data-filter="category">×</span>`;
            activeFiltersContainer.appendChild(filterTag);
        }
        
        // Add event listeners to remove buttons
        document.querySelectorAll('.filter-tag .remove').forEach(button => {
            button.addEventListener('click', (e) => {
                e.stopPropagation();
                const filterType = button.getAttribute('data-filter');
                removeFilter(filterType);
            });
        });
    }
    
    // Remove specific filter
    function removeFilter(filterType) {
        activeFilters[filterType] = '';
        
        // Reset corresponding form element
        if (filterType === 'search') {
            searchInput.value = '';
        } else if (filterType === 'type') {
            typeFilter.value = '';
        } else if (filterType === 'category') {
            categoryFilter.value = '';
        }
        
        filterProjects();
    }
    
    // Clear all filters
    function clearAllFilters() {
        activeFilters = {
            search: '',
            type: '',
            category: ''
        };
        
        searchInput.value = '';
        typeFilter.value = '';
        categoryFilter.value = '';
        
        filterProjects();
    }
    
    // Event listeners
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            activeFilters.search = e.target.value;
            filterProjects();
        });
    }
    
    if (typeFilter) {
        typeFilter.addEventListener('change', (e) => {
            activeFilters.type = e.target.value;
            filterProjects();
        });
    }
    
    if (categoryFilter) {
        categoryFilter.addEventListener('change', (e) => {
            activeFilters.category = e.target.value;
            filterProjects();
        });
    }
    
    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', clearAllFilters);
    }
    
    // Initial render
    renderProjects();
    updateResultsCount();
}

// Project Detail Page Functionality dengan BTS yang diperbarui
function initProjectDetailPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = parseInt(urlParams.get('id'));
    
    if (!projectId) {
        window.location.href = 'showcase.html';
        return;
    }
    
    const project = allProjects.find(p => p.id === projectId);
    
    if (!project) {
        window.location.href = 'showcase.html';
        return;
    }
    
    // Update page title
    document.title = `${project.title} - Juan Hendrawan`;
    
    // Render project media
    const projectMedia = document.getElementById('project-media');
    if (projectMedia) {
        if (project.type === 'photo') {
            projectMedia.innerHTML = `
                <div class="project-image">
                    <img src="${project.galleryImages[0]}" alt="${project.title}" id="main-image">
                </div>
                <div class="image-gallery">
                    ${project.galleryImages.map((img, index) => `
                        <div class="gallery-thumb ${index === 0 ? 'active' : ''}" data-image="${img}">
                            <img src="${img}" alt="${project.title}">
                        </div>
                    `).join('')}
                </div>
            `;
            
            // Add event listeners to gallery thumbs
            document.querySelectorAll('.gallery-thumb').forEach(thumb => {
                thumb.addEventListener('click', () => {
                    const mainImage = document.getElementById('main-image');
                    if (mainImage) {
                        mainImage.src = thumb.getAttribute('data-image');
                    }
                    
                    document.querySelectorAll('.gallery-thumb').forEach(t => t.classList.remove('active'));
                    thumb.classList.add('active');
                });
            });
        } else if (project.type === 'video') {
            projectMedia.innerHTML = `
                <div class="video-container">
                    <iframe src="${project.videoURL}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            `;
        }
    }
    
    // Render full description
    const fullDescriptionEl = document.getElementById('project-full-description');
    if (fullDescriptionEl && project.fullDescription) {
        fullDescriptionEl.innerHTML = `
            <h3><i class="fas fa-file-alt"></i> Project Story & Details</h3>
            ${project.fullDescription}
        `;
    } else if (fullDescriptionEl) {
        // Jika tidak ada fullDescription, sembunyikan section
        fullDescriptionEl.style.display = 'none';
    }
    
    // Render BTS section dengan konten campuran
    const btsSection = document.getElementById('bts-section');
    if (btsSection && project.btsContent && project.btsContent.items.length > 0) {
        const btsItems = project.btsContent.items;
        const videoItems = btsItems.filter(item => item.type === 'video');
        const photoAlbumItems = btsItems.filter(item => item.type === 'photo-album');
        
        btsSection.innerHTML = `
            <div class="bts-section">
                <h3 class="bts-title"><i class="fas fa-play-circle"></i> ${project.btsContent.title || 'Behind The Scenes'}</h3>
                
                <div class="bts-filter">
                    <button class="bts-filter-btn all active" data-filter="all">
                        <i class="fas fa-th"></i> All (${btsItems.length})
                    </button>
                    <button class="bts-filter-btn video" data-filter="video">
                        <i class="fas fa-video"></i> Videos (${videoItems.length})
                    </button>
                    <button class="bts-filter-btn photo-album" data-filter="photo-album">
                        <i class="fas fa-images"></i> Photo Albums (${photoAlbumItems.length})
                    </button>
                    <div class="bts-counter">Showing ${btsItems.length} items</div>
                </div>
                
                <div class="bts-grid" id="bts-grid">
                    ${btsItems.map((item, index) => {
                        if (item.type === 'video') {
                            return `
                                <div class="bts-item video" data-type="video">
                                    <div class="bts-media">
                                        <iframe src="${item.url}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                        <div class="bts-badge">
                                            <i class="fas fa-video"></i> Video
                                        </div>
                                    </div>
                                    <div class="bts-content">
                                        <h4 class="bts-item-title">${item.title || 'Behind The Scenes'}</h4>
                                        <p class="bts-item-description">${item.description || 'Check out this behind the scenes content'}</p>
                                    </div>
                                </div>
                            `;
                        } else if (item.type === 'photo-album') {
                            return `
                                <div class="bts-item photo-album" data-type="photo-album" data-album-index="${index}">
                                    <div class="bts-media">
                                        <img src="${item.coverImage}" alt="${item.title}">
                                        <div class="album-badge">
                                            <i class="fas fa-images"></i> Album
                                        </div>
                                        <div class="album-count">
                                            <i class="fas fa-camera"></i> ${item.photos.length} photos
                                        </div>
                                    </div>
                                    <div class="bts-content">
                                        <h4 class="bts-item-title">${item.title || 'Photo Album'}</h4>
                                        <p class="bts-item-description">${item.description || 'Click to view photo album'}</p>
                                    </div>
                                </div>
                            `;
                        }
                    }).join('')}
                </div>
            </div>
            
            <!-- Album Modal -->
            <div class="album-modal" id="album-modal">
                <div class="album-modal-content">
                    <div class="album-modal-header">
                        <div>
                            <h3 class="album-modal-title" id="album-modal-title">Album Title</h3>
                            <p class="album-modal-description" id="album-modal-description">Album description</p>
                        </div>
                        <button class="album-modal-close" id="album-modal-close">&times;</button>
                    </div>
                    <div class="album-modal-body">
                        <div class="album-photos-grid" id="album-photos-grid">
                            <!-- Photos will be populated here -->
                        </div>
                    </div>
                    <div class="album-modal-footer">
                        <div class="album-photo-count" id="album-photo-count">0 photos</div>
                        <button class="album-download-btn" id="album-download-btn">
                            <i class="fas fa-download"></i> Download All
                        </button>
                    </div>
                </div>
            </div>
            
            <!-- Album Lightbox -->
            <div class="album-lightbox" id="album-lightbox">
                <button class="album-lightbox-close" id="album-lightbox-close">&times;</button>
                <div class="album-lightbox-nav">
                    <button class="album-lightbox-prev" id="album-lightbox-prev">
                        <i class="fas fa-chevron-left"></i>
                    </button>
                    <button class="album-lightbox-next" id="album-lightbox-next">
                        <i class="fas fa-chevron-right"></i>
                    </button>
                </div>
                <div class="album-lightbox-content">
                    <img src="" class="album-lightbox-img" id="album-lightbox-img">
                </div>
                <div class="album-lightbox-info" id="album-lightbox-info">
                    Photo 1 of 10
                </div>
            </div>
        `;
        
        // Initialize BTS filtering
        initBTSFiltering();
        
        // Initialize album functionality
        initAlbumFunctionality(btsItems);
    } else if (btsSection) {
        // Jika tidak ada BTS content, sembunyikan section
        btsSection.style.display = 'none';
    }
    
    // Render project info
    const projectInfo = document.getElementById('project-info');
    if (projectInfo) {
        projectInfo.innerHTML = `
            <div class="info-section">
                <h2>${project.title}</h2>
                <span class="project-type">${project.type}</span>
                <p>${project.description}</p>
            </div>
            <div class="info-section">
                <h3>Project Details</h3>
                <ul class="project-details">
                    <li>
                        <span class="detail-label">Date:</span>
                        <span>${project.date}</span>
                    </li>
                    <li>
                        <span class="detail-label">Client:</span>
                        <span>${project.client}</span>
                    </li>
                    <li>
                        <span class="detail-label">Category:</span>
                        <span>${project.category}</span>
                    </li>
                    <li>
                        <span class="detail-label">Role:</span>
                        <span>${project.role}</span>
                    </li>
                </ul>
            </div>
            <div class="info-section">
                <h3>Tags</h3>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
            </div>
        `;
    }
}

// Initialize BTS Filtering
function initBTSFiltering() {
    const filterButtons = document.querySelectorAll('.bts-filter-btn');
    const btsItems = document.querySelectorAll('.bts-item');
    const counter = document.querySelector('.bts-counter');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter items
            let visibleCount = 0;
            btsItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-type') === filter) {
                    item.style.display = 'block';
                    visibleCount++;
                } else {
                    item.style.display = 'none';
                }
            });
            
            // Update counter
            if (counter) {
                counter.textContent = `Showing ${visibleCount} item${visibleCount !== 1 ? 's' : ''}`;
            }
        });
    });
}

// Initialize Album Functionality
function initAlbumFunctionality(btsItems) {
    const albumModal = document.getElementById('album-modal');
    const albumLightbox = document.getElementById('album-lightbox');
    const albumItems = btsItems.filter(item => item.type === 'photo-album');
    
    // Open album modal when clicking on album items
    document.querySelectorAll('.bts-item.photo-album').forEach((albumItem, index) => {
        albumItem.addEventListener('click', () => {
            const albumIndex = parseInt(albumItem.getAttribute('data-album-index'));
            const album = albumItems[albumIndex];
            
            if (album) {
                openAlbumModal(album);
            }
        });
    });
    
    // Close album modal
    document.getElementById('album-modal-close').addEventListener('click', closeAlbumModal);
    
    // Close album modal when clicking outside
    albumModal.addEventListener('click', (e) => {
        if (e.target === albumModal) {
            closeAlbumModal();
        }
    });
    
    // Album lightbox functionality
    let currentAlbumPhotos = [];
    let currentLightboxIndex = 0;
    
    document.getElementById('album-lightbox-close').addEventListener('click', closeAlbumLightbox);
    document.getElementById('album-lightbox-prev').addEventListener('click', showPrevPhoto);
    document.getElementById('album-lightbox-next').addEventListener('click', showNextPhoto);
    
    // Keyboard navigation for lightbox
    document.addEventListener('keydown', (e) => {
        if (albumLightbox.classList.contains('active')) {
            if (e.key === 'Escape') {
                closeAlbumLightbox();
            } else if (e.key === 'ArrowLeft') {
                showPrevPhoto();
            } else if (e.key === 'ArrowRight') {
                showNextPhoto();
            }
        }
    });
    
    // Close lightbox when clicking outside
    albumLightbox.addEventListener('click', (e) => {
        if (e.target === albumLightbox) {
            closeAlbumLightbox();
        }
    });
    
    function openAlbumModal(album) {
        const modalTitle = document.getElementById('album-modal-title');
        const modalDescription = document.getElementById('album-modal-description');
        const photosGrid = document.getElementById('album-photos-grid');
        const photoCount = document.getElementById('album-photo-count');
        
        // Set album info
        modalTitle.textContent = album.title;
        modalDescription.textContent = album.description;
        photoCount.textContent = `${album.photos.length} photos`;
        
        // Populate photos grid
        photosGrid.innerHTML = album.photos.map((photo, index) => `
            <div class="album-photo-item" data-photo-index="${index}">
                <img src="${photo}" alt="${album.title} - Photo ${index + 1}">
            </div>
        `).join('');
        
        // Add click event to photos
        document.querySelectorAll('.album-photo-item').forEach((photoItem, index) => {
            photoItem.addEventListener('click', () => {
                openAlbumLightbox(album.photos, index);
            });
        });
        
        // Show modal
        albumModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function closeAlbumModal() {
        albumModal.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    function openAlbumLightbox(photos, startIndex) {
        currentAlbumPhotos = photos;
        currentLightboxIndex = startIndex;
        
        updateLightboxImage();
        albumLightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function closeAlbumLightbox() {
        albumLightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    function showPrevPhoto() {
        currentLightboxIndex = (currentLightboxIndex - 1 + currentAlbumPhotos.length) % currentAlbumPhotos.length;
        updateLightboxImage();
    }
    
    function showNextPhoto() {
        currentLightboxIndex = (currentLightboxIndex + 1) % currentAlbumPhotos.length;
        updateLightboxImage();
    }
    
    function updateLightboxImage() {
        const lightboxImg = document.getElementById('album-lightbox-img');
        const lightboxInfo = document.getElementById('album-lightbox-info');
        
        lightboxImg.src = currentAlbumPhotos[currentLightboxIndex];
        lightboxInfo.textContent = `Photo ${currentLightboxIndex + 1} of ${currentAlbumPhotos.length}`;
    }
    
    // Download button functionality (placeholder)
    document.getElementById('album-download-btn').addEventListener('click', () => {
        alert('Download functionality would be implemented here. In a real application, this would download a ZIP file containing all photos in the album.');
    });
}

// Initialize appropriate functionality based on current page
document.addEventListener('DOMContentLoaded', function() {
    // Initialize hero slider on home page
    if (document.querySelector('.hero-slider')) {
        initHeroSlider();
    }
    
    // Initialize showcase page functionality
    if (document.getElementById('projects-grid')) {
        initShowcasePage();
    }
    
    // Initialize project detail page functionality
    if (window.location.pathname.includes('project-detail.html')) {
        initProjectDetailPage();
    }
});

