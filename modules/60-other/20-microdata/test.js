const { test } = require('tests');

test(({ query, expect }) => {

  const name = query(document, '[itemprop="name"]');
  expect(name).to.be.visible;

  const email = query(document, '[itemprop="email"]');
  expect(email).to.be.visible;
});
