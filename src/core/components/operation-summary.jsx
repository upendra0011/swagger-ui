import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import { Iterable, List } from "immutable"
import ImPropTypes from "react-immutable-proptypes"
import toString from "lodash/toString"


export default class OperationSummary extends PureComponent {

  static propTypes = {
    specPath: ImPropTypes.list.isRequired,
    operationProps: PropTypes.instanceOf(Iterable).isRequired,
    isShown: PropTypes.bool.isRequired,
    toggleShown: PropTypes.func.isRequired,
    getComponent: PropTypes.func.isRequired,
    getConfigs: PropTypes.func.isRequired,
    authActions: PropTypes.object,
    authSelectors: PropTypes.object,
  }

  static defaultProps = {
    operationProps: null,
    specPath: List(),
    summary: ""
  }

  render() {

    let {
      isShown,
      toggleShown,
      getComponent,
      authActions,
      authSelectors,
      operationProps,
      specPath,
      getConfigs,
    } = this.props

    let {
      summary,
      isAuthorized,
      method,
      op,
      showSummary,
      path,
      operationId,
      originalOperationId,
      displayOperationId,
    } = operationProps.toJS()

    let {
      summary: resolvedSummary,
    } = op

    let security = operationProps.get("security")

    const AuthorizeOperationBtn = getComponent("authorizeOperationBtn", true)
    const OperationSummaryMethod = getComponent("OperationSummaryMethod")
    const OperationSummaryPath = getComponent("OperationSummaryPath")
    const JumpToPath = getComponent("JumpToPath", true)
    const CopyToClipboardBtn = getComponent("CopyToClipboardBtn", true)
    const ArrowUpIcon = getComponent("ArrowUpIcon")
    const ArrowDownIcon = getComponent("ArrowDownIcon")

    const hasSecurity = security && !!security.count()
    const securityIsOptional = hasSecurity && security.size === 1 && security.first().isEmpty()
    const allowAnonymous = !hasSecurity || securityIsOptional
    
    // Safe fallback for getConfigs
    const configs = getConfigs ? getConfigs() : {}
    const { showAuthorization = true, operationsCollapsible = true, showOperationUtilities = true } = configs
    
    return (
      <div className={`opblock-summary opblock-summary-${method}`} >
        <button
          aria-expanded={isShown}
          className="opblock-summary-control"
          onClick={toggleShown}
        >
          <OperationSummaryMethod method={method} />
          <div className="opblock-summary-path-description-wrapper">
            <OperationSummaryPath getComponent={getComponent} operationProps={operationProps} specPath={specPath} />

            {!showSummary ? null :
              <div className="opblock-summary-description">
                {toString(resolvedSummary || summary)}
              </div>
            }
          </div>

          {displayOperationId && (originalOperationId || operationId) ? <span className="opblock-summary-operation-id">{originalOperationId || operationId}</span> : null}
        </button>
        {/* All utility buttons removed */}
        {/* <CopyToClipboardBtn textToCopy={`${specPath.get(1)}`} /> */}
        {/* <AuthorizeOperationBtn /> */}
        {/* <JumpToPath path={specPath} /> */}
        {/* <Arrow button /> */}
      </div>
    )
  }
}
