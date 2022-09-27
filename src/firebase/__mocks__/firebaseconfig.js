const app = jest.fn();
const auth = jest.fn();
const provider = new GoogleAuthProvider();
const db = jest.fn();
const addDoc = jest.fn();
const collection = jest.fn((db,"post") => {});