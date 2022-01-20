import { shallowMount } from "@vue/test-utils";
import Indecision from "@/components/Indecision.vue";

describe("Indecision", () => {
  let wrapper;
  let clgSpy;
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
    clgSpy = jest.spyOn(console, "log");
    jest.clearAllMocks();
  });

  test("Debe de hacer match con el snapShot", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("Escribir en el input no debe disparar nada (console.log)", async () => {
    const getAnswerSpy = jest.spyOn(wrapper.vm, "getAnswer");

    let input = wrapper.find("input");
    await input.setValue("Question");

    expect(clgSpy).toHaveBeenCalled();
    expect(getAnswerSpy).not.toHaveBeenCalled();
  });

  test("escribir el simbolo '?' debe disparar el getAnswer", async () => {
    const getAnswerSpy = jest.spyOn(wrapper.vm, "getAnswer");

    let input = wrapper.find("input");
    await input.setValue("Question ?");

    expect(getAnswerSpy).toHaveBeenCalled();
  });

  test("pruebas en getAnswer", async () => {
    await wrapper.vm.getAnswer();
    const answer = wrapper.vm.answer.response;
    const image = wrapper.find("img");

    expect(answer).toBe("yes");
    expect(image.exists()).toBeTruthy();
  });

  test("pruebas en getAnswer - fallando en el API", async () => {
    fetch.mockImplementationOnce(() => Promise.reject(new Error("Error")));
    await wrapper.vm.getAnswer();
    const answer = wrapper.vm.answer;
 
    expect(answer).toBe(null);
  });
});
