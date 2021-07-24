import styled from 'styled-components'

export const Banner = styled.img`
    width: 100%;
    height: 100%;
    position: absolute;
`;

export const LinkInferiorDireito = styled.a`
    position: fixed;
    bottom: 10px;
    right: 10px;
    z-index: 999;
    color: white;
`;

export const LinkInferiorEsquerdo = styled.a`
    position: fixed;
    bottom: 10px;
    left: 10px;
    z-index: 999;
    color: white;
`;

export const CotnainerForm = styled.div`
    width: 400px;
    height: 410px;
    border: #5A189A solid 2px;
    border-radius: 10px;
`;

export const ContainerFlexArround = styled.div`
    display: flex;
    justify-content: space-around;
`;

export const ContainerBoxSizing = styled.div`
    display: flex;
    justify-content: space-around;
    text-align: center;
    box-sizing: border-box;
    border-radius: 10px;
`;

export const ContainerAdministratorArea = styled.div`
    width: 1000px;
    height: 590px;
    background-color: white;
    z-index: 999;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
    left: 0;
    right: 0;
    text-align: center;
    border-radius: 10px;
    color: #5A189A;
`;

export const Input = styled.input`
    width: 80%;
    border: #5A189A solid 2px;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 15px;
    outline: none;
`;

export const InputSubmit = styled.input`
    width: 35%;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 15px;
    background-color: #5A189A;
    color: white;
    font-weight: bolder;
    outline: none;
`;

export const InputReset = styled.input`
    width: 35%;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 15px;
    background-color: #CED4DA;
    color: #212529;
    font-weight: bolder;
    outline: none;
`;

export const Navbar = styled.nav`
    width: 100%;
    padding: 20px 0;
    color: #fff;
    display: flex;
    justify-content: space-around;
    background: rgba(0, 0, 0, 0.50);
    backdrop-filter: blur( 0.0px );
`;

export const Select = styled.select`
    width: 86%;
    border: #5A189A solid 2px;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 15px;
    outline: none;
`;
