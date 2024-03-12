
it('should calculate the monthly rate correctly', function () {
  const values = {amount: 50000, years: 10, rate: 5};
  expect(calculateMonthlyPayment(values)).toEqual('530.33');
});


it("should return a result with 2 decimal places", function() {
  const values = {amount: 10000, years: 3, rate: 4.2};
  expect(calculateMonthlyPayment(values)).toEqual('296.13');
});

it("should work with small numbers", function() {
  const values = {amount: 3234, years: 2, rate: 2.1};
  expect(calculateMonthlyPayment(values)).toEqual('137.72');
});


