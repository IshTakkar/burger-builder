import React from 'react';
import { BurgerBuilder } from './BurgerBuilder';

import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import buildControls from '../../components/Burger/BuildControls/BuildControls';

configure({ adapter: new Adapter() });

describe('<BurgerBuilder />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<BurgerBuilder onInitIngredients={() => { }} />);
    });

    it('should render <BuildControls /> when receiving ingredients', () => {
        wrapper.setProps({ ings: { salad: 0 } });
        expect(wrapper.find(buildControls)).toHaveLength(1);
    })
});