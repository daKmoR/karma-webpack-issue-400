import { html, fixture, expect } from "@open-wc/testing";

import "../../src/bare-bone.js";

describe("<bare-bone>", () => {
  it("has a default property header", async () => {
    const el = await fixture("<bare-bone></bare-bone>");
    expect(el.header).to.equal("My Example");
  });
});
