import React, { PropTypes } from 'react';
import { actions as actionsPropTypes } from './.propTypes';
import { Header as defaultProps, defaultProps as defaults } from './.defaultProps';
import CreateText from './actions/CreateText';


export default function Header(props) {
  const { actions, header } = props;
  const { h1, CreateText: createText } = header.children;
  return (
    <header {...defaults(header)}>
      <h1 {...defaults(h1)} />
      <CreateText
        actions={actions}
        {...defaults(createText)}
      />
    </header>
  );
}

Header.propTypes = {
  actions: actionsPropTypes,

  header: PropTypes.shape({ children: PropTypes.shape({
    h1: PropTypes.object,
    CreateText: PropTypes.object,
  }) }),
};

Header.defaultProps = defaultProps;
