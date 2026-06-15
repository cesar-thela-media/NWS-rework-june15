import type { Testimonial } from '@/lib/types';

export const testimonials: Testimonial[] = [
  { id:'t1',name:'Allison C.',initial:'A',city:'Richmond, TX',date:'Aug 2023',source:'Google',quote:'They handled every hiccup calmly and finished in just 3 months. The kitchen is beyond what we imagined.',service:'kitchen-remodeling' },
  { id:'t2',name:'Katie J.',initial:'K',city:'Richmond, TX',date:'Aug 2023',source:'Google',quote:'Great communicators throughout the entire home build. We are very pleased with the outcome and service.',service:'custom-home-building' },
  { id:'t3',name:'Carrie N.',initial:'C',city:'Sugar Land, TX',date:'Jul 2023',source:'Google',quote:'We keep going back to them because they do good work. Used NWS for several projects from minor to major.',service:'whole-home-remodeling' },
  { id:'t4',name:'Amy H.',initial:'A',city:'Katy, TX',date:'Jul 2023',source:'Google',quote:'Always responded, always showed up, and made sure the job was done right. Will use NWS again no doubt.',service:'bathroom-remodeling' },
  { id:'t5',name:'Drew L.',initial:'D',city:'Cinco Ranch, TX',date:'Jun 2021',source:'Google',quote:'First class operation from scope of work to final punch list. Would highly recommend for custom builds.',service:'custom-home-building' },
  { id:'t6',name:'Sheila V.',initial:'S',city:'Richmond, TX',date:'Mar 2020',source:'Google',quote:'NWS remodeled all 4 of our bathrooms and did a fantastic job. Friendly, quality work. Highly recommended.',service:'bathroom-remodeling' },
  { id:'t7',name:'Tim O.',initial:'T',city:'Fulshear, TX',date:'Mar 2017',source:'Angi',quote:'Excellent value. They can do anything. Worked with us on questions and concerns throughout every project.',service:'whole-home-remodeling' },
  { id:'t8',name:'Mark D.',initial:'M',city:'Richmond, TX',date:'Oct 2017',source:'Angi',quote:'Professional and very detailed. Updated daily on progress. Project did not go over budget. Results were great.',service:'room-additions' },
];

export function getTestimonials(serviceSlug?: string, count = 3): Testimonial[] {
  if (serviceSlug) {
    const relevant = testimonials.filter(t => t.service === serviceSlug);
    if (relevant.length >= count) return relevant.slice(0, count);
    const others = testimonials.filter(t => t.service !== serviceSlug);
    return [...relevant, ...others].slice(0, count);
  }
  return testimonials.slice(0, count);
}
