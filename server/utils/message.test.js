var expect=require('expect');
var {generateMessage}=require('./message');

describe('generateMessage', ()=>{

it('should generate correct message object',()=>{
  var from='Jen';
  var text='what are you doing?';
  var message=generateMessage(from, text);

  expect(message.createdAt).toBeA('number');
  expect(message).toInclude({from,text});

});


});
