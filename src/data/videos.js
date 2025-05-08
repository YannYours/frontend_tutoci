/**
 * @typedef {Object} Video
 * @property {string}   id
 * @property {string}   title
 * @property {string}   description
 * @property {string}   thumbnailUrl
 * @property {string}   videoUrl
 * @property {string}   duration
 * @property {number}   views
 * @property {string}   uploadDate
 * @property {string}   category
 * @property {string}   instructor
 * @property {boolean}  featured
 */

/**
 * @typedef {Object} Category
 * @property {string} id
 * @property {string} name
 * @property {string} icon
 */

/** @type {Category[]} */
export const categories = [
  { id: '1', name: 'Programmation', icon: 'code' },
  { id: '2', name: 'Design', icon: 'palette' },
  { id: '3', name: 'Mathématiques', icon: 'calculator' },
  { id: '4', name: 'Langues', icon: 'message-circle' },
  { id: '5', name: 'Business', icon: 'briefcase' },
  { id: '6', name: 'Science', icon: 'flask' }
];

/** @type {Video[]} */
export const videos = [
  {
    id: '1',
    title: 'Introduction à JavaScript',
    description: 'Apprenez les bases de JavaScript, le langage de programmation le plus utilisé sur le web. Cette vidéo couvre les variables, les fonctions, les conditions et les boucles.',
    thumbnailUrl: 'https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg',
    videoUrl: 'https://www.youtube.com/embed/W6NZfCO5SIk',
    duration: '35:42',
    views: 12500,
    uploadDate: '15-10-2023',
    category: 'Programmation',
    instructor: 'Dr. Koffi Yao',
    featured: false
  },
  {
    id: '2',
    title: 'Principes de design UI/UX',
    description: 'Découvrez les principes essentiels du design d\'interface utilisateur et de l\'expérience utilisateur. Cette vidéo explore les bonnes pratiques pour créer des interfaces intuitives et attrayantes.',
    thumbnailUrl: 'https://images.pexels.com/photos/7845518/pexels-photo-7845518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    videoUrl: 'https://www.youtube.com/embed/c9Wg6Cb_YlU',
    duration: '28:15',
    views: 8200,
    uploadDate: '02-06-2024',
    category: 'Design',
    instructor: 'Ama Kouassi',
    featured: false
  },
  {
    id: '3',
    title: 'Algèbre linéaire expliquée',
    description: 'Une introduction claire à l\'algèbre linéaire, couvrant les vecteurs, les matrices et les transformations linéaires. Parfait pour les débutants en mathématiques avancées.',
    thumbnailUrl: 'https://images.pexels.com/photos/5905885/pexels-photo-5905885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    videoUrl: 'https://www.youtube.com/embed/fNk_zzaMoSs',
    duration: '42:30',
    views: 6700,
    uploadDate: '19-04-2022',
    category: 'Mathématiques',
    instructor: 'Prof. Kouakou Mensa',
    featured: false
  },
  {
    id: '4',
    title: 'Anglais pour débutants',
    description: 'Commencez votre voyage d\'apprentissage de l\'anglais avec cette vidéo pour débutants. Nous couvrons les salutations, les présentations et les conversations de base.',
    thumbnailUrl: 'https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    videoUrl: 'https://www.youtube.com/embed/juKd26qkNAw',
    duration: '31:18',
    views: 9800,
    uploadDate: '07-12-2021',
    category: 'Langues',
    instructor: 'Mme. Bintou Fofana',
    featured: false
  },
  {
    id: '5',
    title: 'Fondamentaux du React.js',
    description: 'Maîtrisez React.js avec ce tutoriel complet. Apprenez à créer des composants, gérer l\'état et construire des applications web modernes.',
    thumbnailUrl: 'https://images.pexels.com/photos/11035386/pexels-photo-11035386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    videoUrl: 'https://www.youtube.com/embed/SqcY0GlETPk',
    duration: '45:22',
    views: 15600,
    uploadDate: '20-04-2024',
    category: 'Programmation',
    instructor: 'Lassina Koné',
    featured: true
  },
  {
    id: '6',
    title: 'Marketing Digital: Stratégies Avancées',
    description: 'Découvrez des stratégies avancées de marketing digital pour développer votre entreprise. Cette vidéo couvre le SEO, le marketing de contenu et les publicités sur les réseaux sociaux.',
    thumbnailUrl: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    videoUrl: 'https://www.youtube.com/embed/kBwuSwjUyzM',
    duration: '38:45',
    views: 7300,
    uploadDate: '01-08-2024',
    category: 'Business',
    instructor: 'Mariam Touré',
    featured: false
  },
  {
    id: '7',
    title: 'Physique quantique pour tous',
    description: 'Une explication accessible de la physique quantique pour les non-scientifiques. Découvrez les principes fondamentaux de cette branche fascinante de la science.',
    thumbnailUrl: 'https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    videoUrl: 'https://www.youtube.com/embed/6Oc-X4px5a4?si=H2vZH-5Pk63UVcC_',
    duration: '13:59',
    views: 5200,
    uploadDate: '07-07-2023',
    category: 'Science',
    instructor: 'Dr. Emmanuel Konan',
    featured: true
  },
  {
    id: '8',
    title: 'Photoshop: Techniques avancées',
    description: 'Améliorez vos compétences en design avec ces techniques avancées de Photoshop. Apprenez à créer des compositions complexes, à retoucher des photos et à créer des effets spéciaux.',
    thumbnailUrl: 'https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    videoUrl: 'https://www.youtube.com/embed/pFyOznL9UvA',
    duration: '49:37',
    views: 8900,
    uploadDate: '10-06-2023',
    category: 'Design',
    instructor: 'Adama Coulibaly',
    featured: true
  }
  ,
  {
    id: '9',
    title: 'Formules de Taylor et Développements limités',
    description: 'Suivez librement un cours sur les Formules de Taylor et les Développements limités avec Nathan GREINER, professeur à Optimal Sup Spé.',
    thumbnailUrl: 'https://img.freepik.com/free-photo/blackboard-inscribed-with-scientific-formulas-calculations_1150-19412.jpg?ga=GA1.1.277068797.1732707843&semt=ais_hybrid&w=740',
    videoUrl: 'https://www.youtube.com/embed/TVW8UBTmT58?si=U2UVrC-U_Su1hM-a',
    duration: '25:19',
    views: 15900,
    uploadDate: '11-02-2016',
    category: 'Mathématiques',
    instructor: 'Nathan GREINER',
    featured: true
  }
  ,
  {
    id: '10',
    title: "L'essentiel pour débuter en espagnol",
    description: "Tu veux apprendre l'espagnol 🎓 mais tu ne sais pas par où commencer ? Tu souhaites connaître l'essentiel pour te débrouiller en voyage ? Envie de maitriser les bases de l'espagnol ? ",
    thumbnailUrl: 'https://img.freepik.com/free-photo/learn-spanish-language-online-education-concept_53876-132596.jpg?t=st=1746454825~exp=1746458425~hmac=0403ee868e701065b3b9d3d410de37892f25c72fd5e6174b212ae9feb6bc20b4&w=826',
    videoUrl: 'https://www.youtube.com/embed/EuEMPa_pJq0?si=vNktuB9VCGGVCiMZ',
    duration: '23:07',
    views: 89880,
    uploadDate: '23-02-2022',
    category: 'Langues',
    instructor: 'Jules Ferrier',
    featured: true
  }
  ,
  {
    id: '11',
    title: 'Comment créer un business plan étape par étape ?',
    description: 'Vous avez un projet d’entreprise ou de startup ? Dans cette vidéo, Léo vous aide à créer votre business plan simplement.',
    thumbnailUrl: 'https://img.freepik.com/free-photo/african-business-male-people-shaking-hands_1303-18516.jpg?t=st=1746454922~exp=1746458522~hmac=8f798c1682388ddbb3039b86f8521e8a0b47c02ffec66b7d58c438b757e5c0c0&w=996',
    videoUrl: 'https://www.youtube.com/embed/i7G5fvbIk6M?si=39PIZHyDcotZ51-X',
    duration: '04:56',
    views: 10900,
    uploadDate: '31-07-2021',
    category: 'Business',
    instructor: 'Bakayoko Coulibaly',
    featured: true
  }
  ,
  {
    id: '12',
    title: "Qu'est-ce que le pH ? Acide, basique, neutre",
    description: "Qu'est-ce que le pH ? Que nous indique-t-il ? Comment le mesurer ?",
    thumbnailUrl: 'https://img.freepik.com/free-photo/front-view-girl-scientist-experimenting-with-potions_23-2148571279.jpg?t=st=1746455463~exp=1746459063~hmac=8be4715d825f2a34e3a14778c75c16fd230a67c08f8e7f2c80ddf097a97a6e97&w=996',
    videoUrl: 'https://www.youtube.com/embed/hJ4y2B8ueUo?si=iGl9_o846n7hUzSe',
    duration: '05:38',
    views: 2000,
    uploadDate: '10-06-2023',
    category: 'Science',
    instructor: 'Paul Olivier',
    featured: true
  }
 
];

/**
 * Retourne uniquement les vidéos marquées en "featured"
 * @returns {Video[]}
 */
export function getFeaturedVideos() {
  return videos.filter(video => video.featured);
}

/**
 * Filtre les vidéos par catégorie (ou retourne toutes si category === 'all')
 * @param {string} category
 * @returns {Video[]}
 */
export function getVideosByCategory(category) {
  if (category === 'all') return videos;
  return videos.filter(video => video.category === category);
}

/**
 * Trouve une vidéo par son `id`
 * @param {string} id
 * @returns {Video|undefined}
 */
export function getVideoById(id) {
  return videos.find(video => video.id === id);
}
