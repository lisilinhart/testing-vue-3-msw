import { waitFor } from "@testing-library/vue";
import { defineComponent } from "vue";
import { mount, flushPromises } from "@vue/test-utils";

import { server } from "@tests/mocks/server";
import errorHandlers from '@tests/mocks/error-handlers'

import HomeView from "../HomeView.vue";

const AsyncHome = defineComponent({
  components: { HomeView },
  template: "<Suspense><HomeView /></Suspense>",
});

export const waitMs = (ms = 0) => {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }

describe("Testing the home view", () => {
  let getSpy, wrapper;

  beforeEach(async () => {
    getSpy = vi.spyOn(window, "fetch");
    wrapper = mount(AsyncHome);
    await waitFor(() => expect(getSpy).toHaveBeenCalledTimes(1));
    await flushPromises();
  });

  test("the heading should be shown", async () => {
    expect(wrapper.get("h1").text()).toEqual("My magical beasts");
    expect(wrapper.findAll(".va-card").length).toEqual(3);
  });

  test("three cards should be shown", async () => {
    expect(wrapper.findAll(".va-card").length).toEqual(3);
  });

  test("the second card should show a niffler", async () => {
    const secondCard = wrapper.findAll(".va-card")[1];
    const element = secondCard.wrapperElement;
    expect(element.querySelector("img").src).toEqual(
      "https://a.storyblok.com/f/102771/1306x1346/2f48b89fdc/niffler.png/m/300x300"
    );
    expect(element.querySelector(".va-card__title").innerHTML).toEqual(
      "Niffler"
    );
    expect(element.querySelector(".va-card__content").innerHTML).toEqual(
      "A small, furry, black-furred creature with a long snout and a love for shiny objects."
    );
  });
});

describe("Testing the home view", () => {
  let getSpy, wrapper;

  test.only("a failing request", async () => {
    server.use(...errorHandlers)
    getSpy = vi.spyOn(window, "fetch");
    wrapper = mount(AsyncHome);
    await waitFor(() => expect(getSpy).toHaveBeenCalledTimes(1));
    await flushPromises();

    expect(wrapper.html()).toContain("Not allowed");
  });
});
