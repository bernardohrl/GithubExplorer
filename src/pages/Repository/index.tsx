import React from 'react';
import { useRouteMatch } from 'react-router-dom';

interface RepositoryParams {
    repository: string;
}

// FC = FunctionComponent
const Repository: React.FC = () => {
    const { params } = useRouteMatch<RepositoryParams>();

    return <h1>{params.repository}</h1>;
};

export default Repository;
