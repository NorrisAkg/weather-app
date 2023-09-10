import { mount } from "@vue/test-utils";
import WeatherCard from "./WeatherCard.vue";

describe('WeatherCard', () => {
    it('should display weather infos according to given props', async () => {
        const wrapper = mount(WeatherCard, {
            props: {
                weather: {
                    name: "Cotonou",
                    main: {
                        temp: 290.5,
                    }
                }
            }
        });

        const title = wrapper.find('h2')
        expect(title.text()).toBe("Cotonou")

        const tempValue = wrapper.find("div.temp")
        expect(tempValue.text()).toContain('290.5')
    });
})