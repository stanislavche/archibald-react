import { fontAwesome } from './node_modules/font-awesome/css/font-awesome.css';
import { styles } from './less/style.less';

import React from 'react';
import Logo from './components/Logo';

class Archibald extends React.Component {
  render() {
    return (
      <div>
        <Logo />
      </div>
    );
  }
}

export default Archibald;
