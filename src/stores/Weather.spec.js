import { setActivePinia, createPinia } from "pinia";
import { useWeatherStore } from "./Weather";

describe("Weather", () => {
  const weatherStore = useWeatherStore();

  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("should fetch weather data", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      status: 200,
      json: async () => {
        return { name: "France", main: { temp: 200 } };
      },
    });

    const cityName = "France";
    const unit = "metrics";

    await weatherStore.fetchWeather(cityName, unit);

    expect(weatherStore.weather).toEqual(
      expect.objectContaining({
        name: "France",
        main: { temp: 200 },
      })
    );
  });
});
