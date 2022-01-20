import { shallowMount } from "@vue/test-utils";
import Indecision from "@/components/Indecision.vue";

describe("Indecision", () => {
  let wrapper;

  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          answer: "yes",
          forced: false,
          image: "https://yesno.wtf/assets/yes/2.gif",
        }),
    })
  );

  beforeEach(() => {
    wrapper = shallowMount(Indecision);
    jest.clearAllMocks();
  });

  test("should match the snapShot", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("should not execute the getAnswer function if the '?' symbol has not been entered in the input", async () => {
    const getAnswerSpy = jest.spyOn(wrapper.vm, "getAnswer");
    let input = wrapper.find("input");

    await input.setValue("Question");

    expect(getAnswerSpy).not.toHaveBeenCalled();
  });

  test("the getAnswer function must be executed when entering the '?' symbol in the input", async () => {
    const getAnswerSpy = jest.spyOn(wrapper.vm, "getAnswer");
    let input = wrapper.find("input");

    await input.setValue("Question ?");

    expect(getAnswerSpy).toHaveBeenCalled();
  });

  test("getAnswer should return an image and text in response", async () => {
    await wrapper.vm.getAnswer();

    const answer = wrapper.vm.answer.response;
    const image = wrapper.find("img");

    expect(answer).toBe("yes");
    expect(image.exists()).toBeTruthy();
  });

  test("getAnswer must return null if the API call fails", async () => {
    const answer = wrapper.vm.answer;

    await wrapper.vm.getAnswer();
    fetch.mockImplementationOnce(() => Promise.reject(new Error("Error")));

    expect(answer).toBe(null);
  });
});
