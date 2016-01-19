import React, { PropTypes } from 'react';
import {
  actions as actionsPropTypes,
  editing as editingPropTypes,
} from '../props/types';
import defaults, { Header as defaultProps } from '../props/defaults';
import CreateText from './actions/CreateText';


/**
 * Header component
 */
export default function Header(props) {
  const { actions, editing,
    header,
    header: { children: {
      h1,
      CreateText: createText,
    } },
  } = props;
  return (
    <header {...defaults(header)}>
      <h1 {...defaults(h1)} />
      <CreateText
        actions={actions}
        editing={editing}
        {...defaults(createText)}
      />
    </header>
  );
}

Header.propTypes = {
  actions: actionsPropTypes,
  editing: editingPropTypes,

  header: PropTypes.shape({ children: PropTypes.shape({
    h1: PropTypes.object,
    CreateText: PropTypes.object,
  }) }),
};

Header.defaultProps = defaultProps;
