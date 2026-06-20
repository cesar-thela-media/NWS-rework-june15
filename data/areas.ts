import type { Area } from '@/lib/types';

const NWS = 'https://www.nws-homes.com/wp-content/uploads/2023/01';

export const areas: Area[] = [
  { slug:'richmond',label:'Richmond',state:'TX',isPrimary:true,tagline:'Our Home Base',description:"NWS has called Richmond home since 2007. We know the neighborhoods, the permit offices, and the communities inside-out.",image:`${NWS}/custom-homes-7.jpeg` },
  { slug:'sugar-land',label:'Sugar Land',state:'TX',tagline:'Premium Remodels & Custom Builds',description:"One of the fastest-growing cities in Fort Bend County. We've completed dozens of kitchen and whole-home remodels across Sugar Land.",image:`${NWS}/kitchen-gallery-7.jpeg` },
  { slug:'katy',label:'Katy',state:'TX',tagline:'Custom Homes & Major Remodels',description:"Katy's booming growth means plenty of new builds and older homes ready for a refresh. We serve all of Katy and the surrounding subdivisions.",image:`${NWS}/custom-homes-4.jpeg` },
  { slug:'fulshear',label:'Fulshear',state:'TX',tagline:'Luxury Builds & Additions',description:"Fulshear's upscale communities are a great fit for our custom home building and high-end remodeling work.",image:`${NWS}/bathroom-gallery-7.jpeg` },
  { slug:'cinco-ranch',label:'Cinco Ranch',state:'TX',tagline:'Remodels & Room Additions',description:"Established neighborhoods with homes ready for kitchen updates, bathroom overhauls, and room additions. We've built a strong track record here.",image:`${NWS}/remodeling-2.jpeg` },
  { slug:'rosenberg',label:'Rosenberg',state:'TX',tagline:'Full-Service Remodeling',description:'From historic homes to newer builds, we handle remodeling projects of all sizes across Rosenberg.',image:`${NWS}/remodeling-3.jpeg` },
  { slug:'weston-lakes',label:'Weston Lakes',state:'TX',tagline:'Custom & Luxury Remodeling',description:"Weston Lakes' gated community homes deserve premium craftsmanship. We bring the same standards to every project here.",image:`${NWS}/custom-homes-2.jpeg` },
  { slug:'west-houston',label:'West Side of Houston',state:'TX',tagline:'Serving the Energy Corridor & Beyond',description:'The West Side of Houston includes some of the most active remodeling markets in the metro. We serve clients from Memorial to the Energy Corridor.',image:`${NWS}/kitchen-gallery-1.jpeg` },
  { slug:'park-row',label:'Park Row',state:'TX',tagline:'Remodeling & Home Additions',description:"Park Row's established neighborhoods offer plenty of opportunities for thoughtful renovations and well-planned additions.",image:`${NWS}/bathroom-gallery-1.jpeg` },
];
