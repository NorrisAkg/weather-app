import { mount } from "@vue/test-utils"
import CitySearch from "./CitySearch.vue"

describe('CitySearch', () => {
    it('should watch input field and emit changeName event with model value', async () => {
        const wrapper = mount(CitySearch)

        const nameInput = wrapper.find("input");
        await nameInput.setValue('Abomey-Calavi');

        const button = wrapper.find('button');
        await button.trigger('click');

        expect(wrapper.emitted().changeName).toBeTruthy();
        expect(wrapper.emitted().changeName[0][0]).toBe('Abomey-Calavi');
    });

    it('should watch select field and emit selectUnit event with model value', async () => {
        const wrapper = mount(CitySearch)

        const selectField = wrapper.find("select")
        await selectField.setValue("metric")

        expect(wrapper.emitted().unitSelected).toBeTruthy();
        expect(wrapper.emitted().unitSelected[0][0]).toBe("metric")
    });
})