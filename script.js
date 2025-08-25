// UI Guru - Drag and Drop Builder
class UIBuilder {
    constructor() {
        this.canvas = document.getElementById('canvas');
        this.componentItems = document.querySelectorAll('.component-item');
        this.selectedComponent = null;
        this.componentCounter = 0;
        
        this.init();
    }

    init() {
        this.setupDragAndDrop();
        this.setupEventListeners();
        this.setupCanvas();
    }

    setupDragAndDrop() {
        // Make component items draggable
        this.componentItems.forEach(item => {
            item.addEventListener('dragstart', this.handleDragStart.bind(this));
            item.addEventListener('dragend', this.handleDragEnd.bind(this));
        });

        // Setup canvas drop zone
        this.canvas.addEventListener('dragover', this.handleDragOver.bind(this));
        this.canvas.addEventListener('drop', this.handleDrop.bind(this));
        this.canvas.addEventListener('dragenter', this.handleDragEnter.bind(this));
        this.canvas.addEventListener('dragleave', this.handleDragLeave.bind(this));
    }

    setupEventListeners() {
        // Clear canvas button
        document.getElementById('clearCanvas').addEventListener('click', this.clearCanvas.bind(this));
        
        // Export code button
        document.getElementById('exportCode').addEventListener('click', this.exportCode.bind(this));
        
        // Copy code button
        document.getElementById('copyCode').addEventListener('click', this.copyCode.bind(this));
        
        // Canvas click handler for component selection
        this.canvas.addEventListener('click', this.handleCanvasClick.bind(this));
        
        // Document click handler for deselection
        document.addEventListener('click', this.handleDocumentClick.bind(this));
        
        // Responsive view tabs
        this.setupResponsiveViews();
    }

    setupCanvas() {
        // Initially hide placeholder when components are present
        this.updateCanvasPlaceholder();
    }

    setupResponsiveViews() {
        const responsiveButtons = document.querySelectorAll('[data-view]');
        
        responsiveButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const viewType = e.target.getAttribute('data-view') || e.target.closest('[data-view]').getAttribute('data-view');
                this.switchToView(viewType);
                
                // Update active button
                responsiveButtons.forEach(btn => btn.classList.remove('active'));
                (e.target.matches('[data-view]') ? e.target : e.target.closest('[data-view]')).classList.add('active');
            });
        });
    }

    switchToView(viewType) {
        // Remove all view classes
        this.canvas.classList.remove('desktop-view', 'tablet-view', 'mobile-view');
        
        // Add the selected view class
        this.canvas.classList.add(`${viewType}-view`);
        
        console.log(`Switched to ${viewType} view`);
    }

    handleDragStart(e) {
        const componentType = e.target.getAttribute('data-component');
        e.dataTransfer.setData('text/plain', componentType);
        e.dataTransfer.effectAllowed = 'copy';
        
        // Add visual feedback
        e.target.classList.add('drag-ghost');
        
        // Create drag image
        const dragImage = e.target.cloneNode(true);
        dragImage.style.transform = 'rotate(5deg)';
        dragImage.style.opacity = '0.8';
        e.dataTransfer.setDragImage(dragImage, 20, 20);
    }

    handleDragEnd(e) {
        e.target.classList.remove('drag-ghost');
    }

    handleDragEnter(e) {
        e.preventDefault();
        this.canvas.classList.add('drag-over');
    }

    handleDragLeave(e) {
        // Only remove drag-over if we're actually leaving the canvas
        if (!this.canvas.contains(e.relatedTarget)) {
            this.canvas.classList.remove('drag-over');
        }
    }

    handleDragOver(e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'copy';
    }

    handleDrop(e) {
        e.preventDefault();
        this.canvas.classList.remove('drag-over');
        
        const componentType = e.dataTransfer.getData('text/plain');
        if (componentType) {
            this.addComponent(componentType, e.target);
        }
    }

    addComponent(componentType, dropTarget = null) {
        const template = ComponentUtils.getTemplate(componentType);
        if (!template) {
            console.error('Component template not found:', componentType);
            return;
        }

        // Create component wrapper
        const componentId = ComponentUtils.generateId(componentType);
        const wrapper = document.createElement('div');
        wrapper.className = 'dropped-component fade-in';
        wrapper.setAttribute('data-component-type', componentType);
        wrapper.setAttribute('data-component-id', componentId);
        
        // Replace template placeholder IDs with unique ones for this instance
        const uniqueTemplate = ComponentUtils.makeTemplateUnique(template, componentId);
        wrapper.innerHTML = uniqueTemplate;

        // Add component controls
        const controls = this.createComponentControls(componentId);
        wrapper.appendChild(controls);

        // Determine where to insert the component
        let insertTarget = this.canvas;
        
        // If dropped on a specific drop zone
        if (dropTarget && dropTarget.classList.contains('drop-zone')) {
            insertTarget = dropTarget;
            dropTarget.innerHTML = ''; // Clear drop zone placeholder
        } else if (dropTarget && dropTarget.closest('.drop-zone')) {
            insertTarget = dropTarget.closest('.drop-zone');
            insertTarget.innerHTML = ''; // Clear drop zone placeholder
        }

        // Insert the component
        insertTarget.appendChild(wrapper);

        // Update canvas state
        this.updateCanvasPlaceholder();
        this.componentCounter++;

        // Add click handler for selection
        wrapper.addEventListener('click', (e) => {
            e.stopPropagation();
            this.selectComponent(wrapper);
        });

        // Setup nested drop zones if component has them
        this.setupNestedDropZones(wrapper);

        // Initialize Bootstrap components for this new element
        if (typeof window.initializeBootstrapComponents === 'function') {
            setTimeout(() => window.initializeBootstrapComponents(), 100);
        }

        console.log(`Added ${componentType} component with ID: ${componentId}`);
    }

    createComponentControls(componentId) {
        const controls = document.createElement('div');
        controls.className = 'component-controls';
        controls.innerHTML = `
            <button type="button" class="btn btn-outline-danger btn-sm" onclick="uiBuilder.deleteComponent('${componentId}')" title="Delete">
                <i class="bi bi-trash"></i>
            </button>
            <button type="button" class="btn btn-outline-secondary btn-sm" onclick="uiBuilder.duplicateComponent('${componentId}')" title="Duplicate">
                <i class="bi bi-copy"></i>
            </button>
        `;
        return controls;
    }

    setupNestedDropZones(component) {
        const dropZones = component.querySelectorAll('.drop-zone');
        dropZones.forEach(zone => {
            zone.addEventListener('dragover', this.handleDragOver.bind(this));
            zone.addEventListener('drop', this.handleDrop.bind(this));
            zone.addEventListener('dragenter', (e) => {
                e.preventDefault();
                e.stopPropagation();
                zone.classList.add('drag-over');
            });
            zone.addEventListener('dragleave', (e) => {
                if (!zone.contains(e.relatedTarget)) {
                    zone.classList.remove('drag-over');
                }
            });
        });
    }

    selectComponent(component) {
        // Deselect previous component
        if (this.selectedComponent) {
            this.selectedComponent.classList.remove('selected');
        }
        
        // Select new component
        this.selectedComponent = component;
        component.classList.add('selected');
    }

    deleteComponent(componentId) {
        const component = document.querySelector(`[data-component-id="${componentId}"]`);
        if (component) {
            // If this was the selected component, clear selection
            if (this.selectedComponent === component) {
                this.selectedComponent = null;
            }
            
            // Add fade out animation
            component.style.transition = 'all 0.3s ease';
            component.style.opacity = '0';
            component.style.transform = 'translateY(-10px)';
            
            setTimeout(() => {
                component.remove();
                this.updateCanvasPlaceholder();
            }, 300);
        }
    }

    duplicateComponent(componentId) {
        const originalComponent = document.querySelector(`[data-component-id="${componentId}"]`);
        if (originalComponent) {
            const componentType = originalComponent.getAttribute('data-component-type');
            
            // Create duplicate
            const newComponentId = ComponentUtils.generateId(componentType);
            const duplicate = originalComponent.cloneNode(true);
            
            // Update IDs and attributes
            duplicate.setAttribute('data-component-id', newComponentId);
            duplicate.classList.add('slide-in');
            duplicate.classList.remove('selected');
            
            // Update controls
            const controls = duplicate.querySelector('.component-controls');
            if (controls) {
                controls.innerHTML = `
                    <button type="button" class="btn btn-outline-danger btn-sm" onclick="uiBuilder.deleteComponent('${newComponentId}')" title="Delete">
                        <i class="bi bi-trash"></i>
                    </button>
                    <button type="button" class="btn btn-outline-secondary btn-sm" onclick="uiBuilder.duplicateComponent('${newComponentId}')" title="Duplicate">
                        <i class="bi bi-copy"></i>
                    </button>
                `;
            }
            
            // Add click handler
            duplicate.addEventListener('click', (e) => {
                e.stopPropagation();
                this.selectComponent(duplicate);
            });
            
            // Insert after original
            originalComponent.parentNode.insertBefore(duplicate, originalComponent.nextSibling);
            
            // Setup nested drop zones
            this.setupNestedDropZones(duplicate);
        }
    }

    handleCanvasClick(e) {
        // If click is on canvas directly (not on a component), deselect
        if (e.target === this.canvas || e.target.classList.contains('canvas-placeholder')) {
            this.selectComponent(null);
        }
    }

    handleDocumentClick(e) {
        // Deselect component if clicking outside canvas
        if (!this.canvas.contains(e.target) && !e.target.closest('.component-controls')) {
            if (this.selectedComponent) {
                this.selectedComponent.classList.remove('selected');
                this.selectedComponent = null;
            }
        }
    }

    updateCanvasPlaceholder() {
        const placeholder = this.canvas.querySelector('.canvas-placeholder');
        const hasComponents = this.canvas.querySelectorAll('.dropped-component').length > 0;
        
        if (placeholder) {
            placeholder.style.display = hasComponents ? 'none' : 'flex';
        }
    }

    clearCanvas() {
        if (confirm('Are you sure you want to clear the canvas? This action cannot be undone.')) {
            const components = this.canvas.querySelectorAll('.dropped-component');
            
            // Add fade out animation to all components
            components.forEach((component, index) => {
                setTimeout(() => {
                    component.style.transition = 'all 0.3s ease';
                    component.style.opacity = '0';
                    component.style.transform = 'translateY(-20px)';
                    
                    setTimeout(() => {
                        component.remove();
                        if (index === components.length - 1) {
                            this.updateCanvasPlaceholder();
                        }
                    }, 300);
                }, index * 50);
            });
            
            this.selectedComponent = null;
            this.componentCounter = 0;
        }
    }

    exportCode() {
        const canvasContent = this.canvas.innerHTML;
        const exportHtml = ComponentUtils.generateExportHtml(canvasContent);
        
        // Show modal with generated code
        const exportModal = new bootstrap.Modal(document.getElementById('exportModal'));
        const exportedCodeTextarea = document.getElementById('exportedCode');
        
        exportedCodeTextarea.value = exportHtml;
        exportModal.show();
    }

    copyCode() {
        const exportedCodeTextarea = document.getElementById('exportedCode');
        exportedCodeTextarea.select();
        exportedCodeTextarea.setSelectionRange(0, 99999); // For mobile devices
        
        try {
            document.execCommand('copy');
            
            // Show success feedback
            const copyButton = document.getElementById('copyCode');
            const originalText = copyButton.innerHTML;
            copyButton.innerHTML = '<i class="bi bi-check"></i> Copied!';
            copyButton.classList.add('btn-success');
            copyButton.classList.remove('btn-primary');
            
            setTimeout(() => {
                copyButton.innerHTML = originalText;
                copyButton.classList.add('btn-primary');
                copyButton.classList.remove('btn-success');
            }, 2000);
            
        } catch (err) {
            console.error('Failed to copy code: ', err);
            alert('Failed to copy code to clipboard. Please select and copy manually.');
        }
    }
}

// Initialize the UI Builder when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    window.uiBuilder = new UIBuilder();
    
    // Add some helpful console messages
    console.log('🎨 UI Guru - Bootstrap Drag & Drop Builder');
    console.log('📋 Drag components from the sidebar to the canvas to start building!');
    console.log('🔧 Click on components to select them and use the controls to edit or delete');
    console.log('📤 Use the Export button to generate clean HTML code');
});

// Add keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Delete selected component with Delete key
    if (e.key === 'Delete' && window.uiBuilder.selectedComponent) {
        const componentId = window.uiBuilder.selectedComponent.getAttribute('data-component-id');
        if (componentId) {
            window.uiBuilder.deleteComponent(componentId);
        }
    }
    
    // Duplicate selected component with Ctrl+D
    if (e.ctrlKey && e.key === 'd' && window.uiBuilder.selectedComponent) {
        e.preventDefault();
        const componentId = window.uiBuilder.selectedComponent.getAttribute('data-component-id');
        if (componentId) {
            window.uiBuilder.duplicateComponent(componentId);
        }
    }
    
    // Export code with Ctrl+E
    if (e.ctrlKey && e.key === 'e') {
        e.preventDefault();
        window.uiBuilder.exportCode();
    }
    
    // Clear canvas with Ctrl+Shift+C
    if (e.ctrlKey && e.shiftKey && e.key === 'C') {
        e.preventDefault();
        window.uiBuilder.clearCanvas();
    }
});

// Add touch support for mobile devices
if ('ontouchstart' in window) {
    console.log('📱 Touch device detected - drag and drop functionality may be limited');
}