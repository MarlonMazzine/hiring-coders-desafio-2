import { useState } from "react";
import banner from "../../assets/58670.jpg";
import * as S from './styled'

export default function AdministratorHome() {
	const [ nome, setNome ] = useState('')
    const [ documento, setDocumento ] = useState('')
    const [ telefone, setTelefone ] = useState('')
    const [ nascimento, setNascimento ] = useState('')
    const [ endereco, setEndereco ] = useState('')
	
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
			nascimento: nascimento,
			endereco: endereco
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
				Tecnologia vetor criado por gstudioimagen - br.freepik.com
			</S.LinkInferiorDireito>
				<S.LinkInferiorEsquerdo href="https://br.freepik.com/vetores/tecnologia" target="_blank" rel="noreferrer">
					Github
				</S.LinkInferiorEsquerdo>

			<S.Banner src={banner} alt="Banner do site" />

			<S.Navbar>
				<p>Logo do site</p>
				<p>Área administrativa</p>
			</S.Navbar>

			<S.ContainerAdministratorArea>
				<h1>Área administrativa</h1>

				<S.ContainerBoxSizing>
					<S.CotnainerForm>
                        <h2>Novo cadastro</h2>
                        <form onSubmit={handleClient}>
							<S.Input type='text' placeholder="Nome completo" value={nome} onChange={e => setNome(e.target.value)} required/>
							<S.Input type='text' placeholder="Documento" value={documento} onChange={e => setDocumento(e.target.value)} required/>
							<S.Input type='text' placeholder="Telefone" value={telefone} onChange={e => setTelefone(e.target.value)} required/>
							<S.Input type='text' placeholder="Data de nascimento" value={nascimento} onChange={e => setNascimento(e.target.value)} required/>
							<S.Input type='text' placeholder="Endereço" value={endereco} onChange={e => setEndereco(e.target.value)} required/>
                            <S.ContainerFlexArround>
								<S.InputSubmit type='submit' value="Salvar"/>
								<S.InputReset type='reset' value="Limpar"/>
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
							<S.Input type='text' placeholder="Quantidade" value={quantidade} onChange={e => setQuantidade(e.target.value)} required/>
							<S.Input type='text' placeholder="Preço de custo R$" value={precoDeCusto} onChange={e => setPrecoDeCusto(e.target.value)} required/>
							<S.Input type='text' placeholder="Preço de venda R$" value={precoDeVenda} onChange={e => setPrecoDeVenda(e.target.value)} required/>
                            <S.ContainerFlexArround>
								<S.InputSubmit type='submit' value="Salvar"/>
								<S.InputReset type='reset' value="Limpar"/>
                            </S.ContainerFlexArround>
                        </form>
                    </S.CotnainerForm>
				</S.ContainerBoxSizing>
			</S.ContainerAdministratorArea>
		</>
	);
}
