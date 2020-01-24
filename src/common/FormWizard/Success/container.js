import { connect } from "react-redux";
import { QouteWizardSuccessPresentation } from "./component";
import { getQouteId } from "core/store/selectors/MovingQoute";

function mapStateToProps({ state }) {
  return {
    qouteId: getQouteId(state)
  };
}

export const QouteWizardSuccess = connect(mapStateToProps)(
  QouteWizardSuccessPresentation
);
