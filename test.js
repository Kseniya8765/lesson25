describe("dowbleElem", function () {

  it("удваивает каждый эл-т массива", () => {

    assert.deepEqual(dowbleElem(1, 2),[2, 4]);

  });

  it('возвращает текст "ошибка" если к-л аргумент не число', () => {

    assert.deepEqual(dowbleElem(1, 'fbb'),'error');

  });

  it('возвращает текст "ошибка" если аргументы не числа', () => {

    assert.deepEqual(dowbleElem('dfb', 'fbb'),'error');

  });

  it('возвращает текст "ошибка" если введен не массив', () => {

    assert.equal(dowbleElem('dfb', 'fbb'),'error');

	});
});