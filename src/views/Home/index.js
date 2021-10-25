import { Container } from "reactstrap";

export const Home = () => {
    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div className="m-auto p-2">
                        <h1>Home</h1>
                    </div>
                    <div className="p-2">
                        <a href="/listar-cliente" className="btn btn-outline-success btn-sm">Cliente</a>
                    </div>
                    <div className="p-2">
                        <a href="/listar-pedido" className="btn btn-outline-success btn-sm">Pedido</a>
                    </div>
                    <div className="p-2">
                        <a href="/listar-servico" className="btn btn-outline-success btn-sm">Serviço</a>
                    </div>
                </div>
            </Container>
        </div>
    );
};