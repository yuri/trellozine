import React from 'react';
import PropTypes from 'prop-types';

import { formatSectionHeader } from '../../utils/formatting/markdown';

import { Renderer } from './Renderer';

export const Section = ({ item, renderAs }) => (
  <Renderer
    renderAs={renderAs}
    markdown={formatSectionHeader(item)}
  />
);

Section.propTypes = {
  item: PropTypes.object,
  renderAs: PropTypes.oneOf(['text', 'markdown', 'html']),
};
