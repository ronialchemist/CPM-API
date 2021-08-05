
exports.seed = knex => {
  // Deletes ALL existing entries
  return knex('files').del()
    .then(function () {
      // Inserts seed entries
      return knex('files').insert([
        {
			number: '01',
			name: 'Ronildo Ribeiro de Almeida',
			box: 'A 01'
		},
        {
			number: '02',
			name: 'Higor Cardoso Silva',
			box: 'A 01'
		},
        {
			number: '03',
			name: 'João Vitor Oliveira',
			box: 'A 01'
		}
      ]);
    });
};
