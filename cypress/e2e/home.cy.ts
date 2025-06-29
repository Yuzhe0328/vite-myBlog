describe('首页访问', () => {
  it('应显示标题', () => {
    cy.visit('http://localhost/');
    cy.contains('Vite + Vue'); // 根据你首页的内容修改
  });
});
