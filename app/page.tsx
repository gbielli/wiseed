import Image from 'next/image'
import { Form } from 'react-hook-form'
import ContactForm from './contactForm'

export default function Home() {
  return (
    <main className="">
      <div className='header w-full px-10 py-6 z-10 bg-[#0F1D32]'>
        <div className='nav flex items-center'>
          <div className="image">
            <Image src={`/Logo.png`} width={138} height={39} alt='logo wiseed' />
          </div>
          <div className='ml-auto flex gap-10 text-white'>
            <a>Le groupe WiSEED​</a>
            <a>Nos Services d’Investissement</a>
            <a>Nos agréments​</a>
          </div>
        </div>

      </div>
      <div className='relative'>
        <div className='w-3/5 px-10 pt-20 pb-20 text-white'>
          <h1 className='text-5xl leading-snug'>
            L’Entreprise d’Investissement de référence qui digitalise vos opérations en capital et dette
          </h1>
          <p className='text-xl text-slate-400 mt-4 leading-10 font-light w-3/4	'>Le tiers de confiance régulé qui simplifie vos
            émissions de titres, club deals, véhicules et fonds d’investissement. ​</p>
          <div className='mt-40'>
            <Image src={`/arrow.png`} width={64} height={39} alt='logo wiseed' />
          </div>
        </div>
        <div className='absolute top-0 right-0 z-0 h-full'>
          <Image className='' src={`/W.svg`} width={800} height={200} alt='w' />
        </div>

        <section className='px-10 pb-40'>
          <div className="cards grid grid-cols-2 gap-20">
            <div className="card bg-white p-10 rounded-xl">
              <div className="img mb-4">
                <Image src={`/icon-immo.png`} width={64} height={39} alt='logo wiseed' />
              </div>
              <div className="texte text-black">
                <h3 className=' text-3xl  mb-4'>WiSEED Crowdfunding</h3>
                <p className='text-slate-700 text-lg'>Prestataire de Services de Financement Participatif agréée par XXX sous le numéro XXXX
                  Expert reconnu du financement de projets depuis plus de 15 ans, WiSEED propose à plus de 200 000 investisseurs particuliers et professionnels des investissements dans des actifs tangibles à impact alliant rentabilité financière et valeur sociétale. </p>
                <div className='mt-10'>
                  <a className='text-red-500' href="#">Découvrir</a>
                </div>
              </div>

            </div>
            <div className="card bg-white p-10 rounded-xl">
              <div className="img  mb-4">
                <Image src={`/icon-immo.png`} width={64} height={39} alt='logo wiseed' />
              </div>
              <div className="texte text-black">
                <h3 className='text-3xl mb-4'>WiSEED Investment</h3>
                <p className='text-slate-700  text-lg'>Entreprise d’investissement indépendante agrée Prestataire de Services d'Investissement (PSI) par l'Autorité de Contrôle Prudentiel et de Résolution (ACPR) de la Banque de France, CIB 11783​
Forte de son expérience sur plus de 1 000 opérations financées, WiSEED met son savoir-faire et son expertise au service des professionnels de l’investissement.​ </p>
                <div className='mt-10'>
                  <a className='text-red-500' href="#">Découvrir</a>
                </div>
              </div>
            </div>

          </div>
        </section>
      </div>

      <section className='bg-white'>
        <div className="flex items-center pr-10 gap-10">
          <div className="left h-[650px]">
            <Image className='object-cover h-full' src={`/immobilier.jpg`} width={750} height={1080} alt='logo wiseed' />
          </div>
          <div className="right px-10 bg-white">
            <div className="title text-black">
              <h3 className='text-3xl'>Contact</h3>
              <p>Auctor quis congue tempor sem non egestas phasellus eget.
                Velit praesent in nisl nibh. </p>
            </div>
            <div className="form">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>


    </main>
  )
}
