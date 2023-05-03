let sum = () => {
  let count = 0;
  for (let i = 0; i < 10; i++) {
    count += 1;
  }
  return count;
};

class Stack {
  constructor() {
    this.top = -1;
    this.items = {};
  }

  get peek() {
    return this.items[this.top];
  }

  push(value) {
    this.top += 1;
    this.items[this.top] = value;
  }

  pop(value) {
    this.top += -1;
    this.items[this.top] = value;

    console.log("THIS: ", this);
  }
}

describe("My Stack", () => {
  it("is created empty", () => {
    const stack = new Stack();

    expect(stack.top).toBe(-1);
    expect(stack.items).toEqual({});
  });

  it("can push to the top", () => {});
  let stack;
  beforeEach(() => {
    stack = new Stack();
    stack.push("1");
    expect(stack.top).toBe(0);
    expect(stack.peek).toBe("1");
  });

  it("can pop off", () => {
    expect(stack.pop("1"));
    expect(stack.peek).toBe("1");
  });

  it("returns 10", () => {
    expect(sum()).toBe(10);
  });
});

describe("Loop Test", () => {
  it("returns 10", () => {
    expect(sum()).toBe(10);
  });
});
