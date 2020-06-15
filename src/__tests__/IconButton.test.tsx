import React from 'react';
import { fireEvent, render } from 'react-native-testing-library';

import IconButton from '../components/IconButton'

describe('Testing IconButton', () => {

  test('Should render', () => {
    const { getByTestId } = render(<IconButton name="ios-search" type="ionicons" />)
    const button = getByTestId('icon-button')
    expect(button).toBeTruthy()
  })

  test('Should trigger onPress function', () => {
    const OnPressMockFn = jest.fn();
    const { getByTestId } = render(<IconButton name="ios-search" type="ionicons" onPress={OnPressMockFn} />)
    const button = getByTestId('icon-button')
    fireEvent.press(button)
    expect(OnPressMockFn).toHaveBeenCalledTimes(1)
  })
})