import { render, screen } from "@testing-library/vue";
import { config } from "@vue/test-utils";
import MagicalBeast from "../MagicalBeast.vue";
import MagicalBeastMock from "@mocks/niffler.json";

describe("Beast component", () => {
  const blok = MagicalBeastMock.story.content;

  beforeEach(() => {
    render(MagicalBeast, {
      props: { blok },
      global: config.global,
    });
  });

  test("renders the correct content", () => {
    expect(screen.queryByText(blok.name)).toBeInTheDocument();
    expect(screen.queryByText(blok.description)).toBeInTheDocument();
    expect(screen.getByAltText(blok.image.alt)).toHaveAttribute(
      "src",
      blok.image.filename + "/m/300x300"
    );
  });

  test("renders the skills correctly", () => {
    blok.skills.forEach((skill) => {
      expect(screen.queryByText(skill.name)).toBeInTheDocument();
      expect(screen.queryByText(skill.description)).toBeInTheDocument();
    });
  });
  test("renders the habitat as buttons", () => {
    blok.habitat.forEach((habitat) => {
      expect(screen.getAllByRole("button", { name: habitat })).toHaveLength(1);
    });
  });
});
