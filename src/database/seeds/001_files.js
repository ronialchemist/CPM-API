
exports.seed = knex => {
  // Deletes ALL existing entries
  return knex('files').del()
    .then(function () {
      // Inserts seed entries
      return knex('files').insert([
        {
			number: 01,
			name: 'Ronildo Ribeiro de Almeida',
			box: '01 A'
		},
        {
			number: 02,
			name: 'Higor Cardoso Silva',
			box: '01 A'
		},
        {
			number: 03,
			name: 'João Vitor Oliveira',
			box: '01 A'
		}
      ]);
    });
};
