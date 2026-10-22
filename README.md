# ⚡ Socket Live API

Servidor Node.js leve e de alta performance desenvolvido para gerir ligações bidirecionais em tempo real via WebSockets. A API processa eventos de entrada/saída de utilizadores e retransmite atualizações de dados instantâneas para os clientes conectados.

## 🚀 Tecnologias

- **[Node.js](https://nodejs.org/)** — Ambiente de execução JavaScript
- **[Express](https://expressjs.com/)** — Framework web para o servidor HTTP
- **[Socket.IO](https://socket.io/)** — Engine de comunicação bidirecional baseada em eventos
- **[CORS](https://github.com/expressjs/cors)** — Gestão de políticas de acesso entre origens

## ⚙️ Arquitetura de Eventos

A comunicação via WebSockets está estruturada sob os seguintes eventos:

### 📥 Eventos Escutados (Client → Server)
| Evento | Payload | Descrição |
| :--- | :--- | :--- |
| `connection` | - | Ocorre automaticamente quando um novo cliente estabelece ligação. |
| `send_bet` | `string` | Recebe a notificação de uma nova ação efetuada pelo utilizador. |
| `disconnect` | - | Ocorre quando um cliente fecha a aplicação ou perde a ligação. |

### 📤 Eventos Emitidos (Server → Client)
| Evento | Payload | Descrição |
| :--- | :--- | :--- |
| `players_update` | `number` | Disparado para todos os clientes ativos para atualizar o contador global de ligações. |
| `bet_received` | `string` | Retransmite a mensagem recebida para todos os clientes conectados simultaneamente. |

## 🔧 Como Executar Localmente

### Pré-requisitos
- Node.js instalado (v18 ou superior recomendado)

### Passos
1. Clone o repositório:
   ```bash
   git clone [https://github.com/lvilela01/socket-live-api.git](https://github.com/lvilela01/socket-live-api.git)
