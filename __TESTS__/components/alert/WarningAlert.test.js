// @flow

import React from 'react';
import WarningError from '../../../src/front/components/alert/ErrorAlert';
import renderer from 'react-test-renderer'; // needed both for snpashot testing but also to prevent errors from enzyme
import { mount } from 'enzyme';

describe('WarningError component', () => {
  it('renders as expected', () => {
    const props = { showAlert: true, type: 'warning' };
    const component = renderer
      .create(
        <WarningError {...props}>
          <p>an error alert</p>
        </WarningError>,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it('renders as an error alert', () => {
    const props = {
      showAlert: true,
      type: 'error',
      errorTitle: 'error title',
      errorMessage: 'error message',
    };

    const component = mount(
      <WarningError {...props}>
        <p>an alert</p>
      </WarningError>,
    );

    expect(component.find('div.alert')).toBeDefined();
    expect(component.find('div.alert').hasClass('alert-danger'));
  });

  it('should call onClose on a close button click', () => {
    const onClickMock = jest.fn();
    const preventDefault = jest.fn();

    const mockClickEvent = { preventDefault };

    const component = mount(
      <WarningError showAlert={true} type="warning" onClose={onClickMock} />,
    );

    const button = component.find('button.close');
    button.simulate('click', mockClickEvent);

    expect(onClickMock).toHaveBeenCalled();
  });

  it('should be scaled to zero', () => {
    const props = {
      showAlert: false,
    };

    const component = mount(<WarningError {...props} />);
    const divAlert = component.find('div.alert');
    expect(divAlert).toBeDefined();
    expect(divAlert.prop('style')).toHaveProperty('transform', 'scale(0)');
  });
});
