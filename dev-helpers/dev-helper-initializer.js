/* eslint-disable no-undef */
window.onload = function() {
  window["SwaggerUIBundle"] = window["swagger-ui-bundle"]
  window["SwaggerUIStandalonePreset"] = window["swagger-ui-standalone-preset"]
  // Build a system
  const ui = SwaggerUIBundle({
    url: "http://localhost:3001/swagger.json",
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
    
    // Set to false to hide Authorize button and lock icons
    /// Set to true to show authorization UI
    showAuthorization: false,
    
    // Set to false to hide the "Try it out" button
    // Set to true to show the "Try it out" button
    showTryItOut: false,
    
    // Set to false to hide info section links (URL, contact, license, external docs)
    // Set to true to show info section links
    showInfoLinks: false,
    
    // Set to false to keep operations always expanded (no accordion)
    // Set to true to allow collapsing/expanding operations
    operationsCollapsible: false,
    
    // Set to false to hide utility buttons (copy, jump-to) on operations
    // Set to true to show utility buttons
    showOperationUtilities: false
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
