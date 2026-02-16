/**
 * @prettier
 */
import React from "react"
import PropTypes from "prop-types"

export default class MethodColors extends React.Component {
  static propTypes = {
    getConfigs: PropTypes.func.isRequired,
  }

  render() {
    const { getConfigs } = this.props
    const configs = getConfigs ? getConfigs() : {}
    const { methodColors = {} } = configs

    const cssVars = Object.entries(methodColors)
      .map(([method, color]) => `--color-${method}: ${color};`)
      .join("\n    ")

    const styleContent = `.swagger-ui {
    ${cssVars}
  }`

    return <style dangerouslySetInnerHTML={{ __html: styleContent }} />
  }
}
