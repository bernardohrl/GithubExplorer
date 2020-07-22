import React, { useState, useEffect, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import api from '../../services/api';
import logo from '../../assets/logo.svg';
import { Title, Form, Repositories, Error } from './styles';

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
    const [inputError, setInputError] = useState('');
    const [repositories, setRepositories] = useState<Repository[]>(() => {
        const storagedRepositories = localStorage.getItem('repositories');

        return storagedRepositories ? JSON.parse(storagedRepositories) : [];
    });

    useEffect(() => {
        localStorage.setItem('repositories', JSON.stringify(repositories));
    }, [repositories]);

    async function handleAddRepository(
        e: FormEvent<HTMLFormElement>
    ): Promise<void> {
        e.preventDefault();

        if (!newRepo) {
            setInputError('Digite autor/nome do repositório.');
            return;
        }

        try {
            const response = await api.get<Repository>(`/repos/${newRepo}`);

            const repository = response.data;
            setRepositories([...repositories, repository]);
            setNewRepo('');
            setInputError('');
        } catch {
            setInputError('Repositório não encontrado.');
        }
    }

    return (
        <>
            <img src={logo} alt="Github Explorer" />
            <Title>Explore Repositórios do Github</Title>

            <Form hasError={Boolean(inputError)} onSubmit={handleAddRepository}>
                <input
                    value={newRepo}
                    onChange={(e) => setNewRepo(e.target.value)}
                    placeholder="Digite o nome do repositório"
                />
                <button type="submit"> Pesquisar </button>
            </Form>

            {/* Ternario sem o valor do else */}
            {inputError && <Error>{inputError}</Error>}

            <Repositories>
                {repositories.map((repo) => (
                    <Link key={repo.id} to={`repositories/${repo.full_name}`}>
                        <img
                            src={repo.owner.avatar_url}
                            alt={repo.owner.login}
                        />
                        <div>
                            <strong> {repo.full_name} </strong>
                            <p> {repo.description} </p>
                        </div>
                        <FiChevronRight size={20} />
                    </Link>
                ))}
            </Repositories>
        </>
    );
};

export default Dashboard;
