    import { handleSubmit } from './formHandler'

    describe("check for handleSubmit()", () => {
        test("I should return true", async() => {
                expect(handleSubmit).toBeDefined();
            }),
            test("I should be a function", async() => {
                expect(typeof handleSubmit).toBe("function");
            })
    })