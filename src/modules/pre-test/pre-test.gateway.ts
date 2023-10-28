import { WebSocketGateway, WebSocketServer, OnGatewayInit, OnGatewayConnection, SubscribeMessage } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({ cors: true })
export class PreTestGateway implements OnGatewayInit, OnGatewayConnection {
    @WebSocketServer()
    server: Server;

    private connectedClients: { [studentId: string]: string } = {};

    // Cuando se inicializa el WebSocket Gateway
    afterInit() {
        console.log('WebSocket Gateway initialized');
    }

    // Cuando se establece una conexión con el servidor WebSocket
    handleConnection(client: any, ...args: any[]) {
        console.log('Client connected:', client.id);
    }

    // Método para capturar el ID de socket.io y el ID del estudiante
    @SubscribeMessage('captureStudentInfo')
    captureStudentInfo(client: any, studentId: string) {
        this.connectedClients[studentId] = client.id;
    }

    // Método para notificar a un cliente en tiempo real
    notifyClient(studentId: string, message: string) {
        const socketId = this.connectedClients[studentId];
        if (socketId) {
            this.server.to(socketId).emit('recieveMessage', message);
        }
    }
}
