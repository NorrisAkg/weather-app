import { mount } from "@vue/test-utils";
import WeatherCard from "./WeatherCard.vue";
import { formatTimestamp, getTimestampHour } from "@/utils/formatter";

describe("WeatherCard", () => {
  it("should display weather infos according to given props", async () => {
    const wrapper = mount(WeatherCard, {
      props: {
        weather: {
          name: "Cotonou",
          main: {
            temp: 26.5,
            temp_min: 25.5,
            temp_max: 27.5,
            humidity: 60,
            pressure: 1014,
          },
          sys: {
            sunset: 1662954123,
            sunrise: 1662922123,
            country: "BJ",
          },
        },
        unit: "metric",
      },
    });

    const day = wrapper.find("h1.day");
    expect(day.text()).toContain(
      formatTimestamp(1662954123).toLocaleDateString(`fr-BJ`, {
        weekday: "long",
      }).charAt(0).toUpperCase() + formatTimestamp(1662954123).toLocaleDateString(`fr-BJ`, {
        weekday: "long",
      }).slice(1)
    );

    const currentDate = wrapper.find("h2.month-year");
    expect(currentDate.text()).toContain(
      formatTimestamp(1662954123).toLocaleDateString(`fr-BJ`, {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })
    );

    const sunriseHour = () => {
      let hour = getTimestampHour(
        1662922123,
        "BJ"
      );
      return `${hour[0]}:${hour[1]}`;
    };

    const sunrise = wrapper.find("span.sunrise");
    expect(sunrise.text()).toContain(sunriseHour());

    const sunsetHour = () => {
      let hour = getTimestampHour(
        1662954123,
        "BJ"
      );
      return `${hour[0]}:${hour[1]}`;
    };

    const sunset = wrapper.find("span.sunset");
    expect(sunset.text()).toContain(sunsetHour());

    const cityName = wrapper.find("h3.city-name");
    expect(cityName.text()).toContain("Cotonou");

    const tempValue = wrapper.find("div.current-temperature h3 span");
    expect(tempValue.text()).toMatch((parseInt(26.5)).toString());
  });
});
