const HelloWorld = artifacts.require("HelloWorld");

contract('HelloWorld', function(accounts) {

  beforeEach(async () => {
    
    contract = await HelloWorld.new();
  });

  it.skip('need show greetings', async () => {
      
   const res = await contract.greetings();

   assert(res === "Hello World");
  });
});
