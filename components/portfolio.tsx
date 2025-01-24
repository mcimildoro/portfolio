import { dataPortfolio } from '@/data';
import Title from './shared/title';
import Image from 'next/image';
import { buttonVariants } from './ui/button';
import Link from 'next/link';

const Portfolio = () => {
    return (
        <div className='p-4 max-w-4xl md:py-24 mx-auto' id='portfolio'>
            <Title title="Portfolio" subtitle='Trabajos recientes 💼'/>

            <div className='grid md:grid-cols-3 mt-4 gap-14 '>
                {dataPortfolio.map((data) => (
                    <div key={data.id}>
                        <h3 className='text-xl mb-4'>{data.title}</h3>
                        <Image src={data.image} alt="Image" height={300} width={600}  className="rounded-2xl"  />
                   
                    
                        <div className='flex mt-5 gap-5'>
                            <Link className={buttonVariants({variant: "outline"})} href={data.urlGithub}>Github</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Portfolio;