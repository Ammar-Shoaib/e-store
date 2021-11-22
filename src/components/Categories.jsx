import styled from "styled-components"
import { categories } from '../data'
import { mobile } from "../resonsive"
import CategoryItem from './CategoryItem'

const Container = styled.div`
    display:flex;
    padding:20px;
    justify-content: space-between;
    ${mobile({ flexDirection:'column', padding:'0px' })}
`

const Categories = () => {
    return (
        <Container>
            {categories.map(item => (
                <CategoryItem key={item.id} item={item} />
            ))}
        </Container>
    )
}

export default Categories
