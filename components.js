// Bootstrap component templates and configurations
const COMPONENTS = {
    // Layout Components
    container: {
        name: 'Container',
        category: 'Layout',
        template: `<div class="container ui-builder-container p-3">
            <div class="drop-zone"></div>
        </div>`,
        description: 'Bootstrap container for responsive layouts'
    },
    
    row: {
        name: 'Row',
        category: 'Layout',
        template: `<div class="row ui-builder-row p-2">
            <div class="drop-zone"></div>
        </div>`,
        description: 'Bootstrap row for grid system'
    },
    
    column: {
        name: 'Column',
        category: 'Layout',
        template: `<div class="col ui-builder-col p-2">
            <div class="drop-zone"></div>
        </div>`,
        description: 'Bootstrap column for grid system'
    },

    // Form Components
    button: {
        name: 'Button',
        category: 'Form',
        template: `<button type="button" class="btn btn-primary me-2 mb-2">Button</button>`,
        description: 'Bootstrap button component',
        variants: [
            { name: 'Primary', class: 'btn-primary' },
            { name: 'Secondary', class: 'btn-secondary' },
            { name: 'Success', class: 'btn-success' },
            { name: 'Danger', class: 'btn-danger' },
            { name: 'Warning', class: 'btn-warning' },
            { name: 'Info', class: 'btn-info' },
            { name: 'Light', class: 'btn-light' },
            { name: 'Dark', class: 'btn-dark' },
            { name: 'Outline Primary', class: 'btn-outline-primary' }
        ]
    },

    input: {
        name: 'Input Field',
        category: 'Form',
        template: `<div class="mb-3">
            <label class="form-label">Input Label</label>
            <input type="text" class="form-control" placeholder="Enter text">
        </div>`,
        description: 'Bootstrap form input field'
    },

    textarea: {
        name: 'Textarea',
        category: 'Form',
        template: `<div class="mb-3">
            <label class="form-label">Textarea Label</label>
            <textarea class="form-control" rows="3" placeholder="Enter your message"></textarea>
        </div>`,
        description: 'Bootstrap textarea component'
    },

    select: {
        name: 'Select',
        category: 'Form',
        template: `<div class="mb-3">
            <label class="form-label">Select Label</label>
            <select class="form-select">
                <option selected>Choose an option</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
            </select>
        </div>`,
        description: 'Bootstrap select dropdown'
    },

    // Content Components
    card: {
        name: 'Card',
        category: 'Content',
        template: `<div class="card mb-3" style="max-width: 18rem;">
            <div class="card-header">Card Header</div>
            <div class="card-body">
                <h5 class="card-title">Card Title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>`,
        description: 'Bootstrap card component'
    },

    alert: {
        name: 'Alert',
        category: 'Content',
        template: `<div class="alert alert-primary alert-dismissible mb-3" role="alert">
            <strong>Info!</strong> This is a primary alert with dismissible functionality.
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        </div>`,
        description: 'Bootstrap alert component',
        variants: [
            { name: 'Primary', class: 'alert-primary' },
            { name: 'Secondary', class: 'alert-secondary' },
            { name: 'Success', class: 'alert-success' },
            { name: 'Danger', class: 'alert-danger' },
            { name: 'Warning', class: 'alert-warning' },
            { name: 'Info', class: 'alert-info' },
            { name: 'Light', class: 'alert-light' },
            { name: 'Dark', class: 'alert-dark' }
        ]
    },

    badge: {
        name: 'Badge',
        category: 'Content',
        template: `<span class="badge bg-primary me-2 mb-2">Primary Badge</span>`,
        description: 'Bootstrap badge component',
        variants: [
            { name: 'Primary', class: 'bg-primary' },
            { name: 'Secondary', class: 'bg-secondary' },
            { name: 'Success', class: 'bg-success' },
            { name: 'Danger', class: 'bg-danger' },
            { name: 'Warning', class: 'bg-warning text-dark' },
            { name: 'Info', class: 'bg-info' },
            { name: 'Light', class: 'bg-light text-dark' },
            { name: 'Dark', class: 'bg-dark' }
        ]
    },

    text: {
        name: 'Text',
        category: 'Content',
        template: `<div class="mb-3">
            <h3>Heading Text</h3>
            <p class="lead">This is a lead paragraph. It stands out from the regular paragraphs.</p>
            <p>This is a regular paragraph with some <strong>bold text</strong> and <em>italic text</em>.</p>
        </div>`,
        description: 'Text content with headings and paragraphs'
    },

    // Navigation Components
    navbar: {
        name: 'Navbar',
        category: 'Navigation',
        template: `<nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Brand</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Features</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">About</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>`,
        description: 'Bootstrap navigation bar'
    },

    breadcrumb: {
        name: 'Breadcrumb',
        category: 'Navigation',
        template: `<nav aria-label="breadcrumb" class="mb-3">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item"><a href="#">Category</a></li>
                <li class="breadcrumb-item active">Current Page</li>
            </ol>
        </nav>`,
        description: 'Bootstrap breadcrumb navigation'
    },

    // New Missing Components
    accordion: {
        name: 'Accordion',
        category: 'Content',
        template: `<div class="accordion mb-3" id="accordionExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                        Accordion Item #1
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        This is the first item's accordion body.
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                        Accordion Item #2
                    </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        This is the second item's accordion body.
                    </div>
                </div>
            </div>
        </div>`,
        description: 'Bootstrap accordion component'
    },

    buttongroup: {
        name: 'Button Group',
        category: 'Form',
        template: `<div class="btn-group mb-3" role="group" aria-label="Button group">
            <button type="button" class="btn btn-outline-primary">Left</button>
            <button type="button" class="btn btn-outline-primary">Middle</button>
            <button type="button" class="btn btn-outline-primary">Right</button>
        </div>`,
        description: 'Bootstrap button group component'
    },

    carousel: {
        name: 'Carousel',
        category: 'Content',
        template: `<div id="carouselExample" class="carousel slide mb-3" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" class="active"></button>
                <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1"></button>
                <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="2"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="d-block w-100 bg-secondary text-white text-center p-5">First slide</div>
                </div>
                <div class="carousel-item">
                    <div class="d-block w-100 bg-secondary text-white text-center p-5">Second slide</div>
                </div>
                <div class="carousel-item">
                    <div class="d-block w-100 bg-secondary text-white text-center p-5">Third slide</div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span class="carousel-control-prev-icon"></span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span class="carousel-control-next-icon"></span>
            </button>
        </div>`,
        description: 'Bootstrap carousel component'
    },

    closebutton: {
        name: 'Close Button',
        category: 'Form',
        template: `<button type="button" class="btn-close mb-2" aria-label="Close"></button>`,
        description: 'Bootstrap close button'
    },

    collapse: {
        name: 'Collapse',
        category: 'Content',
        template: `<div class="mb-3">
            <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample">
                Toggle Collapse
            </button>
            <div class="collapse mt-2" id="collapseExample">
                <div class="card card-body">
                    Some placeholder content for the collapse component.
                </div>
            </div>
        </div>`,
        description: 'Bootstrap collapse component'
    },

    dropdown: {
        name: 'Dropdown',
        category: 'Form',
        template: `<div class="dropdown mb-3">
            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                Dropdown button
            </button>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#">Separated link</a></li>
            </ul>
        </div>`,
        description: 'Bootstrap dropdown component'
    },

    listgroup: {
        name: 'List Group',
        category: 'Content',
        template: `<div class="list-group mb-3">
            <a href="#" class="list-group-item list-group-item-action active">
                Active list item
            </a>
            <a href="#" class="list-group-item list-group-item-action">A simple list item</a>
            <a href="#" class="list-group-item list-group-item-action">Another list item</a>
            <a href="#" class="list-group-item list-group-item-action disabled">Disabled list item</a>
        </div>`,
        description: 'Bootstrap list group component'
    },

    modal: {
        name: 'Modal',
        category: 'Content',
        template: `<div class="mb-3">
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch modal
            </button>
            <div class="modal fade" id="exampleModal" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Modal title</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body">
                            Modal body text goes here.
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>`,
        description: 'Bootstrap modal component'
    },

    navstabs: {
        name: 'Navs & Tabs',
        category: 'Navigation',
        template: `<div class="mb-3">
            <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home">Home</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile">Profile</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact">Contact</button>
                </li>
            </ul>
            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="home" role="tabpanel">
                    <p class="mt-3">Home tab content</p>
                </div>
                <div class="tab-pane fade" id="profile" role="tabpanel">
                    <p class="mt-3">Profile tab content</p>
                </div>
                <div class="tab-pane fade" id="contact" role="tabpanel">
                    <p class="mt-3">Contact tab content</p>
                </div>
            </div>
        </div>`,
        description: 'Bootstrap navs and tabs component'
    },

    pagination: {
        name: 'Pagination',
        category: 'Navigation',
        template: `<nav aria-label="Page navigation" class="mb-3">
            <ul class="pagination">
                <li class="page-item">
                    <a class="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item active"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                    <a class="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>`,
        description: 'Bootstrap pagination component'
    }
};

// Component utility functions
const ComponentUtils = {
    // Get component template by type
    getTemplate: function(componentType) {
        return COMPONENTS[componentType]?.template || '';
    },

    // Get component info
    getInfo: function(componentType) {
        return COMPONENTS[componentType] || null;
    },

    // Get all components by category
    getByCategory: function(category) {
        return Object.keys(COMPONENTS).filter(key => 
            COMPONENTS[key].category === category
        ).map(key => ({
            type: key,
            ...COMPONENTS[key]
        }));
    },

    // Get all component categories
    getCategories: function() {
        const categories = [...new Set(Object.values(COMPONENTS).map(c => c.category))];
        return categories.sort();
    },

    // Generate unique ID for components
    generateId: function(componentType) {
        const timestamp = Date.now();
        const random = Math.random().toString(36).substr(2, 5);
        return `${componentType}-${timestamp}-${random}`;
    },

    // Make template IDs unique to prevent conflicts
    makeTemplateUnique: function(template, componentId) {
        // Replace common ID patterns with unique ones
        return template
            .replace(/id="([^"]+)"/g, `id="$1-${componentId}"`)
            .replace(/data-bs-target="#([^"]+)"/g, `data-bs-target="#$1-${componentId}"`)
            .replace(/data-bs-parent="#([^"]+)"/g, `data-bs-parent="#$1-${componentId}"`)
            .replace(/for="([^"]+)"/g, `for="$1-${componentId}"`)
            .replace(/aria-controls="([^"]+)"/g, `aria-controls="$1-${componentId}"`);
    },

    // Clean HTML for export (remove builder-specific classes)
    cleanHtmlForExport: function(html) {
        return html
            .replace(/\s*ui-builder-[a-z-]+/g, '')
            .replace(/\s*dropped-component/g, '')
            .replace(/\s*selected/g, '')
            .replace(/\s*fade-in/g, '')
            .replace(/\s*slide-in/g, '')
            .replace(/<div class="component-controls">.*?<\/div>/gs, '')
            .replace(/<div class="drop-zone[^"]*">.*?<\/div>/gs, '')
            .replace(/\s+class=""/g, '')
            .replace(/\s+class="\s+"/g, '')
            .replace(/\s{2,}/g, ' ')
            .trim();
    },

    // Generate complete HTML document for export
    generateExportHtml: function(canvasHtml) {
        const cleanHtml = this.cleanHtmlForExport(canvasHtml);
        
        return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Generated UI</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css" rel="stylesheet">
</head>
<body>
    ${cleanHtml}
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>`;
    }
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { COMPONENTS, ComponentUtils };
}