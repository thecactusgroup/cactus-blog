// @flow
/* eslint-disable react/no-danger */

import React from 'react';
import styled from 'styled-components';
import config from '../../../config';
import theme from '../../lib/theme';

const Header = styled.header`
  color: ${theme.light.lighten(0.3)};
  background: url(/static/fondo_gotas_intro_full.jpg);
  background-color: ${theme.accent};
  background-size: cover;
`;

export default () =>
  <Header className="header">
    <h1 className="header--siteName">
      {config.siteName}
    </h1>
    <div className="header--slogan">
      {config.slogan}
    </div>
  </Header>;
