import React from 'react';
import { fireEvent, render } from 'react-native-testing-library';

import IconButton from '../components/IconButton.tsx'

describe('Testing IconButton', () => {

  test('Should render', () => {
    const { getByTestId } = render(<IconButton name="ios-search" type="ionicons" />)
    const button = getByTestId('icon-button')
    expect(button).toBeTruthy()
  })
})