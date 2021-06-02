import React from 'react';

import {Footer} from './Footer';

// determines where your story goes in the story list
export default {
  title: 'Example/Footer',
  component: Footer,
}

export const FooterLeft = () => <Footer align='textLeft'>Copyright - 2021 - Arun</Footer>
export const FooterCenter = () => <Footer align='textCenter'>Copyright - 2021 - Arun</Footer>
export const FooterRight = () => <Footer align='textRight'>Copyright - 2021 - Arun</Footer>