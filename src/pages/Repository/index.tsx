import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { Header, RepositoryInfo, Issues } from './styles';
import logo from '../../assets/logo.svg';

interface RepositoryParams {
    repository: string;
}

// FC = FunctionComponent
const Repository: React.FC = () => {
    const { params } = useRouteMatch<RepositoryParams>();

    return (
        <>
            <Header>
                <img src={logo} alt="Github Explorer" />

                <Link to="/">
                    <FiChevronLeft size={16} />
                    Voltar
                </Link>
            </Header>

            <RepositoryInfo>
                <header>
                    <img
                        src="https://avatars2.githubusercontent.com/u/20937488?s=460&u=5e8d3b43e8eb6c38562caf172224e972b5bc9856&v=4"
                        alt="User"
                    />
                    <div>
                        <strong>gobarber/frontend</strong>
                        <p>Repositório para fazer várias coisas e etc</p>
                    </div>
                </header>
                <ul>
                    <li>
                        <strong> 1808 </strong>
                        <span>Stars</span>
                    </li>
                    <li>
                        <strong> 50 </strong>
                        <span>Forks</span>
                    </li>
                    <li>
                        <strong> 92 </strong>
                        <span>Issues Abertas</span>
                    </li>
                </ul>
            </RepositoryInfo>

            <Issues>
                <Link to="?">
                    <div>
                        <strong> Nome da Issue </strong>
                        <p> Descrição da Issue </p>
                    </div>
                    <FiChevronRight size={20} />
                </Link>
            </Issues>
        </>
    );
};

export default Repository;
