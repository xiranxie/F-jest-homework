import VaccineTest from "../vaccineTest";
import Recipient from "../recipient";

jest.mock("../recipient");

beforeEach(() => {
  jest.resetModules(); // clear mock here
});

describe("inject", () => {
  test("should recipient accept injection with vaccine", () => {
    // TODO 14: add test here
    Recipient.mockImplementation(() => {
      return {
        acceptInjection: () => {
          return "abc";
        },
      };
    });
    const Test = new VaccineTest();
    Test.inject();
    expect(Recipient).toHaveBeenCalled();
  });
});

describe("test", () => {
  test("should get Success if recipient has antibodies", () => {
    // TODO 15: add test here
    Recipient.mockImplementation(() => {
      return {
        getHasAntibodies: () => {
          return true;
        },
      };
    });
    const vaccineTest = new VaccineTest();
    vaccineTest.recipient.getHasAntibodies();
    expect(vaccineTest.recipient.getHasAntibodies()).toEqual(true);
    expect(vaccineTest.test()).toEqual("Vaccine Test Success");
  });

  test("should get Failed if recipient has no antibodies", () => {
    // TODO 16: add test here
    Recipient.mockImplementation(() => {
      return {
        getHasAntibodies: () => {
          return false;
        },
      };
    });
    const vaccineTest = new VaccineTest();
    vaccineTest.recipient.getHasAntibodies();
    expect(vaccineTest.recipient.getHasAntibodies()).toEqual(false);
    expect(vaccineTest.test()).toEqual("Vaccine Test Failed");
  });
});
