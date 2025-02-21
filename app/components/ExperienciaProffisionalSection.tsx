import React from 'react'
import Experiencia from './Experiencia'
import { aestheticFont } from '@/fonts/fonts'

const ExperienciaProfissionalSection = () => {
  return (
    <div className='flex flex-col gap-y-8 px-8'>
      <h1 className={`text-3xl text-yellow-600 ${aestheticFont.className}`}>Minha Tragetória até aqui</h1>
        <div className='self-end rounded-xl shadow-2xl p-8 bg-white '>
            <Experiencia 
                empresa='Hospital Paulo de Tarso'
                duracao='2024 - 6 meses'
                cargo='Dentista Assistente'
                funcoes={['Auxiliar o dentista responsavel na realização de tratamentos aos pacientes','Atendimento aos pacientes','Estudo e avaliação de casos complexos']}
                descricao="Tive a oportunidade de oferecer cuidados bucais a pacientes em situações delicadas, contribuindo para seu conforto e recuperação.Trabalhei ao lado de uma equipe multidisciplinar, aprendendo a importância da humanização no atendimento e no acompanhamento de casos odontológicos complexos."
            />
        </div>
        <div className='border-2 border-black self-start  rounded-xl'>

        </div>
        <div className='border-2 border-black self-end  rounded-xl'>

        </div>
        <div className='border-2 border-black self-start  rounded-xl'>

        </div>
        <div className='border-2 border-black self-end  rounded-xl'>

        </div>
    </div>
  )
}

export default ExperienciaProfissionalSection