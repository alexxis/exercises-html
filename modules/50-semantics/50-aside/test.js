const { test } = require('tests');

test(({ query, expect }) => {

  const header = query(document, 'header');
  expect(header).to.be.visible;

  const aside = query(document, 'aside');
  expect(aside).to.be.visible;

  const main = query(document, 'main');
  expect(main).to.be.visible;
});