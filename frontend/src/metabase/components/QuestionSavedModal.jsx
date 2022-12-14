import React, { Component } from "react";
import PropTypes from "prop-types";

import { t } from "ttag";
import ModalContent from "metabase/components/ModalContent";

export default class QuestionSavedModal extends Component {
  static propTypes = {
    addToDashboardFn: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
  };

  render() {
    return (
      <ModalContent
        id="QuestionSavedModal"
        title={t`Saved! Add this to a dashboard?`}
        onClose={this.props.onClose}
        className="Modal-content Modal-content--small"
      >
        <div>
          <button
            className="Button Button--primary"
            onClick={this.props.addToDashboardFn}
          >{t`Yes please!`}</button>
          <button
            className="Button ml3"
            onClick={this.props.onClose}
          >{t`Not now`}</button>
        </div>
      </ModalContent>
    );
  }
}
