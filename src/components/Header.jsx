import React, { PropTypes } from 'react';
import { PropTypesActions, PropTypesEditing } from '../props/types';
import defaultProps, { defaultPropsHeader } from '../props/defaults';
import CreateText from './actions/CreateText';


/**
 * Header component
 */
export default function Header(props) {
  const { actions, editing,
    headerProps,
    headerProps: { children: {
      h1Props,
      CreateTextProps,
    } },
  } = props;
  return (
    <header {...defaultProps(headerProps)}>
      <h1 {...defaultProps(h1Props)} />
      <CreateText
        actions={actions}
        editing={editing}
        {...defaultProps(CreateTextProps)}
      />
    </header>
  );
}

Header.propTypes = {
  actions: PropTypesActions,
  editing: PropTypesEditing,

  headerProps: PropTypes.shape({ children: PropTypes.shape({
    h1Props: PropTypes.object,
    CreateTextProps: PropTypes.object,
  }) }),
};

Header.defaultProps = defaultPropsHeader;
Header.displayName = 'Header';
