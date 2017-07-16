const assert = require('assert')
const User = require("../src/user")



describe('creating record', () => {
 
  it('saving user data' , ()=>{
      const nameValue = User({name : 'sabih' , lastName : 'siddiqui'})
      nameValue.save()
  }) 

    
});