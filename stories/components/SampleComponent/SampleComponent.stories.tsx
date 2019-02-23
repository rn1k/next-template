import * as React from 'react';

import { storiesOf } from '@storybook/react';

import SampleComponent from '../../../src/components/SampleComponent/SampleComponent';

storiesOf('SampleComponent', module).add('sample', () => <SampleComponent />);
