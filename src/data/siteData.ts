export type BusinessArea = {
  id: string
  number: string
  title: string
  eyebrow: string
  description: string
  image: string
  href: string
}

export const site = {
  name: 'KKGT Import Export',
  tagline: 'From Ethiopian Soil to Global Markets',
  email: 'info@kkgtimportexport.com',
  phone: '+251 91 103 6990',
  address: 'Yobek Commercial Center, 7th Floor, Office 703A, Lideta, Addis Ababa',
  hours: 'Monday–Friday 9:00–19:00 · Saturday half day',
}

export const navigation = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Coffee Export', href: '/coffee-export' },
  { label: 'Agrochemicals', href: '/agrochemicals' },
  { label: 'Commodities', href: '/commodities' },
  { label: 'Sustainability', href: '/sustainability' },
  { label: 'Quality', href: '/quality' },
  { label: 'Contact', href: '/contact' },
]

export const imageSources = {
  hero: 'https://kkgtimportexport.com/wp-content/uploads/2025/04/Digital-Marketing-Strategy-to-Dominate-Your-Industry.png',
  company: 'https://kkgtimportexport.com/wp-content/uploads/2024/07/IMG_6981.HEIC-26.png',
  supporting: 'https://kkgtimportexport.com/wp-content/uploads/2024/07/Untitled-design-94.png',
  services: [1, 2, 3, 4].map((index) => `https://kkgtimportexport.com/wp-content/uploads/2020/04/service0${index}.png`),
  certifications: [
    'https://kkgtimportexport.com/wp-content/uploads/elementor/thumbs/IMG_6981.HEIC-3-1-qrvqcq4adjuezui8jjxmjdz9gc8f9ux2eqo2j04a2g.png',
    'https://kkgtimportexport.com/wp-content/uploads/elementor/thumbs/IMG_6981.HEIC-4-qrvpzdsrd7kw73vxgab9n96pwfzv0iy88payalwge0.png',
  ],
}

export const businessAreas: BusinessArea[] = [
  {
    id: 'coffee',
    number: '01',
    eyebrow: 'International trade',
    title: 'Green Coffee Export',
    description: 'Distinctive Ethiopian green coffee supported by careful sourcing, preparation and export coordination for international buyers.',
    image: imageSources.services[0],
    href: '/coffee-export',
  },
  {
    id: 'agrochemicals',
    number: '02',
    eyebrow: 'Agricultural inputs',
    title: 'Agrochemical Import & Distribution',
    description: 'A growing portfolio of crop-protection products serving Ethiopian agriculture through organized import and distribution.',
    image: imageSources.services[1],
    href: '/agrochemicals',
  },
  {
    id: 'farming',
    number: '03',
    eyebrow: 'Primary production',
    title: 'Coffee Farming',
    description: 'Coffee production rooted in Ethiopian origin, local knowledge and a long-term commitment to agricultural value creation.',
    image: imageSources.services[2],
    href: '/sustainability',
  },
  {
    id: 'commodities',
    number: '04',
    eyebrow: 'Commodity export',
    title: 'Oilseeds & Pulses',
    description: 'Selected Ethiopian oilseeds and pulses prepared for commercial buyers with attention to quality and dependable coordination.',
    image: imageSources.services[3],
    href: '/commodities',
  },
]

export const coffeeOrigins = [
  { name: 'Yirgacheffe', region: 'Southern Ethiopia', note: 'A globally recognised Ethiopian coffee origin.', code: 'YIR' },
  { name: 'Sidama', region: 'Southern Ethiopia', note: 'A major producing region with diverse local profiles.', code: 'SID' },
  { name: 'Limmu', region: 'South-west Ethiopia', note: 'An established washed-coffee producing area.', code: 'LIM' },
  { name: 'Lekempti', region: 'Western Ethiopia', note: 'A western origin represented in the current KKGT offering.', code: 'LEK' },
  { name: 'Djimmah', region: 'South-west Ethiopia', note: 'A recognised commercial coffee origin.', code: 'DJI' },
]

export const processSteps = [
  { number: '01', title: 'Responsible sourcing', text: 'Coffee and commodities are sourced through relationships that support dependable supply.' },
  { number: '02', title: 'Selection and inspection', text: 'Incoming products are reviewed before they move into preparation and processing.' },
  { number: '03', title: 'Processing and preparation', text: 'Products are prepared according to the requirements of the specific commodity and buyer.' },
  { number: '04', title: 'Quality verification', text: 'Quality checks help confirm that the prepared lot aligns with agreed requirements.' },
  { number: '05', title: 'Packaging and documentation', text: 'Packaging and commercial documentation are coordinated for the intended market.' },
  { number: '06', title: 'Shipment coordination', text: 'The final stage supports organised dispatch and communication with the buyer.' },
]

export const products = [
  { name: 'BASECOR 80% WDG', category: 'Herbicide', formulation: 'WDG', accent: 'orange' },
  { name: 'CURTAIL 15.5% SC', category: 'Herbicide', formulation: 'SC', accent: 'green' },
  { name: 'TABAN 80% WP', category: 'Fungicide', formulation: 'WP', accent: 'brown' },
  { name: 'PROLIGHT 45% SC', category: 'Fungicide', formulation: 'SC', accent: 'yellow' },
  { name: 'AZADON 24% EC', category: 'Herbicide', formulation: 'EC', accent: 'rust' },
  { name: 'INSIDER 27% FS', category: 'Seed treatment', formulation: 'FS', accent: 'deep-green' },
]

export const commodities = ['Sesame', 'Soybeans', 'Green mung beans', 'White beans', 'Red kidney beans', 'Chickpeas']
