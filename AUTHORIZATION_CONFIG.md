# Configuration Guide for Swagger UI Customization

## Overview
Swagger UI now supports configuration-based customization for common UI features. You can control these features via configuration props instead of modifying component code.

## Available Configurations

### 1. Authorization UI Control (`showAuthorization`)
### 2. Try It Out Button Control (`showTryItOut`)
### 3. Info Section Links Control (`showInfoLinks`)
### 4. Operations Accordion Control (`operationsCollapsible`)
### 5. Operation Utilities Control (`showOperationUtilities`)

---

## 2. Try It Out Button Control

### Configuration: `showTryItOut`

Control whether the "Try it out" button is displayed on API operations.

#### Default Behavior
By default, `showTryItOut` is set to `true`, which means the "Try it out" button will be displayed.

#### Hiding the Try It Out Button

To hide the "Try it out" button:

```javascript
const ui = SwaggerUIBundle({
  url: "https://petstore.swagger.io/v2/swagger.json",
  dom_id: "#swagger-ui",
  // ... other config options
  
  // Hide "Try it out" button
  showTryItOut: false
})
```

#### Showing the Try It Out Button (Default)

To show the "Try it out" button:

```javascript
const ui = SwaggerUIBundle({
  url: "https://petstore.swagger.io/v2/swagger.json",
  dom_id: "#swagger-ui",
  // ... other config options
  
  // Show "Try it out" button (or just omit this line)
  showTryItOut: true
})
```

### What Changes

When `showTryItOut` is set to `false`:
- ✅ The "Try it out" button is hidden
- ✅ Users cannot interact with the API through the UI
- ✅ Perfect for read-only API documentation

When `showTryItOut` is set to `true` (default):
- ✅ The "Try it out" button is visible
- ✅ Users can test API endpoints directly
- ✅ Interactive API exploration enabled

---

## 3. Info Section Links Control

### Configuration: `showInfoLinks`

Control whether links in the info section are displayed (spec URL, contact, license, terms of service, external docs).

#### Default Behavior
By default, `showInfoLinks` is set to `true`, which means all info section links will be displayed.

#### Hiding Info Section Links

To hide all links in the info section:

```javascript
const ui = SwaggerUIBundle({
  url: "https://petstore.swagger.io/v2/swagger.json",
  dom_id: "#swagger-ui",
  // ... other config options
  
  // Hide info section links
  showInfoLinks: false
})
```

#### Showing Info Section Links (Default)

To show all links in the info section:

```javascript
const ui = SwaggerUIBundle({
  url: "https://petstore.swagger.io/v2/swagger.json",
  dom_id: "#swagger-ui",
  // ... other config options
  
  // Show info section links (or just omit this line)
  showInfoLinks: true
})
```

### What Changes

When `showInfoLinks` is set to `false`:
- ✅ Spec URL link is hidden
- ✅ Contact information links are hidden
- ✅ License links are hidden
- ✅ Terms of service link is hidden
- ✅ External documentation link is hidden
- ✅ Cleaner, more focused documentation view

When `showInfoLinks` is set to `true` (default):
- ✅ All info section links are visible
- ✅ Users can access contact information
- ✅ Users can view license details
- ✅ Full API metadata is available

### Use Cases

**Hide links when:**
- You want a cleaner, minimal documentation view
- You're embedding Swagger UI and don't want external links
- You're creating internal documentation without public contact info
- You want to control where users navigate

**Show links when:**
- You want users to access full API metadata
- You want to provide contact and license information
- You're creating public API documentation
- Standard Swagger UI behavior is desired

---

## 4. Operations Accordion Control

### Configuration: `operationsCollapsible`

Control whether API operations can be collapsed/expanded (accordion behavior).

#### Default Behavior
By default, `operationsCollapsible` is set to `true`, which means operations can be collapsed and expanded (standard accordion behavior).

#### Keeping Operations Always Expanded

To keep all operations always expanded and disable the accordion functionality:

```javascript
const ui = SwaggerUIBundle({
  url: "https://petstore.swagger.io/v2/swagger.json",
  dom_id: "#swagger-ui",
  // ... other config options
  
  // Keep operations always expanded
  operationsCollapsible: false
})
```

#### Enabling Accordion Behavior (Default)

To allow users to collapse/expand operations:

```javascript
const ui = SwaggerUIBundle({
  url: "https://petstore.swagger.io/v2/swagger.json",
  dom_id: "#swagger-ui",
  // ... other config options
  
  // Enable accordion (or just omit this line)
  operationsCollapsible: true
})
```

### What Changes

When `operationsCollapsible` is set to `false`:
- ✅ All operations are always shown expanded
- ✅ Arrow buttons (up/down) are hidden
- ✅ Clicking on operation headers does nothing
- ✅ Users can see all operation details immediately

When `operationsCollapsible` is set to `true` (default):
- ✅ Operations can be collapsed/expanded
- ✅ Arrow buttons are visible
- ✅ Clicking toggles the operation details
- ✅ Standard accordion behavior

---

## 1. Authorization UI Control

### Configuration: `showAuthorization`

Control whether authorization UI elements (Authorize button and lock icons) are displayed.

## Configuration

### Default Behavior
By default, `showAuthorization` is set to `true`, which means the authorization UI will be displayed (backward compatible).

### Hiding Authorization UI

To hide the Authorize button and lock icons, set `showAuthorization: false` in your Swagger UI configuration:

```javascript
const ui = SwaggerUIBundle({
  url: "https://petstore.swagger.io/v2/swagger.json",
  dom_id: "#swagger-ui",
  presets: [
    SwaggerUIBundle.presets.apis,
    SwaggerUIStandalonePreset
  ],
  plugins: [
    SwaggerUIBundle.plugins.DownloadUrl
  ],
  layout: "StandaloneLayout",
  
  // Add this line to hide authorization UI
  showAuthorization: false
})
```

### Showing Authorization UI

To show the Authorize button and lock icons (default behavior):

```javascript
const ui = SwaggerUIBundle({
  url: "https://petstore.swagger.io/v2/swagger.json",
  dom_id: "#swagger-ui",
  // ... other config options
  
  // Explicitly enable authorization UI (or just omit this line)
  showAuthorization: true
})
```

## What Gets Hidden/Shown

When `showAuthorization` is set to `false`:
- ✅ The main "Authorize" button in the top-right area is hidden
- ✅ The lock icons next to each API operation are hidden
- ✅ Users cannot access the authorization popup

When `showAuthorization` is set to `true` (default):
- ✅ The main "Authorize" button is visible
- ✅ The lock icons appear next to operations that require authentication
- ✅ Users can click to configure authorization

## Example: Testing Locally

To test this in your dev environment, edit `dev-helpers/dev-helper-initializer.js`:

```javascript
window.onload = function() {
  window["SwaggerUIBundle"] = window["swagger-ui-bundle"]
  window["SwaggerUIStandalonePreset"] = window["swagger-ui-standalone-preset"]
  
  const ui = SwaggerUIBundle({
    url: "https://petstore.swagger.io/v2/swagger.json",
    dom_id: "#swagger-ui",
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout",
    
    // Hide authorization UI
    showAuthorization: false
  })

  window.ui = ui
}
```

---

## Combined Example

You can use all configurations together for a streamlined, read-only API documentation view:

```javascript
const ui = SwaggerUIBundle({
  url: "https://petstore.swagger.io/v2/swagger.json",
  dom_id: "#swagger-ui",
  presets: [
    SwaggerUIBundle.presets.apis,
    SwaggerUIStandalonePreset
  ],
  plugins: [
    SwaggerUIBundle.plugins.DownloadUrl
  ],
  layout: "StandaloneLayout",
  
  // Hide authorization UI
  showAuthorization: false,
  
  // Hide "Try it out" button
  showTryItOut: false,
  
  // Keep all operations expanded
  operationsCollapsible: false,
  
  // Hide utility buttons
  showOperationUtilities: false
})
```

This creates a clean, read-only documentation view where:
- ✅ No authorization UI clutter
- ✅ No "Try it out" button (read-only mode)
- ✅ All API operations are immediately visible
- ✅ No utility buttons (copy, jump-to)
- ✅ Users can quickly scan all endpoints
- ✅ Perfect for public API documentation

---

## Files Modified

The following files were modified to support these features:

### Authorization Control (`showAuthorization`):
1. **`src/core/config/defaults.js`** - Added `showAuthorization: true` default config
2. **`src/core/config/type-cast/mappings.js`** - Added type-cast mapping for the config
3. **`src/core/components/layouts/base.jsx`** - Made main Authorize button conditional
4. **`src/core/components/operation-summary.jsx`** - Made operation lock icons conditional

### Operations Accordion Control (`operationsCollapsible`):
1. **`src/core/config/defaults.js`** - Added `operationsCollapsible: true` default config
2. **`src/core/config/type-cast/mappings.js`** - Added type-cast mapping for the config
3. **`src/core/containers/OperationContainer.jsx`** - Made operations always expanded when disabled
4. **`src/core/components/operation-summary.jsx`** - Hid arrow buttons when not collapsible

## Benefits

✅ **Configurable** - Easy to toggle on/off via configuration
✅ **Backward Compatible** - Defaults maintain existing behavior
✅ **Future-Proof** - Just change the config value to restore features
✅ **Clean Architecture** - No need to modify component code to hide/show features
✅ **Flexible** - Use individually or combine for custom experiences

