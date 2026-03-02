/* eslint-disable no-undef */
window.onload = function() {
  window["SwaggerUIBundle"] = window["swagger-ui-bundle"]
  window["SwaggerUIStandalonePreset"] = window["swagger-ui-standalone-preset"]
  // Build a system
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
    // requestSnippetsEnabled: true,
    layout: "StandaloneLayout",

    // Toggle to show/hide Authorize button and lock icons
    showAuthorization: false,
    
    // Toggle to show/hide the "Try it out" button feature entirely
    showTryItOut: true,
    
    // Controls initial state: false = collapsed (shows "Try it out"), true = expanded (shows "Cancel")
    tryItOutEnabled: true,
    
    // Toggle to show/hide info section links (URL, contact, license, external docs)
    showInfoLinks: false,
    
    // Toggle to keep operations always expanded (no accordion)
    disableAccordion: true,
    
    // Toggle to show/hide utility buttons (copy, jump-to) on operations
    showOperationUtilities: false,
    
    // Set custom method colors
    methodColors: {
      post: "#E20074",
      put: "limegreen",
      get: "rgb(255, 0, 0)",
    }
  })

  window.ui = ui

  ui.initOAuth({
    clientId: "your-client-id",
    clientSecret: "your-client-secret-if-required",
    realm: "your-realms",
    appName: "your-app-name",
    scopeSeparator: " ",
    scopes: "openid profile email phone address",
    additionalQueryStringParams: {},
    useBasicAuthenticationWithAccessCodeGrant: false,
    usePkceWithAuthorizationCodeGrant: false
  })
}
