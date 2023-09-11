import { setActivePinia, createPinia } from "pinia";
import { createApp } from 'vue';
import { useWeatherStore } from "./Weather";


describe("Weather", () => {
  const app = createApp({})
  const pinia = createPinia()
  app.use(pinia)
  const weatherStore = useWeatherStore();

  beforeEach(() => {
    setActivePinia(pinia);
  });

  it("should fetch weather data", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      status: 200,
      json: async () => {
        return { name: "France", main: { temp: 200 } };
      },
    });

    const cityName = "Cotonou";
    const unit = "metric";

    await weatherStore.fetchWeather(cityName, unit).then((response) => {
      weatherStore.$patch({
        weather: response,
      });
    });

    expect(weatherStore.weather).toEqual(
      expect.objectContaining({
        name: "France",
        main: { temp: 200 },
      })
    );
  });
});
