    import { checkForUrl } from './urlValidator'
    import { HandleSubmit } from './formHandler'

    describe("checkForUrl()", () => {
        test("The function must test if the string is a url", () => {
            const input = "http://www.url1.dev";
            const output = true;
            expect(checkForUrl(input)).toBe(output);

        });
    })