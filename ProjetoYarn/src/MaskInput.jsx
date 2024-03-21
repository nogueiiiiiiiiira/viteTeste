import InputMask from 'react-input-mask';

export const MaskInput = () => {
    return(
        <>
            <InputMask mask="99/99/9999" type="text" placeholder="Digite uma data:" />
            <InputMask mask="(99) 99999-9999" type="text" placeholder="Digite um telefone:" />
        </>
        
    )
}