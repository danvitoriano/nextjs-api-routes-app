import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Tabs.module.css'

class Tab extends Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  onClick = () => {
    const { label, onClick } = this.props;
    onClick(label);
  }

  render() {
    const {
      onClick,
      props: {
        activeTab,
        label,
      },
    } = this;

    let className = 'tab_list_item';


    if (activeTab === label) {
      className += ' tab-list-active';
    }

    return (
      <li
        // className={styles.tab_list_item}
        className={className}
        onClick={onClick}
      >
        {label}
      </li>
    );
  }
}

export default Tab;