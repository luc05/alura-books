import perfil from "../../imagens/perfil.svg"
import sacola from "../../imagens/sacola.svg"
import styled from "styled-components"
const icones = [perfil, sacola]
const IconesContainer = styled.ul`
  display: flex;
  align-items: center;
`
const Icone = styled.li`
  margin-right: 40px;
  width: 25px;
`

function IconesHeader () {
    return (
        <IconesContainer>
        { icones.map ( (icone) => (
          <li className='icone'>
            <Icone 
            src={icone} 
            alt='icone'
            />
          </li>
        ))}
    </IconesContainer>
    )
}
export default IconesHeader