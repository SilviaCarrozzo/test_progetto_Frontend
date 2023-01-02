import { title } from "process";

describe('Jewellery Store', () => {

  it('should display "Jewellery Store"', async () => {
    expect(title).toEqual('Jewellery Store');
  });
});
