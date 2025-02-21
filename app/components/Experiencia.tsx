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
        <div className='bg-zinc-200'>
            <h1>{empresa}</h1>
            <div className='flex justify-between'>
                <span>{duracao}</span>
            </div>
            <hr />
            <p>{cargo}</p>
            <div>{funcoes.map((funcao)=>(
                <li key={funcao}>
                    {funcao}
                </li>
            ))}</div>
            <p>{descricao}</p>
        </div>
    </div>
  )
}

export default Experiencia