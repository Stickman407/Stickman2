import { newE2EPage } from '@stencil/core/testing';

describe('stick-tank', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<stick-tank></stick-tank>');

    const element = await page.find('stick-tank');
    expect(element).toHaveClass('hydrated');
  });
});
