# UI Guru - Bootstrap Drag & Drop Builder

A powerful web-based UI builder that allows you to create responsive layouts using Bootstrap components through an intuitive drag-and-drop interface.

## 🚀 Features

- **Drag & Drop Interface**: Intuitive drag-and-drop functionality for adding Bootstrap components
- **Bootstrap Components**: Wide variety of Bootstrap components including buttons, cards, forms, navigation elements, and more
- **Live Preview**: Real-time preview of your design as you build
- **Code Export**: Generate clean, production-ready HTML code
- **Component Management**: Select, duplicate, and delete components easily
- **Responsive Design**: Built with responsive design principles
- **No Dependencies**: Works without external CDN dependencies (includes local Bootstrap styles)

## 📦 Components Available

### Layout Components
- **Container**: Bootstrap container for responsive layouts
- **Row**: Bootstrap row for grid system
- **Column**: Bootstrap column for grid system

### Form Elements
- **Button**: Various Bootstrap button styles (primary, secondary, success, etc.)
- **Input Field**: Text input with label
- **Textarea**: Multi-line text input
- **Select**: Dropdown selection

### Content Components
- **Card**: Bootstrap card with header, body, and actions
- **Alert**: Alert messages with different styles
- **Badge**: Small count and labeling component
- **Text**: Headings and paragraphs

### Navigation Components
- **Navbar**: Responsive navigation bar
- **Breadcrumb**: Navigation breadcrumbs

## 🎯 How to Use

1. **Start the Application**: Open `index.html` in a web browser or serve it from a web server
2. **Drag Components**: Drag components from the sidebar to the canvas area
3. **Arrange Components**: Drop components where you want them in your layout
4. **Manage Components**: 
   - Click on components to select them
   - Use the controls that appear to duplicate or delete components
   - Use keyboard shortcuts (Delete key, Ctrl+D)
5. **Export Code**: Click "Export HTML" to generate clean HTML code
6. **Copy Code**: Use "Copy to Clipboard" to copy the generated HTML

## ⌨️ Keyboard Shortcuts

- **Delete**: Delete selected component
- **Ctrl + D**: Duplicate selected component
- **Ctrl + E**: Export HTML code
- **Ctrl + Shift + C**: Clear canvas

## 🛠️ Technical Details

### Files Structure
```
ui-guru/
├── index.html          # Main application file
├── style.css           # Custom styling and layout
├── bootstrap-local.css # Local Bootstrap CSS (CDN-free)
├── bootstrap-local.js  # Minimal Bootstrap JavaScript functionality
├── components.js       # Component definitions and utilities
├── script.js          # Main application logic and drag-drop functionality
└── README.md          # This file
```

### Technologies Used
- **HTML5**: Structure and drag-drop API
- **CSS3**: Styling and animations
- **JavaScript (ES6+)**: Application logic and interactivity
- **Bootstrap 5**: Component styling and responsive grid

### Key Classes and Functions
- `UIBuilder`: Main application class handling drag-and-drop
- `COMPONENTS`: Object containing all component templates
- `ComponentUtils`: Utility functions for component management
- `Modal`: Custom modal implementation for code export

## 🌟 Key Features Demonstrated

1. **Drag and Drop**: HTML5 drag and drop API implementation
2. **Dynamic Component Creation**: Runtime component generation
3. **Visual Feedback**: Hover effects, selection states, animations
4. **Code Generation**: Clean HTML export functionality
5. **Component Management**: Select, duplicate, delete operations
6. **Responsive Design**: Mobile-friendly interface

## 🎨 Styling

The application uses a modern, clean design with:
- Sidebar navigation for components
- Visual feedback for drag operations
- Hover states and animations
- Component selection indicators
- Responsive layout for different screen sizes

## 🔧 Setup and Development

To run the application:

1. Clone the repository
2. Serve the files from a web server (e.g., `python3 -m http.server 8000`)
3. Open `http://localhost:8000` in your browser

No build process or dependencies required - it's a pure client-side application!

## 📋 Example Usage

1. Drag a "Container" component to the canvas
2. Drag a "Button" inside the container
3. Add an "Alert" component below
4. Select components to modify or delete them
5. Export the HTML when you're satisfied with the design

The generated HTML will be clean, semantic, and ready for production use.

## 🎯 Perfect For

- **Rapid Prototyping**: Quickly mock up Bootstrap layouts
- **Learning Bootstrap**: Visual way to understand Bootstrap components
- **Client Presentations**: Create interactive prototypes
- **Code Generation**: Generate starter HTML for projects

## 📱 Browser Support

Works in all modern browsers that support:
- HTML5 Drag and Drop API
- CSS Grid and Flexbox
- ES6 JavaScript features

Tested in Chrome, Firefox, Safari, and Edge.