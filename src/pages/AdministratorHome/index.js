import { useState } from "react";
import banner from "../../assets/58670.jpg";
import logo from "../../assets/logo.png";
import * as S from './styled'

export default function AdministratorHome() {
	const [ nome, setNome ] = useState('')
    const [ documento, setDocumento ] = useState('')
    const [ telefone, setTelefone ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ nascimento, setNascimento ] = useState('')
	
	const [ descricao, setDescricao ] = useState('')
	const [ plataforma, setPlataforma ] = useState('')
	const [ quantidade, setQuantidade ] = useState('')
	const [ precoDeCusto, setPrecoDeCusto ] = useState('')
	const [ precoDeVenda, setPrecoDeVenda ] = useState('')

	function handleClient() {
		const cliente = JSON.stringify({
			nome: nome,
			documento: documento,
			telefone: telefone,
			email: email,
			nascimento: nascimento
		})

		localStorage.setItem('Cliente', cliente)
        window.alert('Cadastro realizado com êxito!')
	}

	function handleProduto() {
		const produto = JSON.stringify({
			descricao: descricao,
			plataforma: plataforma,
			quantidade: quantidade,
			precoDeCusto: precoDeCusto,
			precoDeVenda: precoDeVenda
		})

		localStorage.setItem('Produto', produto)
        window.alert('Cadastro realizado com êxito!')
	}

	return (
		<>
			<S.LinkInferiorDireito href="https://br.freepik.com/vetores/tecnologia" target="_blank" rel="noreferrer">
				Imagem de fundo retirada de: Tecnologia vetor criado por gstudioimagen - br.freepik.com
			</S.LinkInferiorDireito>
				<S.LinkInferiorEsquerdo href="https://github.com/MarlonMazzine/hiring-coders-desafio-2" target="_blank" rel="noreferrer">
					Github
				</S.LinkInferiorEsquerdo>

			<S.Banner src={banner} alt="Banner do site" />

			<S.Navbar>
				<S.LogoImage src={logo} alt="Logo Gama Games"></S.LogoImage>
			</S.Navbar>

			<S.ContainerAdministratorArea>
				<h1>Área administrativa</h1>

				<S.ContainerBoxSizing>
					<S.CotnainerForm>
                        <h2>Novo cadastro</h2>
                        <form onSubmit={handleClient}>
							<S.Input type='text' placeholder="Nome completo" value={nome} onChange={e => setNome(e.target.value)} required/>
							<S.Input type='number' placeholder="CPF/CNPJ" value={documento} onChange={e => setDocumento(e.target.value)} required/>
							<S.Input type='tel' placeholder="Telefone" value={telefone} onChange={e => setTelefone(e.target.value)} required/>
							<S.Input type='text' placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required/>
							<S.Input type='date' placeholder="Data de nascimento" value={nascimento} onChange={e => setNascimento(e.target.value)} required/>
                            <S.ContainerFlexArround>
								<S.InputSubmit type='submit' value="Salvar"/>
                            </S.ContainerFlexArround>
                        </form>
                    </S.CotnainerForm>

					<S.CotnainerForm>
                        <h2>Novo produto</h2>
                        <form onSubmit={handleProduto}>
							<S.Input type='text' placeholder="Descrição" value={descricao} onChange={e => setDescricao(e.target.value)} required/>
                            <S.Select value={plataforma} onChange={e => setPlataforma(e.target.value)} required>
                                <option value=''>Slecione a plataforma</option>
                                <option value="PC">PC</option>
                                <option value="PS4">PS4</option>
                                <option value="XBOX">XBOX</option>
                            </S.Select>
							<S.Input type='number' placeholder="Quantidade" value={quantidade} onChange={e => setQuantidade(e.target.value)} required/>
							<S.Input type='text' placeholder="Preço de custo R$" value={precoDeCusto} onChange={e => setPrecoDeCusto(e.target.value)} required/>
							<S.Input type='text' placeholder="Preço de venda R$" value={precoDeVenda} onChange={e => setPrecoDeVenda(e.target.value)} required/>
                            <S.ContainerFlexArround>
								<S.InputSubmit type='submit' value="Salvar"/>
                            </S.ContainerFlexArround>
                        </form>
                    </S.CotnainerForm>
				</S.ContainerBoxSizing>
			</S.ContainerAdministratorArea>
		</>
	);
}
