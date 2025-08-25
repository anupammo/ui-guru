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