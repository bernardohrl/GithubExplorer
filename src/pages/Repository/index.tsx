import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import api from '../../services/api';
import logo from '../../assets/logo.svg';
import { Issue, Repository } from '../../models';
import { Header, RepositoryInfo, Issues } from './styles';

interface RouteParams {
    repository: string;
}

// FC = FunctionComponent
const RepositoryDeatails: React.FC = () => {
    const { params } = useRouteMatch<RouteParams>();
    const [repository, setRepository] = useState<Repository | null>(null);
    const [issues, setissues] = useState<Issue[]>([]);

    useEffect(() => {
        // Há duas opções para fazer a requisição:
        // 1ª
        api.get(`repos/${params.repository}`).then((response) => {
            console.log(response.data);

            setRepository(response.data);
        });
        api.get(`repos/${params.repository}/issues`).then((response) => {
            setissues(response.data);
        });

        // 2ª
        // async function loadData(): Promise<void> {
        //     const [repository, issues] = await Promise.all(
        //         api.get(`repos/${params.repository}`),
        //         api.get(`repos/${params.repository}/issues`)
        //     );
        //     // Set Data
        // }
        // loadData();
    }, [params.repository]);

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
                    <img src={repository?.owner.avatar_url} alt="User" />
                    <div>
                        <strong>{repository?.full_name}</strong>
                        <p>{repository?.description}</p>
                    </div>
                </header>
                <ul>
                    <li>
                        <strong> {repository?.stargazers_count} </strong>
                        <span>Stars</span>
                    </li>
                    <li>
                        <strong> {repository?.forks_count} </strong>
                        <span>Forks</span>
                    </li>
                    <li>
                        <strong> {repository?.open_issues_count} </strong>
                        <span>Issues Abertas</span>
                    </li>
                </ul>
            </RepositoryInfo>

            <Issues>
                {issues.map((issue) => (
                    <a href={issue.html_url}>
                        <div key={issue.id}>
                            <strong> {issue.title} </strong>
                            <p> {issue.user.login} </p>
                        </div>
                        <FiChevronRight size={20} />
                    </a>
                ))}
            </Issues>
        </>
    );
};

export default RepositoryDeatails;
