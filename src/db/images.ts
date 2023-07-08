interface dbImages {
	id: string;
	image: string;
	title: string;
	IA: string;
	descripcion: string;
}

export const dbImages: dbImages[] = [
	{
		id: 'a_marte',
		image: '/a_marte.webp',
		title: 'A Marte',
		IA: 'dreamboot',
		descripcion: 'Imagen de marte porque solo queria ir a marte'
	},
	{
		id: 'cocogato',
		image: 'cocogato.webp',
		title: 'Cocogato',
		IA: 'Edge image creator',
		descripcion: 'Un cocogato solo eso un cocogato'
	},
	{
		id: 'deidad',
		image: 'deidad.webp',
		title: 'Deidad',
		IA: 'Edge image creator',
		descripcion: 'Representacion de una deidad'
	},
	{
		id: 'depresion',
		image: 'depresion.webp',
		title: 'Depresion',
		IA: 'dreamboot',
		descripcion: 'Representacion de la depresion'
	},
	{
		id: 'life',
		image: 'life.webp',
		title: 'Life',
		IA: 'dreamboot',
		descripcion: 'Representacion de como un gato ve la vida'
	},
	{
		id: 'space_dogo',
		image: 'space_dogo.webp',
		title: 'Space Dogo',
		IA: 'dreamboot',
		descripcion: 'Un perro en el espacio'
	}
];
