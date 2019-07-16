import React from "react";
import Controls from "../Controls/Controls";
import Counter from "../Counter/Counter";
import Publication from "../Publication/Publicution";

import propTypes from "prop-types";

const LsPublicationService = {
  set(pubIndex) {
    localStorage.setItem("activePublication", String(pubIndex));
  },
  get() {
    return Number(localStorage.getItem("activePublication"));
  }
};

const DEFAULT_PUB_INDEX = 0;

class Reader extends React.Component {
  constructor(props) {
    super(props);
    const currentPubIndex = LsPublicationService.get() || DEFAULT_PUB_INDEX;
    this.state = {
      activePublication: props.publications[currentPubIndex],
      currentPage: currentPubIndex,
      isActivPrevPage: true,
      isActivNextPage: false
    };
    this.lengthPub = props.publications.length;
  }

  handleNextPage = () => {
    if (this.state.currentPage === 1) {
      this.setState(() => ({ isActivPrevPage: false }));
    }
    if (this.state.currentPage === 0) {
      this.setState(() => ({ isActivPrevPage: false }));
    }

    if (this.state.currentPage + 2 === this.lengthPub) {
      this.setState(() => ({ isActivNextPage: true }));
    }

    this.setState((prevState, props) => {
      const nextPage = prevState.currentPage + 1;

      if (nextPage > props.publications.length - 1) return;

      LsPublicationService.set(nextPage);

      return {
        currentPage: nextPage,
        activePublication: props.publications[nextPage],
        isActivPrevPage: false
      };
    });
  };

  handlePrevPage = () => {
    if (this.state.currentPage === 1) {
      this.setState(() => ({ isActivPrevPage: true }));
    }
    if (this.state.currentPage + 1 === this.lengthPub) {
      this.setState(() => ({ isActivNextPage: false }));
    }

    this.setState((prevState, props) => {
      const nextPage = prevState.currentPage - 1;

      if (nextPage <= -1) return;

      LsPublicationService.set(nextPage);

      return {
        currentPage: nextPage,
        activePublication: props.publications[nextPage]
      };
    });
  };

  render() {
    const publicationsCount = this.props.publications.length;
    const {
      activePublication: { title, text },
      currentPage,
      isActivPrevPage,
      isActivNextPage
    } = this.state;

    return (
      <div className="reader">
        <Publication title={title} text={text} />
        <Counter pagesCount={publicationsCount} currentPage={currentPage + 1} />
        <Controls
          handlePrevPage={this.handlePrevPage}
          handleNextPage={this.handleNextPage}
          isActivPrevPage={isActivPrevPage}
          isActivNextPage={isActivNextPage}
        />
      </div>
    );
  }
}

export default Reader;

Reader.propTypes = {
  props: propTypes.arrayOf(propTypes.object)
};
