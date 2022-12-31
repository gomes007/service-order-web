import { useState } from "react";
import Navbar from "../Nabar/Navbar";
import ItemMenu from "./ItemMenu";

const Menu = ({ children }) => {

    const [open, setOpen] = useState('aberto');

    const handleMenu = () => {
        (open === 'aberto') ? setOpen('fechado') : setOpen('aberto');
    };

    return (
        <>
            <div className={`menu ${open}`}>
                <h1 className="logo">Logo Aqui</h1>
                <hr className="divisor" />

                <ul className="conteudo-menu">
                    {/* Menu sem Dropdow */}
                    <li className="item-menu">
                        <a className="link-menu" href="/">
                            <i class="fa-solid fa-chart-simple"></i>
                            <span>Dashboard</span>
                        </a>
                    </li>

                    {/* Menu com Dropdow */}
                    <ItemMenu title="Usuários" icon="fa-solid fa-user">
                        <li>
                            <a className="link-menu" href="/">
                                <i class="fa-solid fa-user-plus"></i>
                                <span>Novo Usuário</span>
                            </a>
                        </li>
                        <li>
                            <a className="link-menu" href="/Customer/Registry">
                                <i class="fa-solid fa-user-plus"></i>
                                <span>Cadastro de Clientes</span>
                            </a>
                        </li>
                    </ItemMenu>
                </ul>
            </div>

            <div className={`site ${open}`}>
                <Navbar
                    tipoMenu={open}
                    handleMenu={handleMenu}
                />
                <div className="content">
                    {children}
                </div>
            </div>
        </>
    );
};

export default Menu;
