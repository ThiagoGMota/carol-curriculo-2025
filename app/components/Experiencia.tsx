import React from 'react'

interface workinfo{
    empresa:    string
    duracao:    string 
    cargo:      string
    funcoes:    string[]
    descricao?: string
}
const Experiencia: React.FC<workinfo> = ({
    empresa,
    duracao,
    cargo,
    funcoes,
    descricao
}) => {
  return (
    <div>
        <div className='text-2xl'>
            <h1 className='font-bold text-3xl mb-4'>{empresa}</h1>
            <div className='flex gap-28 mb-4'>
                <p className='font-semibold'>{cargo}</p>
                <span className='text-2xl'>{duracao}</span>
            </div>
            <hr />
            
            <div className='mb-4'>
                {funcoes.map((funcao)=>(
                    <li key={funcao}>
                        {funcao}
                    </li>
                ))}
            </div>
            <p>{descricao}</p>
        </div>
    </div>
  )
}

export default Experiencia