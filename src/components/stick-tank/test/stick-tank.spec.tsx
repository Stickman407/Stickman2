import { newSpecPage } from '@stencil/core/testing';
import { StickTank } from '../stick-tank';

describe('stick-tank', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [StickTank],
      html: `<stick-tank></stick-tank>`,
    });
    expect(page.root).toEqualHtml(`
      <stick-tank>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </stick-tank>
    `);
  });
});
