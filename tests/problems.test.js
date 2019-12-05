describe('binarySearchArray', () => {
  it('expect [1, 2, 3, 4, 5] to return index 3 for 4, null for 8', () => {
    var index = binarySearch([1, 2, 3, 4, 5], 4);
    expect(index).to.equal(3);
    var index = binarySearch([1, 2, 3, 4, 5], 8);
    expect(index).to.equal(null);
  });

  it('expect more tests to be written in accordance with FDA guidelines for consumption', () => {

  })
});
