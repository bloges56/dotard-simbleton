import { purchasingAgents } from './BusinessProvider.js'

export const AgentList = () => {
    var contentElement = document.querySelector('#purchasing_agents');
    var agents = purchasingAgents;

    for(var agent of agents){
        contentElement.innerHTML += `
            <div class=agent>
                <h3>${agent.fullName}</h3>
                <h4>${agent.company}</h4>
                <h4>${agent.phoneNumber}</h4>
            </div>
        `;
    }
};