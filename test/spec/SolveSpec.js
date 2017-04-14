describe( "Solve", function () {
    it("can do addition", function () {
        expect(solve("5+5")).toEqual(10);
    });

    it("can do subtraction", function () {
        expect(solve("5-5")).toEqual(0);
    });

    it("can do multiplication", function () {
        expect(solve("5*5")).toEqual(25);
    });

    it("can do division", function () {
        expect(solve("10/2")).toEqual(5);
    });

    it("can do exponentiation", function () {
        expect(solve("5**2")).toEqual(25);
    });
});