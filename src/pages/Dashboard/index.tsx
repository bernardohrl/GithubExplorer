import React, { useState, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';

import api from '../../services/api';
import logo from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

interface Repository {
    id: string;
    full_name: string;
    description: string;
    owner: {
        login: string;
        avatar_url: string;
    };
}

// FC = FunctionComponent
const Dashboard: React.FC = () => {
    const [newRepo, setNewRepo] = useState('');
    const [repositories, setRepositories] = useState<Repository[]>([]);

    async function handleAddRepository(
        e: FormEvent<HTMLFormElement>
    ): Promise<void> {
        e.preventDefault();

        const response = await api.get<Repository>(`/repos/${newRepo}`);

        const repository = response.data;
        setRepositories([...repositories, repository]);
        setNewRepo('');
    }

    return (
        <>
            <img src={logo} alt="Github Explorer" />
            <Title>Explore Repositórios do Github</Title>

            <Form onSubmit={handleAddRepository}>
                <input
                    value={newRepo}
                    onChange={(e) => setNewRepo(e.target.value)}
                    placeholder="Digite o nome do repositório"
                />
                <button type="submit"> Pesquisar </button>
            </Form>

            <Repositories>
                {repositories.map((repo) => (
                    <a key={repo.id} href="test">
                        <img
                            src={repo.owner.avatar_url}
                            alt={repo.owner.login}
                        />
                        <div>
                            <strong> {repo.full_name} </strong>
                            <p> {repo.description} </p>
                        </div>
                        <FiChevronRight size={20} />
                    </a>
                ))}
            </Repositories>
        </>
    );
};

export default Dashboard;
