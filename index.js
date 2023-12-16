


var customerName = 'bob';

function upperCaseCustomerName() {
  if (customerName) {
    customerName = `${customerName.toUpperCase()}`;
  }
}

function setBestCustomer() {
    bestCustomer = 'not bob';
  }
  function overwriteBestCustomer(){
    bestCustomer = 'maybe bob';
  }
  
  
// Function to be tested
const leastFavoriteCustomer = 'someone';

function changeLeastFavoriteCustomer() {
  // Attempting to reassign a constant (will throw an error)
  leastFavoriteCustomer = 'new person';
}

// Mocha test
describe('changeLeastFavoriteCustomer()', function() {
  it('unsuccessfully tries to reassign the least favorite customer', function() {
    // Expecting an error to be thrown with a specific message
    expect(changeLeastFavoriteCustomer).to.throw('Assignment to constant variable.');
  });
});
