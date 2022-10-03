import {createPost}from "../src/firebase/firebaseconfig.js"
jest.mock("../src/firebase/firebaseconfig.js")

describe('myFunction', () => {
  it('debería ser una función', () => {
    expect(typeof myFunction).toBe('function');
  });
  it ("deberia fallar", ()=>{
    createPost("Judith").catch((message)=>{
expect (message).toBe("error");
    })
  })

});

