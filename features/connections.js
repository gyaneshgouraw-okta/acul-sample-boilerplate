export const createConnections = (connections) => {
    const connectionElement = document.createElement('div');
    connectionElement.classList.add('ul-connections');

    connections.forEach(connection => {
      if (!connection.displayName) return;
  
      const element = document.createElement('button');
      element.classList.add('ul-connection');
      element.id = connection.name;
  
      element.textContent = connection.displayName;
      connectionElement.appendChild(element);
    });
    return connectionElement;
  }