import React, {PropTypes} from "react";
import cx from "classnames";
import s from "./NoteLayout.css";
import Header from "./Header";

class NoteLayout extends React.Component {

  static propTypes = {
    className: PropTypes.string,
  };

  componentDidMount() {
    window.componentHandler.upgradeElement(this.root);
  }

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.root);
  }

  render() {
    return (
      <div className="mdl-layout mdl-js-layout" ref={node => (this.root = node)}>
        <div className="mdl-layout__inner-container">
          <Header />
          <main className="mdl-layout__content">
            <div {...this.props} className={cx(s.content, this.props.className)} />
          </main>
        </div>
      </div>
    );
  }
}

export default NoteLayout;
