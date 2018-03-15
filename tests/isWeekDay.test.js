describe('isWeekday', function(){
  it('Check whether the day is a weekday',function(){
    assert.equal(isWeekday('Monday'), true)
  });
  it('Check whether the day is a weekday',function(){
    assert.equal(isWeekday('Sunday'), false)
  });
});
