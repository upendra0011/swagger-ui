/**
 * @prettier
 */
import ApisPreset from "core/presets/apis"

const defaultOptions = Object.freeze({
  dom_id: null,
  domNode: null,
  spec: {},
  url: "",
  urls: null,
  configUrl: null,
  layout: "BaseLayout",
  docExpansion: "list",
  maxDisplayedTags: -1,
  filter: false,
  validatorUrl: "https://validator.swagger.io/validator",
  oauth2RedirectUrl: undefined,
  persistAuthorization: false,
  configs: {},
  displayOperationId: false,
  displayRequestDuration: false,
  deepLinking: false,
  tryItOutEnabled: false,
  requestInterceptor: (request) => {
    request.curlOptions = []
    return request
  },
  responseInterceptor: (a) => a,
  showMutatedRequest: true,
  defaultModelRendering: "example",
  defaultModelExpandDepth: 1,
  defaultModelsExpandDepth: 1,
  showExtensions: false,
  showCommonExtensions: false,
  withCredentials: false,
  requestSnippetsEnabled: false,
  requestSnippets: {
    generators: {
      curl_bash: {
        title: "cURL (bash)",
        syntax: "bash",
      },
      curl_powershell: {
        title: "cURL (PowerShell)",
        syntax: "powershell",
      },
      curl_cmd: {
        title: "cURL (CMD)",
        syntax: "bash",
      },
    },
    defaultExpanded: true,
    languages: null, // e.g. only show curl bash = ["curl_bash"]
  },
  supportedSubmitMethods: [
    "get",
    "put",
    "post",
    "delete",
    "options",
    "head",
    "patch",
    "trace",
  ],
  queryConfigEnabled: false,
  showAuthorization: true, // Controls whether to show authorization UI (button and lock icons)
  showTryItOut: true, // Controls whether to show the "Try it out" button
  showInfoLinks: true, // Controls whether to show URL, contact, license, and external docs links in info section
  operationsCollapsible: true, // Controls whether operations can be collapsed (accordion behavior)
  showOperationUtilities: true, // Controls whether to show utility buttons (copy, jump-to) on operations

  // HTTP method colors - configure custom colors for operation blocks
  methodColors: {
    get: "#61affe",
    post: "#49cc90",
    put: "#fca130",
    delete: "#f93e3e",
    head: "#9012fe",
    patch: "#50e3c2",
    options: "#0d5aa7",
  },

  // Initial set of plugins ( TODO rename this, or refactor - we don't need presets _and_ plugins. Its just there for performance.
  // Instead, we can compile the first plugin ( it can be a collection of plugins ), then batch the rest.
  presets: [ApisPreset],

  // Plugins; ( loaded after presets )
  plugins: [],

  initialState: {},

  // Inline Plugin
  fn: {},
  components: {},

  syntaxHighlight: {
    activated: true,
    theme: "agate",
  },
  operationsSorter: null,
  tagsSorter: null,
  onComplete: null,
  modelPropertyMacro: null,
  parameterMacro: null,

  fileUploadMediaTypes: [
    "application/octet-stream",
    "image/",
    "audio/",
    "video/",
  ],

  uncaughtExceptionHandler: null,
})

export default defaultOptions
