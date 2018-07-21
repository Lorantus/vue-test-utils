import {mount} from '@vue/test-utils'
import MyCounter from './MyCounter.vue'

describe("MyCounter", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(MyCounter);
    })

    it("Should mount with a initial value", () => {
        // WHEN
        wrapper = mount(MyCounter, {
            propsData: {
                value: 1
            }
        });

        // THEN
        expect(wrapper.vm.count).toBe(1);
    })

    it("Button click should increment the count", () => {
        expect(wrapper.vm.count).toBe(0);
        const button = wrapper.find({ ref: 'add' });
        button.trigger('click');
        expect(wrapper.vm.count).toBe(1);
    })

    it("Button click should decrement the count", () => {
        expect(wrapper.vm.count).toBe(0);
        const button = wrapper.find({ ref: 'sub' });
        button.trigger('click');
        expect(wrapper.vm.count).toBe(-1);
    })

    it("Button click should increment the count from 10", () => {
        expect(wrapper.vm.count).toBe(0);
        wrapper.setData({
            count: 10
        });
        const button = wrapper.find({ ref: 'add' });
        button.trigger('click');
        expect(wrapper.vm.count).toBe(11);
    })
})
