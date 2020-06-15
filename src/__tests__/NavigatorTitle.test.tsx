import React from 'react';
import { render } from 'react-native-testing-library';

import NavigatorTitle from '../components/navigatorTitle';

describe('Testing NavigatorTitle component', () => {
  test('Should be render', async () => {
    const title: string = 'Hello';
    const subtitle: string = 'world';

    const { findByText } = render(
      <NavigatorTitle title={title} subtitle={subtitle} />
    );
    expect(await findByText(title)).toBeTruthy();
    expect(await findByText(subtitle)).toBeTruthy();
  });
})