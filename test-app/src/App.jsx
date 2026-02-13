import React, { useEffect, useRef } from 'react'
import SwaggerUIBundle from '@upendra19/swagger-ui-custom'
import '@upendra19/swagger-ui-custom/dist/swagger-ui.css'
import './App.css'
import swaggerSpec from '../partners-products-catalog-v1.json'

function App() {
  const swaggerRef = useRef(null)

  useEffect(() => {
    if (swaggerRef.current) {
      try {
        const swaggerConfig = {
          spec: swaggerSpec,  
          dom_id: '#swagger-ui',
          
          showTryItOut: false,
          showAuthorization: false,
          showInfoLinks: false,
          operationsCollapsible: false,
          showOperationUtilities: false,
          
          deepLinking: true,
          presets: [
            SwaggerUIBundle.presets.apis
          ]
        }
        
        // Initialize with config object
        SwaggerUIBundle(swaggerConfig)
      } catch (error) {
        console.error('Error initializing Swagger UI:', error)
      }
    }
  }, [])

  return (
    <div className="app">
      <div id="swagger-ui" ref={swaggerRef}></div>
    </div>
  )
}

export default App
