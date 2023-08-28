import { ButtonContainer, ButtonStyle } from "./buttonLoadMore_style"


export const Button = ({handleLoadMore}) => {
    return (
        <ButtonContainer><ButtonStyle onClick={handleLoadMore}>Load more</ButtonStyle></ButtonContainer>
        
    )
}