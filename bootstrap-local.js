// Minimal Bootstrap JavaScript functionality for UI Guru

// Modal functionality
class Modal {
    constructor(element) {
        this.element = typeof element === 'string' ? document.querySelector(element) : element;
        this.backdrop = null;
    }

    show() {
        // Create backdrop
        this.backdrop = document.createElement('div');
        this.backdrop.className = 'modal-backdrop';
        this.backdrop.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            z-index: 1040;
            width: 100vw;
            height: 100vh;
            background-color: #000;
            opacity: 0.5;
        `;
        
        document.body.appendChild(this.backdrop);
        
        // Show modal
        this.element.style.display = 'block';
        this.element.classList.add('show');
        
        // Prevent body scroll
        document.body.style.overflow = 'hidden';
        
        // Setup close handlers
        this.setupCloseHandlers();
    }

    hide() {
        this.element.classList.remove('show');
        this.element.style.display = 'none';
        
        if (this.backdrop) {
            this.backdrop.remove();
            this.backdrop = null;
        }
        
        // Restore body scroll
        document.body.style.overflow = '';
    }

    setupCloseHandlers() {
        // Close on backdrop click
        if (this.backdrop) {
            this.backdrop.addEventListener('click', () => this.hide());
        }
        
        // Close on close button click
        const closeButtons = this.element.querySelectorAll('[data-bs-dismiss="modal"], .btn-close');
        closeButtons.forEach(btn => {
            btn.addEventListener('click', () => this.hide());
        });
        
        // Close on escape key
        const escapeHandler = (e) => {
            if (e.key === 'Escape') {
                this.hide();
                document.removeEventListener('keydown', escapeHandler);
            }
        };
        document.addEventListener('keydown', escapeHandler);
    }

    static getInstance(element) {
        return new Modal(element);
    }
}

// Alert dismiss functionality
document.addEventListener('DOMContentLoaded', function() {
    // Handle alert dismissals
    document.addEventListener('click', function(e) {
        if (e.target.matches('[data-bs-dismiss="alert"]')) {
            const alert = e.target.closest('.alert');
            if (alert) {
                alert.style.opacity = '0';
                alert.style.transform = 'translateY(-10px)';
                alert.style.transition = 'all 0.3s ease';
                setTimeout(() => alert.remove(), 300);
            }
        }
    });

    // Handle navbar toggler
    document.addEventListener('click', function(e) {
        if (e.target.matches('.navbar-toggler') || e.target.closest('.navbar-toggler')) {
            const toggler = e.target.matches('.navbar-toggler') ? e.target : e.target.closest('.navbar-toggler');
            const target = document.querySelector(toggler.getAttribute('data-bs-target'));
            if (target) {
                target.classList.toggle('show');
            }
        }
    });
});

// Collapse functionality
class Collapse {
    constructor(element) {
        this.element = typeof element === 'string' ? document.querySelector(element) : element;
    }

    toggle() {
        if (this.element.classList.contains('show')) {
            this.hide();
        } else {
            this.show();
        }
    }

    show() {
        this.element.style.height = this.element.scrollHeight + 'px';
        this.element.classList.add('show');
        setTimeout(() => {
            this.element.style.height = '';
        }, 350);
    }

    hide() {
        this.element.style.height = this.element.scrollHeight + 'px';
        this.element.offsetHeight; // Force reflow
        this.element.style.height = '0';
        this.element.classList.remove('show');
    }

    static getInstance(element) {
        return new Collapse(element);
    }
}

// Export bootstrap object for compatibility
window.bootstrap = {
    Modal: Modal,
    Collapse: Collapse
};

// Add CSS for collapse animation
if (!document.querySelector('#bootstrap-collapse-styles')) {
    const style = document.createElement('style');
    style.id = 'bootstrap-collapse-styles';
    style.textContent = `
        .collapse {
            overflow: hidden;
            transition: height 0.35s ease;
        }
        .collapse:not(.show) {
            height: 0;
        }
        .collapsing {
            height: 0;
            overflow: hidden;
            transition: height 0.35s ease;
        }
    `;
    document.head.appendChild(style);

    // Initialize Bootstrap components on document ready
    document.addEventListener('DOMContentLoaded', function() {
        initializeBootstrapComponents();
    });

    // Initialize Bootstrap components after DOM changes
    window.initializeBootstrapComponents = function() {
        initializeAccordions();
        initializeCarousels();
        initializeCollapses();
        initializeDropdowns();
        initializeTabs();
    };

    // Accordion functionality
    function initializeAccordions() {
        document.querySelectorAll('.accordion-button').forEach(button => {
            if (button.hasAttribute('data-bs-initialized')) return;
            button.setAttribute('data-bs-initialized', 'true');
            
            button.addEventListener('click', function() {
                const target = document.querySelector(this.dataset.bsTarget);
                const accordion = this.closest('.accordion');
                const allCollapsibles = accordion.querySelectorAll('.accordion-collapse');
                
                // Close other accordion items
                allCollapsibles.forEach(collapsible => {
                    if (collapsible !== target && collapsible.classList.contains('show')) {
                        collapsible.classList.remove('show');
                        const otherButton = accordion.querySelector(`[data-bs-target="#${collapsible.id}"]`);
                        if (otherButton) otherButton.classList.add('collapsed');
                    }
                });
                
                // Toggle current item
                if (target.classList.contains('show')) {
                    target.classList.remove('show');
                    this.classList.add('collapsed');
                } else {
                    target.classList.add('show');
                    this.classList.remove('collapsed');
                }
            });
        });
    }

    // Carousel functionality
    function initializeCarousels() {
        document.querySelectorAll('.carousel').forEach(carousel => {
            if (carousel.hasAttribute('data-bs-initialized')) return;
            carousel.setAttribute('data-bs-initialized', 'true');
            
            const items = carousel.querySelectorAll('.carousel-item');
            const indicators = carousel.querySelectorAll('.carousel-indicators button');
            const prevBtn = carousel.querySelector('.carousel-control-prev');
            const nextBtn = carousel.querySelector('.carousel-control-next');
            let currentIndex = 0;

            // Auto slide if data-bs-ride="carousel"
            let autoSlide;
            if (carousel.dataset.bsRide === 'carousel') {
                autoSlide = setInterval(() => {
                    nextSlide();
                }, 5000);
                
                carousel.addEventListener('mouseenter', () => clearInterval(autoSlide));
                carousel.addEventListener('mouseleave', () => {
                    autoSlide = setInterval(() => nextSlide(), 5000);
                });
            }

            function showSlide(index) {
                items.forEach(item => item.classList.remove('active'));
                indicators.forEach(indicator => indicator.classList.remove('active'));
                
                items[index].classList.add('active');
                if (indicators[index]) indicators[index].classList.add('active');
                currentIndex = index;
            }

            function nextSlide() {
                const next = (currentIndex + 1) % items.length;
                showSlide(next);
            }

            function prevSlide() {
                const prev = (currentIndex - 1 + items.length) % items.length;
                showSlide(prev);
            }

            // Event listeners
            if (prevBtn) prevBtn.addEventListener('click', prevSlide);
            if (nextBtn) nextBtn.addEventListener('click', nextSlide);
            
            indicators.forEach((indicator, index) => {
                indicator.addEventListener('click', () => showSlide(index));
            });
        });
    }

    // Collapse functionality
    function initializeCollapses() {
        document.querySelectorAll('[data-bs-toggle="collapse"]').forEach(toggle => {
            if (toggle.hasAttribute('data-bs-initialized')) return;
            toggle.setAttribute('data-bs-initialized', 'true');
            
            toggle.addEventListener('click', function() {
                const target = document.querySelector(this.dataset.bsTarget);
                if (target) {
                    if (target.classList.contains('show')) {
                        target.classList.remove('show');
                    } else {
                        target.classList.add('show');
                    }
                }
            });
        });
    }

    // Dropdown functionality
    function initializeDropdowns() {
        document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
            if (toggle.hasAttribute('data-bs-initialized')) return;
            toggle.setAttribute('data-bs-initialized', 'true');
            
            toggle.addEventListener('click', function(e) {
                e.preventDefault();
                const dropdown = this.parentElement;
                const menu = dropdown.querySelector('.dropdown-menu');
                
                // Close other dropdowns
                document.querySelectorAll('.dropdown-menu.show').forEach(otherMenu => {
                    if (otherMenu !== menu) otherMenu.classList.remove('show');
                });
                
                // Toggle current dropdown
                menu.classList.toggle('show');
            });
        });

        // Close dropdowns when clicking outside
        document.addEventListener('click', function(e) {
            if (!e.target.matches('.dropdown-toggle')) {
                document.querySelectorAll('.dropdown-menu.show').forEach(menu => {
                    menu.classList.remove('show');
                });
            }
        });
    }

    // Tabs functionality
    function initializeTabs() {
        document.querySelectorAll('[data-bs-toggle="tab"]').forEach(tab => {
            if (tab.hasAttribute('data-bs-initialized')) return;
            tab.setAttribute('data-bs-initialized', 'true');
            
            tab.addEventListener('click', function(e) {
                e.preventDefault();
                
                const tabContainer = this.closest('.nav-tabs').parentElement;
                const targetId = this.dataset.bsTarget.substring(1);
                const targetPane = document.getElementById(targetId);
                
                // Remove active from all tabs and panes in this container
                tabContainer.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
                tabContainer.querySelectorAll('.tab-pane').forEach(pane => {
                    pane.classList.remove('active', 'show');
                });
                
                // Add active to current tab and pane
                this.classList.add('active');
                if (targetPane) {
                    targetPane.classList.add('active', 'show');
                }
            });
        });
    }
}