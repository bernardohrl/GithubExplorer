import React from "react";
import { FiChevronRight } from "react-icons/fi";

import logo from "../../assets/logo.svg";
import { Title, Form, Repositories } from "./styles";

// FC = FunctionComponent
const Dashboard: React.FC = () => {
    return (
        <>
            <img src={logo} alt="Github Explorer" />
            <Title>Explore Repositórios do Github</Title>

            <Form>
                <input placeholder="Digite o nome do repositório" />
                <button type="submit"> Pesquisar </button>
            </Form>

            <Repositories>
                <a href="test">
                    <img
                        src="https://avatars2.githubusercontent.com/u/20937488?s=460&u=5e8d3b43e8eb6c38562caf172224e972b5bc9856&v=4"
                        alt="User Profile"
                    />
                    <div>
                        <strong> Github Explorer </strong>
                        <p> Page to explore github repositories </p>
                    </div>
                    <FiChevronRight size={20} />
                </a>

                <a href="test">
                    <img
                        src="https://avatars2.githubusercontent.com/u/20937488?s=460&u=5e8d3b43e8eb6c38562caf172224e972b5bc9856&v=4"
                        alt="User Profile"
                    />
                    <div>
                        <strong> Github Explorer </strong>
                        <p> Page to explore github repositories </p>
                    </div>
                    <FiChevronRight size={20} />
                </a>

                <a href="test">
                    <img
                        src="https://avatars2.githubusercontent.com/u/20937488?s=460&u=5e8d3b43e8eb6c38562caf172224e972b5bc9856&v=4"
                        alt="User Profile"
                    />
                    <div>
                        <strong> Github Explorer </strong>
                        <p> Page to explore github repositories </p>
                    </div>
                    <FiChevronRight size={20} />
                </a>
            </Repositories>
        </>
    );
};

export default Dashboard;
