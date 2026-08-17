import Image from 'next/image';

import {
  AccordionPanel,
  AccordionStack,
} from '@/shared/ui/accordion-panel';

import { FAQ_ITEMS } from '../config/faq';

const Faq = () => (
  <AccordionStack>
    {FAQ_ITEMS.map((item) => (
      <AccordionPanel
        bodyClassName="space-y-4"
        id={item.id}
        key={item.id}
        title={item.question}>
        <p>{item.answer}</p>
        <Image
          alt={item.imageAlt}
          className="aspect-[16/7] w-full rounded-xl object-cover max-sm:aspect-[4/3]"
          height={640}
          sizes="(max-width: 1024px) calc(100vw - 40px), 550px"
          src={item.image}
          width={1200}
        />
      </AccordionPanel>
    ))}
  </AccordionStack>
);

export default Faq;
