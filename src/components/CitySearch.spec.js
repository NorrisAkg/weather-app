import { mount } from "@vue/test-utils"
import CitySearch from "./CitySearch.vue"

describe('CitySearch', () => {
    it('should send filter values to parent', async () => {
        const wrapper = mount(CitySearch)

        const nameInput = wrapper.find("input");
        await nameInput.setValue('Abomey-Calavi');

        const button = wrapper.find('button');
        await button.trigger('click');

        expect(wrapper.emitted().changeName).toBeTruphy();
        expect(wrapper.emitted().changeName[0]).toEqual(['Abomey-Calavi']);
    });

    it('should handle select field and emit selectUnit event with model value', () => {
        
    });
})